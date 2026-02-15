"use client";

import {
  useEffect,
  useMemo,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import Link from "next/link";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import WhatsAppButton from "@/components/e-commerce/WhatsAppButton";
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

type SystemCategory = "Comercial" | "Gestão" | "Conhecimento";
type SystemStatus = "stable" | "beta";

type SystemItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: SystemCategory;
  status: SystemStatus;
  architecture: "MODULAR" | "API READY" | "MICROSERVICES";
  version: string;
  demoRoute: string;
  icon: ComponentType<{ className?: string }>;
};

const SYSTEMS: SystemItem[] = [
  {
    id: "ecommerce",
    title: "E-commerce",
    subtitle: "Operações Comerciais",
    description:
      "Infraestrutura digital para centralizar vendas, gestão de estoque multinível e checkout de alta conversão.",
    category: "Comercial",
    status: "stable",
    architecture: "MODULAR",
    version: "v2.6.0-build",
    demoRoute: "/e-commerce",
    icon: ShoppingCart,
  },
  {
    id: "captacao",
    title: "Sistema de Captação",
    subtitle: "Operações Comerciais",
    description:
      "Pipeline estruturado para aquisição qualificada com rotinas de automação e trilhas de acompanhamento.",
    category: "Comercial",
    status: "beta",
    architecture: "API READY",
    version: "v1.3.0-build",
    demoRoute: "/sistemas/captacao",
    icon: Database,
  },
  {
    id: "crm-clinicas",
    title: "CRM Clínicas",
    subtitle: "Organização & Gestão",
    description:
      "Gestão clínica com visão de agenda, recorrência e relacionamento com padronização operacional.",
    category: "Gestão",
    status: "stable",
    architecture: "MICROSERVICES",
    version: "v2.2.1-build",
    demoRoute: "/sistemas/crm-clinicas",
    icon: Stethoscope,
  },
  {
    id: "base-eleitoral",
    title: "Base Eleitoral",
    subtitle: "Organização & Gestão",
    description:
      "Motor de dados para captação, segmentação territorial e gestão de lideranças em escala.",
    category: "Gestão",
    status: "stable",
    architecture: "API READY",
    version: "v2.5.0-build",
    demoRoute: "/base-eleitoral",
    icon: LineChart,
  },
  {
    id: "educacional",
    title: "Plataforma Educacional",
    subtitle: "Plataformas de Conhecimento",
    description:
      "Ambiente virtual para gestão de conteúdos, trilhas e evolução de aprendizado com métricas.",
    category: "Conhecimento",
    status: "beta",
    architecture: "MODULAR",
    version: "v1.0.0-build",
    demoRoute: "/sistemas/educacional",
    icon: GraduationCap,
  },
];

const SUBNAV = [
  { id: "hero", label: "Visão geral" },
  { id: "catalogo", label: "Sistemas prontos" },
  { id: "comparar", label: "O que entrega" },
  { id: "processo", label: "Como implementamos" },
] as const;

function SubnavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={
        active
          ? "relative px-3 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#13ecb6]"
          : "px-3 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-[#13ecb6]"
      }
    >
      {children}
    </a>
  );
}

function SystemCard({ item }: { item: SystemItem }) {
  const Icon = item.icon;
  const isStable = item.status === "stable";

  return (
    <GlassCard className="group h-full border-white/10 bg-[#121214]/80 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#13ecb6]/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-2xl font-bold text-white">{item.title}</h4>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/45">
            {item.subtitle}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/70">
              STATUS: {isStable ? "STABLE" : "BETA"}
            </span>
            <span className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/70">
              ARQUITETURA: {item.architecture}
            </span>
          </div>
        </div>
        <Icon className="h-9 w-9 text-[#13ecb6]/70" />
      </div>

      <p className="mt-6 text-sm leading-relaxed text-white/60">
        {item.description}
      </p>

      <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
          {item.version}
        </span>
        <div className="flex items-center gap-2">
          <Link
            href={item.demoRoute}
            className="inline-flex items-center gap-1 rounded-md bg-[#13ecb6] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0A0A0B] transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
          >
            Ver demo
          </Link>
          <a
            href="#comparar"
            className="inline-flex items-center gap-1 rounded-md border border-white/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#13ecb6]/35 hover:text-[#13ecb6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
          >
            Ver detalhes <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </GlassCard>
  );
}

