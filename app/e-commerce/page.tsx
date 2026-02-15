"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import CountUp from "@/components/ui/CountUp";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/e-commerce/WhatsAppButton";
import { BarChart3, LayoutPanelTop, UserRound, Bell } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571992258349";
const HERO_IMAGE = "/images/ecommerce.jpeg";

const SUBNAV_LINKS = [
  { id: "hero", label: "Hero" },
  { id: "comparacao", label: "Comparacao" },
  { id: "camadas", label: "Camadas" },
  { id: "integracoes", label: "Integracoes" },
  { id: "planos", label: "Planos" },
  { id: "demo", label: "Demo" },
] as const;

type PlanKey = "essencial" | "profissional" | "plataforma";

type PricingPlan = {
  key: PlanKey;
  label: string;
  monthly: number;
  annualEquivalent: number;
  activationNote: string;
  annualNote: string;
  features: string[];
  cta: string;
  featured: boolean;
};

const PRICING: PricingPlan[] = [
  {
    key: "essencial",
    label: "ESSENCIAL",
    monthly: 297,
    annualEquivalent: 252,
    activationNote: "+ R$ 497 taxa de ativacao",
    annualNote: "+ R$ 497 taxa de ativacao",
    features: [
      "Vitrine digital otimizada",
      "Checkout com PIX e cartao",
      "Painel basico de pedidos",
      "1 usuario administrador",
      "Suporte padrao",
    ],
    cta: "Comecar agora",
    featured: false,
  },
  {
    key: "profissional",
    label: "PROFISSIONAL",
    monthly: 597,
    annualEquivalent: 507,
    activationNote: "Ativacao inclusa",
    annualNote: "Ativacao inclusa",
    features: [
      "Tudo do Essencial",
      "Automacao de Operacao",
      "Area do cliente",
      "Relatorios estrategicos",
      "Integracao com WhatsApp",
      "Suporte prioritario",
    ],
    cta: "Agendar demonstracao",
    featured: true,
  },
  {
    key: "plataforma",
    label: "PLATAFORMA",
    monthly: 1290,
    annualEquivalent: 1096,
    activationNote: "Onboarding estrategico incluso",
    annualNote: "Onboarding estrategico incluso",
    features: [
      "Tudo do Profissional",
      "Estrutura avancada",
      "Integracoes via API",
      "Ajustes personalizados",
      "Acompanhamento mensal",
      "Prioridade tecnica",
    ],
    cta: "Falar com especialista",
    featured: false,
  },
];

type FaqItem = { q: string; a: string };

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Em quanto tempo fica pronto?",
    a: "Apos o kickoff e envio dos materiais, o prazo medio para colocar a operacao no ar varia conforme escopo e integracoes.",
  },
  {
    q: "Preciso ter CNPJ?",
    a: "Para operar com gateways e emissao fiscal de forma profissional, recomendamos CNPJ ativo. Podemos orientar os requisitos no diagnostico.",
  },
  {
    q: "Quais formas de pagamento?",
    a: "A plataforma suporta PIX e cartao, com fluxo de checkout otimizado para reduzir friccao e aumentar conversao.",
  },
  {
    q: "Consigo integrar com WhatsApp e anuncios?",
    a: "Sim. E possivel integrar WhatsApp e conectar ferramentas de midia e analytics para acompanhar aquisicao e conversao.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. O modelo e SaaS recorrente com cancelamento simples, sem fidelidade obrigatoria.",
  },
  {
    q: "O que inclui a ativacao/onboarding?",
    a: "Inclui configuracao inicial da operacao, alinhamento de fluxo, parametros da loja e orientacoes para uso da plataforma.",
  },
];

type CompareRow = readonly [
  label: string,
  essencial: boolean,
  profissional: boolean,
  plataforma: boolean
];

const COMPARE_ROWS: CompareRow[] = [
  ["Vitrine + checkout", true, true, true],
  ["Pagamentos (PIX/cartao)", true, true, true],
  ["Area do cliente", false, true, true],
  ["Relatorios", false, true, true],
  ["Integracoes via API", false, false, true],
  ["Suporte prioritario", false, true, true],
  ["Onboarding", false, true, true],
];

