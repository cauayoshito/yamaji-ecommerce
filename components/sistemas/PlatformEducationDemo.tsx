"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  PlayCircle,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

type DemoTabKey = "dashboard" | "formacoes" | "aula" | "progresso" | "admin";

type PlatformEducationDemoProps = {
  fullScreen?: boolean;
};

const tabs: Array<{
  id: DemoTabKey;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "formacoes", label: "Formações", icon: GraduationCap },
  { id: "aula", label: "Aula", icon: PlayCircle },
  { id: "progresso", label: "Progresso", icon: TrendingUp },
  { id: "admin", label: "Admin", icon: Shield },
];

function DashboardView() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {["Alunos ativos", "Aulas concluídas", "Engajamento"].map((item, index) => (
          <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/45">{item}</p>
            <p className="mt-2 text-2xl font-bold text-white">{index === 0 ? "1.284" : index === 1 ? "9.430" : "78%"}</p>
            <div className="mt-3 h-1 w-full rounded-full bg-white/10">
              <div
                className={cn(
                  "h-full rounded-full",
                  index === 2 ? "w-3/4 bg-sky-400" : "w-2/3 bg-accent"
                )}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold">Receita por formação</p>
            <BookOpen className="h-4 w-4 text-accent" />
          </div>
          <div className="flex h-36 items-end gap-2 rounded-lg border border-white/10 bg-black/20 p-3">
            {[
              "h-[35%]",
              "h-[55%]",
              "h-[48%]",
              "h-[64%]",
              "h-[80%]",
              "h-[72%]",
            ].map((heightClass, i) => (
              <span
                key={i}
                className={cn("w-full rounded-t bg-accent/60", heightClass)}
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold">Últimos alunos</p>
            <Users className="h-4 w-4 text-sky-300" />
          </div>
          <div className="space-y-2">
            {["Larissa Souza", "Daniel Rocha", "Tiago Sales", "Maya Prado"].map((name) => (
              <div key={name} className="flex items-center justify-between rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs">
                <span className="text-white/80">{name}</span>
                <span className="text-white/45">Ativo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FormacoesView() {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {[
        "Engenharia de Sites",
        "Tráfego + Funil",
        "CRM + Automação",
        "IA Aplicada",
        "Analytics para Escala",
        "Operação Tech",
      ].map((course, index) => (
        <article key={course} className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="mb-3 h-24 rounded-lg border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
          <h4 className="text-sm font-semibold text-white">{course}</h4>
          <p className="mt-1 text-xs text-white/50">{index + 8} módulos • 42 aulas</p>
          <div className="mt-3 h-1.5 rounded-full bg-white/10">
            <div className="h-full w-1/2 rounded-full bg-accent" />
          </div>
        </article>
      ))}
    </div>
  );
}

function AulaView() {
  return (
    <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="flex h-56 items-center justify-center rounded-lg border border-white/10 bg-black/25">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <PlayCircle className="h-5 w-5 text-accent" />
            Player da aula
          </div>
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-2 w-full rounded bg-white/15" />
          <div className="h-2 w-3/4 rounded bg-white/10" />
          <div className="h-2 w-1/2 rounded bg-white/10" />
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="text-sm font-semibold">Módulos da formação</h4>
        <div className="mt-3 space-y-2">
          {["M1 - Fundamentos", "M2 - Stack", "M3 - Deploy", "M4 - Escala"].map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/75">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgressoView() {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="text-sm font-semibold">Trilhas em progresso</h4>
        <div className="mt-4 space-y-3">
          {[
            ["Engenharia de Sites", "74%", "w-[74%]"],
            ["Tráfego + Funil", "52%", "w-[52%]"],
            ["CRM + Automação", "38%", "w-[38%]"],
          ].map(([name, value, widthClass]) => (
            <div key={name}>
              <div className="mb-1 flex items-center justify-between text-xs text-white/65">
                <span>{name}</span>
                <span>{value}</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className={cn("h-full rounded-full bg-accent", widthClass)} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="text-sm font-semibold">Metas semanais</h4>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {["Horas", "Aulas", "Projetos", "Mentorias"].map((item, i) => (
            <div key={item} className="rounded-lg border border-white/10 bg-black/20 p-3 text-center">
              <p className="text-[10px] uppercase tracking-[0.14em] text-white/45">{item}</p>
              <p className="mt-1 text-lg font-semibold text-white">{i + 2}/{i + 5}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdminView() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold">Gestão administrativa</h4>
        <Gauge className="h-4 w-4 text-sky-300" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-xs">
          <thead>
            <tr className="border-b border-white/10 text-white/45">
              <th className="px-2 py-2 font-medium">Formação</th>
              <th className="px-2 py-2 font-medium">Alunos</th>
              <th className="px-2 py-2 font-medium">Taxa conclusão</th>
              <th className="px-2 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Engenharia de Sites", "320", "64%", "Ativa"],
              ["Tráfego + Funil", "210", "58%", "Ativa"],
              ["CRM + Automação", "178", "51%", "Atualizando"],
              ["IA Aplicada", "143", "47%", "Ativa"],
            ].map((row) => (
              <tr key={row[0]} className="border-b border-white/10 last:border-0">
                <td className="px-2 py-3 text-white/80">{row[0]}</td>
                <td className="px-2 py-3 text-white/70">{row[1]}</td>
                <td className="px-2 py-3 text-white/70">{row[2]}</td>
                <td className="px-2 py-3">
                  <span className="rounded border border-accent/30 bg-accent/10 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-accent">
                    {row[3]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function renderTab(tab: DemoTabKey) {
  if (tab === "dashboard") return <DashboardView />;
  if (tab === "formacoes") return <FormacoesView />;
  if (tab === "aula") return <AulaView />;
  if (tab === "progresso") return <ProgressoView />;
  return <AdminView />;
}

export default function PlatformEducationDemo({
  fullScreen = false,
}: PlatformEducationDemoProps) {
  const [activeTab, setActiveTab] = useState<DemoTabKey>("dashboard");

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-[#10141d]/80",
        fullScreen ? "p-4 md:p-6" : "p-4"
      )}
    >
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Navegação da demonstração">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const selected = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition focus-visible:ring-2 focus-visible:ring-accent/60",
                  selected
                    ? "border-accent/40 bg-accent/10 text-accent"
                    : "border-white/10 bg-white/5 text-white/65 hover:bg-white/10"
                )}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {!fullScreen ? (
          <Link
            href="/sistemas/plataforma-educacional/demo"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:border-accent/35 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            Ver demo em tela cheia
          </Link>
        ) : null}
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className={cn(
          "rounded-xl border border-white/10 bg-[#0b0f15] p-4 md:p-5",
          fullScreen ? "min-h-[68vh]" : "min-h-[460px]"
        )}
      >
        {renderTab(activeTab)}
      </div>
    </div>
  );
}
