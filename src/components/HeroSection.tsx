import { motion } from "motion/react";
import { Github, PenSquare, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://my.spline.design/particlesforwebsite-ItUPkymS3YyIW5d5PbukK6pa/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="scale-[1.2] md:scale-[1.1] opacity-95 translate-x-[22%]"
          title="3D particle background"
          loading="lazy"
        />
        {/* 왼쪽 그라디언트 페이드 */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-bg via-bg/80 to-transparent pointer-events-none" />
        {/* 하단 워터마크 가리개 */}
        <div className="absolute bottom-0 right-0 w-48 h-16 bg-[#111111]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-accent tracking-[0.3em] text-sm mb-6 block">
            FULL-STACK DEVELOPER
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            BUILDING <br />
            <span className="text-gradient">SCALABLE</span> <br />
            <span className="accent-gradient">WEB SYSTEMS</span>
          </h1>
          <p className="max-w-xl text-white/50 text-lg mb-10 leading-relaxed">
            React 기반 프론트엔드와
            Node.js / NestJS 기반 API 서버를 개발하며 <br />
            확장 가능한 웹 서비스와 SaaS 관리자 시스템을 구축하는
            풀스택 개발자입니다.
          </p>
          <div className="flex flex-wrap gap-4 pointer-events-auto">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-accent text-black font-bold hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all"
            >
              View Projects
            </a>
            <div className="flex items-center gap-4 px-6">
              <a href="https://github.com/lee-sung-min405" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://m.blog.naver.com/seongmin000211_dev?tab=1" aria-label="Blog" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <PenSquare size={24} />
              </a>
              <a href="#contact" aria-label="Email" className="text-white/40 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30" aria-hidden="true">
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
