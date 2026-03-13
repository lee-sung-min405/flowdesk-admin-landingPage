import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  darkMode: true,
  themeVariables: {
    background: "#1a1a1a",
    primaryColor: "#2d2d2d",
    primaryTextColor: "#e0e0e0",
    lineColor: "#888",
    fontSize: "13px",
  },
});

let idCounter = 0;

export default function MermaidChart({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const id = `mermaid-${++idCounter}`;
    setError(false);

    mermaid
      .render(id, chart.trim())
      .then(({ svg }) => {
        if (ref.current) ref.current.innerHTML = svg;
      })
      .catch(() => setError(true));
  }, [chart]);

  if (error) {
    return (
      <pre className="text-white/50 text-xs bg-white/5 p-4 rounded-xl overflow-x-auto">
        {chart}
      </pre>
    );
  }

  return (
    <div
      ref={ref}
      className="my-4 flex justify-center overflow-x-auto [&_svg]:max-w-full"
    />
  );
}