function YesNo({ value }: { value: boolean }) {
  return (
    <span className={value ? "text-accent font-semibold" : "text-slate-600"}>
      {value ? "OK" : "-"}
    </span>
  );
}

export default function CommercePage() {
  const [activeSection, setActiveSection] =
    useState<(typeof SUBNAV_LINKS)[number]["id"]>("hero");
  const [annualBilling, setAnnualBilling] = useState(false);

  useEffect(() => {
    const nodes = SUBNAV_LINKS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => Boolean(el));

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(
            visible[0].target.id as (typeof SUBNAV_LINKS)[number]["id"]
          );
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.3, 0.6],
      }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const pricingView = useMemo(() => {
    return PRICING.map((plan) => ({
      ...plan,
      priceLine: annualBilling
        ? ` R$ ${plan.annualEquivalent}/mes`
        : `R$ ${plan.monthly}/mes`,
      note: annualBilling ? plan.annualNote : plan.activationNote,
    }));
  }, [annualBilling]);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-50 rounded bg-black px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
      >
        Ir para o conteudo
      </a>

      <NavBar />

      <div className="sticky top-[56px] z-40 border-y border-white/10 bg-black/45 backdrop-blur-xl md:top-[72px]">
        <Container>
          <nav
            aria-label="Navegacao das secoes"
            className="flex items-center gap-2 overflow-x-auto py-3"
          >
            {SUBNAV_LINKS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={
                  activeSection === item.id
                    ? "rounded-full border border-accent/35 bg-accent/15 px-3 py-1.5 text-xs font-semibold text-accent"
                    : "rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-accent/30 hover:text-accent"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      <main
        id="conteudo"
        className="overflow-x-hidden bg-bg text-fg [--header-h:56px] md:[--header-h:72px]"
      >
        {/* HERO */}
        <section
          id="hero"
          data-section="e-commerce-hero"
          className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-white/10 bg-[#0A0A0B] pb-16 pt-24 md:pb-24 md:pt-32"
        >
          <BackgroundGlow />

          <Container className="relative z-10 min-w-0">
            <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
              <div className="min-w-0 space-y-7 text-center md:space-y-8 lg:text-left">
                <Reveal>
                  <Badge className="border-accent/20 bg-accent/10 text-accent">
                    Plataforma Yamaji de Vendas Online
                  </Badge>
                </Reveal>

                <Reveal delay={80}>
                  <div className="space-y-4">
                    <h1 className="h1 text-balance leading-[1.02]">
                      Plataforma de Vendas Online para lojas que querem escalar.
                    </h1>
                    <p className="lead max-w-2xl text-pretty leading-relaxed lg:max-w-xl">
                      Vitrine + Checkout + Automacao + Painel em tempo real.
                      Infraestrutura digital para sua loja operar 24/7.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                      {[
                        "Checkout rapido",
                        "PIX e Cartao",
                        "Painel em tempo real",
                        "Integracoes",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={160}>
                  <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
                    <div className="flex flex-col items-stretch gap-2 sm:items-start">
                      <WhatsAppButton
                        href={WHATSAPP_LINK}
                        label="AGENDAR DEMONSTRACAO"
                        trackLabel="Hero"
                        className="w-full sm:w-auto"
                      />
                      <p className="text-xs text-muted">
                        Sem compromisso - 15 min - Resposta no WhatsApp
                      </p>
                    </div>

                    <Link
                      href="/e-commerce/demo/storefront"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-fg transition-all duration-200 hover:border-accent/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] sm:w-auto"
                    >
                      <span>Ver demo (30s)</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        -&gt;
                      </span>
                    </Link>
                  </div>
                </Reveal>

                <Reveal delay={240}>
                  <div className="grid grid-cols-1 gap-3 text-left text-sm text-muted sm:grid-cols-3 sm:gap-4">
                    {[
                      { value: 24, suffix: "h", label: "Vitrine ativa" },
                      { value: 2, suffix: " canais", label: "Loja + online" },
                      { value: 1, suffix: " operacao", label: "Unificada" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <div className="text-xl font-semibold text-fg">
                          <CountUp to={stat.value} />
                          {stat.suffix}
                        </div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal delay={120}>
                <div className="relative min-w-0 w-full">
                  <div className="absolute -inset-10 -z-10 rounded-full bg-accent/20 blur-[120px]" />

                  <GlassCard className="relative overflow-hidden p-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent2/20" />
                    <div className="relative">
                      <Image
                        src={HERO_IMAGE}
                        alt="Visao da plataforma de vendas online Yamaji"
                        width={1200}
                        height={1200}
                        priority
                        className={[
                          "w-full object-cover",
                          "max-h-[520px] md:max-h-[620px] lg:max-h-none",
                          "aspect-[4/3] sm:aspect-[16/10] lg:aspect-square",
                        ].join(" ")}
                      />
                    </div>
                  </GlassCard>

                  <div className="pointer-events-none absolute -bottom-6 -left-6 hidden md:block">
                    <GlassCard className="w-48 animate-yamajiFloat">
                      <p className="text-xs text-muted">Pedidos processados</p>
                      <p className="mt-2 text-lg font-semibold">+3.200</p>
                    </GlassCard>
                  </div>

                  <div className="pointer-events-none absolute -right-6 top-10 hidden md:block">
                    <GlassCard className="w-44 animate-yamajiDrift">
                      <p className="text-xs text-muted">Operacao estavel</p>
                      <p className="mt-2 text-lg font-semibold">99,9%</p>
                    </GlassCard>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* SOCIAL PROOF */}
        <section className="border-b border-white/10 bg-[#0B0F14] py-8">
          <Container className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "+47 lojas ativadas",
                "+3.200 pedidos processados",
                "99,9% operacao estavel",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium text-fg"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-center text-[11px] text-muted">
              Numeros ilustrativos no prototipo (substituiveis por dados reais).
            </p>
            <p className="text-center text-[11px] text-slate-400">
              Boas praticas LGPD - Logs - Backups
            </p>
          </Container>
        </section>

        {/* ARQUITETURA */}
        <section className="section border-b border-white/10 bg-[#0A0A0B]">
          <Container className="space-y-10">
            <SectionHeader
              eyebrow="Arquitetura da Plataforma"
              title="Fluxo operacional do seu canal digital"
              description="Vitrine - Checkout - Pagamentos - Operacao - Inteligencia"
              align="center"
            />

            <div className="grid gap-4 md:grid-cols-5">
              {[
                {
                  title: "Vitrine",
                  text: "Catalogo responsivo com estrutura para descoberta.",
                },
                {
                  title: "Checkout",
                  text: "Fechamento rapido com menos friccao.",
                },
                {
                  title: "Pagamentos",
                  text: "PIX e cartao com confirmacao segura.",
                },
                {
                  title: "Operacao",
                  text: "Pedidos, estoque e rotina centralizados.",
                },
                {
                  title: "Inteligencia",
                  text: "Metricas para decisao de growth.",
                },
              ].map((node) => (
                <GlassCard key={node.title} className="h-full p-5">
                  <p className="text-sm font-semibold text-accent">
                    {node.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {node.text}
                  </p>
                </GlassCard>
              ))}
            </div>

            <p className="text-center text-sm font-medium text-accent/90">
              Nao e um site. E infraestrutura operacional.
            </p>
          </Container>
        </section>

        <div className="px-6 py-2">
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* COMPARACAO */}
        <section
          id="comparacao"
          data-section="e-commerce-comparacao"
          className="section border-b border-white/10 bg-[#0B0F14]"
        >
          <Container className="space-y-10 md:space-y-14">
            <SectionHeader
              eyebrow="Comparacao"
              title="Loja fisica vs Loja online com Yamaji"
              description="Dois modelos. Um vende quando a porta abre. O outro vende todos os dias."
              align="center"
            />

            <div className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <GlassCard className="h-full">
                  <h3 className="text-xl font-semibold">Loja fisica</h3>
                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
                    <li>Vendas limitadas ao horario de funcionamento.</li>
                    <li>Fluxo depende de pessoas passando na porta.</li>
                    <li>Custos fixos altos e pouca previsibilidade.</li>
                    <li>Estoque parado vira custo, nao caixa.</li>
                    <li>Escala exige novo ponto e mais equipe.</li>
                  </ul>
                </GlassCard>
              </Reveal>

              <Reveal delay={120}>
                <GlassCard className="h-full border-accent/30">
                  <h3 className="text-xl font-semibold text-fg">
                    Plataforma Yamaji
                  </h3>
                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
                    <li>Vitrine aberta 24h com jornada de compra continua.</li>
                    <li>Checkout otimizado com pagamento simplificado.</li>
                    <li>Campanhas direcionadas com visao de desempenho.</li>
                    <li>Operacao centralizada para escalar com controle.</li>
                    <li>Expansao sem depender de novo ponto fisico.</li>
                  </ul>
                </GlassCard>
              </Reveal>
            </div>
          </Container>
        </section>

        <div className="px-6 py-2">
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* CAMADAS */}
        <section
          id="camadas"
          className="section border-b border-white/10 bg-[#0A0A0B]"
        >
          <Container className="space-y-10">
            <SectionHeader
              eyebrow="Camadas do Sistema"
              title="Estrutura em quatro camadas para vender com previsibilidade"
              description="Cada camada resolve um gargalo e entrega clareza operacional."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Camada 1: Captacao",
                  bullets: [
                    "SEO tecnico",
                    "Vitrine organizada",
                    "Entrada qualificada",
                  ],
                  result: "Resultado: trafego com intencao de compra.",
                },
                {
                  title: "Camada 2: Conversao",
                  bullets: [
                    "Checkout direto",
                    "PIX e cartao",
                    "Menos abandono",
                  ],
                  result: "Resultado: mais pedidos por visitante.",
                },
                {
                  title: "Camada 3: Operacao",
                  bullets: [
                    "Gestao de pedidos",
                    "Controle de estoque",
                    "Fluxos padronizados",
                  ],
                  result: "Resultado: rotina previsivel e escalavel.",
                },
                {
                  title: "Camada 4: Inteligencia",
                  bullets: [
                    "Relatorios",
                    "Metricas acionaveis",
                    "Leitura de performance",
                  ],
                  result: "Resultado: decisoes com base em dados.",
                },
              ].map((layer, index) => (
                <Reveal key={layer.title} delay={index * 70}>
                  <GlassCard className="h-full p-6">
                    <h3 className="text-lg font-semibold">{layer.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted">
                      {layer.bullets.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                      {layer.result}
                    </p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <div className="px-6 py-2">
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* BENEFICIOS */}
        <section
          id="beneficios"
          data-section="e-commerce-beneficios"
          className="section border-b border-white/10 bg-[#0A0A0B]"
        >
          <Container className="space-y-10 md:space-y-14">
            <SectionHeader
              eyebrow="Beneficios"
              title="Por que donos de loja fisica escolhem o online"
              description="Resultados reais no caixa, no tempo e na tranquilidade."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Fim do dia morto",
                "Venda 24h",
                "Estoque parado vira dinheiro",
                "Cresca sem outro ponto",
                "Margem maior",
                "Seguranca para a familia",
              ].map((item, index) => (
                <Reveal key={item} delay={index * 60}>
                  <GlassCard className="h-full">
                    <h3 className="text-lg font-semibold">{item}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      Estrutura pensada para vender enquanto voce toca a loja.
                    </p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <div className="px-6 py-2">
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* INTEGRACOES */}
        <section
          id="integracoes"
          className="section border-b border-white/10 bg-[#0B0F14]"
        >
          <Container className="space-y-8">
            <SectionHeader
              eyebrow="Integracoes"
              title="Conecte marketing, pagamento e operacao"
              description="Integracoes pensadas para growth e operacao."
              align="center"
            />
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "PIX",
                "Cartao",
                "WhatsApp",
                "Google Analytics",
                "Meta Ads",
                "Webhooks/API",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </Container>
        </section>

        <div className="px-6 py-2">
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* SEGURANCA */}
        <section className="section border-b border-white/10 bg-[#0A0A0B]">
          <Container className="space-y-8">
            <SectionHeader
              eyebrow="Seguranca e Confiabilidade"
              title="Base operacional com controles essenciais"
              description="Estrutura orientada por boas praticas para manter o negocio estavel."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Controle de acesso",
                  text: "Permissoes por perfil para reduzir risco operacional.",
                },
                {
                  title: "Backups",
                  text: "Rotinas de copia de dados para continuidade do negocio.",
                },
                {
                  title: "Logs de operacao",
                  text: "Registro de eventos para auditoria e suporte.",
                },
                {
                  title: "Boas praticas LGPD",
                  text: "Fluxos orientados para tratamento responsavel de dados.",
                },
              ].map((item) => (
                <GlassCard key={item.title} className="h-full p-5">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </GlassCard>
              ))}
            </div>

            <p className="text-center text-xs text-slate-500">
              Checklist de seguranca disponivel sob solicitacao.
            </p>
          </Container>
        </section>

        <div className="px-6 py-2">
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* SISTEMA COMPLETO */}
        <section
          id="sistema-completo"
          data-section="e-commerce-sistema"
          className="section border-b border-white/10 bg-[#0B0F14]"
        >
          <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-10">
              <SectionHeader
                eyebrow="Sistema completo"
                title="Voce nao apenas vende. Voce acompanha tudo em tempo real."
                description="Dashboard e paineis para ver vendas, pedidos e clientes sem planilhas e sem confusao."
              />

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Dashboard de Vendas",
                    text: "Faturamento, pedidos, itens mais vendidos e desempenho diario.",
                    icon: BarChart3,
                  },
                  {
                    title: "Painel do Dono",
                    text: "Gestao de produtos, estoque, precos e pedidos em um so lugar.",
                    icon: LayoutPanelTop,
                  },
                  {
                    title: "Area do Cliente",
                    text: "Acompanhamento de pedidos, historico e status de entrega.",
                    icon: UserRound,
                  },
                  {
                    title: "Notificacoes Instantaneas",
                    text: "Alertas no celular a cada venda e alteracao de status.",
                    icon: Bell,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} delay={index * 60}>
                      <GlassCard className="h-full">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-accent">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-lg font-semibold">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </GlassCard>
                    </Reveal>
                  );
                })}
              </div>

              <p className="text-sm text-muted">
                Voce nao fica no escuro. Voce enxerga o negocio funcionando.
              </p>
            </div>
          </Container>
        </section>

        <div className="px-6 py-2">
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* PLANOS */}
        <section
          id="planos"
          className="relative border-b border-white/10 bg-[#0A0A0B] py-24"
        >
          <Container className="space-y-10">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="border-accent/20 bg-accent/10 text-accent">
                PLANOS DA PLATAFORMA
              </Badge>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                Escolha o nivel de operacao ideal para sua fase
              </h2>

              <p className="mt-3 text-sm text-slate-400 md:text-base">
                Estrutura modular para comecar com foco e evoluir com seguranca.
              </p>

              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => setAnnualBilling(false)}
                  className={
                    annualBilling
                      ? "rounded-full px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:text-white"
                      : "rounded-full bg-accent px-4 py-2 text-xs font-semibold text-[#0A0A0B]"
                  }
                >
                  Mensal
                </button>
                <button
                  type="button"
                  onClick={() => setAnnualBilling(true)}
                  className={
                    annualBilling
                      ? "rounded-full bg-accent px-4 py-2 text-xs font-semibold text-[#0A0A0B]"
                      : "rounded-full px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:text-white"
                  }
                >
                  Anual
                </button>
              </div>

              <p className="mt-2 text-xs text-accent">
                No anual, voce economiza 15%.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {pricingView.map((plan) => (
                <GlassCard
                  key={plan.key}
                  className={
                    plan.featured
                      ? "relative h-full overflow-hidden border-accent/45 bg-white/5 p-6 shadow-[0_0_50px_-25px_rgba(19,236,182,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 lg:scale-[1.03]"
                      : "h-full border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                  }
                >
                  {plan.featured ? (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/15 via-transparent to-transparent" />
                  ) : null}

                  <div className="relative z-10">
                    {plan.featured ? (
                      <span className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
                        RECOMENDADO
                      </span>
                    ) : null}

                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">
                      {plan.label}
                    </p>
                    <p className="mt-3 text-3xl font-bold text-white">
                      {plan.priceLine}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">{plan.note}</p>

                    <ul className="mt-5 space-y-2 text-sm text-slate-300">
                      {plan.features.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#13ecb6]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={WHATSAPP_LINK}
                      className={
                        plan.featured
                          ? "mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#13ecb6] px-4 py-3 text-sm font-bold text-[#0A0A0B] transition-all duration-200 hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
                          : "mt-6 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-[#13ecb6]/45 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
                      }
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </GlassCard>
              ))}
            </div>

            <GlassCard className="overflow-hidden p-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                  <thead className="bg-white/5">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 text-left text-slate-300">
                        Comparar planos
                      </th>
                      <th className="px-4 py-3 text-center text-slate-300">
                        Essencial
                      </th>
                      <th className="px-4 py-3 text-center text-slate-300">
                        Profissional
                      </th>
                      <th className="px-4 py-3 text-center text-slate-300">
                        Plataforma
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE_ROWS.map((row, idx) => (
                      <tr
                        key={`feature-${idx}`}
                        className="border-b border-white/10 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-slate-300">{row[0]}</td>
                        <td className="px-4 py-3 text-center text-lg">
                          <YesNo value={row[1]} />
                        </td>
                        <td className="px-4 py-3 text-center text-lg">
                          <YesNo value={row[2]} />
                        </td>
                        <td className="px-4 py-3 text-center text-lg">
                          <YesNo value={row[3]} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>

            <p className="text-center text-xs text-slate-500">
              Sem fidelidade obrigatoria. Cancelamento simples.
            </p>
          </Container>
        </section>

        <div className="px-6 py-2">
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* DEMO */}
        <section
          id="demo"
          data-section="e-commerce-demo"
          className="section border-b border-white/10 bg-[#0A0A0B]"
        >
          <Container className="space-y-10 md:space-y-14">
            <SectionHeader
              eyebrow="Demo"
              title="Veja a Demo Completa"
              description="Fluxo real da plataforma: cliente acompanha pedidos, dono gerencia operacao e voce visualiza o dashboard."
            />

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/e-commerce/demo/storefront"
                className="btn btn-primary w-full justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] sm:w-auto"
              >
                Abrir Demo
              </Link>

              <Link
                href="/e-commerce/demo/dashboard"
                className="btn btn-secondary w-full justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] sm:w-auto"
              >
                Ver Dashboard
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Storefront", href: "/e-commerce/demo/storefront" },
                { title: "Area do Cliente", href: "/e-commerce/demo/cliente" },
                { title: "Painel do Dono", href: "/e-commerce/demo/dono" },
                { title: "Dashboard", href: "/e-commerce/demo/dashboard" },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 60}>
                  <GlassCard className="h-full">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted">
                      Visual premium com fluxo completo do sistema.
                    </p>
                    <Link
                      href={item.href}
                      className="mt-6 inline-flex text-sm font-semibold text-accent transition-colors hover:text-accent2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
                    >
                      Abrir -&gt;
                    </Link>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <div className="px-6 py-2">
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* FAQ */}
        <section className="section border-b border-white/10 bg-[#0A0A0B]">
          <Container className="space-y-10">
            <SectionHeader
              eyebrow="FAQ"
              title="Perguntas frequentes"
              description="Respostas rapidas para duvidas comuns antes da ativacao."
            />
            <div className="space-y-3">
              {FAQ_ITEMS.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <summary className="cursor-pointer list-none pr-6 text-sm font-semibold text-white outline-none">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA FINAL */}
        <section
          id="cta-final"
          data-section="e-commerce-cta"
          className="bg-[#0A0A0B] pb-24 pt-8"
        >
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 md:p-16">
              <BackgroundGlow />
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                  Ative sua plataforma e comece a vender 24/7.
                </h2>
                <p className="text-sm text-muted md:text-lg">
                  Estruture seu canal digital com checkout, operacao e metricas
                  em uma unica plataforma.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <WhatsAppButton
                    href={WHATSAPP_LINK}
                    label="AGENDAR DEMONSTRACAO"
                    trackLabel="FinalCTA"
                    className="w-full sm:w-auto"
                  />
                  <Link
                    href={WHATSAPP_LINK}
                    className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-fg transition-all duration-200 hover:border-accent/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] sm:w-auto"
                  >
                    Falar no WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
