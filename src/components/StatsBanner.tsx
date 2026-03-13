import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 8, suffix: "+", label: "기술 스택" },
  { value: 5, suffix: "+", label: "프로젝트" },
  { value: 2, suffix: "개", label: "회사 경험" },
];

// 0개월 ~ 21개월(1년 9개월)을 카운트하며 "X년 Y개월" 포맷으로 표시
function CareerCountUp({ totalMonths }: { totalMonths: number }) {
  const [months, setMonths] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const duration = 1800;
    const interval = Math.ceil(duration / totalMonths);
    const timer = setInterval(() => {
      current += 1;
      setMonths(current);
      if (current >= totalMonths) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [inView, totalMonths]);

  const years = Math.floor(months / 12);
  const remainMonths = months % 12;

  return (
    <span ref={ref} className="tabular-nums">
      {years}년 {remainMonths}개월
    </span>
  );
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(duration / target);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsBanner() {
  return (
    <div className="py-16 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* 개발 경력: 0년 0개월 → 1년 9개월 카운트업 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="text-center"
          >
            <p className="text-4xl md:text-5xl font-bold text-accent mb-2">
              <CareerCountUp totalMonths={21} />
            </p>
            <p className="text-white/40 font-mono text-xs uppercase tracking-widest">
              개발 경력
            </p>
          </motion.div>

          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx + 1) * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/40 font-mono text-xs uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
