const features = [
  "Mapa por bairro",
  "Segmentacao avancada",
  "Integracao WhatsApp API",
  "Relatorios PDF",
];

export default function RoadmapCards() {
  return (
    <div className="mt-8">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Expansao da Plataforma
        </h3>
        <span className="rounded-md bg-slate-200 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-700 dark:text-slate-300">
          EM DESENVOLVIMENTO
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature}
            className="relative cursor-not-allowed overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-100 p-6 opacity-60 transition-opacity hover:opacity-75 dark:border-slate-700 dark:bg-[#0d1b17]/40"
          >
            <div className="absolute right-3 top-3">
              <span className="rounded bg-slate-700 px-2 py-0.5 text-[10px] font-bold uppercase text-slate-300">
                Fase 2
              </span>
            </div>

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800">
              *
            </div>

            <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300">
              {feature}
            </h4>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
              Modulo planejado para evolucao da operacao.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
