"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Activity, CalendarDays, LayoutDashboard, ShieldCheck, UserSquare2 } from "lucide-react";
import DashboardScreen from "./_screens/Dashboard";
import PipelineScreen from "./_screens/Pipeline";
import AgendaScreen from "./_screens/Agenda";
import PacienteScreen from "./_screens/Paciente";
import SegurancaScreen from "./_screens/Seguranca";

type TabId = "dashboard" | "pipeline" | "agenda" | "paciente" | "seguranca";

const TABS: Array<{ id: TabId; label: string; icon: React.ComponentType<{ className?: string }> }> = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "pipeline", label: "Pipeline", icon: Activity },
  { id: "agenda", label: "Agenda", icon: CalendarDays },
  { id: "paciente", label: "Paciente", icon: UserSquare2 },
  { id: "seguranca", label: "Segurança", icon: ShieldCheck },
];

export default function CrmClinicasDemoPage() {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");

  const CurrentScreen = useMemo(() => {
    if (activeTab === "dashboard") return DashboardScreen;
    if (activeTab === "pipeline") return PipelineScreen;
    if (activeTab === "agenda") return AgendaScreen;
    if (activeTab === "paciente") return PacienteScreen;
    return SegurancaScreen;
  }, [activeTab]);

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white selection:bg-[#13ecb6]/30 selection:text-black">
      <div className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0A0B]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#13ecb6]/30 bg-[#13ecb6]/10 text-[#13ecb6]">
              Y
            </div>
            <div>
              <p className="text-sm font-semibold leading-none text-white">Yamaji Studio</p>
              <p className="mt-1 text-xs text-white/50">Demo CRM</p>
            </div>
          </div>
          <Link
            href="/crm-clinicas"
            className="rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-white/80 transition hover:bg-white/5"
          >
            Voltar
          </Link>
        </div>

        <div className="mx-auto w-full max-w-[1800px] overflow-x-auto px-4 pb-3 sm:px-6">
          <div className="flex w-max gap-2">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={[
                    "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition",
                    isActive
                      ? "border-[#13ecb6]/40 bg-[#13ecb6]/10 text-[#13ecb6]"
                      : "border-white/10 bg-[#121214] text-white/70 hover:border-white/20 hover:text-white",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1800px] px-4 py-6 sm:px-6">
        <CurrentScreen />
      </div>
    </main>
  );
}
