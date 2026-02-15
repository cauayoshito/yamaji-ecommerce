import type { Metadata } from "next";
import Link from "next/link";
import ApplyForm from "@/components/ApplyForm";
import Container from "@/components/ui/Container";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Aplicar para Projeto | Yamaji Studio",
  description:
    "Conte sobre seu projeto e receba um retorno rápido da equipe Yamaji. Aplicação direta com resposta em até 24h úteis.",
};

export default function AplicarPage() {
  return (
    <>
      <NavBar />
      <main className="bg-bg text-fg">
        <section className="relative overflow-hidden bg-[#0A0A0B] pb-16 pt-28 md:pb-20 md:pt-32">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent" />
          <Container className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted hover:text-accent"
              >
                <span aria-hidden="true">â†</span>
                Voltar para Home
              </Link>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Aplicar
                </p>
                <h1 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Projetos com alto impacto e agenda dedicada
                </h1>
                <p className="mt-4 max-w-xl text-sm text-muted md:text-base">
                  Preencha o formulário e receba uma resposta rápida com o
                  próximo passo. Selecionamos poucos projetos para garantir
                  execução premium e previsibilidade.
                </p>
              </div>
              <div className="grid gap-4 text-sm text-muted">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  Diagnóstico inicial em até 24h úteis.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  Squad dedicado para estratégia, design e delivery.
                </div>
              </div>
            </div>
            <ApplyForm />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
