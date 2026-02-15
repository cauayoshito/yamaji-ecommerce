"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Topbar from "@/app/base-eleitoral/dashboard/components/Topbar";
import Sidebar from "@/app/base-eleitoral/dashboard/components/Sidebar";
import KpiGrid from "@/app/base-eleitoral/dashboard/components/KpiGrid";
import SupportersTable from "@/app/base-eleitoral/dashboard/components/SupportersTable";
import ExportCard from "@/app/base-eleitoral/dashboard/components/ExportCard";
import HelpCard from "@/app/base-eleitoral/dashboard/components/HelpCard";
import RoadmapCards from "@/app/base-eleitoral/dashboard/components/RoadmapCards";
import AddSupporterModal from "@/app/base-eleitoral/dashboard/components/AddSupporterModal";
import SuccessToast from "@/app/base-eleitoral/dashboard/components/SuccessToast";
import { supporters } from "@/app/base-eleitoral/dashboard/components/data";

export default function BaseEleitoralAdminPage() {
  const [search, setSearch] = useState("");
  const [neighborhood, setNeighborhood] = useState("Todos os Bairros");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    return supporters.filter((item) => {
      const bySearch =
        search.trim().length === 0 ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.phone.includes(search);

      const byNeighborhood =
        neighborhood === "Todos os Bairros" ||
        item.neighborhood === neighborhood;

      return bySearch && byNeighborhood;
    });
  }, [search, neighborhood]);

  useEffect(() => {
    if (!toastOpen) return;
    const timer = setTimeout(() => setToastOpen(false), 3000);
    return () => clearTimeout(timer);
  }, [toastOpen]);

  return (
    <div className="flex h-screen overflow-hidden bg-[#10221d] text-slate-200 antialiased selection:bg-accent selection:text-[#0b1210]">
      <AddSupporterModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={() => {
          setIsModalOpen(false);
          setToastOpen(true);
        }}
      />

      <SuccessToast open={toastOpen} onClose={() => setToastOpen(false)} />

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="relative flex h-full flex-1 flex-col overflow-hidden">
        <Topbar
          search={search}
          neighborhood={neighborhood}
          onSearchChange={setSearch}
          onNeighborhoodChange={setNeighborhood}
          onAddSupporter={() => setIsModalOpen(true)}
          onOpenSidebar={() => setSidebarOpen(true)}
        />

        <main className="relative flex-1 space-y-8 overflow-y-auto bg-[#10221d] p-6 lg:p-8">
          <div className="pointer-events-none absolute left-0 top-0 h-96 w-full bg-gradient-to-b from-accent/5 to-transparent" />

          {/* HEADER PRO (Breadcrumb + Título + Botão) */}
          <header className="relative z-10 flex flex-col gap-3">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-400">
              <Link
                href="/base-eleitoral"
                className="hover:text-accent transition"
              >
                Base Eleitoral
              </Link>

              <span className="text-slate-600">/</span>

              <span className="text-slate-300">Admin</span>
            </nav>

            {/* Linha do título + botão */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-xl font-semibold text-slate-100">
                  Painel Administrativo
                </h1>
                <p className="mt-1 text-sm text-slate-400">
                  Gestão de apoiadores, exportações e visão geral da campanha.
                </p>
              </div>

              <Link
                href="/base-eleitoral"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent hover:text-[#0b1210] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#10221d]"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Voltar para Base Eleitoral
              </Link>
            </div>

            {/* Separador sutil */}
            <div className="h-px w-full bg-white/5" />
          </header>

          <KpiGrid />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <SupportersTable rows={filtered} />

            <div className="flex flex-col gap-8">
              <ExportCard />
              <HelpCard />
            </div>
          </div>

          <RoadmapCards />

          <footer className="border-t border-gray-200 pb-6 pt-6 text-center text-xs text-slate-500 dark:border-accent/10">
            © 2026 Yamaji Studio
          </footer>
        </main>
      </div>
    </div>
  );
}
