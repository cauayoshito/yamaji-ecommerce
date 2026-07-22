import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Layers3, Sparkles } from "lucide-react";
import type { EcosystemSolution } from "@/data/ecosystem";
import { cases } from "@/data/cases";
import { createWhatsAppLink } from "@/lib/contact";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import DeliveryTimeline from "./DeliveryTimeline";
import SegmentMark from "./SegmentMark";
import SolutionMockup from "./SolutionMockup";

export default function VerticalLanding({
  solution,
}: {
  solution: EcosystemSolution;
}) {
  const whatsappLink = createWhatsAppLink(solution.whatsappMessage);
  const relatedCases = cases.filter((item) =>
    solution.caseSlugs.includes(item.slug)
  );
  const alternateComposition =
    solution.slug === "eats" || solution.slug === "legal";

  return (
    <div
      className="ecosystem-site min-h-screen bg-bg text-fg"
      style={{
        "--segment-accent": solution.accent,
        "--segment-soft": solution.accentSoft,
      } as React.CSSProperties}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Ir para o conteúdo
      </a>

      <NavBar />
      <MobileStickyCTA
        label={`${solution.name} · ${solution.audience}`}
        actionLabel={`Falar sobre ${solution.shortName}`}
        actionHref={whatsappLink}
        whatsappHref={whatsappLink}
      />

      <main id="conteudo" className="overflow-hidden pt-16 md:pt-[68px]">
        <section
          className="relative border-b border-white/[0.06] py-14 sm:py-24 lg:py-28"
          data-section={`${solution.slug}-hero`}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 75% 22%, var(--segment-soft), transparent 30%), radial-gradient(circle at 15% 75%, rgba(129,140,248,.07), transparent 28%)",
            }}
          />
          <Container className="relative grid min-w-0 gap-10 sm:gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div
              className={cn(
                "min-w-0",
                alternateComposition && "lg:order-2 lg:pl-8"
              )}
            >
              <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] py-1.5 pl-1.5 pr-4">
                <SegmentMark
                  segment={solution.slug}
                  className="h-8 w-8 shrink-0 rounded-full"
                />
                <span className="truncate text-[10px] font-medium uppercase tracking-[0.15em] text-white/50 sm:tracking-[0.17em]">
                  {solution.name} · {solution.eyebrow}
                </span>
              </div>

              <h1 className="mt-6 max-w-[720px] text-[clamp(2.35rem,11vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:mt-7 sm:tracking-[-0.055em]">
                {solution.heroTitle}
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/58 sm:mt-6 sm:text-lg">
                {solution.heroDescription}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cta="segment-whatsapp"
                  data-label={`${solution.slug}-hero`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--segment-accent)] px-6 text-sm font-semibold text-[#08090B] transition hover:-translate-y-0.5"
                >
                  Falar sobre minha realidade
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#experiencia"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.025] px-6 text-sm font-semibold text-white/80 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  Ver a experiência
                </a>
              </div>
            </div>

            <SolutionMockup
              solution={solution}
              className={cn(
                "min-w-0",
                alternateComposition && "lg:order-1"
              )}
            />
          </Container>
        </section>

        <section
          id="experiencia"
          className="py-16 sm:py-28"
          data-section={`${solution.slug}-contexto`}
        >
          <Container>
            <div className="grid min-w-0 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div
                className={cn(
                  "min-w-0 lg:sticky lg:top-28",
                  alternateComposition && "lg:order-2"
                )}
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--segment-accent)]">
                  Uma situação real
                </span>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                  {solution.scenarioTitle}
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/52 sm:text-base">
                  {solution.scenario}
                </p>
              </div>

              <div
                className={cn(
                  "min-w-0 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-4 sm:rounded-[1.75rem] sm:p-8",
                  alternateComposition && "lg:order-1"
                )}
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-white/35 sm:text-xs">
                  Jornada demonstrada
                </p>
                <ol className="mt-6 space-y-3 sm:mt-7">
                  {solution.flow.map((step, index) => (
                    <li
                      key={step}
                      className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#0B0E12] p-3.5 transition hover:border-white/15 sm:gap-4 sm:p-4"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--segment-soft)] font-mono text-[10px] font-semibold text-[var(--segment-accent)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1 text-sm font-medium leading-relaxed text-white/75">
                        {step}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-white/15 transition group-hover:translate-x-1 group-hover:text-[var(--segment-accent)]" />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Container>
        </section>

        <section
          className="border-y border-white/[0.06] bg-[#0A0C10] py-16 sm:py-28"
          data-section={`${solution.slug}-beneficios`}
        >
          <Container>
            <div className="grid min-w-0 gap-10 sm:gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="min-w-0">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--segment-accent)]">
                  O que muda na rotina
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
                  A tecnologia aparece menos. O resultado aparece mais.
                </h2>
              </div>
              <div className="grid min-w-0 gap-4 sm:grid-cols-3">
                {solution.benefits.map((benefit, index) => (
                  <article
                    key={benefit}
                    className="min-w-0 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5"
                  >
                    <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-[var(--segment-soft)] text-[var(--segment-accent)]">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="mt-7 text-sm font-medium leading-relaxed text-white/75 sm:mt-8">
                      {benefit}
                    </p>
                    <span className="mt-4 block font-mono text-[9px] text-white/20">
                      0{index + 1}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section
          className="py-16 sm:py-28"
          data-section={`${solution.slug}-solucoes`}
        >
          <Container>
            <div className="max-w-3xl">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--segment-accent)]">
                Estrutura para começar
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
                Construída em torno da sua operação.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/50 sm:text-base">
                O diagnóstico define o que entra primeiro. A solução pode começar
                essencial e evoluir sem perder a base.
              </p>
            </div>

            <div className="mt-10 grid min-w-0 gap-4 sm:mt-12 lg:grid-cols-3">
              {solution.offerings.map((offering, index) => (
                <article
                  key={offering.title}
                  className="group min-h-[220px] min-w-0 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-white/15 sm:min-h-[250px] sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    {index === 1 ? (
                      <Sparkles className="h-5 w-5 text-[var(--segment-accent)]" />
                    ) : (
                      <Layers3 className="h-5 w-5 text-[var(--segment-accent)]" />
                    )}
                    <span className="font-mono text-[9px] text-white/20">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-12 text-xl font-semibold text-white sm:mt-14">
                    {offering.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/45">
                    {offering.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="como-funciona"
          className="border-y border-white/[0.06] bg-[#0A0C10] py-16 sm:py-28"
          data-section={`${solution.slug}-processo`}
        >
          <Container>
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--segment-accent)]">
                Do diagnóstico à evolução
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
                Um processo claro para uma solução que continua crescendo.
              </h2>
            </div>
            <DeliveryTimeline />
          </Container>
        </section>

        <section
          className="py-16 sm:py-28"
          data-section={`${solution.slug}-prova`}
        >
          <Container>
            <div className="flex flex-col gap-5 border-b border-white/[0.08] pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0">
                <span className="text-[10px] uppercase tracking-[0.17em] text-[var(--segment-accent)]">
                  {relatedCases.length
                    ? "Projetos relacionados"
                    : "Visão do produto"}
                </span>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                  {relatedCases.length
                    ? "Experiências já construídas pela Yamaji."
                    : "Uma demonstração, não uma promessa vazia."}
                </h2>
              </div>
              <Link
                href="/cases"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--segment-accent)]"
              >
                Ver todos os cases <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {relatedCases.length ? (
              <div className="mt-8 grid min-w-0 gap-5 md:grid-cols-2">
                {relatedCases.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/cases/${item.slug}`}
                    className="group grid min-w-0 overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] sm:grid-cols-[0.42fr_0.58fr]"
                  >
                    <div className="relative min-h-48 overflow-hidden bg-white/[0.03] sm:min-h-52">
                      <Image
                        src={item.cover}
                        alt={`Projeto ${item.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                      />
                    </div>
                    <div className="min-w-0 p-5 sm:p-6">
                      <span className="text-[9px] uppercase tracking-[0.17em] text-[var(--segment-accent)]">
                        Case verificado
                      </span>
                      <h3 className="mt-3 text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/45">
                        {item.summary}
                      </p>
                      <span className="mt-8 inline-flex items-center gap-1.5 text-xs font-semibold text-white/70">
                        Abrir case <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="mt-8 min-w-0">
                <SolutionMockup solution={solution} compact />
                <p className="mt-4 text-xs leading-relaxed text-white/35">
                  Demonstração conceitual da experiência. Não representa um
                  cliente ou resultado real.
                </p>
              </div>
            )}
          </Container>
        </section>

        <section
          className="pb-16 sm:pb-28"
          data-section={`${solution.slug}-cta`}
        >
          <Container>
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/[0.09] bg-[#0C1114] px-5 py-14 text-center sm:rounded-[2rem] sm:px-12 sm:py-20">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 120%, var(--segment-soft), transparent 45%)",
                }}
              />
              <div className="relative mx-auto max-w-3xl">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--segment-accent)]">
                  Próximo passo
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Seu negócio não precisa se adaptar a um sistema genérico.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/50 sm:text-base">
                  A Yamaji entende sua realidade e mostra o que faz sentido
                  construir primeiro.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cta="segment-whatsapp"
                  data-label={`${solution.slug}-final`}
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--segment-accent)] px-6 text-sm font-semibold text-[#08090B] transition hover:-translate-y-0.5"
                >
                  Conversar sobre {solution.shortName}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
