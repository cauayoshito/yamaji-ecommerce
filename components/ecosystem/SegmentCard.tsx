import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { EcosystemSolution } from "@/data/ecosystem";
import { createWhatsAppLink } from "@/lib/contact";
import SegmentMark from "./SegmentMark";
import { MiniFlow } from "./SolutionMockup";

export default function SegmentCard({ solution }: { solution: EcosystemSolution }) {
  const whatsappLink = createWhatsAppLink(solution.whatsappMessage);

  return (
    <article
      className="group relative flex min-h-[280px] min-w-0 flex-col overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.04] sm:min-h-[310px] sm:p-6"
      style={{
        "--segment-accent": solution.accent,
        "--segment-soft": solution.accentSoft,
      } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "var(--segment-soft)" }}
      />

      <div className="relative flex min-w-0 items-start justify-between gap-3">
        <SegmentMark segment={solution.slug} />
        <span className="min-w-0 text-right text-[10px] font-medium uppercase tracking-[0.15em] text-white/30">
          {solution.eyebrow}
        </span>
      </div>

      <div className="relative mt-6 min-w-0 flex-1 sm:mt-7">
        <h3 className="text-xl font-semibold tracking-tight text-white">
          {solution.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/52">
          {solution.promise}
        </p>
        <div className="mt-5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <MiniFlow segment={solution.slug} />
        </div>
      </div>

      <div className="relative mt-6 border-t border-white/[0.07] pt-5 sm:mt-7">
        <div className="flex flex-wrap gap-1.5">
          {solution.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.07] px-2 py-1 text-[9px] text-white/38"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <Link
            href={`/${solution.slug}`}
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-white/[0.09] bg-white/[0.025] px-3 text-center text-[11px] font-semibold text-white/75 transition hover:border-white/20 hover:bg-white/[0.05] focus-visible:ring-2 focus-visible:ring-[var(--segment-accent)]"
            aria-label={`Conhecer ${solution.name}`}
          >
            Conhecer
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer noopener"
            data-cta="segment-whatsapp"
            data-label={`card-${solution.slug}`}
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-[var(--segment-accent)] px-3 text-center text-[11px] font-semibold text-[#08090B] transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[var(--segment-accent)]"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Conversar
          </a>
        </div>
      </div>
    </article>
  );
}
