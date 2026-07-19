import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Blocks,
  Bot,
  Braces,
  Headphones,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import SegmentCard from "@/components/ecosystem/SegmentCard";
import SegmentExplorer from "@/components/ecosystem/SegmentExplorer";
import DeliveryTimeline from "@/components/ecosystem/DeliveryTimeline";
import SegmentMark from "@/components/ecosystem/SegmentMark";
import { ecosystemSolutions } from "@/data/ecosystem";
import { cases } from "@/data/cases";
import { GENERAL_WHATSAPP_LINK } from "@/lib/contact";

export const metadata: Metadata = {
  title: { absolute: "Ecossistema Yamaji — Tecnologia que entende o seu negócio" },
  description:
    "Sites, sistemas, automação e IA para empresas, restaurantes, academias e escritórios. Conheça Yamaji Studio, Eats, Fit e Legal.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ecossistema Yamaji — Uma Yamaji para cada tipo de negócio",
    description:
      "Sites, sistemas, automação e IA para empresas, restaurantes, academias e escritórios.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecossistema Yamaji — Uma Yamaji para cada tipo de negócio",
    description:
      "Sites, sistemas, automação e IA para empresas, restaurantes, academias e escritórios.",
  },
};

const foundations = [
  {
    icon: Sparkles,
    title: "Estratégia",
    description: "Começamos pelo problema que precisa ser resolvido.",
  },
  {
    icon: Braces,
    title: "Experiência & design",
    description: "Cada tela nasce da rotina de quem realmente vai usar.",
  },
  {
    icon: Blocks,
    title: "Sistemas & integrações",
    description: "As partes do negócio conversam em uma estrutura preparada para evoluir.",
  },
  {
    icon: Bot,
    title: "Automação & IA",
    description: "Tecnologia aplicada onde ela reduz espera e trabalho repetitivo.",
  },
  {
    icon: Headphones,
    title: "Acompanhamento humano",
    description: "O projeto continua sendo acompanhado depois da ativação.",
  },
];

