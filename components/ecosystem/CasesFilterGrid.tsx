"use client";

import { useState } from "react";
import type { SegmentSlug } from "@/data/ecosystem";
import { cn } from "@/lib/utils";

export type PortfolioProject = {
  span: "large" | "med" | "std";
  art: string;
  device: string;
  niche: string;
  tag: string;
  name: string;
  scope: string;
  ecosystem: SegmentSlug;
  url?: string;
  badge?: string;
};

const filters: Array<{ label: string; value: "all" | SegmentSlug }> = [
  { label: "Todos", value: "all" },
  { label: "Studio", value: "studio" },
  { label: "Eats", value: "eats" },
  { label: "Fit", value: "fit" },
  { label: "Legal", value: "legal" },
];

export default function CasesFilterGrid({ projects }: { projects: PortfolioProject[] }) {
  const [active, setActive] = useState<"all" | SegmentSlug>("all");
  const filtered = active === "all" ? projects : projects.filter((project) => project.ecosystem === active);

  return (
    <>
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filtrar cases por frente Yamaji">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActive(filter.value)}
            aria-pressed={active === filter.value}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition",
              active === filter.value
                ? "border-accent/30 bg-accent text-[#08090B]"
                : "border-white/10 bg-white/[0.025] text-white/55 hover:border-white/20 hover:text-white"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {filtered.length ? (
        <div className="projects-grid">
          {filtered.map((project) => (
            <article key={project.name} className={`project ${project.span}`}>
              <div className="thumb">
                <div className={`thumb-art ${project.art}`} aria-hidden="true">
                  <div className="pat" />
                  <div className="thumb-device">
                    <div className="head">
                      <div className="dot" />
                      <span className="nm">{project.device}</span>
                    </div>
                    <div className="bar s1" />
                    <div className="bar s2" />
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="meta">
                  <span>{project.niche}</span>
                  <span className="acc">Yamaji {project.ecosystem.charAt(0).toUpperCase() + project.ecosystem.slice(1)}</span>
                </div>
                <h4>{project.name}</h4>
                <p className="scope">{project.scope}</p>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer noopener" className="proj-link" data-label={`case-${project.name}`}>
                    {project.url.replace(/^https?:\/\//, "")}
                    <span className="ext" aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="proj-badge">{project.badge}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] px-6 py-14 text-center">
          <p className="text-lg font-semibold text-white">Ainda não há um case público nesta frente.</p>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/45">
            As demonstrações da solução estão disponíveis na página da vertical e são identificadas como conceito.
          </p>
        </div>
      )}
    </>
  );
}