export default function SistemasPage() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const targets = SUBNAV.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean) as HTMLElement[];
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const topVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (topVisible?.target?.id) {
          setActiveSection(topVisible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.7],
      }
    );

    targets.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const grouped = useMemo(() => {
    return {
      Comercial: SYSTEMS.filter((s) => s.category === "Comercial"),
      Gestão: SYSTEMS.filter((s) => s.category === "Gestão"),
      Conhecimento: SYSTEMS.filter((s) => s.category === "Conhecimento"),
    };
  }, []);

  return (
    <>
      <NavBar />

      <div className="sticky top-[72px] z-40 border-b border-white/10 bg-[#0A0A0B]/85 backdrop-blur-xl">
        <Container className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2 overflow-x-auto">
            {SUBNAV.map((item) => (
              <SubnavLink
                key={item.id}
                href={`#${item.id}`}
                active={activeSection === item.id}
              >
                {item.label}
              </SubnavLink>
            ))}
          </div>
          <Link
            href="/aplicar"
            className="hidden whitespace-nowrap rounded-md bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0A0A0B] transition hover:bg-[#13ecb6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] md:inline-flex"
          >
            Agendar diagnóstico
          </Link>
        </Container>
      </div>

      <main className="overflow-x-hidden bg-[#0A0A0B] text-white selection:bg-[#13ecb6]/30">
        <header id="hero" className="relative overflow-hidden pb-28 pt-44">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(19,236,182,0.12)_0%,transparent_62%)]" />

          <Container className="relative z-10">
            <div className="grid items-start gap-14 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Badge className="mb-8 border-white/10 bg-white/5 text-white/75">
                  Sistemas Proprietários 2026
                </Badge>
                <h1 className="h1 leading-[1.02]">
                  Arquiteturas Digitais para Operações que{" "}
                  <span className="bg-gradient-to-r from-white via-white to-[#13ecb6] bg-clip-text text-transparent">
                    Precisam Escalar.
                  </span>
                </h1>
                <p className="lead mt-8 max-w-3xl text-white/60">
                  Escolha a infraestrutura ideal para organizar, controlar e
                  expandir sua operação. Sistemas de alta performance
                  construídos sob demanda para verticais estratégicas.
                </p>

                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#catalogo"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#13ecb6] px-8 py-4 text-xs font-black uppercase tracking-[0.18em] text-[#0A0A0B] transition hover:-translate-y-0.5 hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
                  >
                    <Terminal className="h-4 w-4" />
                    Ver sistemas em operação
                  </a>
                  <Link
                    href="/aplicar"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
                  >
                    <Code className="h-4 w-4" />
                    Agendar diagnóstico
                  </Link>
                </div>

                <div className="mt-14 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
                  {[
                    { label: "Uptime SLA", value: "99.9%" },
                    { label: "Architecture", value: "Modular" },
                    { label: "Integrations", value: "API-First" },
                  ].map((kpi) => (
                    <div key={kpi.label}>
                      <div className="text-2xl font-bold">{kpi.value}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                        {kpi.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <GlassCard className="border-white/10 bg-[#121214]/80 p-1 shadow-2xl">
                  <div className="border border-white/10 bg-[#0f1012]/90 p-6">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-red-500/50" />
                        <span className="h-2 w-2 rounded-full bg-amber-500/50" />
                        <span className="h-2 w-2 rounded-full bg-[#13ecb6]/50" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
                        SYS_STATUS: ACTIVE
                      </span>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                      <div className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-white/45">
                        <Terminal className="h-3.5 w-3.5 text-[#13ecb6]" />
                        Runtime Preview
                      </div>
                      <div className="space-y-2 font-mono text-xs text-white/70">
                        <div className="text-[#13ecb6]">
                          $ yamaji deploy --env production
                        </div>
                        <div>{">"} initializing architecture modules...</div>
                        <div>{">"} running health checks... OK</div>
                        <div>{">"} syncing API services... OK</div>
                        <div>{">"} system online at 99.9% uptime</div>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded border border-white/10 bg-white/5 p-3">
                        <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-white/40">
                          <Layers className="h-3.5 w-3.5 text-[#13ecb6]" />
                          Modules
                        </div>
                        <div className="h-1 w-full bg-white/10" />
                        <div className="mt-2 h-1 w-2/3 bg-[#13ecb6]/50" />
                      </div>
                      <div className="rounded border border-white/10 bg-white/5 p-3">
                        <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-white/40">
                          <ShieldCheck className="h-3.5 w-3.5 text-[#13ecb6]" />
                          Security
                        </div>
                        <div className="h-1 w-3/4 bg-white/10" />
                        <div className="mt-2 h-1 w-1/2 bg-white/20" />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </Container>
        </header>

        <section id="catalogo" className="py-28">
          <Container className="space-y-16">
            <SectionHeader
              eyebrow="Sistemas Yamaji"
              title="Sistemas prontos para seu nicho"
              description="Clique, veja a demo e entenda como ficaria no seu negócio."
            />

            {(["Comercial", "Gestão", "Conhecimento"] as const).map((group) => {
              const items = grouped[group];
              if (!items.length) return null;

              return (
                <div key={group} className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/10" />
                    <h3 className="text-[11px] font-black uppercase tracking-[0.26em] text-white/45">
                      {group === "Comercial" && "Operações Comerciais"}
                      {group === "Gestão" && "Organização & Gestão"}
                      {group === "Conhecimento" &&
                        "Plataformas de Conhecimento"}
                    </h3>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {items.map((item) => (
                      <SystemCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              );
            })}
          </Container>
        </section>

        <section
          id="comparar"
          className="border-y border-white/10 bg-[#0A0A0B] py-28"
        >
          <Container className="max-w-5xl">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold">Comparativo de Capacidades</h2>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/40">
                Entrega por nível
              </p>
            </div>

            <GlassCard className="overflow-x-auto border-white/10 bg-[#121214]/75 p-0">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                      Capacidade
                    </th>
                    <th className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                      Essencial
                    </th>
                    <th className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.18em] text-[#13ecb6]">
                      Profissional
                    </th>
                    <th className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                      Plataforma
                    </th>
                  </tr>
                </thead>
                <tbody className="font-mono text-[12px]">
                  {[
                    ["Checkout/pagamentos", "ok", "ok", "ok"],
                    ["Dashboard", "ok", "ok", "ok"],
                    ["Automação", "minus", "ok", "ok"],
                    ["Integrações", "minus", "ok", "ok"],
                    ["Segurança", "ok", "ok", "ok"],
                    ["Suporte", "minus", "ok", "ok"],
                  ].map((row) => (
                    <tr
                      key={row[0]}
                      className="border-b border-white/10 last:border-b-0"
                    >
                      <td className="px-6 py-5 text-white/65">{row[0]}</td>
                      <td className="px-6 py-5">
                        {row[1] === "ok" ? (
                          <Check className="h-4 w-4 text-[#13ecb6]" />
                        ) : (
                          <Minus className="h-4 w-4 text-white/35" />
                        )}
                      </td>
                      <td className="px-6 py-5">
                        {row[2] === "ok" ? (
                          <Check className="h-4 w-4 text-[#13ecb6]" />
                        ) : (
                          <Minus className="h-4 w-4 text-white/35" />
                        )}
                      </td>
                      <td className="px-6 py-5">
                        {row[3] === "ok" ? (
                          <Check className="h-4 w-4 text-[#13ecb6]" />
                        ) : (
                          <Minus className="h-4 w-4 text-white/35" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>
          </Container>
        </section>

        <section id="processo" className="py-32">
          <Container>
            <div className="grid gap-14 lg:grid-cols-3">
              <div className="space-y-5">
                <div className="h-1 w-12 bg-[#13ecb6]" />
                <h3 className="text-3xl font-bold">Como implementamos</h3>
                <p className="text-sm leading-relaxed text-white/45">
                  Nossa abordagem prioriza estabilidade, clareza arquitetural e
                  evolução contínua para cenários enterprise.
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-10 md:grid-cols-3">
                  {[
                    {
                      title: "01. Diagnóstico",
                      text: "Mapeamos contexto, gargalos e metas para definir a melhor arquitetura para sua operação.",
                      icon: Layers,
                    },
                    {
                      title: "02. Protótipo",
                      text: "Construímos o protótipo validável para alinhar fluxo, experiência e prioridades de entrega.",
                      icon: Code,
                    },
                    {
                      title: "03. Implementação + Evolução",
                      text: "Entramos em produção com base sólida e evoluímos continuamente com dados da operação real.",
                      icon: Users,
                    },
                  ].map((step) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.title} className="space-y-3">
                        <div className="inline-flex h-9 w-9 items-center justify-center rounded border border-[#13ecb6]/30 bg-[#13ecb6]/10 text-[#13ecb6]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="text-[11px] font-black uppercase tracking-[0.22em] text-[#13ecb6]">
                          {step.title}
                        </div>
                        <p className="text-xs leading-relaxed text-white/55">
                          {step.text}
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
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#121214] p-10 md:p-16">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-25 transition-opacity group-hover:opacity-35" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(19,236,182,0.16),transparent_58%)]" />

              <div className="relative z-10 space-y-8 text-center">
                <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
                  Sua operação merece uma{" "}
                  <span className="text-[#13ecb6]">
                    infraestrutura de elite.
                  </span>
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-white/45">
                  Converse com nossos arquitetos de software para desenhar a
                  plataforma proprietária do seu negócio.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <WhatsAppButton
                    href="/aplicar"
                    label="AGENDAR DIAGNÓSTICO"
                    trackLabel="SistemasFinal"
                    className="w-full sm:w-auto"
                  />
                  <a
                    href="#catalogo"
                    className="inline-flex w-full items-center justify-center rounded-md border border-white/15 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] sm:w-auto"
                  >
                    Ver documentação
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <div className="border-t border-white/5 bg-[#0A0A0B] py-6 text-center text-xs text-white/45">
        © 2026 Yamaji Studio. Todos os direitos reservados.
      </div>
    </>
  );
}
