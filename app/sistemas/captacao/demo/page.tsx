"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Bell,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronsRight,
  CircleDot,
  GraduationCap,
  MessageSquare,
  PanelsTopLeft,
  Search,
  Stethoscope,
  TrendingUp,
  UserSquare2,
  X,
} from "lucide-react";

type Stage = "novos" | "qualificados" | "negociacao" | "convertidos";

type Lead = {
  id: string;
  company: string;
  source: string;
  segment: string;
  score: number;
  contact: string;
  email: string;
  phone: string;
};

type TimelineItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: "search" | "message" | "calendar" | "check";
};

type ToastItem = {
  id: string;
  message: string;
};

function useDemoSimulation() {
  const [activeLead, setActiveLead] = useState<Lead>({
    id: "LE-9283",
    company: "Wayne Enterprises",
    source: "Meta Ads",
    segment: "Enterprise",
    score: 72,
    contact: "Bruce Wayne",
    email: "b.wayne@wayne.com",
    phone: "+55 11 9***-****",
  });
  const [stage, setStage] = useState<Stage>("novos");
  const [timeline, setTimeline] = useState<TimelineItem[]>([
    {
      id: "t1",
      title: "Lead captado via campanha",
      subtitle: "Agora • Campanha: Black Friday B2B",
      icon: "search",
    },
  ]);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const scoreInterval = setInterval(() => {
      setActiveLead((prev) => {
        if (prev.score >= 92) return prev;
        return { ...prev, score: Math.min(prev.score + 2, 92) };
      });
    }, 1200);

    const stageTimers = [
      setTimeout(() => {
        setStage("qualificados");
        setToasts((prev) => [
          ...prev,
          { id: crypto.randomUUID(), message: "Novo lead qualificado" },
        ]);
        setTimeline((prev) => [
          {
            id: crypto.randomUUID(),
            title: "Lead qualificado automaticamente",
            subtitle: "Há poucos segundos • Score acima de 80",
            icon: "message",
          },
          ...prev,
        ]);
      }, 4200),
      setTimeout(() => {
        setStage("negociacao");
        setToasts((prev) => [
          ...prev,
          { id: crypto.randomUUID(), message: "Lead movido para negociação" },
        ]);
        setTimeline((prev) => [
          {
            id: crypto.randomUUID(),
            title: "Lead movido para negociação",
            subtitle: "Agora • Recomendação prioritária",
            icon: "calendar",
          },
          ...prev,
        ]);
      }, 8800),
      setTimeout(() => {
        setStage("convertidos");
        setToasts((prev) => [
          ...prev,
          { id: crypto.randomUUID(), message: "Venda realizada" },
        ]);
        setTimeline((prev) => [
          {
            id: crypto.randomUUID(),
            title: "Venda concluída",
            subtitle: "Agora • Contrato assinado",
            icon: "check",
          },
          ...prev,
        ]);
      }, 12800),
    ];

    return () => {
      clearInterval(scoreInterval);
      stageTimers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    if (toasts.length === 0) return;
    const timeout = setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 2200);
    return () => clearTimeout(timeout);
  }, [toasts]);

  return { activeLead, stage, timeline, toasts };
}

function LeadCard({
  lead,
  featured,
}: {
  lead: Lead;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-lg border p-4 transition-all",
        featured
          ? "border-[#13ecb6]/45 bg-[#13ecb6]/8 shadow-[0_0_16px_-10px_rgba(19,236,182,0.35)]"
          : "border-white/10 bg-[#141416]",
      ].join(" ")}
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <p className={featured ? "text-sm font-bold text-[#13ecb6]" : "text-sm font-semibold text-white"}>
          {lead.company}
        </p>
        <span className="rounded border border-white/15 bg-black/20 px-2 py-0.5 text-[10px] text-white/70">
          {lead.source}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="rounded border border-white/10 px-1.5 py-0.5 text-[9px] uppercase text-white/55">
          {lead.segment}
        </span>
        <div className="flex items-center gap-1 text-[11px] font-bold text-white/70">
          <Activity className="h-3.5 w-3.5" />
          {lead.score}/100
        </div>
      </div>
      {featured ? (
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-black/40">
          <div className="h-full bg-[#13ecb6]" style={{ width: `${lead.score}%` }} />
        </div>
      ) : null}
    </div>
  );
}

