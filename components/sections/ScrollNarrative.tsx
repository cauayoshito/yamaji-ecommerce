"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const BLOCKS = [
  {
    eyebrow: "Trabalhe conosco se você quiser",
    title: "Crescimento não é estética. É estrutura.",
    micro: "Sites, tráfego e automações trabalhando juntos.",
  },
  {
    eyebrow: "Do clique ao caixa",
    title: "Um funil que não vaza.",
    micro: "Oferta clara, provas reais, conversão previsível.",
  },
  {
    eyebrow: "Operação inteligente",
    title: "IA aplicada onde dá resultado.",
    micro: "Atendimento, follow-up e dados automatizados.",
  },
];

export default function ScrollNarrative() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sections = sectionsRef.current.filter(
      Boolean
    ) as HTMLDivElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!hit) return;
        const nextIndex = Number(hit.target.getAttribute("data-index"));
        if (Number.isNaN(nextIndex)) return;
        setActiveIndex(nextIndex);
      },
      { threshold: 0.45, rootMargin: "0px 0px -20% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setAnimateIn(false);
    const raf = window.requestAnimationFrame(() => setAnimateIn(true));
    return () => window.cancelAnimationFrame(raf);
  }, [activeIndex]);

  return (
    <section className="relative bg-[#0B0F14]">
      {BLOCKS.map((block, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={block.title}
            ref={(el) => {
              sectionsRef.current[index] = el;
            }}
            data-index={index}
            className="min-h-[70vh] md:min-h-[85vh]"
          >
            <div className="sticky top-[18vh] flex min-h-[70vh] items-center md:min-h-[85vh]">
              <div className="mx-auto w-full max-w-6xl px-5">
                <div className="relative flex items-center justify-center text-center lg:justify-start lg:text-left">
                  <div
                    className={cn(
                      "relative max-w-[26ch] space-y-3 transition duration-700 ease-out motion-reduce:transition-none",
                      isActive && animateIn
                        ? "opacity-100 translate-y-0 scale-100 blur-0"
                        : "opacity-0 translate-y-4 scale-[0.98] blur-[16px]"
                    )}
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.2, 0.7, 0.2, 1)",
                    }}
                  >
                    <span className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-muted">
                      {block.eyebrow}
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight text-fg md:text-5xl">
                      {block.title}
                    </h2>
                    <p className="text-sm text-muted md:text-base">
                      {block.micro}
                    </p>
                  </div>
                  <div
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[140px] transition duration-700 ease-out motion-reduce:transition-none",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.2, 0.7, 0.2, 1)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
