// data/projects-sites.ts
export type Project = {
  slug: string; // usado na rota externa (behance/dribbble/site) ou interno
  title: string;
  cover: string; // caminho em /public/portfolio/...
  url: string; // link do projeto (externo ou interno)
  tags: string[]; // 'E-commerce', 'Institucional', etc.
  metrics?: string; // ex: "+27% em 30 dias"
};

export const projectsSites: Project[] = [
  {
    slug: "anipet",
    title: "AniPet • E-commerce de petshop",
    cover: "/images/anipetofc.png",
    url: "https://anipet2.vercel.app/",
    tags: ["E-commerce", "UX", "SEO"],
    metrics: "+27% em 30 dias",
  },
  {
    slug: "dieisson",
    title: "Dieisson • Personal Trainer",
    cover: "/images/dieissonofc.png",
    url: "https://www.dieissonvasques.com.br/",
    tags: ["Institucional", "Lead Gen"],
    metrics: "SLA < 2 min no Whats",
  },
  {
    slug: "proprium",
    title: "Proprium • Leilões imobiliários",
    cover: "/images/propriumofc.png",
    url: "https://proprium-imoveis.vercel.app/",
    tags: ["Institucional", "CRO"],
  },
  // adicione quantos quiser…
];
