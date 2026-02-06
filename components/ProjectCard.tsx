// components/ProjectCard.tsx
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects-sites";
import { cn } from "@/lib/utils";

export default function ProjectCard({
  p,
  className,
}: {
  p: Project;
  className?: string;
}) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition",
        className
      )}
      aria-label={`Abrir projeto: ${p.title}`}
      data-cta="portfolio"
      data-label={`Projeto - ${p.slug}`}
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={p.cover}
          alt={`Preview do projeto: ${p.title}`}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          priority={false}
        />
        {/* Chips */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1">
          {p.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 bg-black/50 px-2 py-0.5 text-[11px] text-white/85 backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>
        {/* Métrica */}
        {p.metrics && (
          <span className="absolute bottom-3 left-3 rounded-md bg-emerald-400/20 px-2 py-1 text-xs text-emerald-200 backdrop-blur border border-emerald-400/25">
            {p.metrics}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <h4 className="font-medium">{p.title}</h4>
        <ExternalLink className="h-4 w-4 text-white/70 group-hover:text-white transition" />
      </div>
    </a>
  );
}
