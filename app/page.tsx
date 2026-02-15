import Link from "next/link";
import NavBar from "@/components/site/NavBar";

const heroMessage = encodeURIComponent(
  "Olá, vim pelo site da Yamaji Studio. Quero estruturar meu negócio digital e entender por onde começar."
);
const siteMessage = encodeURIComponent(
  "Olá, quero começar estruturando minha presença digital com um site profissional."
);

const heroWhatsAppLink = `https://wa.me/5571992258349?text=${heroMessage}`;
const siteWhatsAppLink = `https://wa.me/5571992258349?text=${siteMessage}`;

const growthLevels = [
  {
    index: "01",
    title: "Essencial",
    description: "Fundação digital sólida com presença profissional.",
    bullets: [
      "Site profissional de alta performance",
      "Landing page orientada à conversão",
      "SEO técnico inicial",
    ],
  },
  {
    index: "02",
    title: "Estruturado",
    description: "Tração comercial com dados organizados.",
    bullets: [
      "Gestão de tráfego pago",
      "Captação automatizada",
      "Integração com CRM",
    ],
    featured: true,
  },
  {
    index: "03",
    title: "Inteligente",
    description: "Automação avançada e decisões guiadas por IA.",
    bullets: [
      "CRM com inteligência aplicada",
      "Dashboards em tempo real",
      "Sistemas customizados",
    ],
  },
];

const pipelineSteps = ["Site", "Leads", "CRM", "Automação", "Dashboard", "IA"];

const resultCards = [
  {
    label: "Leads Gerados",
    value: "1.2k",
    detail: "+12%",
    barClass: "w-[70%] bg-accent",
  },
  {
    label: "Volume Processado",
    value: "R$ 780k",
    detail: "",
    barClass: "w-[82%] bg-sky-400",
  },
  {
    label: "Crescimento YoY",
    value: "+24%",
    detail: "+4%",
    barClass: "w-[45%] bg-indigo-400",
  },
  {
    label: "Taxa de Conversão",
    value: "4.8%",
    detail: "Média setor: 2.1%",
    barClass: "w-[60%] bg-amber-400",
  },
];

const operationSteps = [
  {
    index: "01",
    title: "Diagnóstico",
    text: "Leitura da estrutura atual, gargalos e oportunidades de evolução imediata.",
  },
  {
    index: "02",
    title: "Arquitetura",
    text: "Blueprint de stack, fluxos e integrações com foco em previsibilidade operacional.",
  },
  {
    index: "03",
    title: "Implementação",
    text: "Execução em sprints com entrega de site, dados, CRM e automações conectadas.",
  },
  {
    index: "04",
    title: "Otimização",
    text: "Ciclo contínuo de melhorias por indicadores, testes e ajustes orientados por dados.",
  },
];

const homeServices = [
  {
    title: "Sites & Landing Pages",
    text: "Páginas premium com foco em conversão, SEO e performance.",
  },
  {
    title: "Sistemas & Plataformas",
    text: "CRM, portais e produtos digitais com arquitetura escalável.",
  },
  {
    title: "E-commerce",
    text: "Operação pronta para vender com checkout e integrações.",
  },
  {
    title: "IA & Automação",
    text: "Fluxos inteligentes para atendimento, leads e produtividade.",
  },
];

