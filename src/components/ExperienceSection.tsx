import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "../data/experiences";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Experience"
          subtitle="Career timeline"
          icon={Briefcase}
        />

        <p className="text-white/60 max-w-3xl mb-8">총 1년 9개월의 개발 경력</p>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-white/10 group"
            >
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-white/20 group-hover:bg-accent transition-colors" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-accent font-mono text-sm">{exp.company}</p>
                </div>
                <span className="text-white/40 font-mono text-sm md:text-base mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-white/60 max-w-3xl">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
