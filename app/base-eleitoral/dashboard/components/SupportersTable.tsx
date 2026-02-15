import Link from "next/link";
import { MoreVertical } from "lucide-react";
import type { Supporter } from "./data";
import { toneClass } from "./data";

type SupportersTableProps = {
  rows: Supporter[];
};

export default function SupportersTable({ rows }: SupportersTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-accent/10 dark:bg-[#142c26]/70 lg:col-span-2">
      <div className="flex items-center justify-between border-b border-gray-200 bg-white/50 px-6 py-5 dark:border-accent/10 dark:bg-[#0d1b17]/30">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white">
          Ultimos Apoiadores
        </h3>
        <Link className="text-sm font-medium text-accent hover:underline" href="#">
          Ver todos
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-accent/10">
          <thead className="bg-gray-50 dark:bg-[#0d1b17]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                WhatsApp
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Bairro
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Data
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Acoes
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white dark:divide-accent/5 dark:bg-transparent">
            {rows.map((item) => (
              <tr
                key={item.name}
                className="transition-colors hover:bg-gray-50 dark:hover:bg-accent/5"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-accent/20 text-xs font-bold text-accent">
                      {item.initials}
                    </div>
                    <div className="ml-4 text-sm font-medium text-slate-900 dark:text-white">
                      {item.name}
                    </div>
                  </div>
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                  {item.phone}
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${toneClass[item.tone]}`}
                  >
                    {item.neighborhood}
                  </span>
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                  {item.date}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <button
                    className="rounded p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                    type="button"
                    aria-label={`Acoes para ${item.name}`}
                  >
                    <MoreVertical className="h-4 w-4" aria-hidden="true" />
                  </button>
                </td>
              </tr>
            ))}

            {rows.length === 0 && (
              <tr>
                <td className="px-6 py-8 text-center text-sm text-slate-500" colSpan={5}>
                  Nenhum apoiador encontrado para os filtros selecionados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
