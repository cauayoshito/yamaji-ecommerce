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
      className="grid min-w-0 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center"
      style={{
        "--segment-accent": active.accent,
        "--segment-soft": active.accentSoft,
      } as React.CSSProperties}
    >
      <div className="min-w-0">
        <div
          className="grid min-w-0 grid-cols-2 gap-2 lg:grid-cols-2"
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
                  "w-full min-w-0 rounded-xl border px-3 py-3 text-left transition duration-200 focus-visible:ring-2 focus-visible:ring-accent/60 sm:px-4",
                  selected
                    ? "border-white/20 bg-white/[0.07] text-white"
                    : "border-white/[0.07] bg-white/[0.02] text-white/45 hover:border-white/15 hover:text-white/75"
                )}
              >
                <span className="block truncate text-[9px] uppercase tracking-[0.13em] sm:text-[10px] sm:tracking-[0.15em]">
                  Yamaji
                </span>
                <span className="mt-0.5 block truncate text-sm font-semibold">
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
          className="mt-7 min-w-0 sm:mt-8"
        >
          <div className="flex min-w-0 items-center gap-3">
            <SegmentMark segment={active.slug} />
            <div className="min-w-0">
              <p className="truncate text-[9px] uppercase tracking-[0.15em] text-white/35 sm:text-[10px] sm:tracking-[0.18em]">
                {active.eyebrow}
              </p>
              <h3 className="truncate text-2xl font-semibold text-white">
                {active.name}
              </h3>
            </div>
          </div>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/58 sm:text-base">
            {active.scenario}
          </p>

          <ol className="mt-6 grid min-w-0 gap-2 sm:grid-cols-2">
            {active.flow.map((step) => (
              <li key={step} className="flex min-w-0 items-center gap-2 text-sm text-white/60">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--segment-soft)] text-[var(--segment-accent)]">
                  <Check className="h-3 w-3" />
                </span>
                <span className="min-w-0 break-words">{step}</span>
              </li>
            ))}
          </ol>

          <Link
            href={`/${active.slug}`}
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--segment-accent)] px-5 py-3 text-center text-sm font-semibold text-[#08090B] transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[var(--segment-accent)] sm:mt-8 sm:w-auto"
          >
            Ver a experiência completa
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>
      </div>

      <div className="min-w-0 lg:hidden">
        <SolutionMockup
          solution={active}
          compact
          className="w-full min-w-0 max-w-full"
        />
      </div>

      <div className="hidden min-w-0 lg:block">
        <SolutionMockup
          solution={active}
          className="w-full min-w-0 max-w-full"
        />
      </div>
    </div>
  );
}
