"use client";

import Link from "next/link";
import { Trophy, Zap, Headphones, Target, LineChart } from "lucide-react";
import HoverCard from "./HoverCard";

// Cards orientados a benefício (não só feature)
const items = [
  {
    title: "Resultados que impactam o caixa",
    desc: "Cases com +27% de vendas em 30 dias e agenda cheia em 14 dias.",
    Icon: LineChart,
  },
  {
    title: "Método que reduz CPL",
    desc: "Sites rápidos + criativos validados + IA 24/7 fechando o follow-up.",
    Icon: Target,
  },
  {
    title: "Suporte humano (de verdade)",
    desc: "Fala direto com quem executa. Sem fila, sem burocracia.",
    Icon: Headphones,
  },
  {
    title: "Entrega ágil e previsível",
    desc: "Checklist de aprovação e roadmap claro. Do briefing ao ar em poucos dias.",
    Icon: Zap,
  },
  {
    title: "Padrões de alta performance",
    desc: "UX limpa, Web Vitals na régua e SEO técnico que ranqueia.",
    Icon: Trophy,
  },
];

export default function Highlights() {
  return (
    <section className="relative bg-bg" aria-labelledby="diferenciais-heading">
      {/* glow sutil de fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-container px-6 py-16">
        <div className="text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] uppercase tracking-wide text-muted">
            Por que a Yamaji?
          </span>
          <h2
            id="diferenciais-heading"
            className="mt-4 font-display text-3xl md:text-4xl text-fg"
          >
            Diferenciais que fazem você vender mais
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Não é só “fazer site”. É montar a máquina:{" "}
            <span className="text-fg">Site</span> que carrega rápido,{" "}
            <span className="text-fg">Ads</span> que trazem o público certo e{" "}
            <span className="text-fg">IA</span> que responde em segundos e
            fecha.
          </p>
        </div>

        {/* cards com HoverCard */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, Icon }) => (
            <HoverCard key={title}>
              <div className="flex items-start gap-4">
                <div
                  className="rounded-xl border border-white/10 bg-white/5 p-3 text-accent"
                  aria-hidden
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-fg">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{desc}</p>
                </div>
              </div>
            </HoverCard>
          ))}
        </div>

        {/* mini-provas + badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_#00FFA3]" />
            Lighthouse 90+ (Core Web Vitals)
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent2 shadow-[0_0_10px_#4A90E2]" />
            Resposta média &lt; 1 min no Whats/CRM
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_#00FFA3]" />
            SEO técnico com JSON-LD
          </span>
        </div>

        {/* micro-CTAs (opcionais) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#projetos"
            className="btn btn-secondary"
            data-gtag="view_cases_from_highlights"
          >
            Ver cases com números
          </Link>
          <Link
            href="https://wa.me/5571992258349?text=Quero%20um%20diagn%C3%B3stico%20gratuito%20da%20Yamaji%20Studio&utm_source=site&utm_medium=section_highlights&utm_campaign=diagnostico"
            target="_blank"
            className="btn btn-primary"
            data-gtag="lead_highlights_diagnostico"
          >
            🚀 Quero meu diagnóstico gratuito
          </Link>
        </div>
      </div>
    </section>
  );
}
