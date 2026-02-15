export default function ExportCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-accent/10 dark:bg-[#142c26]/70">
      <h3 className="mb-4 text-lg font-medium text-slate-900 dark:text-white">
        Exportacao Rapida
      </h3>

      <div className="space-y-4">
        <label className="flex items-center">
          <input
            defaultChecked
            className="h-4 w-4 border-gray-300 text-accent"
            name="export"
            type="radio"
          />
          <span className="ml-3 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Exportar Tudo
          </span>
        </label>

        <label className="flex items-center">
          <input className="h-4 w-4 border-gray-300 text-accent" name="export" type="radio" />
          <span className="ml-3 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Por Bairro Especifico
          </span>
        </label>

        <label className="flex items-center">
          <input className="h-4 w-4 border-gray-300 text-accent" name="export" type="radio" />
          <span className="ml-3 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Por Periodo (Ultimos 30 dias)
          </span>
        </label>

        <button
          className="w-full rounded-lg bg-accent px-4 py-2 text-sm font-medium text-[#0b1210] transition-colors hover:bg-[#0ebea0]"
          type="button"
        >
          Gerar Arquivo CSV
        </button>
      </div>
    </div>
  );
}
