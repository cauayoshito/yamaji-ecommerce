"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Target = { label: "Black Friday" | "Natal"; date: Date };

function getBlackFriday(year: number) {
  // última sexta de novembro às 23:59:59
  const d = new Date(year, 10, 30, 23, 59, 59, 999);
  const back = (d.getDay() + 2) % 7; // 5=sexta → volta proporcional
  d.setDate(30 - back);
  return d;
}
function getNextTarget(now = new Date()): Target {
  const y = now.getFullYear();
  const bf = getBlackFriday(y);
  const xmas = new Date(y, 11, 25, 23, 59, 59, 999);
  if (now <= bf) return { label: "Black Friday", date: bf };
  if (now <= xmas) return { label: "Natal", date: xmas };
  return { label: "Black Friday", date: getBlackFriday(y + 1) };
}
function pad(n: number) {
  return n.toString().padStart(2, "0");
}
function parts(target: Date, now = new Date()) {
  let ms = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(ms / 86400000);
  ms -= days * 86400000;
  const h = Math.floor(ms / 3600000);
  ms -= h * 3600000;
  const m = Math.floor(ms / 60000);
  ms -= m * 60000;
  const s = Math.floor(ms / 1000);
  return { days, h, m, s };
}

export default function SeasonalUrgencyBar() {
  const [tick, setTick] = useState(() => new Date());
  const raf = useRef<number | null>(null);

  useEffect(() => {
    let last = performance.now();
    const loop = (t: number) => {
      if (t - last >= 1000) {
        setTick(new Date());
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

  const target = useMemo(() => getNextTarget(tick), [tick]);
  const { days, h, m, s } = useMemo(
    () => parts(target.date, tick),
    [target, tick]
  );

  const countdown =
    days > 7
      ? `${days} ${days === 1 ? "dia" : "dias"}`
      : `${pad(days)}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`;

  const sub =
    target.label === "Black Friday"
      ? "É agora: alinhe oferta, landing, anúncios e automação para capturar a demanda."
      : "Natal concentra alta intenção de compra. Chegue pronto com funil afinado.";

  return (
    <div className="sticky top-[calc(var(--header-h))] z-40 border-b border-white/10 bg-[#0B0F14]/85 backdrop-blur supports-[backdrop-filter]:bg-[#0B0F14]/70">
      <div className="mx-auto max-w-7xl px-4 py-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span aria-hidden className="relative inline-flex h-3 w-3">
            <span className="absolute h-full w-full rounded-full bg-emerald-400/40 animate-ping" />
            <span className="relative h-3 w-3 rounded-full bg-emerald-400" />
          </span>
          <div>
            <p className="font-semibold">
              {target.label} em{" "}
              <span className="text-teal-300">{countdown}</span>
            </p>
            <p className="text-white/70 text-sm -mt-0.5">{sub}</p>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          <a
            href="/servicos/ads"
            className="rounded-lg bg-teal-400/95 hover:bg-teal-400 px-3 py-1.5 text-sm font-semibold text-[#0B0F14] focus-visible:ring-2 focus-visible:ring-teal-300"
          >
            Acelerar Ads
          </a>
          <a
            href="/servicos/sites"
            className="rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-sm font-semibold"
          >
            Revisar Landing
          </a>
          <a
            href="/servicos/ia-automacao"
            className="rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-sm font-semibold"
          >
            Ativar IA no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
