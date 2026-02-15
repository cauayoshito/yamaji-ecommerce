import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  Code2,
  Funnel,
  Layers3,
  Sparkles,
} from "lucide-react";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import Container from "@/components/ui/Container";
import PlatformEducationDemo from "@/components/sistemas/PlatformEducationDemo";

const DEMO_ROUTE = "/sistemas/plataforma-educacional/demo";

const whatsappMessage = encodeURIComponent(
  "Quero a Plataforma Educacional (Yamaji Academy): formações, módulos, aulas e progresso. Meu nicho é: ____."
);

const whatsappHref = `https://wa.me/5571992258349?text=${whatsappMessage}`;

const tracks = [
  {
    title: "Engenharia de Sites",
    text: "Domine landing pages de alta conversão e plataformas web performáticas.",
    tags: ["Front-end", "Performance"],
    icon: Code2,
  },
  {
    title: "Tráfego + Funil",
    text: "Estratégias de aquisição de leads e arquitetura de funis orientados a dados.",
    tags: ["Ads", "Analytics"],
    icon: Funnel,
  },
  {
    title: "CRM + Automação",
    text: "Conecte ferramentas, eventos e regras para operação comercial previsível.",
    tags: ["n8n", "Webhooks"],
    icon: Layers3,
  },
  {
    title: "IA Aplicada",
    text: "Implemente IA em fluxos de atendimento, vendas e conteúdo em escala.",
    tags: ["LLMs", "Agents"],
    icon: Bot,
  },
];

const levels = [
  {
    level: "Nível 01",
    title: "Essencial",
    text: "Fundamentos, páginas, copy e setup inicial para colocar a operação no ar.",
  },
  {
    level: "Nível 02",
    title: "Estruturado",
    text: "Funis, CRM e automações para elevar eficiência e clareza de operação.",
    active: true,
  },
  {
    level: "Nível 03",
    title: "Inteligente",
    text: "IA aplicada e sistema autônomo com otimização contínua para escala.",
  },
];

