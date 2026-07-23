import Link from "next/link";

export default function SeasonalUrgencyBar() {
  return (
    <div className="sticky top-[calc(var(--header-h))] z-40 border-b border-white/10 bg-[#0B0F14]/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" aria-hidden="true" />
          <div>
            <p className="font-semibold text-white">Encontre a solução certa para sua operação.</p>
            <p className="text-sm text-white/60">Studio, Eats, Fit e Legal em uma estrutura conectada.</p>
          </div>
        </div>
        <Link href="/#solucoes" className="rounded-lg bg-teal-400 px-3 py-1.5 text-sm font-semibold text-[#0B0F14]">
          Ver soluções
        </Link>
      </div>
    </div>
  );
}
