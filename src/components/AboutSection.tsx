import { motion } from "motion/react";
import { User } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-3xl overflow-hidden glass p-4"
        >
          <img
            src="/images/about/profile.jpeg"
            alt="Developer portrait"
            className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-20" />
        </motion.div>

        <div>
          <SectionHeading
            title="About Me"
            subtitle={<>Building scalable<br />SaaS platforms</>}
            icon={User}
          />
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            <span className="block mb-4">웹 플랫폼과 SaaS 시스템을 개발하는 풀스택 개발자입니다.</span>
            <span className="block mb-4">React 기반 프론트엔드와 Node.js / NestJS 기반 API 서버를 개발하며
            실제 서비스 환경에서 운영되는 웹 플랫폼과 SaaS 관리자 시스템을 구축했습니다.</span>
            <span className="block">확장성과 유지보수를 고려한 구조 설계와
            <br />
            안정적인 백엔드 시스템 개발에 관심이 있습니다.</span>
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-accent font-mono text-sm mb-2">위치</h4>
              <p className="text-white/80">서울, 대한민국</p>
            </div>
            <div>
              <h4 className="text-accent font-mono text-sm mb-2">경력</h4>
              <p className="text-white/80">1년 9개월</p>
            </div>
            <div>
              <h4 className="text-accent font-mono text-sm mb-2">학력</h4>
              <p className="text-white/80">동의대학교<br />응용소프트웨어공학과 학사 (4년제)</p>
            </div>
            <div>
              <h4 className="text-accent font-mono text-sm mb-2">관심 분야</h4>
              <p className="text-white/80">웹 아키텍처, SaaS 플랫폼, API 설계</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