export default function Page() {
  const featuredCases = cases.slice(0, 4);

  return (
    <div className="ecosystem-site min-h-screen bg-bg text-fg">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Ir para o conteúdo
      </a>
      <NavBar />

      <a
        href={GENERAL_WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Falar com a Yamaji no WhatsApp"
        data-cta="whatsapp"
        data-label="mobile-floating-whatsapp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-14px_rgba(37,211,102,.7)] transition hover:scale-105 lg:hidden"
      >
        <MessageCircle className="h-6 w-6" fill="currentColor" />
      </a>

      <main id="conteudo" className="overflow-hidden pt-16 md:pt-[68px]">
        <section className="relative min-h-[calc(100svh-4rem)] border-b border-white/[0.06] py-16 sm:py-20 lg:grid lg:place-items-center lg:py-24" data-section="hero">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(94,234,212,.12),transparent_30%),radial-gradient(circle_at_20%_82%,rgba(129,140,248,.08),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:42px_42px] opacity-[0.16] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

          <Container className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
                Ecossistema Yamaji
              </div>

              <h1 className="mt-7 max-w-[850px] text-[clamp(3.1rem,7vw,6.6rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white">
                Uma Yamaji para cada tipo de negócio.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
                Sites, sistemas, automação e IA criados para a realidade de empresas, restaurantes, academias e escritórios.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#solucoes"
                  data-cta="primary"
                  data-label="hero-find-solution"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-[#08090B] transition hover:-translate-y-0.5 hover:bg-[#7bf0dc]"
                >
                  Encontrar minha solução
                  <ArrowDown className="h-4 w-4" />
                </a>
                <a
                  href="#experiencia"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.025] px-6 py-3.5 text-sm font-semibold text-white/80 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  Conhecer o ecossistema
                </a>
              </div>

              <div className="mt-10 flex items-center gap-3 text-xs text-white/35">
                <span className="h-px w-10 bg-white/15" />
                <span>Estratégia · Produto · Tecnologia · Acompanhamento</span>
              </div>
            </div>

            <EcosystemConstellation />
          </Container>
        </section>

        <section id="solucoes" className="py-20 sm:py-28" data-section="solucoes">
          <Container>
            <div className="grid gap-8 border-b border-white/[0.08] pb-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                Quatro frentes especializadas
              </p>
              <div>
                <h2 className="max-w-4xl text-3xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                  Qual é a realidade do seu negócio?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50">
                  Escolha o cenário que mais se aproxima da sua operação. Cada frente fala a linguagem daquele mercado.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {ecosystemSolutions.map((solution) => (
                <SegmentCard key={solution.slug} solution={solution} />
              ))}
            </div>
          </Container>
        </section>

        <section id="experiencia" className="border-y border-white/[0.06] bg-[#0A0C10] py-20 sm:py-28" data-section="experiencia">
          <Container>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                Veja antes de imaginar
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Tecnologia apresentada dentro da rotina.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/50">
                Não é um painel decorativo. É uma demonstração visual do caminho que cliente e equipe percorrem.
              </p>
            </div>
            <SegmentExplorer />
          </Container>
        </section>

        <section className="py-20 sm:py-28" data-section="base-compartilhada">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                  Base compartilhada
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Mercados diferentes. A mesma inteligência de construção.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/50">
                  A especialização muda a experiência. A qualidade técnica, o processo e o acompanhamento continuam conectados pela Yamaji.
                </p>
              </div>

              <div className="border-t border-white/[0.08]">
                {foundations.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="grid gap-4 border-b border-white/[0.08] py-6 sm:grid-cols-[48px_0.6fr_1fr] sm:items-center">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="text-base font-semibold text-white">
                        <span className="mr-2 font-mono text-[9px] text-white/20">0{index + 1}</span>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/45">{item.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        <section id="como-funciona" className="border-y border-white/[0.06] bg-[#0A0C10] py-20 sm:py-28" data-section="processo">
          <Container>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                Como a Yamaji trabalha
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Da realidade do negócio à solução funcionando.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/50">
                O projeto começa pelo que precisa mudar, não por uma lista pronta de funcionalidades.
              </p>
            </div>
            <DeliveryTimeline />
          </Container>
        </section>

        <section id="cases" className="py-20 sm:py-28" data-section="cases">
          <Container>
            <div className="flex flex-col gap-6 border-b border-white/[0.08] pb-9 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                  Cases verificados
                </span>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Projetos para negócios reais.
                </h2>
              </div>
              <Link href="/cases" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Explorar todos os cases
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {featuredCases.map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/cases/${item.slug}`}
                  className="group grid min-h-[290px] overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-white/[0.025] transition hover:-translate-y-1 hover:border-white/15 sm:grid-cols-[0.44fr_0.56fr]"
                >
                  <div className="relative min-h-48 overflow-hidden bg-white/[0.03]">
                    <Image
                      src={item.cover}
                      alt={`Projeto ${item.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-2.5 py-1 text-[8px] uppercase tracking-[0.15em] text-white/60 backdrop-blur">
                      Projeto 0{index + 1}
                    </span>
                  </div>
                  <div className="flex flex-col p-6">
                    <span className="text-[9px] uppercase tracking-[0.17em] text-accent">
                      {item.type} · {item.segment}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/45">{item.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-white/70">
                      Conhecer projeto <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section id="cta" className="pb-20 sm:pb-28" data-section="cta-final">
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0B1113] px-6 py-16 text-center sm:px-12 sm:py-24">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(94,234,212,.18),transparent_46%)]" />
              <div className="relative mx-auto max-w-4xl">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">Encontre seu ponto de partida</span>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-6xl">
                  Seu negócio não precisa se adaptar a um sistema genérico.
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50">
                  A Yamaji encontra a solução certa para sua realidade e mostra por onde começar.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href="#solucoes" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-[#08090B] transition hover:-translate-y-0.5">
                    Encontrar minha solução <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href={GENERAL_WHATSAPP_LINK} target="_blank" rel="noreferrer noopener" data-cta="whatsapp" data-label="home-final-whatsapp" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.025] px-6 py-3.5 text-sm font-semibold text-white/80 transition hover:border-white/20 hover:bg-white/[0.05]">
                    <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function EcosystemConstellation() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px]" aria-label="Quatro soluções conectadas pelo Ecossistema Yamaji">
      <div className="absolute inset-[12%] rounded-full border border-white/[0.06]" />
      <div className="absolute inset-[28%] rounded-full border border-dashed border-accent/15 motion-safe:animate-[spin_38s_linear_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(94,234,212,.13),transparent_45%)]" />

      <div className="absolute left-1/2 top-1/2 z-20 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent/25 bg-[#0B1113]/95 text-center shadow-[0_0_80px_-24px_rgba(94,234,212,.7)] backdrop-blur sm:h-36 sm:w-36">
        <div>
          <span className="block text-[9px] uppercase tracking-[0.2em] text-accent">Ecossistema</span>
          <span className="mt-1 block text-lg font-semibold text-white sm:text-2xl">Yamaji</span>
          <span className="mt-2 block text-[8px] text-white/30">uma base conectada</span>
        </div>
      </div>

      <div className="absolute left-[2%] top-[11%] w-[44%] sm:w-[38%]">
        <ConstellationCard solution={ecosystemSolutions[0]} />
      </div>
      <div className="absolute right-[1%] top-[8%] w-[43%] sm:w-[37%]">
        <ConstellationCard solution={ecosystemSolutions[1]} />
      </div>
      <div className="absolute bottom-[7%] left-[1%] w-[43%] sm:w-[37%]">
        <ConstellationCard solution={ecosystemSolutions[2]} />
      </div>
      <div className="absolute bottom-[10%] right-[1%] w-[43%] sm:w-[37%]">
        <ConstellationCard solution={ecosystemSolutions[3]} />
      </div>
    </div>
  );
}

function ConstellationCard({ solution }: { solution: (typeof ecosystemSolutions)[number] }) {
  return (
    <Link
      href={`/${solution.slug}`}
      className="group block rounded-2xl border border-white/[0.09] bg-[#0C0F14]/90 p-3 shadow-[0_20px_55px_-32px_rgba(0,0,0,.95)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20 sm:p-4"
      style={{
        "--segment-accent": solution.accent,
        "--segment-soft": solution.accentSoft,
      } as React.CSSProperties}
    >
      <div className="flex items-center gap-2.5">
        <SegmentMark segment={solution.slug} className="h-8 w-8 rounded-lg" />
        <div className="min-w-0">
          <p className="truncate text-[9px] uppercase tracking-[0.14em] text-white/30">Yamaji</p>
          <p className="truncate text-xs font-semibold text-white sm:text-sm">{solution.shortName}</p>
        </div>
      </div>
      <div className="mt-3 hidden h-px bg-gradient-to-r from-[var(--segment-accent)]/30 to-transparent sm:block" />
      <p className="mt-3 hidden text-[10px] leading-relaxed text-white/35 sm:block">{solution.tags.join(" · ")}</p>
    </Link>
  );
}
