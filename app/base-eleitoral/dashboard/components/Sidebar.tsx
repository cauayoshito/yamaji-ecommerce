import { BarChart3, Download, FileText, Settings, UserPlus, Users2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const navItems = [
  { label: "Visao Geral", icon: BarChart3, active: true },
  { label: "Apoiadores", icon: Users2, active: false },
  { label: "Cadastro Manual", icon: UserPlus, active: false },
  { label: "Exportacao", icon: Download, active: false },
  { label: "Configuracoes", icon: Settings, active: false },
];

function SidebarPanel() {
  return (
    <aside className="flex h-full w-64 flex-shrink-0 flex-col justify-between border-r border-gray-200 bg-white dark:border-accent/10 dark:bg-[#0d1b17]">
      <div>
        <div className="flex h-16 items-center border-b border-gray-200 px-6 dark:border-accent/10">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-accent">
            <FileText className="h-5 w-5" aria-hidden="true" />
            <span>
              BASE <span className="font-light text-white">ELEITORAL</span>
            </span>
          </div>
        </div>

        <nav className="mt-6 space-y-1 px-3" aria-label="Navegacao do dashboard">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href="#"
                className={cn(
                  "group flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                  item.active
                    ? "border border-accent/20 bg-accent/10 text-accent"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-accent/5 dark:hover:text-accent"
                )}
              >
                <Icon className="mr-3 h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-gray-200 p-4 dark:border-accent/10">
        <div className="flex items-center">
          <div className="h-9 w-9 rounded-full border-2 border-accent bg-accent/20" />
          <div className="ml-3">
            <p className="text-sm font-medium text-slate-700 dark:text-white">
              Ricardo Admin
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Ver perfil</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      <div className="hidden md:block">
        <SidebarPanel />
      </div>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={onClose}
            className="absolute inset-0 bg-black/50"
            aria-label="Fechar menu lateral"
          />
          <div className="relative z-10 h-full w-72">
            <SidebarPanel />
          </div>
        </div>
      )}
    </>
  );
}
