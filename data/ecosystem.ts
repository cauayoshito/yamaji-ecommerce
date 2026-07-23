export type SegmentSlug = "studio" | "eats" | "fit" | "legal";

export type EcosystemSolution = {
  slug: SegmentSlug;
  name: string;
  shortName: string;
  audience: string;
  promise: string;
  tags: string[];
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  scenario: string;
  scenarioTitle: string;
  flow: string[];
  benefits: string[];
  offerings: Array<{ title: string; description: string }>;
  whatsappMessage: string;
  caseSlugs: string[];
  accent: string;
  accentSoft: string;
};

export const ecosystemSolutions: EcosystemSolution[] = [
  {
    slug: "studio",
    name: "Yamaji Studio",
    shortName: "Studio",
    audience: "Empresas, lojas e projetos personalizados",
    promise:
      "Para empresas que precisam vender melhor ou construir uma solução personalizada.",
    tags: ["Sites", "E-commerce", "Sistemas"],
    eyebrow: "Empresas & varejo",
    heroTitle: "Sua operação digital, do primeiro clique ao pedido entregue.",
    heroDescription:
      "Criamos sites, lojas e sistemas que conectam a experiência do cliente à rotina de quem administra o negócio.",
    scenarioTitle: "Uma venda acontece. A operação acompanha.",
    scenario:
      "Uma cliente compra pelo celular. O pedido aparece organizado para a equipe, com itens, valor e próxima ação visíveis.",
    flow: ["Acessa a loja", "Escolhe o produto", "Finaliza", "Equipe acompanha"],
    benefits: [
      "Experiência simples para comprar",
      "Pedidos organizados em um só fluxo",
      "Estrutura preparada para evoluir",
    ],
    offerings: [
      {
        title: "Sites que conduzem",
        description:
          "Páginas rápidas e objetivas que transformam interesse em contato.",
      },
      {
        title: "E-commerce conectado",
        description:
          "Vitrine, carrinho e operação pensados como uma experiência única.",
      },
      {
        title: "Sistemas sob medida",
        description:
          "Fluxos digitais construídos em torno da rotina real da empresa.",
      },
    ],
    whatsappMessage:
      "Olá, conheci a Yamaji Studio pelo site e quero entender uma solução para minha empresa.",
    caseSlugs: ["plano-de-saude-bahia", "proprium-imoveis"],
    accent: "#5EEAD4",
    accentSoft: "rgba(94, 234, 212, 0.14)",
  },
  {
    slug: "eats",
    name: "Yamaji Eats",
    shortName: "Eats",
    audience: "Restaurantes, bares e delivery",
    promise: "Menos pedidos perdidos. Mais controle do atendimento à entrega.",
    tags: ["Cardápio", "Pedidos", "Gestão"],
    eyebrow: "Operações gastronômicas",
    heroTitle: "Do QR Code à cozinha, cada pedido no lugar certo.",
    heroDescription:
      "Uma experiência de pedido simples para o cliente e uma rotina mais clara para quem atende, prepara e entrega.",
    scenarioTitle: "O cliente pede sem esperar. A equipe recebe sem ruído.",
    scenario:
      "Na mesa ou em casa, o cliente abre o cardápio, escolhe e confirma. O restaurante recebe o pedido com as informações certas.",
    flow: ["Escaneia o QR", "Escolhe", "Confirma", "Restaurante recebe"],
    benefits: [
      "Cardápio fácil de atualizar",
      "Pedidos claros para a operação",
      "Atendimento com menos interrupções",
    ],
    offerings: [
      {
        title: "Cardápio digital",
        description:
          "Produtos, adicionais e categorias apresentados sem complicação.",
      },
      {
        title: "Fluxo de pedidos",
        description:
          "Entrada, confirmação e acompanhamento reunidos em uma jornada.",
      },
      {
        title: "Atendimento conectado",
        description:
          "WhatsApp e automações apoiando a equipe nos momentos de pico.",
      },
    ],
    whatsappMessage:
      "Olá, conheci a Yamaji Eats pelo site e quero entender qual solução faz sentido para meu restaurante.",
    caseSlugs: [],
    accent: "#5EEAD4",
    accentSoft: "rgba(94, 234, 212, 0.14)",
  },
  {
    slug: "fit",
    name: "Yamaji Fit",
    shortName: "Fit",
    audience: "Academias, estúdios e profissionais fitness",
    promise: "Da matrícula ao acompanhamento, sua operação em um só lugar.",
    tags: ["Alunos", "Planos", "Rotina"],
    eyebrow: "Academias & estúdios",
    heroTitle: "Uma jornada melhor para o aluno. Mais clareza para a gestão.",
    heroDescription:
      "Apresente planos, simplifique matrículas e acompanhe a rotina dos alunos em uma experiência conectada.",
    scenarioTitle: "O interesse vira matrícula. A matrícula vira rotina.",
    scenario:
      "Um novo aluno conhece os planos pelo celular, inicia a matrícula e passa a acompanhar sua relação com a academia.",
    flow: ["Conhece os planos", "Escolhe", "Faz a matrícula", "Acompanha"],
    benefits: [
      "Planos apresentados com clareza",
      "Matrícula com menos etapas",
      "Visão organizada da base de alunos",
    ],
    offerings: [
      {
        title: "Aquisição e matrícula",
        description:
          "Uma jornada direta entre conhecer a academia e escolher um plano.",
      },
      {
        title: "Área do aluno",
        description:
          "Informações importantes acessíveis sem depender da recepção.",
      },
      {
        title: "Gestão da rotina",
        description:
          "Alunos, planos e atividades organizados para a equipe acompanhar.",
      },
    ],
    whatsappMessage:
      "Olá, conheci a Yamaji Fit pelo site e quero entender qual solução faz sentido para minha academia.",
    caseSlugs: ["dieisson-vasques", "potter-team"],
    accent: "#818CF8",
    accentSoft: "rgba(129, 140, 248, 0.14)",
  },
  {
    slug: "legal",
    name: "Yamaji Legal",
    shortName: "Legal",
    audience: "Escritórios e profissionais jurídicos",
    promise: "Mais organização para atender clientes e administrar o escritório.",
    tags: ["Leads", "Clientes", "Fluxos"],
    eyebrow: "Operações jurídicas",
    heroTitle: "Cada novo contato com contexto, histórico e próximo passo.",
    heroDescription:
      "Organize a entrada de potenciais clientes e dê continuidade aos atendimentos sem informações espalhadas.",
    scenarioTitle: "O contato chega. O escritório sabe o que fazer depois.",
    scenario:
      "Um potencial cliente envia sua necessidade. A equipe realiza a triagem e acompanha o atendimento em um fluxo claro.",
    flow: ["Contato chega", "Triagem", "Atendimento", "Acompanhamento"],
    benefits: [
      "Entrada de contatos padronizada",
      "Histórico fácil de consultar",
      "Próximas ações mais visíveis",
    ],
    offerings: [
      {
        title: "Captação organizada",
        description:
          "Formulários e canais direcionam cada contato para o fluxo correto.",
      },
      {
        title: "Relacionamento centralizado",
        description:
          "Contexto, histórico e retornos reunidos para a equipe acompanhar.",
      },
      {
        title: "Rotinas automatizadas",
        description:
          "Lembretes e integrações reduzem tarefas repetitivas do atendimento.",
      },
    ],
    whatsappMessage:
      "Olá, conheci a Yamaji Legal pelo site e quero entender uma solução para meu escritório.",
    caseSlugs: [],
    accent: "#5EEAD4",
    accentSoft: "rgba(94, 234, 212, 0.14)",
  },
];

export function getEcosystemSolution(slug: SegmentSlug) {
  const solution = ecosystemSolutions.find((item) => item.slug === slug);
  if (!solution) {
    throw new Error(`Solução do ecossistema não encontrada: ${slug}`);
  }
  return solution;
}

export const deliverySteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos a operação, os problemas e as prioridades.",
  },
  {
    number: "02",
    title: "Experiência",
    description: "Desenhamos como clientes e equipe utilizarão a solução.",
  },
  {
    number: "03",
    title: "Implementação",
    description: "Construímos, integramos e validamos o projeto.",
  },
  {
    number: "04",
    title: "Ativação",
    description: "Colocamos a solução no ar e acompanhamos o funcionamento.",
  },
  {
    number: "05",
    title: "Evolução",
    description: "Melhoramos a solução conforme o negócio cresce.",
  },
];
