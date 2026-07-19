"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ecosystemSolutions, type SegmentSlug } from "@/data/ecosystem";
import { cn } from "@/lib/utils";
import SegmentMark from "./SegmentMark";
import SolutionMockup from "./SolutionMockup";

export default function SegmentExplorer() {
  const [activeSlug, setActiveSlug] = useState<SegmentSlug>("studio");
  const active = ecosystemSolutions.find((item) => item.slug === activeSlug)!;

  function moveTab(currentIndex: number, direction: -1 | 1) {
    const nextIndex =
      (currentIndex + direction + ecosystemSolutions.length) %
      ecosystemSolutions.length;
    const next = ecosystemSolutions[nextIndex];
    setActiveSlug(next.slug);
    requestAnimationFrame(() => {
      document.getElementById(`segment-tab-${next.slug}`)?.focus();
    });
  }

  return (
    <div
      className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center"
      style={{
        "--segment-accent": active.accent,
        "--segment-soft": active.accentSoft,
      } as React.CSSProperties}
    >
      <div>
        <div
          className="flex gap-2 overflow-x-auto pb-2 lg:grid lg:grid-cols-2 lg:overflow-visible"
          role="tablist"
          aria-label="Escolha uma solução Yamaji"
        >
          {ecosystemSolutions.map((solution, index) => {
            const selected = solution.slug === activeSlug;
            return (
              <button
                key={solution.slug}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="segment-panel"
                id={`segment-tab-${solution.slug}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveSlug(solution.slug)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                    event.preventDefault();
                    moveTab(index, 1);
                  }
                  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                    event.preventDefault();
                    moveTab(index, -1);
                  }
                  if (event.key === "Home" || event.key === "End") {
                    event.preventDefault();
                    const next =
                      event.key === "Home"
                        ? ecosystemSolutions[0]
                        : ecosystemSolutions[ecosystemSolutions.length - 1];
                    setActiveSlug(next.slug);
                    requestAnimationFrame(() => {
                      document.getElementById(`segment-tab-${next.slug}`)?.focus();
                    });
                  }
                }}
                className={cn(
                  "min-w-[145px] rounded-xl border px-4 py-3 text-left transition duration-200 focus-visible:ring-2 focus-visible:ring-accent/60",
                  selected
                    ? "border-white/20 bg-white/[0.07] text-white"
                    : "border-white/[0.07] bg-white/[0.02] text-white/45 hover:border-white/15 hover:text-white/75"
                )}
              >
                <span className="block text-[10px] uppercase tracking-[0.15em]">
                  Yamaji
                </span>
                <span className="mt-0.5 block text-sm font-semibold">
                  {solution.shortName}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="segment-panel"
          role="tabpanel"
          aria-labelledby={`segment-tab-${active.slug}`}
          className="mt-8"
        >
          <div className="flex items-center gap-3">
            <SegmentMark segment={active.slug} />
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                {active.eyebrow}
              </p>
              <h3 className="text-2xl font-semibold text-white">{active.name}</h3>
            </div>
          </div>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/58">
            {active.scenario}
          </p>

          <ol className="mt-6 grid gap-2 sm:grid-cols-2">
            {active.flow.map((step) => (
              <li key={step} className="flex items-center gap-2 text-sm text-white/60">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--segment-soft)] text-[var(--segment-accent)]">
                  <Check className="h-3 w-3" />
                </span>
                {step}
              </li>
            ))}
          </ol>

          <Link
            href={`/${active.slug}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--segment-accent)] px-5 py-3 text-sm font-semibold text-[#08090B] transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[var(--segment-accent)]"
          >
            Ver a experiência completa
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <SolutionMockup solution={active} />
    </div>
  );
}
