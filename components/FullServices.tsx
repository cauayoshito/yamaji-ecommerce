"use client";

import { motion } from "framer-motion";
import HoverCard from "@/components/HoverCard";
import {
  MonitorSmartphone,
  Rocket,
  GaugeCircle,
  Palette,
  Sparkles,
  Type,
  Search,
  BarChart3,
  FileText,
} from "lucide-react";

type Item = { title: string; desc: string; icon: React.ReactNode };

const groups: {
  id: "web" | "branding" | "seo";
  label: string;
  items: Item[];
}[] = [
  {
    id: "web",
    label: "Websites & Performance",
    items: [
      {
        title: "Website sob medida",
        desc: "Interface limpa, rápida e preparada para converter.",
        icon: <MonitorSmartphone className="w-5 h-5" />,
      },
      {
        title: "Otimização de performance",
        desc: "Core Web Vitals, lazy-loading e boas práticas técnicas.",
        icon: <GaugeCircle className="w-5 h-5" />,
      },
      {
        title: "Lançamento e métricas",
        desc: "Setup de analytics, eventos e acompanhamento de resultados.",
        icon: <Rocket className="w-5 h-5" />,
      },
    ],
  },
  {
    id: "branding",
    label: "Branding & Identidade",
    items: [
      {
        title: "Identidade visual",
        desc: "Logo, paleta, tipografia e guidelines consistentes.",
        icon: <Palette className="w-5 h-5" />,
      },
      {
        title: "Sistema de UI",
        desc: "Componentes reutilizáveis e escaláveis para o digital.",
        icon: <Sparkles className="w-5 h-5" />,
      },
      {
        title: "Voz & tom",
        desc: "Diretrizes de linguagem e microcopy orientada à ação.",
        icon: <Type className="w-5 h-5" />,
      },
    ],
  },
  {
    id: "seo",
    label: "SEO & Conteúdo",
    items: [
      {
        title: "SEO técnico",
        desc: "Sitemap, meta tags, schema e estrutura técnica sólida.",
        icon: <Search className="w-5 h-5" />,
      },
      {
        title: "Conteúdo estratégico",
        desc: "Pautas, copy e arquitetura de informação orientadas a busca.",
        icon: <FileText className="w-5 h-5" />,
      },
      {
        title: "Relatórios & growth",
        desc: "Dashboards simples com evolução e oportunidades de ranking.",
        icon: <BarChart3 className="w-5 h-5" />,
      },
    ],
  },
];

export default function FullServices() {
  return (
    <section className="bg-gradient-to-b from-[#0B0B0B] to-[#020202] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-14">
          Nossos Serviços
        </h2>

        <div className="space-y-16">
          {groups.map((group, gi) => (
            <div key={group.id}>
              {/* âncora para o menu */}
              <div id={group.id} className="scroll-mt-24" />
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: gi * 0.05 }}
                className="mb-6"
              >
                <p className="text-accent text-sm tracking-wider uppercase">
                  {group.label}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold mt-1">
                  {gi === 0 && "Sites que performam."}
                  {gi === 1 && "Marcas com personalidade."}
                  {gi === 2 && "Encontrabilidade que traz tráfego."}
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                  >
                    <HoverCard className="p-5 h-full">
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5 text-accent">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-base font-semibold">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </HoverCard>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
