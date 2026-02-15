"use client";

import { useEffect, useMemo, useState, type ComponentType } from "react";
import Link from "next/link";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  ArrowRight,
  Check,
  Code,
  Database,
  GraduationCap,
  Layers,
  LineChart,
  Minus,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  Terminal,
  Users,
} from "lucide-react";

type SectionId = "hero" | "catalogo" | "comparar" | "processo";
type SystemStatus = "PRONTO" | "BETA";

type SystemCardItem = {
  title: string;
  description: string;
  status: SystemStatus;
  architecture: "MODULAR" | "API READY" | "MICROSERVICES";
  version: string;
  demoHref: string;
  category: "Comercial" | "Gestão" | "Conhecimento";
  icon: ComponentType<{ className?: string }>;
};

const SUBNAV_LINKS: Array<{ id: SectionId; label: string }> = [
  { id: "hero", label: "Overview" },
  { id: "catalogo", label: "Catálogo" },
  { id: "comparar", label: "Arquitetura" },
  { id: "processo", label: "Lifecycle" },
];

const SYSTEMS: SystemCardItem[] = [
  {
    title: "E-commerce",
    description:
      "Infraestrutura para vendas com checkout, operação de pedidos e inteligência de performance em um único fluxo.",
    status: "PRONTO",
    architecture: "MODULAR",
    version: "v2.6.0-build",
    demoHref: "/e-commerce",
    category: "Comercial",
    icon: ShoppingCart,
  },
  {
    title: "Sistema de Captação",
    description:
      "Pipeline automatizado para captura, qualificação e distribuição de leads com rastreabilidade operacional.",
    status: "BETA",
    architecture: "API READY",
    version: "v1.3.0-build",
    demoHref: "/sistemas/captacao/demo",
    category: "Comercial",
    icon: Database,
  },
  {
    title: "CRM Clínicas",
    description:
      "Gestão clínica com agenda, relacionamento e visão centralizada para operação previsível.",
    status: "PRONTO",
    architecture: "MICROSERVICES",
    version: "v2.2.1-build",
    demoHref: "/sistemas/crm-clinicas",
    category: "Gestão",
    icon: Stethoscope,
  },
  {
    title: "Base Eleitoral",
    description:
      "Motor de dados para segmentação territorial, operação de campo e acompanhamento de lideranças.",
    status: "PRONTO",
    architecture: "API READY",
    version: "v2.5.0-build",
    demoHref: "/base-eleitoral",
    category: "Gestão",
    icon: LineChart,
  },
  {
    title: "Plataforma Educacional",
    description:
      "Ambiente de aprendizagem com organização de conteúdo, progresso e indicadores de retenção.",
    status: "BETA",
    architecture: "MODULAR",
    version: "v1.0.0-build",
    demoHref: "/sistemas/educacional",
    category: "Conhecimento",
    icon: GraduationCap,
  },
];

const PROBLEMS = [
  {
    title: "Leads se perdem no WhatsApp",
    text: "Sem centralização, contatos valiosos ficam dispersos entre conversas privadas e planilhas desatualizadas.",
    icon: Users,
  },
  {
    title: "Falta de controle de origem",
    text: "Sem rastreio por campanha, você não identifica quais canais realmente geram receita previsível.",
    icon: LineChart,
  },
  {
    title: "Follow-up inconsistente",
    text: "Leads esfriam em minutos. Sem rotina automática, a concorrência chega primeiro.",
    icon: Code,
  },
  {
    title: "Mídia sem realimentação",
    text: "Investimento em Ads sem dados de conversão de qualidade reduz eficiência e escala.",
    icon: Layers,
  },
] as const;

const PIPELINE = [
  {
    step: "01. Entrada",
    title: "Captura",
    text: "Integração com tráfego pago, formulários e páginas de entrada.",
    iconA: ShoppingCart,
    iconB: Database,
  },
  {
    step: "02. Core",
    title: "Qualificação",
    text: "Score e regras automáticas para separar curiosos de compradores reais.",
    iconA: ShieldCheck,
    iconB: Users,
    highlighted: true,
  },
  {
    step: "03. Nutrição",
    title: "Engajamento",
    text: "Disparos e eventos para aquecer o lead com tempo de resposta curto.",
    iconA: Code,
    iconB: Terminal,
  },
  {
    step: "04. Sucesso",
    title: "Conversão",
    text: "Dashboard de hot leads para ação comercial orientada por prioridade.",
    iconA: Check,
    iconB: LineChart,
  },
] as const;

