import { motion } from "motion/react";

// from: 위 섹션 배경 ("dark" | "surface")
// to:   아래 섹션 배경 ("dark" | "surface")
interface DividerBannerProps {
  label: string;
  from?: "dark" | "surface";
  to?: "dark" | "surface";
}

const bgMap = {
  dark: "#050505",
  surface: "rgba(17,17,17,0.3)",
};

export default function DividerBanner({ label, from = "dark", to = "dark" }: DividerBannerProps) {
  const fromColor = bgMap[from];
  const toColor = bgMap[to];

  return (
    <div
      className="relative py-12"
      style={{
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
      }}
    >
      <div className="flex items-center gap-6 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-white/5 origin-left"
        />
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-white/20 whitespace-nowrap"
        >
          {label}
        </motion.span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-white/15 to-white/5 origin-right"
        />
      </div>
    </div>
  );
}
