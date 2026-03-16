import { Code2, Github, Linkedin, Mail, PenSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-accent flex items-center justify-center">
            <Code2 className="text-black w-4 h-4" />
          </div>
          <span className="font-mono text-sm font-bold">DEV.PORTFOLIO</span>
        </div>
        <p className="text-white/30 text-xs font-mono uppercase tracking-widest">
          © 2026 이성민. All rights reserved.
        </p>
        <div className="flex gap-6">
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
    </footer>
  );
}
