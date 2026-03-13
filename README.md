# 개발자 포트폴리오 랜딩페이지

Vite + React + TypeScript 기반 개인 포트폴리오 웹사이트입니다.

---

## 기술 스택

| 구분 | 기술 |
|---|---|
| **Framework** | React 19, TypeScript 5.8 |
| **빌드 도구** | Vite 6 |
| **스타일** | Tailwind CSS v4, @tailwindcss/typography |
| **애니메이션** | motion/react (Framer Motion) |
| **아이콘** | lucide-react |
| **마크다운** | react-markdown, remark-gfm |
| **다이어그램** | mermaid |

---

## 로컬 실행

**사전 조건:** Node.js 18+

```bash
npm install
npm run dev        # http://localhost:3000
```

### 주요 스크립트

```bash
npm run dev        # 개발 서버 실행 (port 3000)
npm run build      # 프로덕션 빌드 → dist/
npm run preview    # 빌드 결과물 미리보기
npm run lint       # TypeScript 타입 체크
npm run clean      # dist/ 폴더 삭제
```

---

## 프로젝트 구조

```
flowdesk-admin-landingPage/
├── public/
│   └── images/
│       ├── about/
│       │   └── profile.jpeg                    # About 섹션 프로필 사진
│       └── projects/
│           ├── flowdesk-admin.png              # Flowdesk Admin
│           ├── driven-datamon.png              # DataMon CRM Platform
│           ├── Inwoolad-pms.png                # PMS (Project Management System)
│           ├── matnamo.png                     # MatNaMo
│           └── miss.png                        # 예비
├── src/
│   ├── api/
│   │   └── counsels.ts                         # Contact 폼 API 요청 함수
│   ├── components/
│   │   ├── Navbar.tsx                          # 상단 네비게이션
│   │   ├── HeroSection.tsx                     # 히어로 섹션
│   │   ├── MarqueeBanner.tsx                   # 기술 스택 마퀴 배너
│   │   ├── AboutSection.tsx                    # About 섹션
│   │   ├── StatsBanner.tsx                     # 통계 배너
│   │   ├── TechStackSection.tsx                # 기술 스택 섹션
│   │   ├── ProjectsSection.tsx                 # 프로젝트 목록 섹션
│   │   ├── ProjectCard.tsx                     # 프로젝트 카드 (상세 모달 + 아키텍처 모달)
│   │   ├── MermaidChart.tsx                    # Mermaid 다이어그램 렌더러
│   │   ├── ExperienceSection.tsx               # 경력 섹션
│   │   ├── ContactSection.tsx                  # 연락처 섹션 (API 연동)
│   │   ├── Footer.tsx                          # 푸터
│   │   ├── DividerBanner.tsx                   # 섹션 구분 배너
│   │   ├── SectionHeading.tsx                  # 섹션 제목 공통 컴포넌트
│   │   └── ...
│   ├── data/
│   │   ├── projects.tsx                        # 프로젝트 데이터 (JSX 포함)
│   │   ├── experiences.tsx                     # 경력 데이터 (JSX 포함)
│   │   ├── techStack.ts                        # 기술 스택 데이터
│   │   └── architectures/
│   │       ├── flowdesk-admin-backend.md       # Flowdesk Admin 백엔드 아키텍처 문서
│   │       └── flowdesk-admin-frontend.md      # Flowdesk Admin 프론트엔드 아키텍처 문서
│   ├── types/
│   │   └── index.ts                            # 공통 타입 정의 (Project, Experience 등)
│   ├── App.tsx                                 # 루트 컴포넌트 (섹션 조합)
│   ├── main.tsx                                # 엔트리포인트
│   ├── index.css                               # 전역 스타일 (Tailwind, 커스텀 테마)
│   └── vite-env.d.ts                           # *.md?raw 타입 선언
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 주요 기능

### 프로젝트 카드 (`ProjectCard.tsx`)
- **카드 뷰**: `aspect-[4/5]` (모바일) / `aspect-[32/9]` (데스크탑), 배경 이미지 + 담당 업무 뱃지
- **상세 모달**: 프로젝트 설명, 담당 업무, 태그, 링크 버튼
- **아키텍처 모달**: `.md?raw` 파일을 `react-markdown`으로 렌더링, Mermaid 다이어그램 지원, 탭 전환 지원

### 아키텍처 문서 추가 방법
```tsx
// 1. src/data/architectures/ 에 .md 파일 추가
// 2. projects.tsx 에서 import
import myArch from "./architectures/my-project.md?raw";

// 3. 프로젝트 데이터에 추가
architectures: [
  { label: "Backend", content: myArch },
]
```

### Contact 폼 API
- 파일: `src/api/counsels.ts`
- 엔드포인트: `POST http://localhost:3000/counsels`
- `WEB_CODE`, `API_BASE_URL` 변경 시 해당 파일만 수정

```ts
// src/api/counsels.ts
const API_BASE_URL = "http://localhost:3000";
const WEB_CODE = "SYS002";
```

### 프로젝트 데이터 타입 (`src/types/index.ts`)

```ts
interface Project {
  title: React.ReactNode;
  description: React.ReactNode;
  tags: string[];
  image: string;
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
  swagger?: string;
  demo?: string;
  reference?: string;   // 외부 참고 자료 링크
  figma?: string;       // Figma 디자인 링크
  roles?: string[];     // 담당 업무 목록
  architectures?: ArchitectureDoc[];
}
```

---

## 이미지 규격

| 항목 | 권장 크기 | 형식 |
|---|---|---|
| 프로젝트 썸네일 | 1280×360px (32:9) | PNG |
| 프로필 사진 | 1000×1000px | JPG / JPEG |
| 파일 크기 | 500KB 이하 권장 | — |

---

## 배포 (Vercel)

```bash
npm run build   # dist/ 생성
```

`public/` 폴더는 빌드 시 루트(`/`)로 서빙됩니다.
Vercel 배포 시 Edge CDN을 통해 이미지가 자동 전 세계 배포됩니다.
