// app/servicos/ads/page.tsx
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import {
  Target,
  Megaphone,
  LineChart,
  Gauge,
  LayoutDashboard,
  MousePointerClick,
  ClipboardCheck,
  Settings,
  Rocket,
} from "lucide-react";

export const metadata = {
  title: "Gestão de Ads | Yamaji Studio",
  description:
    "Tráfego pago no padrão Yamaji: estratégia + criativos + landing rápida. Pare de queimar verba — transforme anúncios em leads reais.",
};

const groups = [
  {
    title: "Estratégia de Tráfego",
    subtitle: "Público certo, oferta certa.",
    cards: [
      {
        title: "Pesquisa & ICP",
        tagline: "Descubra quem compra, por quê e onde impactar.",
        Icon: Target,
        items: [
          "Mapeamento de dores",
          "Segmentação inteligente",
          "Estrutura sob objetivo",
        ],
      },
      {
        title: "Arquitetura de Campanhas",
        tagline: "Do zero ao funil completo.",
        Icon: Megaphone,
        items: [
          "Meta & Google",
          "Estrutura fria/quente",
          "Remarketing estratégico",
        ],
      },
      {
        title: "Métricas que importam",
        tagline: "Decisão baseada em dados, não em achismo.",
        Icon: LineChart,
        items: ["CPL/CPA/ROAS", "Eventos GA4", "Relatórios claros"],
      },
    ],
  },
  {
    title: "Criativos & Landing",
    subtitle: "Anúncio bom sem página rápida não converte.",
    cards: [
      {
        title: "Criativos que vendem",
        tagline: "Mensagens que clicam, formatos que engajam.",
        Icon: MousePointerClick,
        items: [
          "Estático, UGC e vídeo curto",
          "Testes A/B contínuos",
          "Headlines que convertem",
        ],
      },
      {
        title: "Landing Rápida",
        tagline: "Web Vitals na régua.",
        Icon: Gauge,
        items: ["Carregamento ~1s", "UX sem fricção", "Form/Whats com UTM"],
      },
      {
        title: "Dashboard & Provas",
        tagline: "Transparência total e segurança.",
        Icon: LayoutDashboard,
        items: [
          "Prints de resultados",
          "Checklist de qualidade",
          "Roadmap de testes",
        ],
      },
    ],
  },
  {
    title: "Otimização & Escala",
    subtitle: "Ajuste fino até virar máquina de leads.",
    cards: [
      {
        title: "Checklist de Qualidade",
        tagline: "Nada passa despercebido.",
        Icon: ClipboardCheck,
        items: ["Pixel validado", "Mensagem coerente", "Oferta alinhada"],
      },
      {
        title: "Otimização Semanal",
        tagline: "Cortar o que não entrega. Escalar o que converte.",
        Icon: Settings,
        items: [
          "Refino de públicos",
          "Ajuste de budget",
          "Iteração de criativos",
        ],
      },
      {
        title: "Plano de Escala",
        tagline: "Do bom para o extraordinário.",
        Icon: Rocket,
        items: ["Novos canais", "Datas sazonais", "Meta + Google combinados"],
      },
    ],
  },
];

const plans = [
  {
    name: "Essencial",
    desc: "Valide oferta e monte funil básico.",
    bullets: [
      "1 rede",
      "1 criativo/semana",
      "Otimização semanal",
      "Relatório quinzenal",
    ],
  },
  {
    name: "Crescimento",
    desc: "Acelere captação e reduza CPL.",
    bullets: [
      "2 redes",
      "3 criativos/semana",
      "Otimização 2x/semana",
      "Relatório quinzenal",
    ],
  },
  {
    name: "Escala",
    desc: "Volume alto com previsibilidade.",
    bullets: [
      "2–3 redes",
      "5 criativos/semana",
      "Otimização contínua",
      "Relatórios + roadmap",
    ],
  },
];

