"use client";

import { motion } from "framer-motion";

type Props = { variant?: "compact" | "default" };

const items = [
  {
    title: "Sites de Alta Conversão",
    desc: "Arquitetura + SEO on-page para captar tráfego orgânico e reduzir custo de mídia.",
    impact: "+35% em conversões",
    Icon: BoltIcon,
  },
  {
    title: "Tráfego Pago que Converte",
    desc: "Google & Meta Ads com criativos orientados por dados e landing de oferta.",
    impact: "ROI médio 4–6x",
    Icon: ChartIcon,
  },
  {
    title: "Automação com IA (24/7)",
    desc: "Chatbots e fluxos que nutrem e fecham via WhatsApp/CRM em minutos.",
    impact: "+50% retenção de leads",
    Icon: CpuIcon,
  },
];

export default function TripodServices({ variant = "default" }: Props) {
  if (variant !== "compact") {
    return (
      <div className="grid gap-6 md:grid-cols-3">
        {items.map(({ Icon, ...it }) => (
          <div
            key={it.title}
            className="rounded-2xl border border-white/10 p-6"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-white/5 p-2">
                <Icon className="size-5 text-teal-300" />
              </span>
              <h3 className="text-base font-semibold">{it.title}</h3>
            </div>
            <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            <p className="mt-3 text-xs text-white/60">{it.impact}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      id="como-funciona"
      className="relative grid items-start gap-5 md:grid-cols-3"
    >
      {items.map(({ Icon, ...it }, i) => (
        <motion.article
          key={it.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="relative rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded-xl bg-white/5 p-2">
                <Icon className="size-5 text-teal-300" />
              </span>
              <h3 className="text-base font-semibold">{it.title}</h3>
            </div>
            <span className="text-[11px] rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-white/70">
              {it.impact}
            </span>
          </header>
          <p className="mt-2 text-sm text-white/70">{it.desc}</p>

          {/* seta conectora (desktop nos dois primeiros) */}
          {i < items.length - 1 && (
            <div className="pointer-events-none absolute right-[-14px] top-1/2 hidden -translate-y-1/2 md:block">
              <Arrow />
            </div>
          )}
        </motion.article>
      ))}
    </div>
  );
}

/* --- ícones inline (sem dependências) --- */
function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" />
      <path
        d="M7 15l4-5 3 3 5-7"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
function CpuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" />
      <path
        d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function Arrow() {
  return (
    <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
      <path
        d="M0 8h22"
        stroke="url(#g)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 3l6 5-6 5"
        stroke="url(#g)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="28" y2="0">
          <stop stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
  );
}
