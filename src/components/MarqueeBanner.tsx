interface MarqueeBannerProps {
  items?: string[];
}

const defaultItems = [
  "React",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "REST API",
  "SaaS",
  "Full Stack",
  "Web Architecture",
  "Docker",
  "Git",
  "Tailwind CSS",
];

export default function MarqueeBanner({ items = defaultItems }: MarqueeBannerProps) {
  const repeated = [...items, ...items];

  return (
    <div className="py-6 overflow-hidden border-y border-white/5 bg-white/[0.02]">
      <div className="flex marquee-track gap-12 w-max">
        {repeated.map((item, idx) => (
          <span key={idx} className="flex items-center gap-12 whitespace-nowrap font-mono text-sm text-white/30 uppercase tracking-widest">
            {item}
            <span className="text-accent text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
