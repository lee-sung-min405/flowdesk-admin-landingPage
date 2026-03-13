import { motion } from "motion/react";
import { Cpu } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { techStack } from "../data/techStack";

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies I Work With"
          icon={Cpu}
        />

        <div className="grid md:grid-cols-3 gap-8 mt-15">
          {techStack.map((stack, idx) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {stack.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm hover:border-accent/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
