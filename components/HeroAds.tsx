// components/HeroAds.tsx
export default function HeroAds() {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 -top-[22%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] motion-safe:animate-yamajiPulse" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[420px] w-[420px] rounded-full bg-accent2/20 blur-[120px] motion-safe:animate-yamajiFloat" />
      </div>

      <div className="relative mx-auto max-w-container px-6 py-20 text-center md:py-24">
        {/* Badge */}
        <span className="badge uppercase tracking-wide text-[12px]">
          <span className="relative inline-flex h-1.5 w-1.5 items-center justify-center mr-1.5">
            <span className="absolute inline-block h-3 w-3 rounded-full bg-accent/30 blur-[6px]" />
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
          </span>
          tráfego pago • criativos • conversão
        </span>

        {/* Headline */}
        <h1 className="mt-6 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-fg via-fg to-fg/70 bg-clip-text text-transparent [text-shadow:_0_0_18px_rgba(0,255,163,0.22)]">
            Tráfego pago que vira
          </span>
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-accent via-accent2 to-fg bg-clip-text text-transparent">
            &nbsp;cliente — não só clique.
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
          Estratégia, criativos e landing{" "}
          <span className="text-fg">alinhados</span>. Otimização por dados até
          virar máquina de leads.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/5571992258349?text=Quero%20rodar%20Ads%20que%20convertem%20com%20a%20Yamaji%20Studio"
            target="_blank"
            className="btn btn-primary"
            aria-label="Falar com a Yamaji sobre gestão de anúncios"
          >
            Falar no WhatsApp
          </a>
          <a
            href="#planos"
            className="btn btn-secondary"
            aria-label="Ver planos de gestão de tráfego"
          >
            Ver planos
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-muted">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_#00FFA3]" />
            CPL baixo com LP rápida (~1s)
          </div>
          <div className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden />
          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-accent2 shadow-[0_0_10px_#4A90E2]" />
            Relatórios quinzenais e roadmap de testes
          </div>
        </div>
      </div>
    </section>
  );
}
