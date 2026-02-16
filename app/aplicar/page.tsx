import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ApplyProjectForm from "@/components/ApplyProjectForm";

export const metadata: Metadata = {
  title: "Aplicar para Projeto | Yamaji Studio",
  description:
    "Landing page de aplicação para projetos digitais com foco em conversão e resposta em até 24h úteis.",
};

const proofItems = [
  "Clínicas",
  "E-commerces",
  "Empresas de serviço",
  "Projetos políticos",
];

export default function AplicarPage() {
  return (
    <main className="min-h-screen bg-bg text-fg">
      <section className="relative overflow-hidden pb-12 pt-8 md:pb-16 md:pt-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/15 via-transparent to-transparent" />
        <div className="pointer-events-none absolute -top-20 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-accent/12 blur-[90px]" />

        <Container className="relative z-10">
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted transition hover:text-accent"
            >
              <span aria-hidden="true">←</span>
              Yamaji Studio
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_460px] lg:items-start lg:gap-10">
            <section className="space-y-6">
              <p className="text-xs uppercase tracking-[0.28em] text-accent/90">
                Aplicar para projeto
              </p>

              <h1 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
                Projetos digitais com alto impacto e previsibilidade.
              </h1>

              <p className="max-w-xl text-sm text-muted md:text-base">
                Estratégia, design e tecnologia para empresas que querem crescer com estrutura.
              </p>

              <ul className="space-y-3 text-sm text-fg md:text-base">
                <li className="flex items-center gap-3">
                  <span className="text-accent">✔</span>
                  Diagnóstico em até 24h
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent">✔</span>
                  Foco em conversão e performance
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent">✔</span>
                  Execução premium
                </li>
              </ul>

              <a
                href="#form-aplicar"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-accent px-6 text-sm font-semibold text-[#04120F] shadow-[0_10px_35px_-15px_rgba(93,255,184,0.9)] transition hover:brightness-105"
              >
                Quero aplicar meu projeto
              </a>
            </section>

            <div id="form-aplicar" className="lg:sticky lg:top-10">
              <ApplyProjectForm />
            </div>
          </div>

          <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 md:mt-12 md:p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Projetos para</p>
            <ul className="mt-4 grid gap-3 text-sm text-fg sm:grid-cols-2">
              {proofItems.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  • {item}
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </section>
    </main>
  );
}
