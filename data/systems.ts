export type SystemItem = {
  title: string;
  href: string;
  description: string;
  tags: string[];
};

export const systems: SystemItem[] = [
  {
    title: "E-commerce",
    href: "/e-commerce",
    description:
      "Estrutura de vendas online com painel operacional para controle diario.",
    tags: ["Vendas", "Painel", "Operacao"],
  },
  {
    title: "Base Eleitoral",
    href: "/base-eleitoral",
    description:
      "Arquitetura para captar, organizar e segmentar apoiadores por regiao.",
    tags: ["Captacao", "Segmentacao", "Controle"],
  },
  {
    title: "Sistema de Captacao",
    href: "/sistemas/captacao",
    description:
      "Fluxo estruturado para captar demanda e manter rotina comercial ativa.",
    tags: ["Captacao", "Operacao", "Escala"],
  },
  {
    title: "CRM para Clinicas",
    href: "/crm-clinicas",
    description:
      "Gestao de relacionamento para organizar agenda, retorno e recorrencia.",
    tags: ["Agenda", "Retencao", "Recorrencia"],
  },
  {
    title: "Plataforma Educacional",
    href: "/plataforma-educacional",
    description:
      "Estrutura de aprendizagem para centralizar turmas, trilhas e recorrencia.",
    tags: ["Conteudo", "Turmas", "Recorrencia"],
  },
];
