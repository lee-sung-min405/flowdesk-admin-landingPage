import type React from "react";
import type { LucideIcon } from "lucide-react";

export interface ArchitectureDoc {
  label: string;
  content: string;
}

export interface Project {
  title: React.ReactNode;
  description: React.ReactNode;
  tags: string[];
  image: string;
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
  swagger?: string;
  demo?: string;
  reference?: string;
  figma?: string;
  roles?: string[];
  architectures?: ArchitectureDoc[];
}

export interface TechStack {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  desc: React.ReactNode;
}

export interface SectionHeadingProps {
  title: string;
  subtitle: React.ReactNode;
  icon: LucideIcon;
}
