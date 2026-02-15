import type { Metadata } from "next";
<<<<<<< HEAD
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionHeader from "@/components/ui/SectionHeader";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import { APPLY_ROUTE } from "@/lib/routes";

export const metadata: Metadata = {
  title: "CRM para Clinicas",
  description:
    "Sistema para clinicas organizarem relacao com pacientes, agenda e recorrencia com controle operacional.",
};

=======
import Link from "next/link";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { APPLY_ROUTE } from "@/lib/routes";
import {
  ArrowRight,
  Cable,
  CalendarX,
  ChevronLeft,
  ChevronRight,
  CloudCheck,
  EyeOff,
  Fingerprint,
  GitBranch,
  LineChart,
  LockKeyhole,
  Mail,
  PlayCircle,
  Shield,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CRM Clínicas - Yamaji Studio",
  description:
    "CRM inteligente para clínicas com auditoria completa, RBAC e automação de workflow para operação de alta performance.",
};

const RISK_CARDS = [
  {
    title: "Agendamento Manual",
    level: "Risco Operacional: Crítico",
    text: "Depender de planilhas ou memória resulta em 30% de no-show não recuperado e horários vagos invisíveis.",
    probability: "Probabilidade de falha: Alta",
    bar: "75%",
    icon: CalendarX,
  },
  {
    title: "Silos de Dados",
    level: "Risco Operacional: Moderado",
    text: "Informações financeiras desconectadas do prontuário geram inconsistências e perda de faturamento.",
    probability: "Impacto Financeiro: Médio-Alto",
    bar: "45%",
    icon: EyeOff,
  },
  {
    title: "Acesso Irrestrito",
    level: "Risco Compliance: Crítico",
    text: "Sem RBAC, dados sensíveis de pacientes ficam expostos a funcionários não autorizados.",
    probability: "Risco Jurídico: Extremo",
    bar: "90%",
    icon: LockKeyhole,
  },
] as const;

const MODULES = [
  {
    code: "SEC-01",
    title: "Audit Trails",
    text: "Registro imutável de cada clique e visualização de dados.",
    bullets: ["IP Logging", "User Behavior"],
    icon: Fingerprint,
    featured: false,
  },
  {
    code: "BI-04",
    title: "Advanced Analytics",
    text: "Dashboards preditivos de receita e ocupação.",
    bullets: ["Revenue Forecast", "Churn Alert"],
    icon: LineChart,
    featured: true,
  },
  {
    code: "CRM-02",
    title: "Patient Journey",
    text: "Pipeline visual desde o lead até o pós-consulta.",
    bullets: ["Auto Follow-up", "NPS Integration"],
    icon: Mail,
    featured: false,
  },
  {
    code: "SYS-09",
    title: "Smart Workflows",
    text: "Automação de tarefas repetitivas e confirmações.",
    bullets: ["WhatsApp API", "Zapier Ready"],
    icon: GitBranch,
    featured: false,
  },
] as const;

const TECH_FEATURES = [
  {
    title: "Daily Backups & Disaster Recovery",
    text: "Seus dados replicados em 3 zonas geográficas distintas automaticamente.",
    icon: CloudCheck,
  },
  {
    title: "API Aberta",
    text: "Conecte seu ERP financeiro ou ferramenta de marketing sem gambiarras.",
    icon: Cable,
  },
  {
    title: "ISO 27001 Ready",
    text: "Padrões internacionais de segurança da informação aplicados nativamente.",
    icon: Shield,
  },
] as const;