export default function PlataformaEducacionalPage() {
  return (
    <>
      <NavBar />

      <main className="overflow-x-hidden bg-bg pt-24 text-fg">
        <section className="relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-20">
          <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.08]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />

          <Container className="relative z-10 text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-accent">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              Nova turma aberta para Engenharia de Sites
            </div>

            <h1 className="mx-auto mt-8 max-w-5xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Aprenda a construir estrutura.
              <br />
              <span className="bg-gradient-to-r from-white to-white/45 bg-clip-text text-transparent">
                Evolua com tecnologia.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base text-white/60 md:text-xl">
              Formações práticas para devs, agências e negócios digitais que
              querem escalar com sistemas robustos e inteligência aplicada.
            </p>

            {/* ✅ CTAs do HERO (WhatsApp + Agendar + Ver demo) */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-black shadow-[0_0_18px_rgba(19,236,146,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(19,236,146,0.42)] sm:w-auto"
              >
                <Sparkles className="h-4 w-4" />
                Falar no WhatsApp
              </a>

              <Link
                href="/aplicar"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/5 sm:w-auto"
              >
                <CalendarDays className="h-4 w-4 text-white/70" />
                Agendar apresentação
              </Link>

              <Link
                href={DEMO_ROUTE}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/5 sm:w-auto"
              >
                Ver demo <span className="text-white/60">↗</span>
              </Link>
            </div>

            <div className="mt-16 border-t border-white/10 pt-8">
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/45">
                Stack Tecnológica & Parceiros
              </p>
              <div className="flex flex-wrap justify-center gap-4 opacity-65">
                {["NEXT.JS", "REACT", "PYTHON", "OPENAI", "STRIPE"].map(
                  (item) => (
                    <div
                      key={item}
                      className="inline-flex h-8 min-w-24 items-center justify-center rounded border border-white/10 bg-white/5 px-3 text-xs font-mono"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </Container>
        </section>

        <section className="relative bg-surface/40 py-24">
          <Container>
            <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Nossas Formações
                </h2>
                <p className="mt-3 max-w-lg text-white/60">
                  Conteúdo denso, prático e focado em aplicação real de mercado.
                </p>
              </div>
              <Link
                href="/sistemas"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition hover:text-white"
              >
                Ver todas as trilhas <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {tracks.map((track) => {
                const Icon = track.icon;

                return (
                  <article
                    key={track.title}
                    className="group flex h-full flex-col rounded-xl border border-white/10 bg-[#12161f]/65 p-6 backdrop-blur-lg transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(19,236,146,0.14)]"
                  >
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-surface text-accent transition group-hover:border-accent/40">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold transition group-hover:text-accent">
                      {track.title}
                    </h3>
                    <p className="mt-2 flex-grow text-sm text-white/60">
                      {track.text}
                    </p>
                    <div className="mt-6 flex items-center gap-3 text-xs text-white/50">
                      {track.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section id="resultados" className="relative overflow-hidden py-24">
          <div className="pointer-events-none absolute right-0 top-1/2 h-full w-1/2 -translate-y-1/2 bg-gradient-to-l from-surface/60 to-transparent" />

          <Container className="relative z-10">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Progresso em Níveis
              </h2>
              <p className="mt-3 text-white/60">
                A jornada dentro do ecossistema Yamaji.
              </p>
            </div>

            <div className="relative grid gap-8 md:grid-cols-3">
              <div className="absolute left-0 top-12 z-0 hidden h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent md:block" />

              {levels.map((level) => (
                <article key={level.title} className="relative z-10">
                  <div
                    className={
                      level.active
                        ? "mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-accent/50 bg-bg shadow-[0_0_30px_rgba(19,236,146,0.14)]"
                        : "mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-white/10 bg-bg"
                    }
                  >
                    <Layers3
                      className={
                        level.active
                          ? "h-9 w-9 text-accent"
                          : "h-9 w-9 text-white/45"
                      }
                    />
                  </div>
                  <div
                    className={
                      level.active
                        ? "relative rounded-xl border border-accent/25 bg-surface/60 p-6 text-center"
                        : "rounded-xl border border-white/10 bg-surface/45 p-6 text-center"
                    }
                  >
                    {level.active ? (
                      <div className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-b from-accent/20 to-transparent opacity-30 blur" />
                    ) : null}
                    <p className="relative text-xs uppercase tracking-[0.16em] text-accent">
                      {level.level}
                    </p>
                    <h3 className="relative mt-2 text-xl font-bold">
                      {level.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-white/60">
                      {level.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="metodologia"
          className="border-y border-white/10 bg-surface py-24"
        >
          <Container className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Metodologia Prática
              </h2>
              <p className="mt-5 text-lg text-white/60">
                Todo conteúdo da Yamaji Academy parte de problemas reais
                resolvidos no nosso estúdio de desenvolvimento.
              </p>

              <div className="mt-10 space-y-8">
                {[
                  [
                    "1",
                    "Diagnóstico & Estratégia",
                    "Arquitetura ideal para o estágio atual do negócio.",
                  ],
                  [
                    "2",
                    "Implementação Guiada",
                    "Aulas tela a tela, com código e configuração completa.",
                  ],
                  [
                    "3",
                    "Otimização & Escala",
                    "Métricas e ajustes contínuos para performance e ROI.",
                  ],
                ].map(([index, title, text], idx) => (
                  <div key={title} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-bold text-accent">
                        {index}
                      </span>
                      {idx < 2 ? (
                        <span className="my-2 h-full w-px bg-white/10" />
                      ) : null}
                    </div>
                    <div className={idx < 2 ? "pb-8" : ""}>
                      <h3 className="text-xl font-bold">{title}</h3>
                      <p className="mt-2 text-sm text-white/60">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-bg p-6 shadow-2xl">
              <div className="space-y-4">
                <div className="rounded-lg border border-white/10 bg-surface p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="h-2 w-24 rounded bg-white/20" />
                    <div className="h-2 w-10 rounded bg-accent/50" />
                  </div>
                  <div className="flex h-24 items-end justify-around rounded bg-gradient-to-t from-accent/10 to-transparent px-3 pb-2">
                    {[
                      "h-[40%]",
                      "h-[60%]",
                      "h-[30%]",
                      "h-[80%]",
                      "h-[50%]",
                    ].map((heightClass, i) => (
                      <span
                        key={i}
                        className={`w-4 rounded-t bg-accent/60 ${heightClass}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="ml-auto w-[90%] rounded-lg border border-white/10 bg-surface p-4">
                  <div className="mb-3 flex gap-3">
                    <div className="h-8 w-8 rounded bg-white/10" />
                    <div className="space-y-1">
                      <div className="h-2 w-20 rounded bg-white/20" />
                      <div className="h-1.5 w-14 rounded bg-white/10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-4/5 rounded bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-24" id="demonstracao">
          <Container>
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Demonstração</h2>
              <p className="mt-3 text-white/60">
                Visualize a experiência da plataforma com as principais áreas da
                operação.
              </p>

              {/* ✅ Botões aqui também, pra converter no meio */}
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/aplicar"
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-7 py-3 text-sm font-bold text-black shadow-[0_0_18px_rgba(19,236,146,0.22)] transition hover:-translate-y-0.5"
                >
                  Agendar apresentação
                </Link>
                <Link
                  href={DEMO_ROUTE}
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Ver demo ↗
                </Link>
              </div>
            </div>

            <PlatformEducationDemo />
          </Container>
        </section>

        <section className="relative overflow-hidden py-24">
          <div className="pointer-events-none absolute inset-0 bg-accent/5" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />

          <Container className="relative z-10 max-w-4xl text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              Pronto para escalar sua operação?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/60">
              Junte tecnologia, conteúdo e crescimento em uma plataforma
              educacional pronta para monetizar conhecimento.
            </p>

            {/* ✅ CTA final com Ver demo também */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/aplicar"
                className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-10 py-5 text-base font-bold text-black shadow-[0_0_24px_rgba(19,236,146,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(19,236,146,0.48)] sm:w-auto"
              >
                Agendar apresentação
              </Link>

              <Link
                href={DEMO_ROUTE}
                className="inline-flex w-full items-center justify-center rounded-lg border border-white/20 bg-white/[0.03] px-10 py-5 text-base font-medium text-white transition hover:bg-white/5 sm:w-auto"
              >
                Ver demo ↗
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
