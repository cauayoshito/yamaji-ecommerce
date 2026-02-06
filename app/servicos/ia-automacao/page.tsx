// app/ia-automacao/page.tsx
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import IntegrationsStrip from "@/components/IntegrationsStrip";
import StickyWhats from "@/components/StickyWhats";
import Link from "next/link";
import {
  Bot,
  MessageSquare,
  Users,
  ClipboardCheck,
  BarChart3,
  RefreshCcw,
  Zap,
} from "lucide-react";

<Header />;

// ===== META
export const metadata = {
  title: "Automação com IA | Yamaji Studio",
  description:
    "Equipe de 5 funcionários 24/7: IA que aumenta leads, economiza tempo e fecha mais negócios. Atendimento, qualificação e follow-up automáticos — integrados ao seu site e anúncios.",
};

// ===== HERO (copy killer)
function HeroIA_Killer() {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 -top-[22%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[420px] w-[420px] rounded-full bg-accent2/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-container px-6 pt-24 pb-12 text-center md:pt-28">
        <span className="badge uppercase tracking-wide text-[12px]">
          automação • atendimento • follow-up
        </span>

        <h1 className="mt-6 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-fg via-fg to-fg/70 bg-clip-text text-transparent">
            Equipe de 5 funcionários 24/7:
          </span>
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-accent via-accent2 to-fg bg-clip-text text-transparent">
            IA que aumenta leads, economiza tempo e fecha mais negócios.
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
          Atendimento, qualificação e follow-up automáticos{" "}
          <span className="text-fg">integrados ao seu site e anúncios</span>.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="https://wa.me/5571992258349?text=Quero%20uma%20IA%2024/7%20respondendo%20meus%20clientes%20e%20fazendo%20follow-up%20com%20a%20Yamaji%20Studio"
            target="_blank"
            className="btn btn-primary"
          >
            🚀 Começar agora no WhatsApp
          </Link>
          <a href="#blueprints" className="btn btn-secondary">
            Ver blueprints de automação
          </a>
        </div>

        {/* Mini social proof */}
        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-muted">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Resposta média &lt; 1 min (95%)
          </div>
          <div className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden />
          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-accent2" />
            Recupera ~30% de leads frios em 72h
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== DATA (groups com números reais/simulados)
const groups = [
  {
    title: "Atendimento Inteligente",
    subtitle: "IA sempre online no seu WhatsApp e site.",
    cards: [
      {
        title: "Respostas instantâneas",
        tagline: "Nunca mais perder um lead por demora.",
        Icon: MessageSquare,
        items: [
          "Disponível 24/7",
          "Taxa de resposta: 95% em 1 min",
          "Tom de voz treinado",
        ],
      },
      {
        title: "Chatbot personalizado",
        tagline: "Funis por etapa para qualificar melhor.",
        Icon: Bot,
        items: [
          "Perguntas-chave",
          "Integração com CRM",
          "Coleta de dados útil",
        ],
      },
      {
        title: "Multi-canais",
        tagline: "Atenda onde seu cliente está.",
        Icon: Users,
        items: ["WhatsApp", "Instagram DM", "Site/Formulário"],
      },
    ],
  },
  {
    title: "Follow-up & Nutrição",
    subtitle: "IA que lembra, cobra e fecha.",
    cards: [
      {
        title: "Sequências automáticas",
        tagline: "1h • 24h • 72h — sem esquecer ninguém.",
        Icon: RefreshCcw,
        items: [
          "Recupera ~30% de leads frios em 72h",
          "Mensagens personalizadas (nome/oferta)",
          "Objeções tratadas",
        ],
      },
      {
        title: "Propostas instantâneas",
        tagline: "PDF ou mensagem de oferta em 1 clique.",
        Icon: ClipboardCheck,
        items: ["Orçamento rápido", "Modelos por nicho", "Envio automático"],
      },
      {
        title: "Ads → IA plugado",
        tagline: "Lead cai da campanha direto na automação.",
        Icon: Zap,
        items: ["Meta/Google", "Webhook n8n", "Atendimento imediato"],
      },
    ],
  },
  {
    title: "Análise & Relatórios",
    subtitle: "Saiba exatamente o que a IA está gerando.",
    cards: [
      {
        title: "Dashboard em tempo real",
        tagline: "Sem enrolação: o que importa para vender.",
        Icon: BarChart3,
        items: ["Taxa de resposta", "Agendamentos", "Conversões/semana"],
      },
      {
        title: "Feedback contínuo",
        tagline: "IA evolui com cada conversa.",
        Icon: Bot,
        items: ["Scripts refinados", "Melhoria semanal", "Testes de mensagem"],
      },
    ],
  },
];

const faq = [
  {
    q: "A IA substitui meu time?",
    a: "Não. Ela cuida das tarefas repetitivas e da primeira resposta; você foca em fechar negócios.",
  },
  {
    q: "Funciona só no WhatsApp?",
    a: "Não. Integramos com Instagram DM, site, formulários e CRMs via n8n.",
  },
  {
    q: "Precisa de treinamento?",
    a: "Sim. Treinamos com seu tom de voz, scripts e objeções do seu nicho.",
  },
  {
    q: "Quanto tempo para ativar?",
    a: "Em até 7 dias você pode ter a IA respondendo clientes.",
  },
  {
    q: "Como vejo resultados?",
    a: "Relatórios claros com respostas, agendamentos e conversões semanais.",
  },
];

export default function IAPage() {
  return (
    <main className="bg-bg text-fg">
      {/* HERO novo */}
      <HeroIA_Killer />

      {/* Faixa de integrações (opcional) */}
      <IntegrationsStrip />

      {/* BLUEPRINTS */}
      <section id="blueprints" className="bg-bg">
        <div className="mx-auto max-w-container px-6 pb-6">
          {groups.map((g) => (
            <div key={g.title} className="mt-10">
              <div className="mb-4">
                <p className="text-accent uppercase text-xs tracking-widest">
                  {g.title}
                </p>
                <h3 className="mt-1 font-display text-xl">{g.subtitle}</h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.cards.map((c) => (
                  <ServiceCard key={c.title} {...c} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="bg-bg">
        <div className="mx-auto max-w-container px-6 py-10">
          <div className="rounded-xl border border-white/10 bg-black/30 p-6 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-accent uppercase text-xs tracking-widest">
                Case real
              </p>
              <h3 className="mt-1 font-display text-xl">
                Restaurante local → agenda cheia em 14 dias
              </h3>
              <p className="mt-2 max-w-xl text-sm text-muted">
                IA no Whats + qualificação automática + follow-ups 24/7.
                <br />
                <span className="text-fg">+38% de pedidos no mês 1</span> e
                tempo médio de resposta &lt; 1 min.
              </p>
            </div>
            <Link href="/#cases" className="btn btn-primary mt-4 md:mt-0">
              Ver estudo completo
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ + JSON-LD */}
      <section className="bg-bg">
        <div className="mx-auto max-w-container px-6 py-16">
          <div className="mb-4">
            <p className="text-accent uppercase text-xs tracking-widest">
              Perguntas frequentes
            </p>
            <h3 className="mt-1 font-display text-xl">
              Tudo sobre IA e automação
            </h3>
          </div>

          <div className="divide-y divide-white/10 rounded-xl border border-white/10">
            {faq.map((f, i) => (
              <details
                key={f.q}
                className={`p-5 ${i % 2 ? "bg-black/30" : "bg-black/20"}`}
              >
                <summary className="cursor-pointer list-none font-medium">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm text-muted">{f.a}</p>
              </details>
            ))}
          </div>

          {/* JSON-LD (SEO) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faq.map((it) => ({
                  "@type": "Question",
                  name: it.q,
                  acceptedAnswer: { "@type": "Answer", text: it.a },
                })),
              }),
            }}
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="https://wa.me/5571992258349?text=Quero%20uma%20IA%2024/7%20no%20meu%20comercial%20com%20a%20Yamaji%20Studio"
              target="_blank"
              className="btn btn-primary"
            >
              ⚡ Falar no WhatsApp
            </Link>
            <a href="/#cases" className="btn btn-ghost">
              Ver cases
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-bg pb-16">
        <div className="mx-auto max-w-container px-6">
          <div className="rounded-xl border border-white/10 bg-black/40 p-8 text-center">
            <h3 className="font-display text-2xl md:text-3xl">
              Quer uma equipe 24/7 trabalhando por você?
            </h3>
            <p className="mt-2 text-muted">
              Atendimento, qualificação e follow-up automáticos integrados ao
              seu site e aos anúncios.
            </p>
            <Link
              href="https://wa.me/5571992258349?text=Quero%20implementar%20IA%20no%20meu%20neg%C3%B3cio%20com%20a%20Yamaji%20Studio"
              target="_blank"
              className="btn btn-primary mt-5"
            >
              🚀 Começar hoje
            </Link>
          </div>
        </div>
      </section>

      {/* Botão Whats (mobile) */}
      <StickyWhats
        href="https://wa.me/5571992258349?text=Quero%20uma%20IA%2024/7%20no%20meu%20comercial%20com%20a%20Yamaji%20Studio"
        label="Falar no WhatsApp"
      />
    </main>
  );
}
