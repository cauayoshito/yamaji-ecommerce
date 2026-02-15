import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionHeader from "@/components/ui/SectionHeader";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import { APPLY_ROUTE } from "@/lib/routes";

export const metadata: Metadata = {
  title: "CRM para Clinicas",
  description:
    "Sistema para clinicas organizarem relacao com pacientes, agenda e recorrencia com controle operacional.",
};

export default function CrmClinicasPage() {
  return (
    <>
      <NavBar />
      <main className="bg-bg text-fg">
        <section className="section bg-[#0A0A0B]">
          <Container className="space-y-6">
            <SectionHeader
              eyebrow="Sistema"
              title="CRM para Clinicas"
              description="Arquitetura para organizar atendimento, retorno e evolucao da carteira de pacientes."
            />
            <PrimaryButton href={APPLY_ROUTE} label="Solicitar apresentacao" />
          </Container>
        </section>

        <section className="section bg-[#050607]">
          <Container className="space-y-8">
            <SectionHeader
              eyebrow="Problema"
              title="Agenda cheia nao significa operacao organizada"
              description="Sem controle de relacionamento, a clinica perde recorrencia e previsibilidade de ocupacao."
            />
            <ul className="grid gap-4 md:grid-cols-2">
              {[
                "Retornos sem acompanhamento",
                "Historico disperso por canal",
                "Equipe sem visao da jornada",
                "Baixa recorrencia de pacientes",
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
              description="Uma estrutura unica para controlar agenda, relacionamento e continuidade do atendimento."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Cadastro unico de pacientes",
                "Visao da jornada por etapa",
                "Lembretes de retorno e revisao",
                "Painel de ocupacao e recorrencia",
                "Segmentacao por especialidade",
                "Padrao de comunicacao da equipe",
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
              description="Um ciclo recorrente para manter relacao ativa e agenda previsivel."
            />
            <div className="grid gap-5 md:grid-cols-4">
              {[
                "Entrada",
                "Classificacao",
                "Acompanhamento",
                "Recorrencia",
              ].map((step, index) => (
                <GlassCard key={step} className="h-full space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg font-semibold">{step}</h3>
                  <p className="text-sm text-muted">
                    Fluxo operacional para manter consistencia de atendimento.
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
                Avalie como esta estrutura pode evoluir a operacao da sua clinica.
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
