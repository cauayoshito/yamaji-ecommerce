import Link from "next/link";
import { LOJA_WHATSAPP } from "./whatsapp";

export default function Hero() {
  return (
    <section
      data-section="loja-hero"
      className="relative overflow-hidden border-b border-white/[0.06]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(94,234,212,0.12),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="bg-grid-fade pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.035]"
      />

      <div className="relative mx-auto max-w-container px-6 pb-28 pt-24 md:pb-40 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium tracking-wide text-white/70 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Lojas no ar em poucos dias
          </span>

          <h1 className="mt-7 font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-gradient-light">
            Sua loja online pronta para
            <br className="hidden md:block" />{" "}
            <span className="text-accent">vender em poucos dias</span>.
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-lg">
            Sem plataforma genérica. Sem suporte robótico. Criamos sua loja com
            visual profissional, suporte humano e foco em vendas reais.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={LOJA_WHATSAPP}
              target="_blank"
              rel="noreferrer noopener"
              data-cta="primary"
              data-label="loja-hero-whatsapp"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-[13px] font-semibold text-black shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_8px_28px_-12px_rgba(94,234,212,0.45)] transition duration-200 hover:-translate-y-px hover:bg-[#7bf0dc] sm:w-auto"
            >
              Quero minha loja online
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>

            <Link
              href="#planos"
              data-cta="secondary"
              data-label="loja-hero-ver-planos"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.03] px-7 py-3.5 text-[13px] font-semibold text-white transition duration-200 hover:-translate-y-px hover:border-white/25 hover:bg-white/[0.06] sm:w-auto"
            >
              Ver planos
            </Link>
          </div>

          <ul className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-white/45">
            <li className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Hospedagem inclusa
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Suporte humano via WhatsApp
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Cancele quando quiser
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
