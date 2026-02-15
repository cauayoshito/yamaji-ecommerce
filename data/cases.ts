export type CaseItem = {
  slug: string;
  title: string;
  segment: string;
  type: "Sistema" | "Automação" | "Presença" | "Growth";
  summary: string;
  problem: string;
  solution: string;
  deliverables: string[];
  stack: string[];
  metrics: string[];
  cover: string;
};

export const cases: CaseItem[] = [
  {
    slug: "dieisson-vasques",
    title: "Dieisson Vasques",
    segment: "Educação e saúde",
    type: "Sistema",
    summary:
      "Transformação do atendimento presencial em uma plataforma digital escalável.",
    problem:
      "O negócio dependia de agenda física e perdia escala no crescimento.",
    solution:
      "Estruturamos uma plataforma com conteúdo contínuo, acesso por assinatura e jornadas de engajamento.",
    deliverables: [
      "Plataforma de conteúdo sob assinatura",
      "Área de membros com jornadas",
      "Fluxo claro de aquisição e retenção",
      "Pontos de contato integrados",
    ],
    stack: [
      "Arquitetura de produto digital",
      "Experiência de assinatura",
      "Funil contínuo de engajamento",
      "Gestão de comunidade",
    ],
    metrics: [
      "Receita recorrente habilitada",
      "Maior retenção de alunos",
      "Nova fonte de receita ativa",
    ],
    cover: "/images/dieisson.png",
  },
  {
    slug: "plano-de-saude-bahia",
    title: "Plano de Saúde Bahia (Noely)",
    segment: "Planos de saúde",
    type: "Presença",
    summary:
      "Organização da demanda com páginas segmentadas para múltiplos serviços.",
    problem:
      "A procura era alta, mas o caminho até o plano certo era confuso.",
    solution:
      "Criamos páginas específicas por necessidade, conectadas à aquisição paga e contato imediato.",
    deliverables: [
      "Páginas segmentadas por serviço",
      "Fluxo direto para contato",
      "Mensagem clara para cada perfil",
      "Mapeamento de demanda por oferta",
    ],
    stack: [
      "Estratégia de segmentação",
      "Mensagens por perfil",
      "Conversão por necessidade",
      "Otimização de demanda",
    ],
    metrics: [
      "Leads mais qualificados",
      "Maior taxa de contato",
      "Redução de ruído comercial",
    ],
    cover: "/images/noely.png",
  },
  {
    slug: "proprium-imoveis",
    title: "Proprium Imóveis",
    segment: "Imobiliária",
    type: "Presença",
    summary:
      "Presença digital estruturada para consolidar portfólio e contato.",
    problem:
      "Informações dispersas diminuíam confiança e dificultavam decisões.",
    solution:
      "Unificamos portfólio, serviços e contato em um ambiente claro e confiável.",
    deliverables: [
      "Portfólio organizado",
      "Navegação direta por interesse",
      "Contato visível e imediato",
      "Posicionamento reforçado",
    ],
    stack: [
      "Arquitetura de informação",
      "Narrativa de credibilidade",
      "Fluxo claro de contato",
      "Posicionamento digital",
    ],
    metrics: [
      "Mais confiança do público",
      "Tempo de decisão reduzido",
      "Contato direto facilitado",
    ],
    cover: "/images/proprium.png",
  },
  {
    slug: "potter-team",
    title: "Potter Team",
    segment: "Esportes e performance",
    type: "Presença",
    summary:
      "Site de autoridade para apresentar equipe, serviços e posicionamento.",
    problem:
      "A marca precisava ser percebida como referência e gerar novos contatos.",
    solution:
      "Estruturamos apresentação da equipe, serviços e prova de credibilidade.",
    deliverables: [
      "Apresentação clara da equipe",
      "Serviços com proposta objetiva",
      "Contato fácil para novos alunos",
      "Posicionamento esportivo reforçado",
    ],
    stack: [
      "Branding de autoridade",
      "Conteúdo de posicionamento",
      "Prova social objetiva",
      "Estratégia de contato",
    ],
    metrics: [
      "Marca mais reconhecida",
      "Mais contatos qualificados",
      "Posicionamento fortalecido",
    ],
    cover: "/images/potter.png",
  },
];
