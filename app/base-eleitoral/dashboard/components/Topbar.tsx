import { Download, Menu, Plus } from "lucide-react";

type TopbarProps = {
  search: string;
  neighborhood: string;
  onSearchChange: (value: string) => void;
  onNeighborhoodChange: (value: string) => void;
  onAddSupporter: () => void;
  onOpenSidebar: () => void;
};

export default function Topbar({
  search,
  neighborhood,
  onSearchChange,
  onNeighborhoodChange,
  onAddSupporter,
  onOpenSidebar,
}: TopbarProps) {
  return (
    <header className="z-10 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 backdrop-blur-md dark:border-accent/10 dark:bg-[#0d1b17]/50 md:px-6">
      <div className="flex max-w-3xl flex-1 items-center gap-3 md:gap-4">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-fg md:hidden"
          aria-label="Abrir menu lateral"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="relative max-w-md flex-1">
          <input
            className="block w-full rounded-lg border border-slate-300 bg-slate-50 py-2 pl-3 pr-3 text-slate-900 placeholder-slate-500 transition-colors focus:border-accent focus:outline-none dark:border-slate-700 dark:bg-[#0d1b17] dark:text-white"
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar por Nome ou WhatsApp..."
            value={search}
          />
        </div>

        <div className="relative hidden w-48 md:block">
          <select
            className="block w-full rounded-lg border border-slate-300 bg-slate-50 py-2 pl-3 pr-10 text-sm text-slate-900 focus:border-accent focus:outline-none dark:border-slate-700 dark:bg-[#0d1b17] dark:text-slate-300"
            onChange={(event) => onNeighborhoodChange(event.target.value)}
            value={neighborhood}
          >
            <option>Todos os Bairros</option>
            <option>Centro</option>
            <option>Jardim America</option>
            <option>Vila Nova</option>
            <option>Sao Pedro</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <button
          type="button"
          className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-accent/30 dark:bg-accent/5 dark:text-accent dark:hover:bg-accent/10 md:px-4"
        >
          <Download className="mr-1.5 h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Exportar CSV</span>
          <span className="sm:hidden">CSV</span>
        </button>

        <button
          type="button"
          onClick={onAddSupporter}
          className="inline-flex items-center rounded-lg bg-accent px-3 py-2 text-sm font-bold text-[#0b1210] shadow-[0_0_15px_rgba(19,236,182,0.3)] transition-all hover:bg-[#0ebea0] md:px-4"
        >
          <Plus className="mr-1.5 h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Adicionar apoiador</span>
          <span className="sm:hidden">Adicionar</span>
        </button>
      </div>
    </header>
  );
}
