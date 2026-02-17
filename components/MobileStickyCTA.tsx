// components/MobileStickyCTA.tsx
// Barra colada no rodapé (mobile), com "3 vagas" forte e respeito à safe-area.
"use client";

import { useEffect, useState } from "react";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  // aparece depois de rolar um pouco
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50"
      role="region"
      aria-label="Ação rápida no WhatsApp"
    >
      <div className="mx-auto max-w-7xl px-3 pb-[calc(env(safe-area-inset-bottom,0)+8px)]">
        <div className="rounded-2xl border border-teal-400/25 bg-[#0B0F14]/90 backdrop-blur supports-[backdrop-filter]:bg-[#0B0F14]/70 shadow-2xl shadow-black/40 px-3 py-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-2.5 w-2.5 rounded-full bg-teal-400 animate-pulse"
              aria-hidden
            />
            <span className="text-[12.5px] text-teal-200 font-medium">
              3 vagas para Black Friday
            </span>
          </div>

          <a
            href="https://wa.me/5571992258349"
            className="rounded-lg bg-teal-400/95 hover:bg-teal-400 text-[#0B0F14] px-3 py-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
