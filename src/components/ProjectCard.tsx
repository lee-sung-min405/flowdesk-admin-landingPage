import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, X, BookOpen, Layout, ArrowLeft, Link, Figma } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MermaidChart from "./MermaidChart";
import type { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [archOpen, setArchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* PC/태블릿용 기존 카드 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="group relative rounded-2xl overflow-hidden glass aspect-[4/5] md:aspect-[32/9] hidden md:block"
      >
        <img
          src={project.image}
          alt="project thumbnail"
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent" />

        {/* 좌측 상단 - 제목 */}
        <div className="absolute top-0 left-0 p-8">
          <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
        </div>

        {/* 하단 전체 */}
        <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between gap-4">
          {/* 좌측 하단 - 설명 + 더보기 */}
          <div className="flex flex-col gap-1 max-w-[55%]">
            <p className="text-white/60 text-sm line-clamp-2">
              {project.description}
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="self-start text-accent text-xs font-mono hover:underline transition-opacity"
            >
              더보기 →
            </button>
          </div>

          {/* 우측 하단 - roles + 태그 + 링크 */}
          <div className="flex flex-col items-end gap-3 shrink-0">
            {project.roles && project.roles.length > 0 && (
              <div className="flex flex-wrap justify-end gap-1.5">
                {project.roles.slice(0, 3).map((role) => (
                  <span
                    key={role}
                    className="px-2 py-0.5 rounded-full bg-black/50 text-accent text-[10px] font-mono border border-accent/30"
                  >
                    {role}
                  </span>
                ))}
                {project.roles.length > 3 && (
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/40 text-[10px] font-mono">
                    +{project.roles.length - 3}
                  </span>
                )}
              </div>
            )}
            <p className="text-white/40 text-[11px] font-mono tracking-wider text-right">
              {project.tags.join(" · ")}
            </p>
            <div className="flex gap-3">
              {project.architectures && project.architectures.length > 0 && (
                <button
                  onClick={() => setArchOpen(true)}
                  aria-label="아키텍처 보기"
                  title="아키텍처 문서"
                  className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all text-[11px] font-mono"
                >
                  <Layout size={13} /> Arch
                </button>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                  className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all"
                >
                  <Github size={16} />
                </a>
              )}
              {project.githubFrontend && (
                <a
                  href={project.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Frontend GitHub"
                  title="Frontend GitHub"
                  className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all text-[11px] font-mono"
                >
                  <Github size={13} /> FE
                </a>
              )}
              {project.githubBackend && (
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Backend GitHub"
                  title="Backend GitHub"
                  className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all text-[11px] font-mono"
                >
                  <Github size={13} /> BE
                </a>
              )}
              {project.swagger && (
                <a
                  href={project.swagger}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Swagger API docs"
                  title="Swagger API 문서"
                  className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all"
                >
                  <BookOpen size={16} />
                </a>
              )}
              {project.figma && (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Figma 디자인"
                  title="Figma 디자인"
                  className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all"
                >
                  <Figma size={16} />
                </a>
              )}
              {project.reference && (
                <a
                  href={project.reference}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="참고 자료"
                  title="참고 자료"
                  className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all"
                >
                  <Link size={16} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live demo"
                  className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* 모바일용 카드 */}
      <motion.div
        whileHover={{ y: -5 }}
        className="group rounded-2xl overflow-hidden glass flex flex-col md:hidden"
      >
        <img
          src={project.image}
          alt="project thumbnail"
          className="w-full h-48 object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="bg-gradient-to-t from-bg/80 via-bg/10 to-transparent w-full h-48 absolute top-0 left-0" />
        <div className="relative z-10 flex flex-col gap-4 p-4">
          <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
          <p className="text-white/60 text-sm line-clamp-3">
            {project.description}
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="self-start text-accent text-xs font-mono hover:underline transition-opacity"
          >
            더보기 →
          </button>
          {project.roles && project.roles.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.roles.slice(0, 3).map((role) => (
                <span
                  key={role}
                  className="px-2 py-0.5 rounded-full bg-black/50 text-accent text-[10px] font-mono border border-accent/30"
                >
                  {role}
                </span>
              ))}
              {project.roles.length > 3 && (
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/40 text-[10px] font-mono">
                  +{project.roles.length - 3}
                </span>
              )}
            </div>
          )}
          <p className="text-white/40 text-[11px] font-mono tracking-wider">
            {project.tags.join(" · ")}
          </p>
          <div className="flex gap-3 flex-wrap">
            {project.architectures && project.architectures.length > 0 && (
              <button
                onClick={() => setArchOpen(true)}
                aria-label="아키텍처 보기"
                title="아키텍처 문서"
                className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all text-[11px] font-mono"
              >
                <Layout size={13} /> Arch
              </button>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all"
              >
                <Github size={16} />
              </a>
            )}
            {project.githubFrontend && (
              <a
                href={project.githubFrontend}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Frontend GitHub"
                title="Frontend GitHub"
                className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all text-[11px] font-mono"
              >
                <Github size={13} /> FE
              </a>
            )}
            {project.githubBackend && (
              <a
                href={project.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Backend GitHub"
                title="Backend GitHub"
                className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all text-[11px] font-mono"
              >
                <Github size={13} /> BE
              </a>
            )}
            {project.swagger && (
              <a
                href={project.swagger}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Swagger API docs"
                title="Swagger API 문서"
                className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all"
              >
                <BookOpen size={16} />
              </a>
            )}
            {project.figma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Figma 디자인"
                title="Figma 디자인"
                className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all"
              >
                <Figma size={16} />
              </a>
            )}
            {project.reference && (
              <a
                href={project.reference}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="참고 자료"
                title="참고 자료"
                className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all"
              >
                <Link size={16} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* 상세 팝업 모달 */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative glass rounded-2xl max-w-2xl w-full overflow-hidden max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.image}
                alt="project thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 flex items-start justify-between gap-4 p-8 pb-0 shrink-0">
                <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all shrink-0"
                  aria-label="닫기"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="relative z-10 flex flex-col gap-6 p-8 pt-6 overflow-y-auto flex-1 min-h-0">
                <p className="text-white/70 text-sm leading-relaxed">
                  {project.description}
                </p>
                {project.roles && project.roles.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-mono text-white/40 uppercase tracking-widest">담당 업무</p>
                    <ul className="flex flex-col gap-1.5">
                      {project.roles.map((role) => (
                        <li key={role} className="flex items-start gap-2 text-sm text-white/70">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.architectures && project.architectures.length > 0 && (
                    <button
                      onClick={() => { setActiveTab(0); setArchOpen(true); }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all text-sm"
                    >
                      <Layout size={14} /> 아키텍처 문서
                    </button>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all text-sm">
                      <Github size={14} /> GitHub
                    </a>
                  )}
                  {project.githubFrontend && (
                    <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all text-sm">
                      <Github size={14} /> GitHub (FE)
                    </a>
                  )}
                  {project.githubBackend && (
                    <a href={project.githubBackend} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all text-sm">
                      <Github size={14} /> GitHub (BE)
                    </a>
                  )}
                  {project.swagger && (
                    <a href={project.swagger} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all text-sm">
                      <BookOpen size={14} /> Swagger Docs
                    </a>
                  )}
                  {project.figma && (
                    <a href={project.figma} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all text-sm">
                      <Figma size={14} /> Figma 디자인
                    </a>
                  )}
                  {project.reference && (
                    <a href={project.reference} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all text-sm">
                      <Link size={14} /> 참고 자료
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all text-sm">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 아키텍처 문서 모달 */}
      <AnimatePresence>
        {archOpen && project.architectures && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
            onClick={() => setArchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative glass rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 헤더 */}
              <div className="flex items-center justify-between gap-4 px-8 py-5 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  {modalOpen && (
                    <button
                      onClick={() => setArchOpen(false)}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                      aria-label="뒤로가기"
                    >
                      <ArrowLeft size={16} />
                    </button>
                  )}
                  <Layout size={18} className="text-accent" />
                  <span className="font-semibold text-base">아키텍처 문서</span>
                </div>
                <button
                  onClick={() => { setArchOpen(false); setModalOpen(false); }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                  aria-label="닫기"
                >
                  <X size={16} />
                </button>
              </div>

              {/* 탭 (문서가 2개 이상일 때만 표시) */}
              {project.architectures.length > 1 && (
                <div className="flex gap-1 px-8 pt-4 shrink-0">
                  {project.architectures.map((arch, i) => (
                    <button
                      key={arch.label}
                      onClick={() => setActiveTab(i)}
                      className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                        activeTab === i
                          ? "bg-accent text-black"
                          : "bg-white/10 text-white/60 hover:bg-white/20"
                      }`}
                    >
                      {arch.label}
                    </button>
                  ))}
                </div>
              )}

              {/* MD 렌더링 영역 */}
              <div className="overflow-y-auto flex-1 min-h-0 px-8 py-6">
                <div className="prose prose-invert prose-sm max-w-none
                  prose-headings:text-white prose-headings:font-bold
                  prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
                  prose-p:text-white/70 prose-p:leading-relaxed
                  prose-strong:text-white
                  prose-code:text-accent prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
                  prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
                  prose-blockquote:border-accent prose-blockquote:text-white/50
                  prose-table:w-full prose-th:text-white/80 prose-td:text-white/60
                  prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                  prose-hr:border-white/10
                  prose-li:text-white/70">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({ className, children }) {
                        const lang = /language-(\w+)/.exec(className || "")?.[1];
                        if (lang === "mermaid") {
                          return <MermaidChart chart={String(children)} />;
                        }
                        return (
                          <code className={className}>{children}</code>
                        );
                      },
                    }}
                  >
                    {project.architectures[activeTab].content}
                  </ReactMarkdown>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
