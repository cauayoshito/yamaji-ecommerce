import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Yamaji Studio e o caminho para construir estruturas digitais com linguagem premium.",
};

export default function SobrePage() {
  return (
    <>
      <NavBar />
      <main className="bg-bg text-fg">
        <section className="section">
          <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Sobre"
                title="Uma agência que pensa como empresa tech"
                description="Somos um estúdio especializado em criar plataformas, automações e experiências digitais com padrão premium."
              />
              <p className="text-sm text-muted md:text-base">
                A Yamaji nasceu em Salvador com a missão de unir design
                editorial, engenharia e performance. Hoje atuamos como squad
                estratégico para negócios que precisam de estrutura não apenas
                de presença.
              </p>
              <Divider />
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    year: "2023",
                    text: "Consolidação do método: sites com foco em conversão e SEO.",
                  },
                  {
                    year: "2024",
                    text: "Evolução para estúdio tech: design + engenharia + performance.",
                  },
                  {
                    year: "2025",
                    text: "Sistemas e automações: integrações, dashboards e fluxos no WhatsApp.",
                  },
                  {
                    year: "2026",
                    text: "Estrutura digital premium: presença, sistemas e growth conectados.",
                  },
                ].map((item) => (
                  <GlassCard
                    key={item.year}
                    className="space-y-2 backdrop-blur-sm from-zinc-900/90 to-zinc-950/90"
                  >
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                      {item.year}
                    </span>
                    <p className="text-sm text-zinc-300">{item.text}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
            <GlassCard className="p-0">
              <Image
                src="/images/sobrepro.png"
                alt="Imagem ilustrativa da Yamaji Studio"
                width={520}
                height={640}
                className="h-full w-full rounded-2xl object-cover"
              />
            </GlassCard>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