const faq = [
  {
    q: "Qual orçamento mínimo para começar?",
    a: "A partir de R$ 30–80/dia por rede, ajustamos conforme CPL/CPA.",
  },
  {
    q: "Vocês criam os criativos?",
    a: "Sim. Estático, UGC e vídeo curto com testes A/B constantes.",
  },
  {
    q: "Vocês também fazem a landing?",
    a: "Sim. LP rápida (~1s), com formulário/Whats integrado.",
  },
  {
    q: "Em quanto tempo vejo leads?",
    a: "Em campanhas de captura com LP validada, já nos primeiros dias.",
  },
  {
    q: "Como acompanho resultados?",
    a: "Pixel + GA4 + UTMs. Relatórios claros de CTR, CPC, CPL e otimizações.",
  },
];

export default function AdsPage() {
  return (
    <main className="bg-bg text-fg">
      {/* Hero */}
      <section className="mx-auto max-w-container px-6 pt-20 pb-10 text-center">
        <span className="badge uppercase tracking-wide text-[12px]">
          Tráfego Pago • Criativos • Conversão
        </span>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl">
          Tráfego pago que vira <span className="text-accent">clientes</span>,
          não só cliques.
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted">
          Estratégia + criativos + landing rápida. Otimização contínua até virar
          máquina de leads.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="https://wa.me/5571992258349?text=Quero%20rodar%20Ads%20que%20convertem%20com%20a%20Yamaji%20Studio"
            target="_blank"
            className="btn btn-primary"
          >
            🚀 Quero Ads que vendem
          </Link>
          <a href="#planos" className="btn btn-ghost">
            Ver planos
          </a>
        </div>
      </section>

      {/* Grupos */}
      <section className="bg-bg">
        <div className="mx-auto max-w-container px-6 pb-12">
          {groups.map((g) => (
            <div key={g.title} className="mt-12">
              <p className="text-accent uppercase text-xs tracking-widest">
                {g.title}
              </p>
              <h3 className="mt-1 font-display text-xl">{g.subtitle}</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                {g.cards.map((c) => (
                  <ServiceCard key={c.title} {...c} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="bg-bg">
        <div className="mx-auto max-w-container px-6 py-12">
          <p className="text-accent uppercase text-xs tracking-widest">
            Planos
          </p>
          <h3 className="mt-1 font-display text-xl">
            Escolha seu nível de crescimento
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
            {plans.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-white/10 bg-black/40 p-6"
              >
                <h4 className="font-medium">{p.name}</h4>
                <p className="mt-1 text-sm text-muted">{p.desc}</p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/90 mt-1" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`https://wa.me/5571992258349?text=Quero%20o%20plano%20${encodeURIComponent(
                    p.name
                  )}%20de%20Ads%20da%20Yamaji%20Studio`}
                  target="_blank"
                  className="btn btn-primary mt-4 w-full justify-center"
                >
                  🔥 Escolher plano {p.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg">
        <div className="mx-auto max-w-container px-6 py-16">
          <p className="text-accent uppercase text-xs tracking-widest">
            Perguntas frequentes
          </p>
          <h3 className="mt-1 font-display text-xl">Tudo sobre tráfego pago</h3>
          <div className="divide-y divide-white/10 rounded-xl border border-white/10 mt-4">
            {faq.map((f, i) => (
              <details
                key={f.q}
                className={`p-5 ${i % 2 ? "bg-black/30" : "bg-black/20"}`}
              >
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-muted">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="https://wa.me/5571992258349?text=Quero%20acelerar%20meus%20anúncios%20com%20a%20Yamaji%20Studio"
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

      {/* CTA Final */}
      <section className="bg-black/40 border-t border-white/10 py-12 text-center">
        <h3 className="font-display text-2xl sm:text-3xl">
          Pronto para transformar <span className="text-accent">cliques</span>{" "}
          em <span className="text-accent2">clientes?</span>
        </h3>
        <p className="mt-2 text-muted">
          Estratégia, criativos e otimização contínua tráfego pago que gera
          vendas reais.
        </p>
        <Link
          href="https://wa.me/5571992258349?text=Quero%20transformar%20cliques%20em%20clientes%20com%20a%20Yamaji%20Studio"
          target="_blank"
          className="btn btn-primary mt-4"
        >
          🚀 Falar no WhatsApp agora
        </Link>
      </section>
    </main>
  );
}
