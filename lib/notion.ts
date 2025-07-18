import { Client } from '@notionhq/client';

export interface NotionPropertiesProps {
  id: string;
  title: string;
  description?: string;
  stacks?: { id: string; name: string; color: string }[];
  url?: string;
  github?: string;
  period?: string;
}

interface NotionPage {
  id: string;
  properties: {
    Name?: {
      title?: { plain_text: string }[];
    };
    Description?: {
      rich_text?: { plain_text: string }[];
    };
    Stacks?: {
      multi_select?: { id: string; name: string; color: string }[];
    };
    NotionDetail?: {
      url?: string;
    };
    GitHub?: {
      url?: string;
    };
    Period?: {
      date?: string;
    };
  };
}

const isValidNotionPage = (page: unknown): page is NotionPage => {
  if (typeof page !== 'object' || page === null) return false;

  const pageObj = page as Record<string, unknown>;
  return (
    'id' in pageObj &&
    'properties' in pageObj &&
    typeof pageObj.id === 'string' &&
    typeof pageObj.properties === 'object'
  );
};

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getProjects(): Promise<NotionPropertiesProps[]> {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      throw new Error('NOTION_DATABASE_ID를 확인해주세요.');
    }

    const response = await notion.databases.query({
      database_id: databaseId,
    });

    return (
      response.results?.filter(isValidNotionPage).map((page) => {
        const properties = page.properties;

        return {
          id: page.id,
          title: properties.Name?.title?.[0]?.plain_text || '',
          description: properties.Description?.rich_text?.[0]?.plain_text || '',
          stacks: properties.Stacks?.multi_select || [],
          url: properties.NotionDetail?.url,
          github: properties.GitHub?.url,
          period: properties.Period?.date,
        };
      }) || []
    );
  } catch (error) {
    console.error('ERROR :::', error);
    return [];
  }
}
