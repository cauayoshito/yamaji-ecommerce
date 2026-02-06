// app/servicos/sites/page.tsx
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import IntegrationsStrip from "@/components/IntegrationsStrip";
import {
  LayoutDashboard,
  Gauge,
  LineChart,
  PenTool,
  Layers,
  Zap,
  Search,
  Blocks,
  Rocket,
} from "lucide-react";

export const metadata = {
  title: "Sites de Alta Conversão | Yamaji Studio",
  description:
    "Sites rápidos, bonitos e que vendem. Performance, UX e SEO na régua — com métricas e otimização contínua.",
  alternates: { canonical: "https://yamajistudio.com.br/servicos/sites" },
};

const groups = [
  {
    title: "Websites & Performance",
    subtitle: "Sites que performam.",
    cards: [
      {
        title: "Website sob medida",
        tagline: "Interface limpa, rápida e preparada para converter.",
        Icon: LayoutDashboard,
        items: [
          "UX clara e responsiva",
          "Código de alto nível",
          "Acessibilidade",
        ],
      },
      {
        title: "Otimização de performance",
        tagline: "Web Vitals na régua e boas práticas técnicas.",
        Icon: Gauge,
        items: ["Lighthouse 90+", "Imagens otimizadas", "Bundle & cache"],
      },
      {
        title: "Lançamento e métricas",
        tagline: "Setup de analytics, eventos e acompanhamento.",
        Icon: LineChart,
        items: ["GA4 + eventos", "Hotjar", "Relatórios quinzenais"],
      },
    ],
  },
  {
    title: "Branding & Identidade",
    subtitle: "Marcas com personalidade.",
    cards: [
      {
        title: "Identidade",
        tagline: "Logo, paleta, tipografia e guidelines.",
        Icon: PenTool,
        items: ["Manual de marca", "Componentes UI", "Aplicações"],
      },
      {
        title: "Sistema de UI",
        tagline: "Componentes reutilizáveis e escaláveis.",
        Icon: Layers,
        items: ["Design tokens", "Biblioteca de componentes", "Padronização"],
      },
      {
        title: "Tom & voz",
        tagline: "Microcopy que direciona a ação.",
        Icon: Zap,
        items: ["Headlines fortes", "CTAs persuasivos", "Padrões de mensagem"],
      },
    ],
  },
  {
    title: "SEO & Conteúdo",
    subtitle: "Encontrabilidade que traz tráfego.",
    cards: [
      {
        title: "SEO técnico",
        tagline: "Sitemap, meta tags e estrutura sólida.",
        Icon: Search,
        items: ["Schema/JSON-LD", "Meta & Open Graph", "Arquitetura de links"],
      },
      {
        title: "Conteúdo estratégico",
        tagline: "Pautas, copy e arquitetura da informação.",
        Icon: Blocks,
        items: [
          "Calendário editorial",
          "Briefings prontos",
          "Artigos otimizados",
        ],
      },
      {
        title: "Growth contínuo",
        tagline: "Testes A/B e melhorias mensais.",
        Icon: Rocket,
        items: ["Hipóteses de CRO", "Heatmaps", "Iterações de UX"],
      },
    ],
  },
];

const faq = [
  {
    q: "Em quanto tempo um site fica pronto?",
    a: "Depende do escopo. Projetos lean levam de 2 a 4 semanas; sites maiores, de 6 a 10 semanas.",
  },
  {
    q: "Vocês cuidam de domínio e hospedagem?",
    a: "Sim. Podemos orientar ou gerenciar tudo para você, incluindo SSL e CDN.",
  },
  {
    q: "O site vem com SEO?",
    a: "Sim. Implementamos SEO técnico (meta, OG, schema) e estrutura para conteúdos ranquearem.",
  },
  {
    q: "Posso pedir alterações depois de lançar?",
    a: "Claro. Trabalhamos com pacotes de melhoria contínua (CRO, SEO, conteúdo).",
  },
];

export default function SitesPage() {
  return (
    <main className="bg-bg text-fg">
      {/* HERO - específico de sites */}
      <section className="relative overflow-hidden bg-bg">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 -top-[22%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
          <div className="absolute -right-[10%] -bottom-[10%] h-[420px] w-[420px] rounded-full bg-accent2/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-container px-6 pt-24 pb-12 text-center md:pt-28">
          <span className="badge uppercase tracking-wide text-[12px]">
            performance • ux • seo
          </span>
          <h1 className="mt-6 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-fg via-fg to-fg/70 bg-clip-text text-transparent">
              Sites que impressionam, conectam
            </span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent via-accent2 to-fg bg-clip-text text-transparent">
              &nbsp;e geram resultados reais.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
            Identidade forte, UX clara e SEO que ranqueia. Sem enrolação —{" "}
            <span className="text-fg">foco em vendas</span>.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="https://wa.me/5571992258349?text=Quero%20um%20site%20r%C3%A1pido%20que%20converta%20com%20a%20Yamaji%20Studio&utm_source=site&utm_medium=cta&utm_campaign=sites"
              target="_blank"
              className="btn btn-primary"
            >
              🚀 Quero meu site performando
            </Link>
            <a href="/#projetos" className="btn btn-secondary">
              Ver projetos
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Lighthouse 90+ (Core Web Vitals)
            </div>
            <div className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden />
            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-2 w-2 rounded-full bg-accent2" />
              GA4 + eventos prontos
            </div>
          </div>
        </div>
      </section>

      <IntegrationsStrip />

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

      <section className="bg-bg">
        <div className="mx-auto max-w-container px-6 py-10">
          <div className="rounded-xl border border-white/10 bg-black/30 p-6 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-accent uppercase text-xs tracking-widest">
                Case real
              </p>
              <h3 className="mt-1 font-display text-xl">
                E-commerce local → +27% de vendas em 30 dias
              </h3>
              <p className="mt-2 max-w-xl text-sm text-muted">
                Site rápido + UX clara + eventos GA4. Queda no abandono e{" "}
                <span className="text-fg">mais conversões</span>.
              </p>
            </div>
            <Link href="/#cases" className="btn btn-primary mt-4 md:mt-0">
              Ver estudo completo
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-container px-6 py-16">
          <p className="text-accent uppercase text-xs tracking-widest">
            Perguntas frequentes
          </p>
          <h3 className="mt-1 font-display text-xl">
            Tudo sobre seu novo site
          </h3>

          <div className="mt-4 divide-y divide-white/10 rounded-xl border border-white/10">
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
              href="https://wa.me/5571992258349?text=Quero%20um%20site%20performando%20com%20a%20Yamaji%20Studio&utm_source=site&utm_medium=cta&utm_campaign=sites"
              target="_blank"
              className="btn btn-primary"
            >
              ⚡ Falar no WhatsApp
            </Link>
            <a href="/#projetos" className="btn btn-ghost">
              Ver projetos
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black/40 border-t border-white/10 py-12 text-center">
        <h3 className="font-display text-2xl sm:text-3xl">
          Pronto para lançar um site <span className="text-accent">rápido</span>{" "}
          e <span className="text-accent2">que converte</span>?
        </h3>
        <p className="mt-2 text-muted">
          Performance, UX e SEO na régua com métricas e otimização contínua.
        </p>
        <Link
          href="https://wa.me/5571992258349?text=Quero%20lan%C3%A7ar%20meu%20site%20com%20a%20Yamaji%20Studio&utm_source=site&utm_medium=cta&utm_campaign=sites"
          target="_blank"
          className="btn btn-primary mt-4"
        >
          🚀 Falar no WhatsApp agora
        </Link>
      </section>
    </main>
  );
}
