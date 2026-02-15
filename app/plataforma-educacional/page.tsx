import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionHeader from "@/components/ui/SectionHeader";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import { APPLY_ROUTE } from "@/lib/routes";

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
        <section className="section bg-[#0A0A0B]">
          <Container className="space-y-6">
            <SectionHeader
              eyebrow="Sistema"
              title="Plataforma Educacional"
              description="Estrutura para organizar conteudo, jornada do aluno e operacao de recorrencia."
            />
            <PrimaryButton href={APPLY_ROUTE} label="Solicitar apresentacao" />
          </Container>
        </section>

        <section className="section bg-[#050607]">
          <Container className="space-y-8">
            <SectionHeader
              eyebrow="Problema"
              title="Conteudo cresce. A operacao perde controle"
              description="Sem arquitetura educacional, turmas e acompanhamento ficam fragmentados."
            />
            <ul className="grid gap-4 md:grid-cols-2">
              {[
                "Materiais espalhados em canais diferentes",
                "Baixa visibilidade da jornada do aluno",
                "Dificuldade para manter recorrencia",
                "Gestao manual de turmas e acessos",
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

        <section className="section bg-[#0B0F14]">
          <Container className="space-y-8">
            <SectionHeader
              eyebrow="Entrega"
              title="O que entrega"
              description="Uma plataforma para centralizar aprendizado, progresso e controle academico."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Ambiente unico para aulas e materiais",
                "Trilhas de aprendizagem por nivel",
                "Painel de progresso por turma",
                "Gestao de matriculas e recorrencia",
                "Comunicacao institucional com alunos",
                "Visao operacional para coordenacao",
              ].map((item) => (
                <GlassCard key={item} className="h-full py-5">
                  <p className="text-sm text-fg">{item}</p>
                </GlassCard>
              ))}
            </div>
          </Container>
        </section>

        <section className="section bg-[#0A0A0B]">
          <Container className="space-y-10">
            <SectionHeader
              eyebrow="Fluxo"
              title="Como funciona"
              description="Uma operacao educacional simples de acompanhar e pronta para escala."
            />
            <div className="grid gap-5 md:grid-cols-4">
              {[
                "Matricula",
                "Acesso",
                "Acompanhamento",
                "Evolucao",
              ].map((step, index) => (
                <GlassCard key={step} className="h-full space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg font-semibold">{step}</h3>
                  <p className="text-sm text-muted">
                    Etapas conectadas para garantir experiencia consistente e controle institucional.
                  </p>
                </GlassCard>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-24 bg-[#0A0A0B]">
          <Container>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
              <h2 className="text-2xl font-semibold md:text-4xl">
                Solicitar apresentacao
              </h2>
              <p className="mt-3 text-sm text-muted">
                Veja uma demonstracao da estrutura aplicada ao seu modelo educacional.
              </p>
              <div className="mt-6">
                <PrimaryButton href={APPLY_ROUTE} label="Solicitar apresentacao" />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
