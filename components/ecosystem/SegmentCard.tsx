import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { EcosystemSolution } from "@/data/ecosystem";
import SegmentMark from "./SegmentMark";
import { MiniFlow } from "./SolutionMockup";

export default function SegmentCard({ solution }: { solution: EcosystemSolution }) {
  return (
    <article
      className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.04]"
      style={{
        "--segment-accent": solution.accent,
        "--segment-soft": solution.accentSoft,
      } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "var(--segment-soft)" }}
      />

      <div className="relative flex items-start justify-between">
        <SegmentMark segment={solution.slug} />
        <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/30">
          {solution.eyebrow}
        </span>
      </div>

      <div className="relative mt-7 flex-1">
        <h3 className="text-xl font-semibold tracking-tight text-white">
          {solution.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/52">
          {solution.promise}
        </p>
        <div className="mt-5">
          <MiniFlow segment={solution.slug} />
        </div>
      </div>

      <div className="relative mt-7 border-t border-white/[0.07] pt-5">
        <div className="flex flex-wrap gap-1.5">
          {solution.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/[0.07] px-2 py-1 text-[9px] text-white/38">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/${solution.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--segment-accent)] focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[var(--segment-accent)]"
          aria-label={`Conhecer ${solution.name}`}
        >
          Conhecer a solução
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
