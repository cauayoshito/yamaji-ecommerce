export type VerifiedProject = {
  name: string;
  domain: string;
  url: string;
  category: string;
  eyebrow: string;
  description: string;
  services: string[];
  accent: string;
  accentSoft: string;
};

export const verifiedProjects: VerifiedProject[] = [
  {
    name: "Trevo Modas",
    domain: "lojatrevomodas.com.br",
    url: "https://www.lojatrevomodas.com.br/",
    category: "Moda e varejo",
    eyebrow: "E-commerce em produção",
    description:
      "Loja virtual criada para transformar o catálogo da marca em uma experiência de compra clara, rápida e preparada para vender pelo celular.",
    services: ["E-commerce", "UX mobile", "Conversão"],
    accent: "#F6C453",
    accentSoft: "rgba(246,196,83,.14)",
  },
  {
    name: "Glúteo Fit Pro",
    domain: "gluteofitpro.vercel.app",
    url: "https://gluteofitpro.vercel.app/",
    category: "Personal trainer e fitness",
    eyebrow: "Produto digital em produção",
    description:
      "Presença digital do personal James com proposta direta, experiência focada em mobile e jornada pensada para transformar interesse em contato.",
    services: ["Landing page", "Posicionamento", "Lead generation"],
    accent: "#A3E635",
    accentSoft: "rgba(163,230,53,.13)",
  },
  {
    name: "Queiroz Engenharia Civil",
    domain: "queirozengcivil.com.br",
    url: "https://www.queirozengcivil.com.br/",
    category: "Engenharia civil",
    eyebrow: "Site institucional em produção",
    description:
      "Site profissional para Carlos Queiroz apresentar serviços, transmitir confiança técnica e facilitar novos pedidos de orçamento.",
    services: ["Site institucional", "Autoridade", "SEO local"],
    accent: "#60A5FA",
    accentSoft: "rgba(96,165,250,.13)",
  },
];
