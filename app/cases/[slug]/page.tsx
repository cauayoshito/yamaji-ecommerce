import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import MetricChip from "@/components/ui/MetricChip";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { APPLY_ROUTE } from "@/lib/routes";
import SectionHeader from "@/components/ui/SectionHeader";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import { cases } from "@/data/cases";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = cases.find((caseItem) => caseItem.slug === slug);
  if (!item) {
    return { title: "Case não encontrado" };
  }
  return {
    title: item.title,
    description: item.summary,
  };
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = cases.find((caseItem) => caseItem.slug === slug);
  if (!item) {
    notFound();
  }

  return (
    <>
      <NavBar />
      <main className="bg-bg text-fg">
        <section className="section">
          <Container className="space-y-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  {item.type} • {item.segment}
                </span>
                <h1 className="h1">{item.title}</h1>
                <p className="text-sm text-muted md:text-lg">{item.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {item.metrics.map((metric) => (
                    <MetricChip key={metric}>{metric}</MetricChip>
                  ))}
                </div>
              </div>
              <GlassCard className="p-0">
                <Image
                  src={item.cover}
                  alt={`Case ${item.title}`}
                  width={520}
                  height={360}
                  className="h-full w-full rounded-2xl object-cover"
                />
              </GlassCard>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div className="space-y-4">
                <SectionHeader
                  eyebrow="Problema"
                  title="Desafio mapeado"
                  description={item.problem}
                />
              </div>
              <div className="space-y-4">
                <SectionHeader
                  eyebrow="Solução"
                  title="Estrutura aplicada"
                  description={item.solution}
                />
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <GlassCard className="space-y-4">
                <h3 className="text-lg font-semibold">Entregáveis</h3>
                <ul className="space-y-2 text-sm text-muted">
                  {item.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}.</li>
                  ))}
                </ul>
              </GlassCard>
              <GlassCard className="space-y-4">
                <h3 className="text-lg font-semibold">Stack</h3>
                <ul className="space-y-2 text-sm text-muted">
                  {item.stack.map((stackItem) => (
                    <li key={stackItem}>{stackItem}.</li>
                  ))}
                </ul>
              </GlassCard>
            </div>

            <GlassCard className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">
                  Pronto para um projeto com padrão tech?
                </h3>
                <p className="text-sm text-muted">
                  Vamos mapear o seu cenário e construir a próxima fase.
                </p>
              </div>
              <PrimaryButton href={APPLY_ROUTE} label="Agendar consultoria" />
            </GlassCard>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
