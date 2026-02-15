import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionHeader from "@/components/ui/SectionHeader";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import { APPLY_ROUTE } from "@/lib/routes";

const DEMO_ROUTE = "/sistemas/plataforma-educacional/demo";

export const metadata: Metadata = {
  title: "Plataforma Educacional",
  description:
    "Sistema educacional para organizar trilhas, alunos e recorrencia em uma estrutura proprietaria.",
};

export default function PlataformaEducacionalPage() {
  return (
    <>
      <NavBar />
      <main className="bg-bg text-fg">
        {/* HERO */}
        <section className="section bg-[#0A0A0B]">
          <Container className="space-y-8">
            <SectionHeader
              eyebrow="Sistema"
              title="Plataforma Educacional"
              description="Estrutura para organizar conteúdo, jornada do aluno e operação de recorrência."
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton href={APPLY_ROUTE} label="Agendar apresentação" />

              <a
                href={DEMO_ROUTE}
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-fg hover:border-white/25 hover:bg-white/[0.07] transition"
              >
                Ver demo <span className="ml-2">↗</span>
              </a>
            </div>
          </Container>
        </section>

        {/* PROBLEMA */}
        <section className="section bg-[#050607]">
          <Container className="space-y-8">
            <SectionHeader
              eyebrow="Problema"
              title="Conteúdo cresce. A operação perde controle."
              description="Sem arquitetura educacional, turmas e acompanhamento ficam fragmentados."
            />

            <ul className="grid gap-4 md:grid-cols-2">
              {[
                "Materiais espalhados em canais diferentes",
                "Baixa visibilidade da jornada do aluno",
                "Dificuldade para manter recorrência",
                "Gestão manual de turmas e acessos",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* ENTREGA */}
        <section className="section bg-[#0B0F14]">
          <Container className="space-y-8">
            <SectionHeader
              eyebrow="Entrega"
              title="O que entrega"
              description="Uma plataforma para centralizar aprendizado, progresso e controle acadêmico."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Ambiente único para aulas e materiais",
                "Trilhas de aprendizagem por nível",
                "Painel de progresso por turma",
                "Gestão de matrículas e recorrência",
                "Comunicação institucional com alunos",
                "Visão operacional para coordenação",
              ].map((item) => (
                <GlassCard key={item} className="h-full py-5">
                  <p className="text-sm text-fg">{item}</p>
                </GlassCard>
              ))}
            </div>
          </Container>
        </section>

        {/* FLUXO */}
        <section className="section bg-[#0A0A0B]">
          <Container className="space-y-10">
            <SectionHeader
              eyebrow="Fluxo"
              title="Como funciona"
              description="Uma operação educacional simples de acompanhar e pronta para escala."
            />

            <div className="grid gap-5 md:grid-cols-4">
              {["Matrícula", "Acesso", "Acompanhamento", "Evolução"].map(
                (step, index) => (
                  <GlassCard key={step} className="h-full space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-semibold">{step}</h3>
                    <p className="text-sm text-muted">
                      Etapas conectadas para garantir experiência consistente e
                      controle institucional.
                    </p>
                  </GlassCard>
                )
              )}
            </div>
          </Container>
        </section>

        {/* CTA FINAL */}
        <section className="pb-24 bg-[#0A0A0B]">
          <Container>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 text-center">
              <h2 className="text-2xl font-semibold md:text-4xl">
                Quer ver funcionando na prática?
              </h2>

              <p className="mt-3 text-sm text-muted">
                Agende uma apresentação personalizada ou explore a demonstração
                completa.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <PrimaryButton
                  href={APPLY_ROUTE}
                  label="Agendar apresentação"
                />

                <a
                  href={DEMO_ROUTE}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-fg hover:border-white/25 hover:bg-white/[0.07] transition"
                >
                  Ver demo <span className="ml-2">↗</span>
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
