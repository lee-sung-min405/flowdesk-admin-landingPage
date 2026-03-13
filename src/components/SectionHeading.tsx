import type { SectionHeadingProps } from "../types";

export default function SectionHeading({ title, subtitle, icon: Icon }: SectionHeadingProps) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3 text-accent mb-4">
        <Icon size={20} />
        <span className="font-mono text-xs uppercase tracking-[0.2em]">{title}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient pb-1">
        {subtitle}
      </h2>
    </div>
  );
}
