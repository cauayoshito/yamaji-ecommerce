"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import MetricChip from "@/components/ui/MetricChip";
import { cases } from "@/data/cases";
import { cn } from "@/lib/utils";

const filters = ["Todos", "Sistema", "Automação", "Presença", "Growth"] as const;

export default function CasesDirectory() {
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");

  const filtered = useMemo(() => {
    if (active === "Todos") return cases;
    return cases.filter((item) => item.type === active);
  }, [active]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition",
              active === filter
                ? "border-accent/60 bg-accent/10 text-accent"
                : "bg-white/5 text-muted hover:text-fg"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <Link key={item.slug} href={`/cases/${item.slug}`} className="group">
            <GlassCard className="flex h-full flex-col overflow-hidden p-0 transition duration-300 group-hover:-translate-y-1 group-hover:border-accent/50">
              <div className="relative h-[320px] w-full">
                <Image
                  src={item.cover}
                  alt={`Case ${item.title}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 space-y-2 p-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted">
                    {item.type} • {item.segment}
                  </span>
                  <h3 className="text-lg font-semibold text-fg">{item.title}</h3>
                  <p className="text-sm text-muted">{item.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.metrics.slice(0, 2).map((metric) => (
                      <MetricChip key={metric}>{metric}</MetricChip>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
