import type { Experience } from "../types";
import React from "react";

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "드리븐 (Driven)",
    period: "2024.12 ~ 2026.03",
    desc: <>CRM 기반 SaaS 플랫폼 및 관리자 시스템 개발<br/>
    <br/>• Node.js 기반 REST API 설계 및 구현
    <br/>• PHP 기반 레거시 API를 Node.js 기반 서버로 마이그레이션
    <br/>• RBAC 기반 권한 관리 시스템 설계 및 개발
    <br/>• Multi-Tenant 구조의 관리자 플랫폼 설계 및 개발
    <br/>• 상담(Counsel) 데이터 수집 및 관리 시스템 API 개발
    <br/>• React 기반 관리자 UI 개발
    <br/>• MySQL / TypeORM 데이터 모델 설계
    <br/>• Swagger 기반 API 문서 관리
    <br/>• JWT 기반 인증 기능 구현
    <br/>• 네이버 OAuth 기반 소셜 로그인 프론트엔드 연동 구현
    </>,
  },
  {
    role: "Full Stack Developer (Contract)",
    company: "인우랩 (Inwoolab)",
    period: "2024.07 ~ 2024.08",
    desc: <>PMS(Project Management System) 웹 서비스 기능 개발 및 시스템 납품<br/>
    <br/>• NestJS 기반 API 서버 설계 및 구현
    <br/>• MySQL 데이터베이스 설계
    <br/>• PMS 기능 개발 및 유지보수
    <br/>• 고객사(인트세인) PMS 시스템 개발 및 납품
    </>,
  },
  {
    role: "Full Stack Developer (Intern)",
    company: "인우랩 (Inwoolab)",
    period: "2024.03 ~ 2024.06",
    desc: <>PMS(Project Management System) 웹 서비스 프론트엔드 개발<br/>
    <br/>• React 기반 PMS 관리자 UI 개발
    <br/>• NestJS 기반 API 서버 설계 및 구현
    </>,
  },
];
