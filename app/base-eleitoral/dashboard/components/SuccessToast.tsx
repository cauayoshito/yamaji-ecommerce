import { Check, X } from "lucide-react";

type SuccessToastProps = {
  open: boolean;
  onClose: () => void;
};

export default function SuccessToast({ open, onClose }: SuccessToastProps) {
  if (!open) return null;

  return (
    <div className="fixed right-6 top-24 z-50 flex w-full max-w-xs items-center space-x-4 rounded-lg border-l-4 border-accent bg-white p-4 text-gray-500 shadow-lg dark:bg-[#142c26] dark:text-gray-300">
      <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent">
        <Check className="h-4 w-4" aria-hidden="true" />
      </div>

      <div className="text-sm font-normal text-slate-800 dark:text-white">
        Apoiador adicionado.
      </div>

      <button
        className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={onClose}
        type="button"
        aria-label="Fechar aviso"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
