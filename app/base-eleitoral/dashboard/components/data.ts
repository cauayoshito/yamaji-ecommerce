export type Supporter = {
  initials: string;
  name: string;
  phone: string;
  neighborhood: string;
  date: string;
  tone: "blue" | "purple" | "green" | "pink";
};

export const supporters: Supporter[] = [
  {
    initials: "MS",
    name: "Maria Silva",
    phone: "(11) 99876-5432",
    neighborhood: "Centro",
    date: "12/08/2023",
    tone: "blue",
  },
  {
    initials: "JO",
    name: "Joao Oliveira",
    phone: "(11) 98765-4321",
    neighborhood: "Jardim America",
    date: "11/08/2023",
    tone: "purple",
  },
  {
    initials: "AS",
    name: "Ana Souza",
    phone: "(11) 91234-5678",
    neighborhood: "Vila Nova",
    date: "09/08/2023",
    tone: "green",
  },
  {
    initials: "CR",
    name: "Carlos Roberto",
    phone: "(11) 95555-4444",
    neighborhood: "Centro",
    date: "07/08/2023",
    tone: "pink",
  },
];

export const toneClass: Record<Supporter["tone"], string> = {
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200",
  purple:
    "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200",
  green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
  pink: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-200",
};

export const kpis = [
  {
    title: "Total de apoiadores",
    value: "1.248",
    foot: "12%",
    sub: "vs mes anterior",
  },
  {
    title: "Novos ultimos 7 dias",
    value: "42",
    foot: "5",
    sub: "hoje",
  },
  {
    title: "Bairros ativos",
    value: "18",
    foot: "Maior foco:",
    sub: "Centro",
  },
  {
    title: "Taxa de engajamento",
    value: "85%",
    foot: "indice",
    sub: "consolidado",
  },
] as const;
