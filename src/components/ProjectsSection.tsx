import { useState } from "react";
import { motion } from "motion/react";
import { Code2, ChevronRight, ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const INITIAL_COUNT = 3;
const LOAD_MORE_COUNT = 3;

export default function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const hasMore = visibleCount < projects.length;
  const visibleProjects = projects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, projects.length));
  };

  return (
    <section id="projects" className="py-32 max-w-7xl mx-auto px-6">
      <SectionHeading
        title="Projects"
        subtitle="Featured Projects"
        icon={Code2}
      />

      <div className="flex flex-col gap-6">
        {visibleProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: (idx % LOAD_MORE_COUNT) * 0.08,
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-16 text-center">
          <button
            onClick={handleLoadMore}
            className="group flex items-center gap-2 mx-auto text-white/50 hover:text-accent transition-colors font-mono text-sm"
          >
            VIEW MORE PROJECTS{" "}
            <ChevronDown
              size={16}
              className="group-hover:translate-y-1 transition-transform"
            />
          </button>
        </div>
      )}
    </section>
  );
}
