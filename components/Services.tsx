import ServiceCard from "./ServiceCard";
import {
  Gauge,
  Rocket,
  LineChart,
  Layers,
  PenTool,
  LayoutDashboard,
  Zap,
  Search,
  Blocks,
} from "lucide-react";

const blocks = [
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
          "Boas práticas de acessibilidade",
        ],
      },
      {
        title: "Otimização de performance",
        tagline: "Web Vitals, lazy-loading e boas práticas técnicas.",
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
        items: [
          "Design tokens",
          "Biblioteca de componentes",
          "Padronização visual",
        ],
      },
      {
        title: "Tom & voz",
        tagline: "Microcopy que direciona a ação.",
        Icon: Zap,
        items: ["Headlines fortes", "CTAs persuasivos", "Padrões de mensagens"],
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
        items: ["Schema/JSON-LD", "Meta e Open Graph", "Arquitetura de links"],
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

export default function Services() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-container px-6 py-16">
        <h2 className="text-center font-display text-3xl md:text-4xl text-fg">
          Nossos Serviços
        </h2>

        {/* grupos */}
        <div className="mt-10 space-y-10">
          {blocks.map((b) => (
            <div key={b.title}>
              <div className="mb-4">
                <p className="text-accent uppercase text-xs tracking-widest">
                  {b.title}
                </p>
                <h3 className="mt-1 font-display text-xl text-fg">
                  {b.subtitle}
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {b.cards.map((c) => (
                  <ServiceCard key={c.title} {...c} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
