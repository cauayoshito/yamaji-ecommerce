// components/CaseTeaser.tsx
import Link from "next/link";

export default function CaseTeaser() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-container px-6 py-10">
        <div className="rounded-xl border border-white/10 bg-black/30 p-6 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-accent uppercase text-xs tracking-widest">
              Case
            </p>
            <h3 className="mt-1 font-display text-xl">
              Restaurante local → agenda cheia em 14 dias
            </h3>
            <p className="mt-2 max-w-xl text-sm text-muted">
              IA respondendo no Whats, qualificação automática e follow-ups
              24/7. +38% de pedidos no mês 1.
            </p>
          </div>
          <Link href="/#cases" className="btn btn-primary mt-4 md:mt-0">
            Ver estudo completo
          </Link>
        </div>
      </div>
    </section>
  );
}