function LeadKanban({ activeLead, stage }: { activeLead: Lead; stage: Stage }) {
  const staticLeads = useMemo(
    () => ({
      novos: [
        { id: "n1", company: "Stark Industries", source: "Google", segment: "Enterprise", score: 58, contact: "", email: "", phone: "" },
        { id: "n2", company: "Cyberdyne Systems", source: "Organic", segment: "B2B", score: 62, contact: "", email: "", phone: "" },
      ],
      qualificados: [
        { id: "q1", company: "Oscorp Corp.", source: "Organic", segment: "Enterprise", score: 78, contact: "", email: "", phone: "" },
      ],
      negociacao: [
        { id: "g1", company: "Umbrella Corp", source: "Manual", segment: "Pharma", score: 84, contact: "", email: "", phone: "" },
      ],
      convertidos: [
        { id: "c1", company: "Massive Dynamic", source: "CRM", segment: "Enterprise", score: 96, contact: "", email: "", phone: "" },
      ],
    }),
    []
  );

  const columns: Array<{ key: Stage; title: string }> = [
    { key: "novos", title: "Novos" },
    { key: "qualificados", title: "Qualificados" },
    { key: "negociacao", title: "Negociação" },
    { key: "convertidos", title: "Convertidos" },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {columns.map((column) => {
        const showActive = column.key === stage;
        return (
          <div key={column.key} className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/55">{column.title}</h3>
              <CircleDot className="h-3.5 w-3.5 text-white/35" />
            </div>
            <div className="space-y-3">
              {showActive ? <LeadCard lead={activeLead} featured /> : null}
              {staticLeads[column.key].map((lead) => (
                <LeadCard key={lead.id} lead={lead} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function LeadDetailPanel({
  lead,
  timeline,
}: {
  lead: Lead;
  timeline: TimelineItem[];
}) {
  const iconMap = {
    search: Search,
    message: MessageSquare,
    calendar: CalendarClock,
    check: CheckCircle2,
  } as const;

  return (
    <GlassCard className="h-full border-white/10 bg-[#141416] p-0">
      <div className="border-b border-white/10 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 bg-black/30">
            <Building2 className="h-7 w-7 text-[#13ecb6]" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">{lead.company}</h4>
            <p className="text-xs text-white/45">ID: #{lead.id}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-3 text-xs text-white/80">
          <div>
            <span className="mb-1 block text-white/45">Lead Source</span>
            <span>{lead.source}</span>
          </div>
          <div>
            <span className="mb-1 block text-white/45">Contato</span>
            <span>{lead.contact}</span>
          </div>
          <div>
            <span className="mb-1 block text-white/45">Email</span>
            <span className="truncate">{lead.email}</span>
          </div>
          <div>
            <span className="mb-1 block text-white/45">WhatsApp</span>
            <span>{lead.phone}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h5 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-white/45">
          Activity Timeline
        </h5>
        <div className="relative space-y-4 before:absolute before:left-3 before:top-1 before:h-[calc(100%-8px)] before:w-px before:bg-white/10">
          {timeline.slice(0, 5).map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.id} className="relative pl-9">
                <div className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#13ecb6]/15 text-[#13ecb6]">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <p className="text-xs font-semibold text-white">{item.title}</p>
                <p className="text-[10px] text-white/45">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-t border-[#13ecb6]/25 bg-[#13ecb6]/8 p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.1em] text-[#13ecb6]">AI LEAD SCORE</span>
          <span className="text-xl font-bold text-[#13ecb6]">{lead.score}%</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-black/45">
          <div className="h-full bg-[#13ecb6] transition-all duration-700" style={{ width: `${lead.score}%` }} />
        </div>
        <p className="mt-2 text-center text-[10px] italic text-white/55">
          Recomendação: mover para negociação prioritária.
        </p>
      </div>
    </GlassCard>
  );
}

function DemoModal({
  open,
  onClose,
  lead,
  stage,
}: {
  open: boolean;
  onClose: () => void;
  lead: Lead;
  stage: Stage;
}) {
  return (
    <div
      className={[
        "fixed inset-0 z-[90] flex items-center justify-center p-4 transition-all duration-300",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-live-title"
    >
      <button className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-label="Fechar modal" />
      <GlassCard className="relative z-10 w-full max-w-4xl border-white/15 bg-[#101113]/95 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 id="demo-live-title" className="text-lg font-bold text-white">
            Pipeline ao vivo
          </h3>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1 rounded-md border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6]"
          >
            <X className="h-4 w-4" />
            Fechar
          </button>
        </div>
        <p className="mb-5 text-sm text-white/65">
          Estágio atual: <span className="font-semibold text-[#13ecb6]">{stage}</span>
        </p>
        <LeadKanban activeLead={lead} stage={stage} />
      </GlassCard>
    </div>
  );
}

export default function CaptacaoDemoPage() {
  const { activeLead, stage, timeline, toasts } = useDemoSimulation();
  const [modalOpen, setModalOpen] = useState(false);

  const metrics = [
    { label: "Total Leads", value: "1.284", extra: "+12%" },
    { label: "Taxa de Qualificação", value: "42.5%", extra: "IA ativa" },
    { label: "Receita Projetada", value: "R$ 482k", extra: "mês atual" },
    { label: "Leads Quentes", value: "18", extra: "ativos" },
  ];

  return (
    <>
      <NavBar />

      <main className="min-h-screen bg-[#0A0A0B] text-white">
        <section className="sticky top-[72px] z-30 border-b border-white/10 bg-[#0A0A0B]/90 backdrop-blur-xl">
          <Container className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#13ecb6]/25 bg-[#13ecb6]/10">
                <PanelsTopLeft className="h-5 w-5 text-[#13ecb6]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base font-bold tracking-tight">Modo Demonstração - Lead Engine</h1>
                  <Badge className="border-[#13ecb6]/30 bg-[#13ecb6]/10 text-[#13ecb6]">
                    Simulação live
                  </Badge>
                </div>
                <p className="text-xs text-white/50">
                  Simulação de pipeline em tempo real com qualificação automática.
                </p>
              </div>
            </div>
            <Link
              href="/sistemas/captacao"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6]"
            >
              <X className="h-4 w-4" />
              Sair da demonstração
            </Link>
          </Container>
        </section>

        <section className="relative overflow-hidden py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_-10%,rgba(19,236,182,0.12),transparent_45%)]" />
          <Container className="relative z-10 space-y-6">
            <div className="grid gap-4 md:grid-cols-4">
              {metrics.map((metric) => (
                <GlassCard key={metric.label} className="border-white/10 bg-[#141416] p-5">
                  <div className="mb-2 flex items-start justify-between">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/45">{metric.label}</p>
                    <span className="rounded bg-[#13ecb6]/10 px-1.5 py-0.5 text-xs font-semibold text-[#13ecb6]">
                      {metric.extra}
                    </span>
                  </div>
                  <p className="text-2xl font-bold">{metric.value}</p>
                </GlassCard>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.65fr_1fr]">
              <GlassCard className="border-white/10 bg-[#141416] p-5">
                <LeadKanban activeLead={activeLead} stage={stage} />
              </GlassCard>
              <LeadDetailPanel lead={activeLead} timeline={timeline} />
            </div>

            <GlassCard className="border-white/10 bg-[#141416] p-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/45">
                    Crescimento de conversão
                  </p>
                  <p className="text-2xl font-bold text-white">
                    +24.8% <span className="text-xs font-normal text-white/50">neste mês</span>
                  </p>
                </div>
                <div className="flex h-16 w-full items-end gap-1 md:max-w-xl">
                  {[6, 8, 7, 10, 9, 12, 14, 11, 13, 16, 14, 15, 12, 16].map((value, idx) => (
                    <div
                      key={idx}
                      className={idx > 9 ? "flex-1 rounded-t-sm bg-[#13ecb6]/70" : "flex-1 rounded-t-sm bg-[#13ecb6]/40"}
                      style={{ height: `${value * 4}px` }}
                    />
                  ))}
                </div>
              </div>
            </GlassCard>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-[#0D1011] py-16">
          <Container>
            <SectionHeader
              eyebrow="Para quem é"
              title="Operações que precisam de rotina comercial previsível"
              description="Estrutura pensada para times que dependem de geração de demanda e resposta rápida."
              align="center"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Clínicas", icon: Stethoscope },
                { label: "Infoprodutores", icon: GraduationCap },
                { label: "Consultorias", icon: BriefcaseBusiness },
                { label: "Escritórios", icon: UserSquare2 },
                { label: "Empresas B2B", icon: Building2 },
                { label: "Serviços locais com tráfego pago", icon: TrendingUp },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <GlassCard key={item.label} className="border-white/10 bg-[#141416] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#13ecb6]/25 bg-[#13ecb6]/10 text-[#13ecb6]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </Container>
        </section>
      </main>

      <div className="pointer-events-none fixed right-6 top-[96px] z-[70] space-y-2">
        {toasts.slice(0, 2).map((toast) => (
          <div key={toast.id} className="pointer-events-auto inline-flex items-center gap-2 rounded-md border border-[#13ecb6]/30 bg-[#0f1513]/95 px-3 py-2 text-xs font-semibold text-[#13ecb6] shadow-[0_0_16px_-10px_rgba(19,236,182,0.35)]">
            <Bell className="h-3.5 w-3.5" />
            {toast.message}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-6 z-[80] inline-flex items-center gap-2 rounded-full border border-[#13ecb6]/35 bg-[#0f1513]/95 px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#13ecb6] shadow-[0_0_18px_-10px_rgba(19,236,182,0.32)] transition hover:-translate-y-0.5 hover:border-[#13ecb6]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6]"
      >
        <ChevronsRight className="h-4 w-4" />
        Ver pipeline ao vivo
      </button>

      <DemoModal open={modalOpen} onClose={() => setModalOpen(false)} lead={activeLead} stage={stage} />

      <Footer />
    </>
  );
}
