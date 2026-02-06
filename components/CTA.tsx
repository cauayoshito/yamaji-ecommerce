// components/CTASection.tsx
// CTA final — otimizado para conversão + tracking + acessibilidade

"use client";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

const WHATS = {
  phone: "5571992358249",
  text: "Oi%2C%20quero%20meu%20diagn%C3%B3stico%20gratuito.%20Voc%C3%AAs%20avaliam%20site%2C%20an%C3%BAncios%20e%20WhatsApp%2FIA%20e%20me%20passam%20um%20plano%20em%2015%20minutos%3F",
  utm: "utm_source=site&utm_medium=cta&utm_campaign=cta_section",
};
const waLink = `https://wa.me/${WHATS.phone}?text=${WHATS.text}&${WHATS.utm}`;

export default function CTASection() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className="relative overflow-hidden"
      data-section="cta"
    >
      {/* Glow BG */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16 text-center">
        <h2 id="cta-title" className="text-2xl md:text-3xl font-bold">
          Pronto para transformar cliques em clientes?
        </h2>

        <p className="mt-2 text-white/80 max-w-2xl mx-auto text-[0.95rem] md:text-base">
          <b>Diagnóstico gratuito em 15 minutos.</b> Avaliamos seu site,
          anúncios e atendimento no WhatsApp/IA e entregamos um plano de ação
          simples, passo a passo.
        </p>

        {/* Badge de vagas */}
        <div
          className={cn(
            "mt-4 mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm",
            "bg-teal-400/15 border border-teal-400/30 text-teal-200",
            "shadow-[0_0_0_1px_rgba(45,212,191,0.25)]"
          )}
          role="status"
          aria-live="polite"
        >
          <span
            className="inline-flex h-2.5 w-2.5 rounded-full bg-teal-400 animate-pulse"
            aria-hidden
          />
          <strong>3 vagas estratégicas</strong> para o plano Black Friday
        </div>

        {/* Micro-benefícios */}
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[13px] text-white/70">
          <li className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1">
            Sem compromisso
          </li>
          <li className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1">
            Resposta &lt; 2 min
          </li>
          <li className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1">
            Plano em linguagem simples
          </li>
        </ul>

        {/* CTAs principais */}
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          {/* WhatsApp CTA */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            data-cta="whatsapp"
            data-label="CTASection - Agendar no WhatsApp"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-400/95 hover:bg-teal-400 text-[#0B0F14] px-5 py-3 font-semibold shadow-lg shadow-teal-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
            aria-label="Agendar diagnóstico pelo WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
            Agendar no WhatsApp
          </a>

          {/* Ver exemplos reais (scroll suave + tracking) */}
          <a
            href="#cases"
            data-cta="cta"
            data-label="CTASection - Ver exemplos reais"
            onClick={(e) => {
              e.preventDefault();
              const url = new URL(window.location.href);
              url.searchParams.set("ref", "cta-section");
              history.replaceState(
                null,
                "",
                `${url.pathname}?${url.searchParams.toString()}#cases`
              );
              document
                .getElementById("cases")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
          >
            Ver exemplos reais ⚡
          </a>

          {/* E-mail CTA */}
          <a
            href="mailto:yamaji.studio@gmail.com"
            data-cta="cta"
            data-label="CTASection - Prefiro por e-mail"
            className="rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
          >
            Prefiro por e-mail
          </a>
        </div>

        {/* Linha de confiança */}
        <p className="mt-4 text-[13px] text-white/70">
          Sem compromisso. Se fizer sentido, seguimos para proposta.
          <span className="ml-2 inline-block rounded-md border border-white/10 bg-white/5 px-2 py-0.5">
            SLA &lt; 2 min
          </span>
        </p>
      </div>
    </section>
  );
}
