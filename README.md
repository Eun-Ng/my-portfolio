# 포트폴리오

안녕하세요. 프론트엔드 개발자 남궁은의 개인 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS, shadcn/ui
- **애니메이션**: Framer Motion
- **데이터**: Notion API
- **배포**: Vercel
- **폰트**: Pretendard

## ✨ 주요 기능

- 반응형 디자인
- Notion API를 통한 동적 프로젝트 데이터 관리
- Scroll Spy 네비게이션
- Framer Motion을 활용한 부드러운 애니메이션
- SEO 최적화 및 성능 최적화

## 🏗️ 프로젝트 구조

```
my-portfolio/
├── app/                    # Next.js App Router
│   ├── api/               # API 라우트
│   ├── components/        # 공통 컴포넌트
│   ├── sections/          # 페이지 섹션들
│   └── page.tsx          # 메인 페이지
├── components/            # UI 컴포넌트
│   └── ui/               # shadcn/ui 컴포넌트, 커스텀 ui 컴포넌트
├── lib/                  # 유틸리티 및 설정
│   ├── notion.ts         # Notion API 클라이언트
│   └── types/            # TypeScript 타입 정의
└── public/               # 정적 파일
```

## 📱 주요 섹션

- **Intro**: 개발자 소개
- **Career**: 업무 경험 및 성과
- **Projects**: 개인/팀/회사 프로젝트 포트폴리오 (Notion 연동)
