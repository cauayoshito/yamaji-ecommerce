// components/Hero.tsx
// Server Component (pode importar ilhas client)
// Otimizado para leigos: copy emocional, CTA WhatsApp com UTM, microbenefícios,
// tracking via data-cta/data-label e acessibilidade.

import { cn } from "@/lib/utils";
import Link from "next/link";
import SeasonBadge from "./_hero/SeasonBadge";

// alterne aqui: "emotional" | "pro"
const VARIANT: "emotional" | "pro" = "emotional";

// edite seu número/msg padrão uma única vez:
const WHATS = {
  phone: "5571992258349",
  text: "Oi%2C%20quero%20come%C3%A7ar%20a%20vender%2024h%20com%20site%2C%20an%C3%BAncios%20e%20IA.%20Pode%20me%20ajudar%3F",
  utm: "utm_source=site&utm_medium=cta&utm_campaign=hero",
};
const waLink = `https://wa.me/${WHATS.phone}?text=${WHATS.text}&${WHATS.utm}`;

export default function Hero() {
  const isEmotional = VARIANT === "emotional";

  return (
    <section
      className="relative overflow-hidden"
      aria-label="Abertura e oferta principal"
    >
      <BGGrid />

      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-14 md:pt-24 md:pb-24">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1
            className={cn(
              "font-extrabold tracking-tight",
              "[font-size:_clamp(1.9rem,4.2vw,3.25rem)] md:[font-size:_clamp(2.5rem,3.4vw,3.75rem)] leading-[1.08]"
            )}
          >
            {isEmotional ? (
              <>
                Transforme seu <span className="text-teal-400">celular</span>{" "}
                numa máquina de vendas{" "}
                <span className="text-cyan-300">
                  mesmo sem entender de marketing
                </span>
                .
              </>
            ) : (
              <>
                Sites que <span className="text-teal-400">vendem</span>,
                anúncios que
                <span className="text-cyan-300"> convertem</span> e IA que fecha{" "}
                <span className="text-teal-400">24/7</span>.
              </>
            )}
          </h1>

          {/* Subcopy */}
          <p className="mt-3 md:mt-4 text-white/80 max-w-2xl text-[0.95rem] md:text-base">
            {isEmotional ? (
              <>
                A Yamaji monta para você um sistema simples:{" "}
                <b>site que atrai</b>, <b>anúncios que trazem gente</b> e{" "}
                <b>IA que responde sozinha</b> no WhatsApp. Você foca no seu
                trabalho nós cuidamos do resto.
              </>
            ) : (
              <>
                Construímos um funil completo de <b>aquisição</b> e{" "}
                <b>conversão</b> com WhatsApp-first: páginas rápidas, criativos
                performáticos e automações que qualificam e fecham leads 24/7.
              </>
            )}
          </p>

          {/* Urgência sazonal */}
          <div className="mt-3">
            <SeasonBadge />
          </div>

          {/* CTAs */}
          <div className="mt-5 md:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              data-cta="whatsapp"
              data-label="Hero - Quero vender 24h"
              className={cn(
                "inline-flex items-center justify-center rounded-xl px-5 py-3 md:px-6 md:py-3.5",
                "text-[0.95rem] md:text-base font-semibold",
                "bg-teal-400/95 text-[#0B0F14] hover:bg-teal-400 shadow-lg shadow-teal-400/10",
                "focus-visible:ring-2 focus-visible:ring-teal-300"
              )}
              aria-label="Falar no WhatsApp agora para começar a vender 24 horas"
            >
              {isEmotional ? "Quero vender 24h 💸" : "Falar no WhatsApp"}
            </a>

            <a
              href="#cases"
              data-cta="cta"
              data-label="Hero - Ver exemplos reais"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 md:px-6 md:py-3.5 text-[0.95rem] md:text-base font-semibold focus-visible:ring-2 focus-visible:ring-teal-300"
              aria-label="Ver exemplos reais de resultados"
            >
              Ver exemplos reais ⚡
            </a>
          </div>

          {/* Microbenefícios escaneáveis (leigo-friendly) */}
          <ul className="mt-5 grid gap-2 text-[0.95rem] md:text-sm text-white/75">
            <li>✅ Sem precisar entender de marketing</li>
            <li>⏱️ Resultados em poucos dias</li>
            <li>📞 Suporte humano pelo WhatsApp</li>
            <li>🧠 Automação que responde sozinha 24/7</li>
          </ul>

          {/* Chips de atalho (cross-sell leve) */}
          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            <Link
              href="/servicos/sites"
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10"
            >
              Sites que vendem
            </Link>
            <Link
              href="/servicos/ads"
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10"
            >
              Anúncios que convertem
            </Link>
            <Link
              href="/servicos/ia-automacao"
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10"
            >
              IA que fecha 24/7
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BGGrid() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* blur menor em mobile para reduzir paint cost */}
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/20 sm:blur-xl md:blur-3xl" />
      <div className="absolute right-0 top-20 h-80 w-[26rem] rounded-full bg-teal-500/20 sm:blur-xl md:blur-3xl" />
      <svg
        className="absolute inset-0 -z-10 h-full w-full opacity-[0.06] md:opacity-[0.08]"
        aria-hidden
      >
        <defs>
          <pattern
            id="grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
