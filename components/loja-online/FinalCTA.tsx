import Link from "next/link";
import { LOJA_WHATSAPP } from "./whatsapp";

export default function FinalCTA() {
  return (
    <section
      data-section="loja-cta-final"
      className="relative overflow-hidden border-t border-white/[0.06]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-surface via-bg to-bg"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-32 text-center md:py-40">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium tracking-wide text-white/70 backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Atendimento humano agora
        </span>

        <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-gradient-light">
          Bora colocar sua loja
          <br className="hidden md:block" /> no ar?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-lg">
          Chama no WhatsApp, fala o que você vende e a gente já te mostra o
          plano certo. Sem enrolação, sem proposta de catálogo.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={LOJA_WHATSAPP}
            target="_blank"
            rel="noreferrer noopener"
            data-cta="primary"
            data-label="loja-final-whatsapp"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-7 py-4 text-[14px] font-semibold text-black shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_8px_32px_-12px_rgba(94,234,212,0.5)] transition duration-200 hover:-translate-y-px hover:bg-[#7bf0dc] sm:w-auto"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
            </svg>
            Quero minha loja online
          </a>

          <Link
            href="#planos"
            data-cta="secondary"
            data-label="loja-final-planos"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.03] px-7 py-4 text-[14px] font-semibold text-white transition duration-200 hover:-translate-y-px hover:border-white/25 hover:bg-white/[0.06] sm:w-auto"
          >
            Ver planos
          </Link>
        </div>

        <p className="mt-6 text-[12px] text-white/45">
          Sem fidelidade · Suporte humano · Hospedagem inclusa
        </p>

        <footer className="mt-24 border-t border-white/[0.08] pt-8 text-[12px] text-white/40">
          <p>© 2026 Yamaji Studio. Todos os direitos reservados.</p>
        </footer>
      </div>
    </section>
  );
}