function FloatingButton() {
  return (
    <Link
      href="/sistemas/captacao/demo"
      className="fixed bottom-6 right-6 z-[80] inline-flex items-center gap-2 rounded-full border border-[#13ecb6]/35 bg-[#0f1413]/95 px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#13ecb6] shadow-[0_0_22px_-10px_rgba(19,236,182,0.35)] transition hover:-translate-y-0.5 hover:border-[#13ecb6]/55 hover:bg-[#131a18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
    >
      <Terminal className="h-4 w-4" />
      Ver demo
    </Link>
  );
}

function SubnavLink({
  href,
  active,
  label,
}: {
  href: string;
  active: boolean;
  label: string;
}) {
  return (
    <a
      href={href}
      className={[
        "relative whitespace-nowrap px-3 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors",
        active ? "text-white" : "text-white/45 hover:text-[#13ecb6]",
      ].join(" ")}
    >
      {label}
      {active ? (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#13ecb6]" />
      ) : null}
    </a>
  );
}

function SystemCard({ item }: { item: SystemCardItem }) {
  const Icon = item.icon;

  return (
    <Reveal>
      <GlassCard className="group h-full border-white/10 bg-[#121214]/80 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#13ecb6]/35">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <span
                className={[
                  "rounded border px-2 py-0.5 font-mono text-[10px]",
                  item.status === "PRONTO"
                    ? "border-[#13ecb6]/35 bg-[#13ecb6]/10 text-[#13ecb6]"
                    : "border-white/15 bg-white/5 text-white/70",
                ].join(" ")}
              >
                STATUS: {item.status}
              </span>
              <span className="rounded border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/70">
                ARQUITETURA: {item.architecture}
              </span>
            </div>
          </div>
          <Icon className="h-9 w-9 text-[#13ecb6]/75" />
        </div>

        <p className="mt-5 text-sm leading-relaxed text-white/65">
          {item.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
            {item.version}
          </span>
          <div className="flex items-center gap-2">
            <Link
              href={item.demoHref}
              className="inline-flex items-center gap-1 rounded-md bg-[#13ecb6] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#0A0A0B] transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
            >
              Ver demo
            </Link>
            <a
              href="#comparar"
              className="inline-flex items-center gap-1 rounded-md border border-white/20 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white transition hover:border-[#13ecb6]/35 hover:text-[#13ecb6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
            >
              Ver detalhes
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </GlassCard>
    </Reveal>
  );
}

export default function CaptacaoPage() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    const sections = SUBNAV_LINKS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible?.target?.id) {
          setActiveSection(mostVisible.target.id as SectionId);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.2, 0.4, 0.65],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const groupedSystems = useMemo(
    () => ({
      Comercial: SYSTEMS.filter((system) => system.category === "Comercial"),
      Gestão: SYSTEMS.filter((system) => system.category === "Gestão"),
      Conhecimento: SYSTEMS.filter(
        (system) => system.category === "Conhecimento"
      ),
    }),
    []
  );

  return (
    <>
      <NavBar />

      <div className="sticky top-[72px] z-40 border-b border-white/10 bg-[#0A0A0B]/82 backdrop-blur-xl">
        <Container className="flex items-center gap-3 overflow-x-auto">
          {SUBNAV_LINKS.map((link) => (
            <SubnavLink
              key={link.id}
              href={`#${link.id}`}
              label={link.label}
              active={activeSection === link.id}
            />
          ))}
        </Container>
      </div>

      <main className="overflow-x-hidden bg-[#0A0A0B] text-white selection:bg-[#13ecb6]/30">
        <section
          id="hero"
          className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-44"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="pointer-events-none absolute -right-20 -top-16 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(19,236,182,0.12)_0%,rgba(10,10,11,0)_70%)]" />

          <Container className="relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="mb-6 flex flex-wrap gap-2">
                  <Badge className="border-white/10 bg-white/5 text-white/75">
                    Automação
                  </Badge>
                  <Badge className="border-white/10 bg-white/5 text-white/75">
                    CRM Integrado
                  </Badge>
                  <Badge className="border-white/10 bg-white/5 text-white/75">
                    API Ready
                  </Badge>
                </div>

                <h1 className="h1 leading-[1.05] text-white">
                  Transforme tráfego em{" "}
                  <span className="text-[#13ecb6]">oportunidades reais.</span>
                </h1>

                <p className="lead mt-6 max-w-xl text-white/65">
                  Pipeline estruturado para captar, qualificar e nutrir leads
                  com consistência operacional. Pare de perder vendas por falta
                  de processo.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/sistemas/captacao/demo"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#13ecb6] px-6 py-3 text-sm font-bold text-[#0A0A0B] shadow-[0_0_18px_rgba(19,236,182,0.24)] transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
                  >
                    Ver demo do pipeline
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/aplicar"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#13ecb6]/45 hover:text-[#13ecb6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
                  >
                    Agendar diagnóstico
                  </Link>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  {[
                    { value: "99,9%", label: "Uptime" },
                    { value: "Modular", label: "Arquitetura" },
                    { value: "API-First", label: "Integrações" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="text-xl font-bold text-white">
                        {item.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#13ecb6]/18 to-blue-500/14 blur-xl" />

                  <GlassCard className="relative overflow-hidden border-white/10 bg-[#18181B]/78 p-0">
                    <div className="flex items-center gap-2 border-b border-white/10 bg-black/35 px-4 py-3">
                      <span className="h-3 w-3 rounded-full bg-red-500/65" />
                      <span className="h-3 w-3 rounded-full bg-yellow-500/65" />
                      <span className="h-3 w-3 rounded-full bg-green-500/65" />
                      <span className="ml-auto font-mono text-xs text-white/35">
                        dashboard.yamaji.studio
                      </span>
                    </div>

                    <div className="grid gap-4 p-5 md:grid-cols-[70px_1fr]">
                      <div className="hidden flex-col gap-3 border-r border-white/10 pr-4 md:flex">
                        {[Terminal, Layers, Users, LineChart, ShieldCheck].map(
                          (Icon, index) => (
                            <div
                              key={index}
                              className={[
                                "flex h-8 w-8 items-center justify-center rounded-md border",
                                index === 0
                                  ? "border-[#13ecb6]/35 bg-[#13ecb6]/12 text-[#13ecb6]"
                                  : "border-white/10 bg-white/5 text-white/45",
                              ].join(" ")}
                            >
                              <Icon className="h-4 w-4" />
                            </div>
                          )
                        )}
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            {
                              title: "Total Leads",
                              value: "1.248",
                              growth: "+12%",
                            },
                            {
                              title: "Qualificação",
                              value: "42,5%",
                              growth: "+5%",
                            },
                            {
                              title: "Receita projetada",
                              value: "R$ 482k",
                              growth: "+18%",
                            },
                          ].map((stat) => (
                            <div
                              key={stat.title}
                              className="rounded-lg border border-white/10 bg-white/5 p-3"
                            >
                              <p className="text-[11px] text-white/50">
                                {stat.title}
                              </p>
                              <p className="mt-1 text-xl font-bold text-white">
                                {stat.value}
                              </p>
                              <p className="text-xs text-[#13ecb6]">
                                {stat.growth}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                          {[
                            "Novos (12)",
                            "Qualificados (5)",
                            "Negociação (3)",
                          ].map((column, columnIndex) => (
                            <div
                              key={column}
                              className="rounded-lg border border-white/10 bg-black/25 p-3"
                            >
                              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
                                <span
                                  className={[
                                    "text-[10px] font-semibold uppercase tracking-[0.14em]",
                                    columnIndex === 1
                                      ? "text-[#13ecb6]"
                                      : "text-white/60",
                                  ].join(" ")}
                                >
                                  {column}
                                </span>
                                <span
                                  className={[
                                    "h-2 w-2 rounded-full",
                                    columnIndex === 0
                                      ? "bg-blue-500"
                                      : columnIndex === 1
                                      ? "bg-[#13ecb6]"
                                      : "bg-amber-500",
                                  ].join(" ")}
                                />
                              </div>

                              <div className="space-y-2">
                                {[1, 2].map((itemIndex) => (
                                  <div
                                    key={itemIndex}
                                    className="rounded border border-white/10 bg-[#18181B] p-2"
                                  >
                                    <div className="mb-1 h-2 w-2/3 rounded bg-white/15" />
                                    <div className="h-2 w-1/2 rounded bg-white/10" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative border-y border-white/10 bg-[#0A0A0B] py-24">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
          <Container className="relative z-10">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h2 className="h2 text-white">
                Seu tráfego não é o problema. <br />
                <span className="text-[#13ecb6]">Sua estrutura é.</span>
              </h2>
              <p className="lead mt-5 text-white/65">
                A maioria das empresas perde dinheiro não por falta de leads,
                mas pela incapacidade de processá-los com velocidade e
                inteligência.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              {PROBLEMS.map((problem, index) => {
                const Icon = problem.icon;

                return (
                  <Reveal key={problem.title} delay={index * 70}>
                    <GlassCard className="h-full border-white/15 bg-[#121214]/88 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#13ecb6]/35">
                      <div className="mb-5 h-px w-full bg-gradient-to-r from-[#13ecb6]/45 to-transparent" />

                      <div className="mb-5 inline-flex items-center rounded-full border border-[#13ecb6]/30 bg-[#13ecb6]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#13ecb6]">
                        Gargalo Operacional
                      </div>

                      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-[#13ecb6]/25 bg-[#13ecb6]/12 text-[#13ecb6]">
                        <Icon className="h-7 w-7" />
                      </div>

                      <h3 className="mb-3 text-xl font-bold text-white">
                        {problem.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/68">
                        {problem.text}
                      </p>
                    </GlassCard>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section
          id="arquitetura"
          className="relative overflow-hidden py-24 lg:py-28"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#13ecb6]/4 blur-[100px]" />

          <Container className="relative z-10">
            <div className="mb-14 text-center">
              <span className="eyebrow">System View</span>
              <h2 className="h2 mt-3 text-white">
                Arquitetura do Pipeline Inteligente
              </h2>
            </div>

            <div className="relative mt-12">
              <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#13ecb6]/30 to-transparent lg:block" />

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {PIPELINE.map((step, index) => {
                  const IconA = step.iconA;
                  const IconB = step.iconB;

                  return (
                    <Reveal key={step.step} delay={index * 80}>
                      <div className="relative">
                        <GlassCard
                          className={[
                            "relative h-full border-white/10 bg-[#18181B]/85 p-6 transition-all duration-300 hover:border-[#13ecb6]/40",
                            "highlighted" in step && step.highlighted
                              ? "border-[#13ecb6]/35 shadow-[0_0_14px_rgba(19,236,182,0.16)]"
                              : "",
                          ].join(" ")}
                        >
                          <div
                            className={[
                              "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border px-3 py-0.5 font-mono text-[10px] uppercase",
                              "highlighted" in step && step.highlighted
                                ? "border-[#13ecb6]/40 bg-[#0A0A0B] text-[#13ecb6]"
                                : "border-white/15 bg-[#0A0A0B] text-white/55",
                            ].join(" ")}
                          >
                            {step.step}
                          </div>

                          <div className="mb-5 mt-3 flex justify-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-[#13ecb6]">
                              <IconA className="h-5 w-5" />
                            </div>
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-[#13ecb6]">
                              <IconB className="h-5 w-5" />
                            </div>
                          </div>

                          <h3 className="mb-2 text-center text-lg font-bold text-white">
                            {step.title}
                          </h3>
                          <p className="text-center text-sm leading-relaxed text-white/62">
                            {step.text}
                          </p>
                        </GlassCard>

                        {index < PIPELINE.length - 1 ? (
                          <div className="pointer-events-none absolute bottom-[-32px] left-1/2 h-8 w-px -translate-x-1/2 bg-[#13ecb6]/35 lg:hidden" />
                        ) : null}
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        <section id="catalogo" className="border-t border-white/10 py-24">
          <Container className="space-y-14">
            <SectionHeader
              eyebrow="Yamaji Studio"
              title="Catálogo de Infraestruturas"
              description="Soluções prontas e evolutivas para operações comerciais, gestão e conhecimento."
            />

            {(["Comercial", "Gestão", "Conhecimento"] as const).map(
              (category) => {
                const list = groupedSystems[category];
                if (list.length === 0) return null;

                return (
                  <div key={category} className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="h-px flex-1 bg-white/10" />
                      <h3 className="text-[11px] font-black uppercase tracking-[0.24em] text-white/45">
                        {category === "Comercial" && "Operações Comerciais"}
                        {category === "Gestão" && "Organização e Gestão"}
                        {category === "Conhecimento" &&
                          "Plataformas de Conhecimento"}
                      </h3>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      {list.map((item) => (
                        <SystemCard key={item.title} item={item} />
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </Container>
        </section>

        <section
          id="comparar"
          className="border-y border-white/10 bg-[#0A0A0B] py-24"
        >
          <Container className="max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="h2 text-white">Comparativo de Capacidades</h2>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
                Entrega por nível
              </p>
            </div>

            <GlassCard className="overflow-x-auto border-white/10 bg-[#121214]/85 p-0">
              <table className="w-full min-w-[720px] text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.16em] text-white/45">
                      Recurso
                    </th>
                    <th className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.16em] text-white/45">
                      Essencial
                    </th>
                    <th className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.16em] text-[#13ecb6]">
                      Profissional
                    </th>
                    <th className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.16em] text-white/45">
                      Plataforma
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Escalabilidade horizontal", true, true, true],
                    ["API first (headless)", false, true, true],
                    ["Controle de acesso (RBAC)", true, true, true],
                    ["Instância dedicada", false, false, true],
                  ].map((row) => (
                    <tr
                      key={row[0] as string}
                      className="border-b border-white/10 last:border-b-0"
                    >
                      <td className="px-6 py-5 text-sm text-white/65">
                        {row[0]}
                      </td>
                      {[row[1], row[2], row[3]].map((value, idx) => (
                        <td key={idx} className="px-6 py-5">
                          {value ? (
                            <Check className="h-4 w-4 text-[#13ecb6]" />
                          ) : (
                            <Minus className="h-4 w-4 text-white/35" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>
          </Container>
        </section>

        <section id="processo" className="py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="space-y-5">
                <div className="h-1 w-12 bg-[#13ecb6]" />
                <h2 className="h2 text-white">Architecture Lifecycle</h2>
                <p className="text-sm leading-relaxed text-white/55">
                  Um fluxo orientado por clareza técnica para sair do
                  diagnóstico e chegar à operação com base sólida.
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-10 md:grid-cols-3">
                  {[
                    {
                      title: "01. Blueprint",
                      text: "Mapeamento granular dos requisitos, dados críticos e gargalos operacionais.",
                      icon: Layers,
                    },
                    {
                      title: "02. Deployment",
                      text: "Implementação modular em ambiente validado para estabilidade e performance.",
                      icon: Code,
                    },
                    {
                      title: "03. Scale-out",
                      text: "Produção com monitoramento contínuo e evolução orientada por indicadores reais.",
                      icon: ShieldCheck,
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="space-y-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#13ecb6]/35 bg-[#13ecb6]/10 text-[#13ecb6]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#13ecb6]">
                          {item.title}
                        </p>
                        <p className="text-xs leading-relaxed text-white/58">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="px-6 pb-24">
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121214] p-10 text-center md:p-16">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:36px_36px] opacity-25" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(19,236,182,0.12),transparent_60%)]" />

              <div className="relative z-10 mx-auto max-w-3xl space-y-6">
                <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                  Sua operação merece arquitetura de software com padrão Yamaji
                  Studio.
                </h2>
                <p className="text-base text-white/60">
                  Converse com o time e desenhe a infraestrutura ideal para
                  escalar com previsibilidade.
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/aplicar"
                    className="inline-flex items-center justify-center rounded-lg bg-[#13ecb6] px-8 py-3 text-sm font-bold text-[#0A0A0B] transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
                  >
                    Agendar diagnóstico
                  </Link>
                  <a
                    href="#catalogo"
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-[#13ecb6]/45 hover:text-[#13ecb6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
                  >
                    Ver sistemas em operação
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />

      <div className="border-t border-white/10 bg-[#0A0A0B] py-6 text-center text-xs text-white/50">
        © 2026 Yamaji Studio. Todos os direitos reservados.
      </div>

      <FloatingButton />
    </>
  );
}
