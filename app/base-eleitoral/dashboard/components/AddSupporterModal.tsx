import { X } from "lucide-react";

type AddSupporterModalProps = {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
};

export default function AddSupporterModal({
  open,
  onClose,
  onSave,
}: AddSupporterModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md overflow-hidden rounded-xl border border-accent/20 bg-white shadow-2xl dark:bg-[#0d1b17]">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-accent/10">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Adicionar apoiador
          </h3>
          <button
            className="text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-white"
            onClick={onClose}
            type="button"
            aria-label="Fechar modal"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-4 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Nome Completo
            </label>
            <input
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 focus:border-accent focus:outline-none dark:border-slate-700 dark:bg-[#142c26]"
              placeholder="Ex: Joao da Silva"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
              WhatsApp
            </label>
            <input
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 focus:border-accent focus:outline-none dark:border-slate-700 dark:bg-[#142c26]"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Bairro
            </label>
            <select className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 focus:border-accent focus:outline-none dark:border-slate-700 dark:bg-[#142c26]">
              <option>Selecione um bairro</option>
              <option>Centro</option>
              <option>Jardim America</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 bg-gray-50 px-6 py-4 dark:bg-[#142c26]/50">
          <button
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-white/10"
            onClick={onClose}
            type="button"
          >
            Cancelar
          </button>
          <button
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-[#0b1210] shadow-lg shadow-accent/20 transition-colors hover:bg-[#0ebea0]"
            onClick={onSave}
            type="button"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
