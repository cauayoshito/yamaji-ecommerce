// components/CaseHighlight.tsx
import Link from "next/link";

export default function CaseHighlight() {
  return (
    <section className="bg-bg">
      <div className="container">
        <div className="rounded-xl border border-white/10 bg-black/30 p-6 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-accent uppercase text-xs tracking-widest">
              Case real
            </p>
            <h3 className="mt-1 font-display text-xl">
              E-commerce local → <span className="text-accent">+27%</span> de
              vendas em 30 dias
            </h3>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Site rápido + GA4 + Ads +{" "}
              <span className="text-fg">IA no Whats</span>. Menos abandono e
              mais conversões.
            </p>
            <div className="mt-3 flex gap-4 text-xs text-muted">
              <span>Core Web Vitals 90+</span>
              <span className="hidden sm:inline">•</span>
              <span>Resposta média &lt; 1 min</span>
              <span className="hidden sm:inline">•</span>
              <span>Sequências 1h • 24h • 72h</span>
            </div>
          </div>

          <Link href="/#cases" className="btn btn-primary mt-4 md:mt-0">
            Ver estudo completo
          </Link>
        </div>
      </div>
    </section>
  );
}
