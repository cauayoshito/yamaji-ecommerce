// components/ProjectGallery.tsx
"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/projects-sites";
import ProjectCard from "./ProjectCard";

export default function ProjectGallery({ items }: { items: Project[] }) {
  const allTags = useMemo(
    () =>
      Array.from(new Set(items.flatMap((p) => p.tags))).sort((a, b) =>
        a.localeCompare(b, "pt-BR")
      ),
    [items]
  );
  const [tag, setTag] = useState<string>("Todos");

  const filtered = useMemo(
    () => (tag === "Todos" ? items : items.filter((p) => p.tags.includes(tag))),
    [items, tag]
  );

  return (
    <div className="w-full">
      {/* Filtros */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {["Todos", ...allTags].map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`rounded-full border px-3 py-1 text-sm transition ${
              tag === t
                ? "border-teal-400/40 bg-teal-400/15 text-teal-200"
                : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
            }`}
            aria-pressed={tag === t}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </div>
  );
}
