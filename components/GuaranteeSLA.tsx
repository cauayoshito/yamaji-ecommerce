"use client";

import Link from "next/link";
import { APPLY_ROUTE } from "@/lib/routes";

type Item = { title: string; desc: string };

export default function GuaranteeSLA({
  variant = "bar",
  items = DEFAULT_ITEMS,
  ctaHref = APPLY_ROUTE,
  ctaLabel = "Começar agora pelo WhatsApp",
  id = "garantia-sla",
}: {
  variant?: "bar";
  items?: Item[];
  ctaHref?: string;
  ctaLabel?: string;
  id?: string;
}) {
  if (variant !== "bar") return null;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative"
      role="region"
    >
      <div className="container">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-teal-500/10 to-cyan-400/10 p-4 backdrop-blur md:p-6">
          <h2 id={`${id}-heading`} className="sr-only">
            Garantia e SLA
          </h2>

          <ul role="list" className="grid gap-4 md:grid-cols-4">
            {items.map((it) => (
              <li key={it.title} className="text-center md:text-left">
                <p className="font-semibold text-white">{it.title}</p>
                <p className="text-sm text-white/70">{it.desc}</p>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-center md:justify-end">
            <Link
              href={ctaHref}
              aria-label={`${ctaLabel} — garantia e SLA`}
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-teal-500/20 outline-none ring-0 transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-teal-300/60"
              data-cta="guarantee-sla"
            >
              {ctaLabel}
            </Link>
          </div>

          <p className="mt-2 text-center text-[11px] text-white/50 md:text-right">
            *Prazos variam por nicho, orçamento e histórico da conta.
          </p>
        </div>
      </div>
    </section>
  );
}

const DEFAULT_ITEMS: Item[] = [
  { title: "Onboarding em 72h", desc: "Do briefing ao primeiro rascunho." },
  { title: "Primeiros leads na 1ª semana*", desc: "Mídia e landing no ar." },
  { title: "SLA de resposta < 2 min", desc: "WhatsApp/CRM integrado." },
  { title: "Garantia de 30 dias", desc: "Ou devolvemos seu investimento." },
];
