export default function SeasonBadge() {
  return (
    <div className="inline-flex flex-wrap items-center gap-2 rounded-xl border border-teal-400/25 bg-teal-500/10 px-3 py-2 text-sm" role="status">
      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-teal-400 motion-safe:animate-pulse" aria-hidden="true" />
      <span className="font-semibold text-teal-200">Diagnóstico por realidade de negócio</span>
      <span className="text-white/70">— Comece pelo que gera mais impacto agora.</span>
    </div>
  );
}
