import React from "react";
import type { Project } from "../types";
import flowdeskBackendArch from "./architectures/flowdesk-admin-backend.md?raw";
import flowdeskFrontendArch from "./architectures/flowdesk-admin-frontend.md?raw";

export const projects: Project[] = [
  {
    title: <>Flowdesk Admin <br />(RBAC · 멀티테넌트 기반 SaaS CRM 플랫폼)</>,
    description: <>
      멀티 테넌시(Multi-Tenancy) 기반의 완전한 데이터 격리와 세분화된 역할 기반 접근 제어(RBAC)를 설계 수준에서 강제하는 SaaS CRM 시스템입니다.
      단순한 권한 분기가 아닌, 어떤 경로로도 타 테넌트 데이터에 접근할 수 없음을 구조적으로 보장하는 것이 핵심 목표입니다.
      <br /><br />
      <strong>멀티테넌시 격리</strong> — 모든 서비스 레이어 쿼리에 tenantId 강제 스코핑. 인증 컨텍스트에서 추출한 값만 사용하며, 파라미터 위조로 타 테넌트 접근 시 즉시 403 반환.
      <br /><br />
      <strong>JWT + tokenVersion 인증</strong> — Access/Refresh 이중 토큰 체계. 비밀번호 변경 시 tokenVersion 증가로 기존 발급 토큰 전체를 즉시 무효화.
      <br /><br />
      <strong>세분화된 RBAC 권한 모델</strong> — page.action 조합(users.read, boards.delete 등)으로 권한 정의 → Role에 묶어 User에 할당. @RequireAuth 단일 데코레이터로 JWT 검증 + 권한 체크를 선언적으로 적용.
      <br /><br />
      <strong>RBAC 런타임 강제</strong> — PermissionGuard가 요청마다 토큰 내 permissions 객체를 검증. DB 조회 없이 토큰에서 권한 판단하며 권한 누락 시 어떤 엔드포인트도 도달 불가.
      <br /><br />
      <strong>동적 상담 폼 (CounselFieldDef)</strong> — 스키마 변경 없이 테넌트별 상담 인테이크 필드를 런타임에 정의·확장.
      <br /><br />
      <strong>공개 API 3중 보안 필터</strong> — IP 블랙리스트 → 전화번호 블랙리스트 → 금칙어 필터 순차 검증.
      <br /><br />
      <strong>운영 수준 인프라</strong> — 전역 예외 필터(내부 로그/외부 응답 분리) · Request ID 미들웨어 · Rate Limiting(60req/60s) · Helmet 보안 헤더.
    </>,
    tags: ["SaaS", "React", "NestJS", "TypeScript", "MySQL", "RBAC", "Multi-Tenant", "Ant Design"],
    roles: [
      "전체 시스템 설계 · 풀스택 단독 개발",
      "멀티테넌트 아키텍처 설계 및 구현 (tenantId 강제 스코핑)",
      "JWT + tokenVersion 이중 토큰 인증 시스템 구현",
      "RBAC 권한 모델 설계 (page.action 조합 · PermissionGuard)",
      "동적 상담 폼 시스템 설계 (CounselFieldDef)",
      "공개 API 3중 보안 필터 구현 (IP · 전화번호 · 금칙어)",
      "전역 예외 필터 · Request ID 미들웨어 · Rate Limiting 구성",
    ],
    image: "/images/projects/flowdesk-admin.png",
    githubFrontend: "https://github.com/lee-sung-min405/flowdesk-admin-frontend",
    githubBackend: "https://github.com/lee-sung-min405/flowdesk-admin-backend",
    swagger: "https://flowdesk-admin-production.up.railway.app/api#/",
    demo: "https://flowdesk-admin-ui-prototype-pza7etmdk-lee-sung-min405s-projects.vercel.app/",
    architectures: [
      { label: "Backend", content: flowdeskBackendArch },
      { label: "Frontend", content: flowdeskFrontendArch },
    ],
  },
  {
    title: <>DataMon CRM Platform <br />(RBAC · 멀티테넌트 기반 SaaS CRM 플랫폼)</>,
    description: <>
    <strong>※ 회사에서 개발에 참여한 서비스로, 플랫폼 소개는 아래 공식 페이지에서 확인할 수 있습니다.</strong>
    <br />
    <a
      href="https://driven.co.kr/pages/solution"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#60a5fa", textDecoration: "underline", fontWeight: 600, wordBreak: "break-all" }}
    >
      🔗 DataMon CRM 솔루션 소개 페이지 보기 ↗
    </a>
    <br /><br />

    기존 PHP 기반 CRM 시스템을 Node.js와 React 기반 구조로 마이그레이션하는 프로젝트에 참여했습니다.
    기존 시스템에는 권한 체계와 멀티테넌트 구조가 존재하지 않아,
    이를 새롭게 설계하고 관리자 플랫폼 구조를 개선하는 작업을 진행했습니다.
    <br /><br />

    <strong>시스템 마이그레이션</strong> — 기존 PHP 기반 CRM 시스템을 Node.js 기반 REST API와 React 관리자 UI 구조로 재구성하여
    유지보수성과 확장성을 개선했습니다.
    <br /><br />

    <strong>멀티테넌트 구조 도입</strong> — 하나의 플랫폼에서 여러 고객사의 데이터를 분리 관리할 수 있도록
    테넌트 기반 데이터 구조를 설계했습니다.
    모든 데이터 조회 및 처리 로직에서 테넌트 기반 데이터 분리 로직을 적용하여
    각 고객사의 데이터가 분리되도록 구현했습니다.
    <br /><br />

    <strong>RBAC 권한 관리 시스템 설계</strong> — 기존 시스템에 존재하지 않던 권한 관리 구조를 새롭게 설계했습니다.
    사용자(User), 역할(Role), 권한(Permission) 모델을 기반으로 관리자 페이지 접근 권한을 세분화하고
    페이지 및 기능 단위 권한을 조합하여 다양한 관리자 역할을 구성할 수 있도록 구현했습니다.
    <br /><br />

    <strong>CRM 상담 데이터 관리 기능 개발</strong> — 광고 랜딩페이지에서 수집되는 상담 데이터를 관리하는 기능을 개발했습니다.
    상담 상태 관리, 담당자 배정, 상담 이력 관리 기능과 함께
    상담 데이터 중복 방지 및 차단 정책과 같은 데이터 처리 로직을 구현했습니다.
    <br /><br />

    <strong>기존 시스템 구조 개선</strong> — 기존 PHP 시스템의 비효율적인 데이터 구조와 API 로직을 분석하고
    데이터 모델 및 API 구조를 재정비하여 시스템 구조를 개선했습니다.
    <br /><br />

    <strong>※ 본 프로젝트는 회사 내부 서비스이므로
    소스 코드 및 상세 구현 로직은 공개하지 않았습니다.</strong>
  </>,
    tags: [
      "SaaS",
      "React",
      "Node.js",
      "TypeScript",
      "MySQL",
      "RBAC",
      "Multi-Tenant",
      "CRM"
    ],
    roles: [
      "PHP → Node.js / React 기반 시스템 마이그레이션",
      "멀티테넌트 기반 데이터 분리 구조 설계",
      "RBAC 권한 관리 시스템 설계 (User · Role · Permission)",
      "CRM 상담 데이터 관리 기능 개발 (상태·담당자·이력)",
      "상담 중복 방지 및 차단 정책 로직 구현",
      "MySQL 데이터 모델 설계 및 API 구조 재정비",
    ],
    image: "/images/projects/driven-datamon.png",
    reference: "https://driven.co.kr/pages/solution",
  },
  {
    title: <>PMS (Project Management System) <br />(프로젝트 관리 웹 플랫폼)</>,
    description: <>
      조직 단위 프로젝트 관리 및 업무 협업을 위한
      프로젝트 관리 시스템(PMS) 웹 서비스를 풀스택으로 개발했습니다.
      프로젝트 진행 과정에서 필요한 멤버 관리, 프로젝트 권한 관리,
      업무 분류 체계 및 히스토리 관리 기능을 구현했습니다.
      <br /><br />

      <strong>멤버 관리 시스템</strong> — 조직 구성원을 관리할 수 있도록
      멤버, 직급, 부서, 상태 정보를 관리하는 기능을 개발했습니다.
      부서 기반 조직 구조를 반영하여 사용자 관리 기능을 구현했습니다.
      <br /><br />

      <strong>프로젝트 관리 기능</strong> — 프로젝트 생성 및 관리 기능을 구현하고
      프로젝트 단위 권한을 설정하여 프로젝트 참여 멤버의 접근 권한을
      관리할 수 있도록 설계했습니다.
      <br /><br />

      <strong>근무 상태 관리</strong> — 구성원의 근무 상태를 관리할 수 있는 기능을 개발하여
      조직 내 업무 진행 상태를 확인할 수 있도록 구현했습니다.
      <br /><br />

      <strong>업무 및 산출물 분류 체계</strong> — 부서별 업무 분류 및 산출물 분류 체계를 설계하고
      업무 유형, 산출물 유형을 관리할 수 있는 기능을 구현했습니다.
      <br /><br />

      <strong>히스토리 관리 기능</strong> — 주요 데이터 변경 이력을 기록하여
      시스템 내 주요 작업에 대한 변경 히스토리를 관리할 수 있도록 구현했습니다.
      <br /><br />

      프론트엔드는 React / Next.js 기반으로 관리자 UI를 개발하고,
      백엔드는 Node.js / NestJS 기반 REST API 서버를 구현했습니다.
      MariaDB 데이터베이스를 기반으로 데이터 모델을 설계하고
      Docker 기반 개발 환경을 구성했습니다.
      <br /><br />
          
      <strong>※ 본 프로젝트는 회사 내부 서비스이므로
      소스 코드 및 상세 구현 로직은 공개하지 않았습니다.</strong>
    </>,
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "NestJS",
      "TypeScript",
      "MariaDB",
      "Material UI",
      "Rest API"
    ],
    roles: [
      "PMS 전체 시스템 풀스택 개발 (Frontend / Backend)",
      "멤버 관리 기능 개발 (멤버 · 직급 · 부서 · 상태 관리)",
      "프로젝트 관리 및 프로젝트 권한 관리 기능 개발",
      "근무 상태 관리 기능 구현",
      "업무 분류 및 산출물 분류 체계 설계",
      "데이터 변경 히스토리 관리 기능 구현",
      "MariaDB 데이터 모델 설계 및 API 개발",
      "Next.js 기반 관리자 UI 개발",
    ],
    image: "/images/projects/Inwoolad-pms.png",
  },
  {
    title: <>MatNaMo (맛나모) <br />(AI 기반 음식 추천 · 배달 공동구매 플랫폼)</>,
    description: <>
      AI 기반 음식 추천과 배달 음식 공동 구매 기능을 제공하는
      웹 서비스 프로젝트를 팀장으로 참여하여 개발했습니다.
      <br /><br />

      배달 주문 시 발생하는 최소 주문 금액과 배달비 부담 문제를 해결하기 위해
      사용자 간 공동 주문을 통해 비용을 분담할 수 있는 서비스를 기획했습니다.
      <br /><br />

      <strong>AI 기반 음식 추천 기능</strong> — 음식 데이터를 수집하고
      사용자 선호 기반 음식 추천 기능을 구현하여
      사용자에게 맞는 메뉴를 추천할 수 있도록 설계했습니다.
      <br /><br />

      <strong>배달 공동 구매 기능</strong> — 사용자 간 공동 주문 기능을 통해
      배달 최소 주문 금액과 배달비를 함께 분담할 수 있도록
      공동 구매 기능을 구현했습니다.
      <br /><br />

      <strong>서비스 UI/UX 설계</strong> — Figma를 활용하여 서비스 초기 화면을 설계하고
      React 기반 프론트엔드 UI를 구현했습니다.
      <br /><br />

      <strong>프로젝트 리딩</strong> — 4인 팀의 팀장(PL)으로서 프로젝트 일정 관리,
      기능 기획 및 설계를 주도하고 팀원 간 협업을 조율하여
      AI 기반 음식 추천 및 배달 공동 구매 서비스를 개발했습니다.
      <br /><br />

      해당 프로젝트는 약 4개월 동안 진행된 캡스톤 디자인 프로젝트로,
      서비스 기획부터 개발 및 발표까지 전 과정을 수행했습니다.
      프로젝트 결과물의 완성도와 팀 협업 성과를 인정받아
      캡스톤 디자인 경진대회에서 <strong>대상</strong>을 수상했습니다.
      <br /><br />

      또한 해당 프로젝트를 기반으로
      <strong>2024 RIS 캡스톤디자인 경진대회</strong>에 참가하여
      팀워크와 협업 역량을 인정받아 <strong>팀워크상</strong>을 수상했습니다.
    </>,
    tags: [
      "React",
      "JavaScript",
      "Spring Boot",
      "MySQL",
      "AI",
      "Python"
    ],
    roles: [
      "프로젝트 팀장 (4인 팀)",
      "서비스 UI/UX 설계 (Figma)",
      "React 기반 프론트엔드 개발",
      "Axios 기반 API 연동",
      "AI 음식 추천 데이터 분석 지원 (Python / Jupyter)",
      "서비스 기획 및 프로젝트 일정 관리",
    ],
    github: "https://github.com/lee-sung-min405/MatNaMo",
    figma: "https://www.figma.com/design/E87N7RqWo0gkigN67M8QH5/배달의-민조-최종본?node-id=0-1",
    reference: "https://m.blog.naver.com/seongmin000211_dev/223326662425",
    image: "/images/projects/matnamo.png",
  },
  {
    title: <>MISS (Movie Integrated Screening Service) <br />(영화 통합 상영 정보 플랫폼)</>,
    description: <>
      CGV, 롯데시네마, 메가박스 등 주요 영화사의 상영 정보를 통합 제공하는
      영화 통합 상영 정보 웹 서비스를 개발했습니다.
      <br /><br />

      각 영화사의 공식 API가 제공되지 않는 환경에서
      상영 정보를 직접 크롤링하여 데이터를 수집하고,
      이를 기반으로 통합 영화 정보 API를 구축했습니다.
      <br /><br />

      <strong>영화 상영 정보 통합</strong> — CGV, 롯데시네마, 메가박스의
      상영 정보를 크롤링하여 데이터베이스에 저장하고
      통합 상영 정보를 제공하는 시스템을 구현했습니다.
      <br /><br />

      <strong>영화 데이터 API 구축</strong> — Node.js 기반 REST API를 개발하여
      영화 상영 정보 및 영화 데이터를 관리하고
      프론트엔드에서 사용할 수 있도록 API 구조를 설계했습니다.
      <br /><br />

      <strong>외부 API 연동</strong> — TMDB API 및 영화진흥위원회(KOBIS) 오픈 API를
      연동하여 영화 포스터, 영화 정보, 주간 박스오피스 데이터를 제공했습니다.
      <br /><br />

      <strong>웹 서비스 UI 개발</strong> — HTML, CSS, JavaScript 기반
      프론트엔드 화면을 구현하고 반응형 웹 구조를 적용하여
      다양한 환경에서 사용할 수 있는 UI를 개발했습니다.
    </>,
    tags: [
      "Node.js",
      "Express",
      "JavaScript",
      "HTML",
      "CSS",
      "Web Crawling",
      "REST API",
      "MySQL"
    ],
    roles: [
      "영화 상영 정보 크롤링 시스템 개발",
      "Node.js 기반 영화 정보 REST API 개발",
      "CGV 영화 정보 API 개발",
      "3사 영화 정보 통합 API 설계",
      "HTML / CSS / JavaScript 기반 프론트엔드 개발",
      "영화 데이터 구조 통합 및 API 데이터 포맷 정규화"
    ],
    github: "https://github.com/lee-sung-min405/Miss_site",
    reference: "https://m.blog.naver.com/seongmin000211_dev/223211746681",
    image: "/images/projects/miss.png",
  },
];
