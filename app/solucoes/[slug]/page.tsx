import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { APPLY_ROUTE } from "@/lib/routes";
import SectionHeader from "@/components/ui/SectionHeader";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import { solutions } from "@/data/solutions";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) {
    return { title: "Solução não encontrada" };
  }
  return {
    title: solution.title,
    description: solution.description,
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) {
    notFound();
  }

  return (
    <>
      <NavBar />
      <main className="bg-bg text-fg">
        <section className="section">
          <Container className="space-y-12">
            <SectionHeader
              eyebrow="Soluções"
              title={solution.title}
              description={solution.description}
            />

            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <GlassCard className="space-y-4">
                <h3 className="text-lg font-semibold">Para quem é</h3>
                <p className="text-sm text-muted">{solution.subtitle}</p>
                <ul className="space-y-2 text-sm text-muted">
                  {solution.bullets.map((item) => (
                    <li key={item}>{item}.</li>
                  ))}
                </ul>
              </GlassCard>
              <GlassCard className="space-y-4">
                <h3 className="text-lg font-semibold">Entregáveis</h3>
                <ul className="space-y-2 text-sm text-muted">
                  {solution.highlights.map((item) => (
                    <li key={item}>{item}.</li>
                  ))}
                </ul>
              </GlassCard>
            </div>

            <GlassCard className="space-y-4">
              <h3 className="text-lg font-semibold">Processo editorial</h3>
              <p className="text-sm text-muted">
                Definimos objetivos, mapeamos dados críticos, criamos protótipos
                rápidos e entregamos incrementos contínuos com monitoramento
                mensal.
              </p>
            </GlassCard>

            <GlassCard className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  Pronto para estruturar este pilar?
                </h3>
                <p className="text-sm text-muted">
                  Vamos discutir prazos, escopo e próximos passos.
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