>>>>>>> 858ba39 (update: aplicar page + novos serviços)
export default function CrmClinicasPage() {
  return (
    <>
      <NavBar />
<<<<<<< HEAD
      <main className="bg-bg text-fg">
        <section className="section bg-[#0A0A0B]">
          <Container className="space-y-6">
            <SectionHeader
              eyebrow="Sistema"
              title="CRM para Clinicas"
              description="Arquitetura para organizar atendimento, retorno e evolucao da carteira de pacientes."
            />
            <PrimaryButton href={APPLY_ROUTE} label="Solicitar apresentacao" />
          </Container>
        </section>

        <section className="section bg-[#050607]">
          <Container className="space-y-8">
            <SectionHeader
              eyebrow="Problema"
              title="Agenda cheia nao significa operacao organizada"
              description="Sem controle de relacionamento, a clinica perde recorrencia e previsibilidade de ocupacao."
            />
            <ul className="grid gap-4 md:grid-cols-2">
              {[
                "Retornos sem acompanhamento",
                "Historico disperso por canal",
                "Equipe sem visao da jornada",
                "Baixa recorrencia de pacientes",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="section bg-[#0B0F14]">
          <Container className="space-y-8">
            <SectionHeader
              eyebrow="Entrega"
              title="O que entrega"
              description="Uma estrutura unica para controlar agenda, relacionamento e continuidade do atendimento."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Cadastro unico de pacientes",
                "Visao da jornada por etapa",
                "Lembretes de retorno e revisao",
                "Painel de ocupacao e recorrencia",
                "Segmentacao por especialidade",
                "Padrao de comunicacao da equipe",
              ].map((item) => (
                <GlassCard key={item} className="h-full py-5">
                  <p className="text-sm text-fg">{item}</p>
                </GlassCard>
              ))}
            </div>
          </Container>
        </section>

        <section className="section bg-[#0A0A0B]">
          <Container className="space-y-10">
            <SectionHeader
              eyebrow="Fluxo"
              title="Como funciona"
              description="Um ciclo recorrente para manter relacao ativa e agenda previsivel."
            />
            <div className="grid gap-5 md:grid-cols-4">
              {[
                "Entrada",
                "Classificacao",
                "Acompanhamento",
                "Recorrencia",
              ].map((step, index) => (
                <GlassCard key={step} className="h-full space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg font-semibold">{step}</h3>
                  <p className="text-sm text-muted">
                    Fluxo operacional para manter consistencia de atendimento.
                  </p>
                </GlassCard>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-24 bg-[#0A0A0B]">
          <Container>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
              <h2 className="text-2xl font-semibold md:text-4xl">
                Solicitar apresentacao
              </h2>
              <p className="mt-3 text-sm text-muted">
                Avalie como esta estrutura pode evoluir a operacao da sua clinica.
              </p>
              <div className="mt-6">
                <PrimaryButton href={APPLY_ROUTE} label="Solicitar apresentacao" />
=======

      <main className="relative overflow-x-hidden bg-[#0A0A0B] text-white selection:bg-[#13ecb6]/30 selection:text-black">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.12]" />

        <section className="relative z-10 overflow-hidden pb-20 pt-32 lg:pb-32 lg:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(19,236,182,0.14)_0%,rgba(10,10,11,0)_70%)] opacity-80 blur-3xl" />

          <Container>
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div className="space-y-8">
                <Badge className="w-fit border-[#13ecb6]/30 bg-[#13ecb6]/5 text-[#13ecb6]">
                  <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-[#13ecb6]" />
                  Enterprise Ready v2.4
                </Badge>

                <h1 className="h1 leading-[1.08]">
                  Pare de perder pacientes por{" "}
                  <span className="text-[#13ecb6] [text-shadow:0_0_20px_rgba(19,236,182,0.25)]">
                    falta de processo.
                  </span>
                </h1>

                <p className="lead max-w-2xl text-white/65">
                  O primeiro CRM inteligente desenhado para clínicas de alta
                  performance. Auditoria completa, controle de acesso RBAC e
                  automação de workflow em uma única plataforma.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/crm-clinicas/demo"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#13ecb6] px-8 py-4 text-base font-bold text-black shadow-[0_0_20px_rgba(19,236,182,0.34)] transition-all hover:bg-[#13ecb6]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
                  >
                    Ver demo interativa
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/5 hover:text-[#13ecb6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
                  >
                    <PlayCircle className="h-4 w-4 text-white/70" />
                    Tour de 2 min
                  </a>
                </div>

                <div className="flex items-center gap-6 border-t border-white/10 pt-6 text-sm text-white/50">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#13ecb6]" />
                    HIPAA Compliant
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-[#13ecb6]" />
                    99.99% Uptime
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute -inset-1 rounded-xl bg-gradient-to-r from-[#13ecb6]/35 to-blue-500/20 opacity-20 blur" />
                <GlassCard className="relative overflow-hidden border-white/15 bg-[#0c0c0e] p-2">
                  <div className="mb-0 flex items-center gap-2 border-b border-white/10 bg-black/35 px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500/50" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                      <div className="h-3 w-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="mx-auto rounded bg-black/50 px-3 py-1 font-mono text-xs text-white/40">
                      yamaji.studio/dashboard/audit-log
                    </div>
                  </div>

                  <div className="space-y-6 bg-[#0c0c0e] p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Audit Trail & Security
                        </h3>
                        <p className="text-xs text-white/45">
                          Real-time access monitoring
                        </p>
                      </div>
                      <Badge className="border-[#13ecb6]/25 bg-[#13ecb6]/10 text-[#13ecb6]">
                        <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-[#13ecb6]" />
                        Live Monitoring
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Active Sessions", value: "1,204", accent: false },
                        { label: "RBAC Policies", value: "Active", accent: true },
                        { label: "Security Score", value: "98/100", accent: false },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className={
                            item.accent
                              ? "rounded border border-white/10 bg-[#13ecb6]/8 p-3"
                              : "rounded border border-white/10 bg-[#121214] p-3"
                          }
                        >
                          <p className="text-[10px] uppercase text-white/45">{item.label}</p>
                          <p
                            className={
                              item.accent
                                ? "mt-1 font-mono text-xl text-[#13ecb6]"
                                : "mt-1 font-mono text-xl text-white"
                            }
                          >
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="overflow-hidden rounded border border-white/10 bg-[#121214]">
                      <div className="grid grid-cols-4 gap-4 border-b border-white/10 bg-black/25 p-3 text-[10px] uppercase text-white/40">
                        <div>User</div>
                        <div>Action</div>
                        <div>Module</div>
                        <div className="text-right">Timestamp</div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 border-b border-white/10 p-3 text-xs text-white/75">
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-[8px] text-blue-400">
                            JD
                          </div>
                          Dr. Silva
                        </div>
                        <div className="text-[#13ecb6]">View Record</div>
                        <div>Patient #8821</div>
                        <div className="text-right font-mono text-white/45">10:42 AM</div>
                      </div>

                      <div className="relative grid grid-cols-4 gap-4 border-b border-white/10 bg-[#13ecb6]/7 p-3 text-xs text-white/80">
                        <div className="absolute inset-y-0 left-0 w-0.5 bg-[#13ecb6] shadow-[0_0_10px_rgba(19,236,182,0.4)]" />
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/20 text-[8px] text-purple-400">
                            MA
                          </div>
                          Admin
                        </div>
                        <div className="text-white">Modify Access</div>
                        <div>Settings / RBAC</div>
                        <div className="text-right font-mono text-white/45">10:41 AM</div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 p-3 text-xs text-white/75">
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-500/20 text-[8px] text-zinc-400">
                            RK
                          </div>
                          Recepção
                        </div>
                        <div className="text-amber-400">Create Appt</div>
                        <div>Calendar</div>
                        <div className="text-right font-mono text-white/45">10:38 AM</div>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <div className="absolute -right-4 top-16 hidden rounded-lg border border-white/10 bg-[#121214]/90 px-4 py-3 shadow-xl backdrop-blur md:block">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-emerald-500/15 p-1.5">
                      <Shield className="h-4 w-4 text-[#13ecb6]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-white/45">Security Status</p>
                      <p className="text-xs font-bold text-white">Encrypted & Secure</p>
                    </div>
                  </div>
                </div>
>>>>>>> 858ba39 (update: aplicar page + novos serviços)
              </div>
            </div>
          </Container>
        </section>
<<<<<<< HEAD
      </main>
      <Footer />
=======

        <section className="relative z-10 border-t border-white/10 bg-[#0A0A0B]/70 py-20">
          <Container>
            <SectionHeader
              align="center"
              title="Sua clínica está vazando receita?"
              description="Processos manuais criam buracos na sua operação. Identificamos os 3 maiores riscos operacionais que clínicas de alto padrão enfrentam."
              className="mx-auto mb-16 max-w-3xl"
            />
            <div className="grid gap-6 md:grid-cols-3">
              {RISK_CARDS.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Reveal key={card.title} delay={index * 80}>
                    <GlassCard className="relative h-full border-white/10 bg-[#0f0f10] p-8 transition-all duration-300 hover:border-red-500/50">
                      <span className="absolute right-4 top-4 rounded border border-red-500/30 bg-red-500/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-red-400">
                        {card.level}
                      </span>
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-900/20">
                        <Icon className="h-6 w-6 text-red-400" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-white">{card.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-white/65">{card.text}</p>
                      <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                        <div className="h-full bg-red-500" style={{ width: card.bar }} />
                      </div>
                      <p className="mt-2 text-right text-[10px] text-white/45">{card.probability}</p>
                    </GlassCard>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="relative z-10 py-24">
          <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#13ecb6]/5 blur-[120px]" />
          <Container>
            <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <span className="eyebrow">Yamaji Ecosystem</span>
                <h2 className="h2 mt-2">Controle total. Sem complexidade.</h2>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/5"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#13ecb6]/50 text-[#13ecb6] transition-colors hover:bg-[#13ecb6]/10"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {MODULES.map((module, index) => {
                const Icon = module.icon;
                return (
                  <Reveal key={module.title} delay={index * 70}>
                    <GlassCard
                      className={
                        module.featured
                          ? "h-full border-[#13ecb6]/20 bg-[#13ecb6]/5 p-6"
                          : "h-full border-white/10 bg-[#121214]/70 p-6"
                      }
                    >
                      <div className="mb-6 flex items-start justify-between">
                        <div
                          className={
                            module.featured
                              ? "rounded bg-[#13ecb6] p-2 text-black shadow-[0_0_15px_rgba(19,236,182,0.35)]"
                              : "rounded bg-[#13ecb6]/10 p-2 text-[#13ecb6]"
                          }
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white/45">
                          {module.code}
                        </span>
                      </div>
                      <h4 className="mb-2 text-lg font-bold">{module.title}</h4>
                      <p className="mb-4 text-sm text-white/60">{module.text}</p>
                      <ul className="space-y-2 font-mono text-xs text-white/50">
                        {module.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-[#13ecb6]" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="border-t border-white/10 py-20">
          <Container>
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <GlassCard className="relative order-2 overflow-hidden border-white/10 bg-[#101113] p-8 lg:order-1">
                <div className="pointer-events-none absolute -inset-6 bg-[radial-gradient(circle_at_30%_20%,rgba(19,236,182,0.16),transparent_50%)]" />
                <div className="relative z-10 space-y-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Nodes", value: "128" },
                      { label: "Sync", value: "99.97%" },
                      { label: "Events", value: "2.4M" },
                    ].map((kpi) => (
                      <div key={kpi.label} className="rounded border border-white/10 bg-black/25 p-3">
                        <p className="text-[10px] uppercase text-white/45">{kpi.label}</p>
                        <p className="mt-1 text-lg font-mono text-white">{kpi.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/25 p-4">
                    <div className="mb-3 flex items-end gap-2">
                      {[20, 35, 30, 45, 60, 52, 70, 64, 76, 88].map((h, idx) => (
                        <div
                          key={`${h}-${idx}`}
                          className="w-full rounded-t bg-[#13ecb6]/40"
                          style={{ height: `${h}px` }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/45">
                          Server Response
                        </p>
                        <p className="font-mono text-2xl font-bold text-white">
                          24ms{" "}
                          <span className="text-sm font-normal text-[#13ecb6]">(-12% avg)</span>
                        </p>
                      </div>
                      <Workflow className="h-6 w-6 text-[#13ecb6]" />
                    </div>
                  </div>
                </div>
              </GlassCard>

              <div className="order-1 lg:order-2">
                <h2 className="h2 mb-6">Arquitetura robusta para escala.</h2>
                <p className="mb-8 text-lg text-white/60">
                  Não somos apenas um software, somos a infraestrutura de dados
                  da sua clínica. Construído sobre tecnologia cloud-native para
                  garantir estabilidade absoluta.
                </p>
                <div className="space-y-6">
                  {TECH_FEATURES.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div key={feature.title} className="flex gap-4">
                        <div className="mt-1 text-[#13ecb6]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">{feature.title}</h4>
                          <p className="mt-1 text-sm text-white/50">{feature.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative overflow-hidden py-24">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#13ecb6]/12 blur-[100px]" />
          <Container className="relative z-10 max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Pronto para elevar o padrão?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-white/60">
              Agende uma demonstração técnica com nossos engenheiros de solução
              e veja como a Yamaji pode blindar sua operação.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={APPLY_ROUTE}
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#13ecb6] px-8 py-4 text-lg font-bold text-black shadow-[0_0_25px_rgba(19,236,182,0.34)] transition-all hover:bg-[#13ecb6]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] sm:w-auto"
              >
                Agendar demonstração
              </Link>
              <Link
                href={APPLY_ROUTE}
                className="inline-flex w-full items-center justify-center rounded-lg border border-white/20 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] sm:w-auto"
              >
                Falar com vendas
              </Link>
            </div>
            <p className="mt-8 text-sm text-white/45">
              Setup em menos de 7 dias • Migração de dados inclusa • Treinamento
              on-site
            </p>
          </Container>
        </section>
      </main>

      <Footer />
      <div className="border-t border-white/10 bg-[#0A0A0B] py-6 text-center text-xs text-white/50">
        © 2026 Yamaji Studio. Todos os direitos reservados.
      </div>
>>>>>>> 858ba39 (update: aplicar page + novos serviços)
    </>
  );
}
