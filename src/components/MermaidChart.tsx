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
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const id = `mermaid-${++idCounter}`;
    setError(false);
    setErrorMsg(null);

    try {
      mermaid.parse(chart.trim());
    } catch (e: any) {
      setError(true);
      setErrorMsg(e?.message || String(e));
      return;
    }

    mermaid
      .render(id, chart.trim())
      .then(({ svg }) => {
        if (ref.current) ref.current.innerHTML = svg;
      })
      .catch((e) => {
        setError(true);
        setErrorMsg(e?.message || String(e));
      });
  }, [chart]);

  if (error) {
    return (
      <div className="text-white/50 text-xs bg-white/5 p-4 rounded-xl overflow-x-auto">
        <div>Mermaid Syntax Error:</div>
        {errorMsg && <div className="text-red-400 mb-2">{errorMsg}</div>}
        <pre>{chart}</pre>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="my-4 flex justify-center overflow-x-auto [&_svg]:max-w-full"
    />
  );
}