// components/_hero/SeasonBadge.tsx
// Client island: calcula automaticamente Black Friday / Natal e mostra contagem.
// Se estiver fora do período, vira um selo de “implante em 7 dias”.
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Target = { label: "Black Friday" | "Natal"; date: Date };

function getBlackFriday(year: number) {
  // última sexta de novembro às 23:59:59
  const d = new Date(year, 10, 30, 23, 59, 59, 999);
  // voltar até cair em sexta (5)
  while (d.getDay() !== 5) d.setDate(d.getDate() - 1);
  return d;
}
function nextTarget(now = new Date()): Target | null {
  const y = now.getFullYear();
  const bf = getBlackFriday(y);
  const xmas = new Date(y, 11, 25, 23, 59, 59, 999);
  if (now <= bf) return { label: "Black Friday", date: bf };
  if (now <= xmas) return { label: "Natal", date: xmas };
  return null;
}
const pad = (n: number) => n.toString().padStart(2, "0");

export default function SeasonBadge() {
  const [now, setNow] = useState(() => new Date());
  const raf = useRef<number | null>(null);

  useEffect(() => {
    let last = performance.now();
    const loop = (t: number) => {
      if (t - last > 1000) {
        setNow(new Date());
        last = t;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => {
      if (raf.current !== null) {
        cancelAnimationFrame(raf.current);
      }
    };
  }, []);

  const target = useMemo(() => nextTarget(now), [now]);

  if (!target) {
    // fallback fora da janela sazonal
    return (
      <div
        className="inline-flex items-center gap-2 rounded-full bg-white/6 border border-white/10 px-3 py-1.5 text-sm text-white/90"
        role="status"
      >
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
        Implante em <strong className="text-white">até 7 dias</strong> garanta
        seu lugar.
      </div>
    );
  }

  const ms = Math.max(0, target.date.getTime() - now.getTime());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);

  const long =
    days > 7
      ? `${days} ${days === 1 ? "dia" : "dias"}`
      : `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;

  const sub =
    target.label === "Black Friday"
      ? "Alinhe oferta, landing, anúncios e automação para capturar a demanda."
      : "Chegue pronto para o pico do varejo funil otimizado e IA no WhatsApp.";

  return (
    <div
      className="inline-flex flex-wrap items-center gap-2 rounded-xl border border-teal-400/25 bg-teal-500/10 px-3 py-2 text-sm"
      role="status"
      aria-live="polite"
    >
      <span
        className="inline-flex h-2.5 w-2.5 rounded-full bg-teal-400 animate-pulse"
        aria-hidden
      />
      <span className="font-semibold text-teal-200">
        {target.label} em <span className="text-teal-300">{long}</span>
      </span>
      <span className="text-white/70">— {sub}</span>
    </div>
  );
}
