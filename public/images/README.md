# 이미지 관리 가이드

## 폴더 구조

```
public/
└── images/
    ├── about/
    │   └── profile.jpeg            # About 섹션 프로필 사진
    └── projects/
        ├── flowdesk-admin.png      # Flowdesk Admin (RBAC · 멀티테넌트 SaaS CRM)
        ├── driven-datamon.png      # DataMon CRM Platform
        ├── Inwoolad-pms.png        # PMS (Project Management System)
        ├── matnamo.png             # MatNaMo (AI 기반 음식 추천 · 배달 공동구매)
        └── miss.png                # (미사용 / 예비)
```

## 사용 방법

`src/data/projects.tsx` 에서 아래처럼 경로를 지정합니다.

```ts
image: "/images/projects/flowdesk-admin.png"
```

`src/components/AboutSection.tsx` 프로필 사진:

```tsx
src="/images/about/profile.jpeg"
```

## 이미지 권장 스펙

| 항목 | 권장값 |
|---|---|
| 프로젝트 썸네일 | 1280×360px (32:9), PNG |
| 프로필 사진 | 1000×1000px, JPG/WebP |
| 파일 크기 | 500KB 이하 권장 |

## Vercel 배포 시

`public/` 폴더의 파일은 Vercel Edge CDN을 통해 자동으로 전 세계에 배포됩니다.
이미지를 추가한 후 배포하면 별도 설정 없이 CDN이 적용됩니다.