export default function Page() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-white"
      >
        Ir para o conteúdo
      </a>

      <NavBar />

      <main id="conteudo" className="bg-bg text-fg overflow-x-hidden pt-20 md:pt-24">
        <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="bg-grid-fade pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.06]" />
          <div className="pointer-events-none absolute -right-40 top-0 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[110px]" />
          <div className="pointer-events-none absolute -left-36 bottom-0 h-[280px] w-[280px] rounded-full bg-accent2/20 blur-[110px]" />

          <div className="relative mx-auto grid w-full max-w-container gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-6 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Engenharia Digital v2.0
              </span>

              <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Comece com <span className="text-white">estrutura</span>. <br />
                Evolua com <span className="text-glow text-accent">tecnologia</span>.
              </h1>

              <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
                Sites, tráfego, CRM, automações e IA organizados em um ecossistema
                de crescimento escalável e previsível.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={heroWhatsAppLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent to-emerald-300 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_24px_rgba(0,255,163,0.35)] transition hover:brightness-105"
                >
                  Falar no WhatsApp
                </a>
                <Link
                  href="/sistemas"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-fg transition hover:bg-white/10"
                >
                  Ver Sistemas
                </Link>
              </div>
              <p className="mt-3 text-xs text-muted">Resposta em até 24h úteis.</p>
            </div>

            <div className="relative mx-auto h-[380px] w-full max-w-[560px] md:h-[460px]">
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
                viewBox="0 0 500 500"
                aria-hidden="true"
              >
                <path d="M250 250 L110 160" fill="none" stroke="#00FFA3" strokeWidth="1" />
                <path d="M250 250 L390 160" fill="none" stroke="#00FFA3" strokeWidth="1" />
                <path
                  d="M250 250 L250 400"
                  fill="none"
                  stroke="#00FFA3"
                  strokeDasharray="5,5"
                  strokeWidth="1"
                />
                <circle cx="250" cy="250" r="4" fill="#00FFA3" />
              </svg>

              <div className="glass-panel absolute left-1/2 top-1/2 z-20 h-44 w-64 -translate-x-1/2 -translate-y-1/2 rounded-xl p-3">
                <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-2">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex h-16 items-center justify-center rounded bg-white/5 text-xs text-muted">
                    INTERFACE PRINCIPAL
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 rounded bg-white/5" />
                    <div className="h-8 rounded bg-white/5" />
                  </div>
                </div>
              </div>

              <div className="glass-panel float-slow absolute left-0 top-8 w-52 rounded-lg border border-accent/25 p-3 [animation-delay:800ms]">
                <p className="text-xs text-muted">Novo lead capturado</p>
                <p className="mt-1 text-sm font-semibold text-fg">Ricardo Mendes</p>
              </div>

              <div className="glass-panel float-slow absolute right-0 top-16 w-44 rounded-lg border border-sky-400/30 p-3 [animation-delay:1400ms]">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="text-muted">Tráfego</span>
                  <span className="font-semibold text-sky-300">+24%</span>
                </div>
                <div className="flex h-10 items-end gap-1">
                  <span className="h-[40%] w-1/5 rounded-sm bg-sky-400/20" />
                  <span className="h-[60%] w-1/5 rounded-sm bg-sky-400/30" />
                  <span className="h-[45%] w-1/5 rounded-sm bg-sky-400/40" />
                  <span className="h-[80%] w-1/5 rounded-sm bg-sky-400/50" />
                  <span className="h-[75%] w-1/5 rounded-sm bg-sky-400" />
                </div>
              </div>

              <div className="glass-panel float-slow absolute bottom-10 right-16 flex items-center gap-3 rounded-full border border-indigo-400/30 px-4 py-2 [animation-delay:400ms]">
                <span className="text-[11px] font-semibold tracking-wider text-indigo-200">
                  AI PROCESSING
                </span>
                <span className="h-7 w-7 rounded-full bg-indigo-400/20" />
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="border-y border-white/10 bg-[#0c1118] py-20">
          <div className="mx-auto max-w-container px-6">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Serviços</h2>
              <p className="mt-3 text-muted">
                Estrutura completa para crescer com previsibilidade.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {homeServices.map((service) => (
                <article
                  key={service.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-accent/35 hover:bg-white/10"
                >
                  <h3 className="text-base font-semibold text-fg">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="niveis" className="border-y border-white/10 bg-surface py-20">
          <div className="mx-auto max-w-container px-6">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Crescimento em Níveis</h2>
              <p className="mt-3 text-muted">
                Arquitetura progressiva para evoluir da presença essencial à operação
                inteligente.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {growthLevels.map((level) => (
                <article
                  key={level.title}
                  className={`rounded-xl p-[1px] ${
                    level.featured
                      ? "bg-[linear-gradient(135deg,rgba(19,236,146,0.42),rgba(59,130,246,0.24),rgba(255,255,255,0.06))]"
                      : "bg-white/[0.08]"
                  }`}
                >
                  <div
                    className={`relative h-full rounded-xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl transition hover:-translate-y-1 ${
                      level.featured
                        ? "shadow-[0_0_22px_rgba(19,236,146,0.12)]"
                        : "shadow-[0_0_18px_rgba(0,0,0,0.25)]"
                    }`}
                  >
                    {level.featured ? (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-accent/40 bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-black">
                        RECOMENDADO
                      </span>
                    ) : null}

                    <span className="absolute right-5 top-4 text-5xl font-bold text-white/5">
                      {level.index}
                    </span>

                    <h3 className="text-xl font-semibold text-fg">{level.title}</h3>
                    <p className="mt-2 min-h-[44px] text-sm text-muted">{level.description}</p>

                    <ul className="mt-6 space-y-2 text-sm text-muted">
                      {level.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#13ec92]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 h-28 rounded-lg border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-3 shadow-inner">
                      {level.index === "01" ? (
                        <div className="flex h-full flex-col opacity-80">
                          <div className="mb-2 h-2 w-full rounded bg-white/20" />
                          <div className="mb-1.5 h-2 w-2/3 rounded bg-white/15" />
                          <div className="mb-2.5 h-2 w-1/2 rounded bg-white/10" />
                          <div className="grid flex-1 grid-cols-2 gap-2">
                            <div className="rounded bg-white/10" />
                            <div className="rounded bg-white/10" />
                          </div>
                        </div>
                      ) : null}

                      {level.index === "02" ? (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 px-4 opacity-85">
                          <span className="h-2 w-full rounded-sm bg-white/20" />
                          <span className="h-2 w-4/5 rounded-sm bg-white/20" />
                          <span className="h-2 w-3/5 rounded-sm bg-[#13ec92]/35" />
                          <span className="h-2 w-2/5 rounded-sm bg-[#13ec92]/60" />
                          <span className="h-2 w-1/5 rounded-sm bg-[#13ec92] shadow-[0_0_12px_rgba(19,236,146,0.7)]" />
                        </div>
                      ) : null}

                      {level.index === "03" ? (
                        <div className="relative h-full w-full opacity-90">
                          <span className="absolute left-[12%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.45)]" />
                          <span className="absolute left-[43%] top-[18%] h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.45)]" />
                          <span className="absolute left-[43%] top-[72%] h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.45)]" />
                          <span className="absolute left-[76%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.45)]" />

                          <span className="absolute left-[15%] top-[50%] h-px w-[31%] -translate-y-1/2 rotate-[-24deg] bg-sky-300/70" />
                          <span className="absolute left-[15%] top-[50%] h-px w-[31%] -translate-y-1/2 rotate-[24deg] bg-sky-300/70" />
                          <span className="absolute left-[46%] top-[22%] h-px w-[31%] rotate-[24deg] bg-sky-300/70" />
                          <span className="absolute left-[46%] top-[76%] h-px w-[31%] rotate-[-24deg] bg-sky-300/70" />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg py-20">
          <div className="mx-auto max-w-container px-6">
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs uppercase tracking-[0.2em] text-muted">
                Ecosystem Pipeline
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="relative py-8">
              <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-white/10 md:block" />
              <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/60 to-transparent md:block" />

              <div className="relative z-10 grid grid-cols-2 gap-6 md:grid-cols-6">
                {pipelineSteps.map((step, index) => (
                  <div key={step} className="text-center">
                    <div
                      className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border text-sm font-semibold transition ${
                        index === pipelineSteps.length - 1
                          ? "border-sky-400/50 bg-sky-400/10 text-sky-300"
                          : "border-white/15 bg-surface text-muted"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm font-semibold text-fg">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="resultados" className="bg-surface py-20">
          <div className="mx-auto max-w-container px-6">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-bold">Resultados Reais</h2>
                <p className="mt-2 text-muted">
                  Métricas de operações atendidas com arquitetura Yamaji.
                </p>
                <p className="mt-2 text-xs text-muted">
                  Métricas demonstrativas. Varia por operação.
                </p>
              </div>
              <div className="inline-flex items-center rounded border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent">
                <span className="mr-2 h-2 w-2 rounded-full bg-accent" /> Dados atualizados
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {resultCards.map((card) => (
                <article key={card.label} className="rounded-lg border border-white/10 bg-bg p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">{card.label}</p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-3xl font-bold text-fg">{card.value}</span>
                    {card.detail ? (
                      <span className="rounded bg-emerald-400/10 px-1.5 py-0.5 text-xs text-emerald-300">
                        {card.detail}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full ${card.barClass}`} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodologia" className="relative bg-bg py-24">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-surface/70 to-transparent" />

          <div className="relative z-10 mx-auto max-w-container px-6">
            <h2 className="mb-14 text-3xl font-bold md:text-4xl">Protocolo de Operação</h2>

            <div>
              {operationSteps.map((step, index) => (
                <article
                  key={step.title}
                  className={`group relative border-l border-white/15 pl-8 ${
                    index === operationSteps.length - 1 ? "pb-0" : "pb-10"
                  }`}
                >
                  <span className="absolute -left-2 top-1 h-4 w-4 rounded-full border-2 border-white/30 bg-bg transition group-hover:border-accent group-hover:bg-accent" />

                  <div className="grid gap-2 md:grid-cols-[180px_1fr] md:gap-8">
                    <span className="text-4xl font-bold text-white/10">{step.index}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-fg">{step.title}</h3>
                      <p className="mt-2 text-muted">{step.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-surface to-bg" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">Qual o seu próximo nível digital?</h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <a
                href={siteWhatsAppLink}
                target="_blank"
                rel="noreferrer noopener"
                className="group block rounded-2xl border border-white/10 bg-surface p-7 text-left shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_16px_34px_rgba(0,255,163,0.14)]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-accent/25 bg-gradient-to-br from-accent/20 to-emerald-300/10 shadow-[0_0_16px_rgba(0,255,163,0.2)] transition-shadow duration-300 group-hover:shadow-[0_0_22px_rgba(0,255,163,0.32)]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-accent"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect x="5" y="3.5" width="14" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M8 8.5h8M8 12h8M8 15.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-fg">Começar com um site</h3>
                <p className="mt-2 text-sm text-muted">
                  Para estruturar presença profissional e iniciar captação com
                  consistência.
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Iniciar projeto
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </a>

              <Link
                href="/aplicar"
                className="group block rounded-2xl border border-white/10 bg-gradient-to-br from-[#11151f] to-[#0d1118] p-7 text-left shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/50 hover:shadow-[0_16px_34px_rgba(56,189,248,0.16)]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-sky-400/25 bg-gradient-to-br from-sky-400/20 to-sky-300/10 shadow-[0_0_16px_rgba(56,189,248,0.2)] transition-shadow duration-300 group-hover:shadow-[0_0_22px_rgba(56,189,248,0.32)]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-sky-300"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect x="4.5" y="4.5" width="6.5" height="6.5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="13" y="4.5" width="6.5" height="6.5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="4.5" y="13" width="6.5" height="6.5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="13" y="13" width="6.5" height="6.5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-fg">Estruturar operação completa</h3>
                <p className="mt-2 text-sm text-muted">
                  Para empresas que buscam escalar com CRM, automação e dados
                  integrados.
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sky-300">
                  Ir para diagnóstico
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </div>

            <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-muted">
              <p>© 2026 Yamaji Studio. All rights reserved.</p>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
