import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import CasesDirectory from "@/components/site/CasesDirectory";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Cases da Yamaji Studio: sistemas, automações, presença digital e growth.",
};

export default function CasesPage() {
  return (
    <>
      <NavBar />
      <main className="bg-bg text-fg">
        <section className="section">
          <Container>
            <SectionHeader
              eyebrow="Cases"
              title="Resultados com visão de produto"
              description="Selecione um pilar para ver resultados e entregáveis."
            />
            <div className="mt-12">
              <CasesDirectory />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
