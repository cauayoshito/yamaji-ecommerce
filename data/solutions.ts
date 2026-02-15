export type Solution = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  highlights: string[];
};

export const solutions: Solution[] = [
  {
    slug: "sistemas",
    title: "Sistemas & Plataformas Web",
    subtitle: "Produtos digitais próprios para operação e escala.",
    description:
      "Desenvolvemos plataformas sob medida para organizar dados, processos e decisões. Não é apenas um site — é um ativo operacional.",
    bullets: [
      "Dashboards e painéis críticos",
      "Portais autenticados",
      "Integração com dados do negócio",
    ],
    highlights: ["Arquitetura modular", "Segurança by design", "Documentação viva"],
  },
  {
    slug: "automacao",
    title: "Automação & Integrações",
    subtitle: "Fluxos inteligentes conectando WhatsApp, CRM, APIs e IA.",
    description:
      "Automatizamos atendimento, nutrição e rotinas internas com integrações estratégicas para reduzir ruído e acelerar resultados.",
    bullets: [
      "Automação de atendimento",
      "Integração com CRM e ERP",
      "Agentes IA e workflows",
    ],
    highlights: ["Menos fricção", "Escala sem aumentar time", "Observabilidade"],
  },
  {
    slug: "presenca",
    title: "Presença Digital & Conversão",
    subtitle: "Sites, landing pages e experiências editoriais premium.",
    description:
      "Projetamos experiências digitais que contam sua história e convertem com sofisticação — sempre com performance e SEO técnico.",
    bullets: [
      "UX/UI editorial",
      "Performance e SEO",
      "Storytelling estratégico",
    ],
    highlights: ["Core Web Vitals", "Design System", "Conteúdo escalável"],
  },
  {
    slug: "growth",
    title: "Growth & Ads",
    subtitle: "Aquisição, tracking e dados para previsibilidade.",
    description:
      "Campanhas com inteligência de dados, acompanhamento contínuo e foco em CAC, LTV e pipeline real.",
    bullets: [
      "Planejamento de mídia",
      "Tracking e atribuição",
      "Dashboards de performance",
    ],
    highlights: ["Zero achismo", "Dados first-party", "Otimização contínua"],
  },
];
