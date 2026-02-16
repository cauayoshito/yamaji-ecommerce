"use client";

export default function ApplyHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-28 md:pb-14 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,163,0.16),transparent_56%)]" />
      <div className="relative mx-auto w-full max-w-container px-6">
        <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-accent">
          Consultoria Estratégica Digital
        </span>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-fg md:text-6xl">
          Vamos estruturar sua operação digital?
        </h1>
        <p className="lead mt-4 max-w-2xl text-white/75">
          Receba um diagnóstico estratégico e um plano de ação personalizado em até 24h úteis.
        </p>
      </div>
    </section>
  );
}
