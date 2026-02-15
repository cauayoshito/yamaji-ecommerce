export type Service = {
  slug: string;
  name: string;
  short: string;
  hero: {
    title: string;
    subtitle: string;
    bullets: string[];
  };
  benefits: string[];
  process: { title: string; desc: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
  faq: { q: string; a: string }[];
  ctaLabel?: string;
};

export const services: Service[] = [
  {
    slug: "web-design-e-dev",
    name: "Web Design & Desenvolvimento",
    short: "Sites rápidos, bonitos e que convertem.",
    hero: {
      title: "Sites que impressionam e performam",
      subtitle:
        "Da estratégia ao código: UX, UI e desenvolvimento com foco em conversão, SEO e velocidade.",
      bullets: [
        "Mobile-first",
        "SEO técnico",
        "Acessibilidade",
        "CMS opcional",
      ],
    },
    benefits: [
      "Interface autoral e coerente com a marca",
      "Carregamento rápido (Core Web Vitals)",
      "Arquitetura pensada para conversão",
      "SEO técnico desde o início",
    ],
    process: [
      { title: "Descoberta", desc: "Diagnóstico de negócio, público e metas." },
      {
        title: "Arquitetura",
        desc: "Sitemap e wireframes focados em clareza.",
      },
      { title: "UI Design", desc: "Layout autoral e consistente." },
      { title: "Desenvolvimento", desc: "Código limpo, rápido e escalável." },
      {
        title: "Lançamento",
        desc: "Checklist, monitoramento e suporte inicial.",
      },
    ],
    testimonial: {
      quote:
        "O site ficou leve, rápido e a conversão melhorou já na primeira semana.",
      author: "Dieisson Vasques",
      role: "Personal Trainer",
    },
    faq: [
      {
        q: "Em quanto tempo fica pronto?",
        a: "Em média 2 a 5 semanas, dependendo do escopo.",
      },
      {
        q: "Vocês entregam com CMS?",
        a: "Sim. Podemos integrar CMS (ex.: Headless) se for necessário.",
      },
    ],
    ctaLabel: "Quero meu site",
  },
  {
    slug: "identidade-visual",
    name: "Identidade Visual",
    short: "Logo, paleta, tipografia e sistema visual completo.",
    hero: {
      title: "Marca forte, clara e memorável",
      subtitle:
        "Criamos um sistema visual que organiza a comunicação da sua marca e eleva a percepção de valor.",
      bullets: [
        "Logo & variações",
        "Guia de uso",
        "Aplicações",
        "Entrega editável",
      ],
    },
    benefits: [
      "Identidade coerente e escalável",
      "Maior reconhecimento e lembrança",
      "Aplicações pensadas pro digital",
      "Arquivos e manual organizados",
    ],
    process: [
      {
        title: "Imersão",
        desc: "Entendimento de contexto, público e posicionamento.",
      },
      { title: "Direção", desc: "Exploração visual e referências." },
      { title: "Criação", desc: "Logo, paleta, tipografia e linguagem." },
      { title: "Guia", desc: "Manual de marca com exemplos de aplicação." },
      { title: "Entrega", desc: "Arquivos finais + sessão de handoff." },
    ],
    faq: [
      {
        q: "Vocês refazem logos existentes?",
        a: "Sim, quando faz sentido para alinhamento estratégico.",
      },
      {
        q: "Recebo arquivo editável?",
        a: "Sim, entregamos arquivos organizados e abertos.",
      },
    ],
    ctaLabel: "Quero minha identidade",
  },
  {
    slug: "seo-e-conteudo",
    name: "SEO & Conteúdo",
    short: "Estratégia de busca + conteúdo que ranqueia e converte.",
    hero: {
      title: "Apareça onde o seu cliente procura",
      subtitle:
        "On-page, técnico e conteúdo. Implementamos SEO real, mensurável e alinhado ao funil.",
      bullets: ["Pesquisa de palavras-chave", "On-page", "Técnico", "Conteúdo"],
    },
    benefits: [
      "Mais tráfego orgânico qualificado",
      "Páginas otimizadas tecnicamente",
      "Conteúdo que responde intenções",
      "Medição e melhoria contínua",
    ],
    process: [
      { title: "Diagnóstico", desc: "Auditoria técnica e de conteúdo." },
      { title: "Planejamento", desc: "Mapa de conteúdo e priorização." },
      { title: "Implementação", desc: "On-page, performance e estrutura." },
      { title: "Conteúdo", desc: "Pautas e produção (quando contratado)." },
      { title: "Evolução", desc: "Medições e ajustes contínuos." },
    ],
    faq: [
      {
        q: "Quando aparecem os resultados?",
        a: "SEO é composto; 30–90 dias para ganhos iniciais.",
      },
      {
        q: "Vocês produzem conteúdo?",
        a: "Opcional: podemos escrever ou orientar seu time.",
      },
    ],
    ctaLabel: "Quero crescer no Google",
  },
];
