import Link from "next/link";

type CaseItem = {
  slug: string;
  brand: string;
  industry: string;
  problem: string;
  solution: string;
  metric: string;
  metricLabel: string;
};

const cases: CaseItem[] = [
  {
    slug: "anipet",
    brand: "Anipet",
    industry: "E-commerce Pet",
    problem:
      "Faturamento travado. 74% dos carrinhos abandonados. Atendimento solto no WhatsApp.",
    solution:
      "Loja reconstruída, checkout em 1 etapa, recuperação automática e WhatsApp ligado no CRM.",
    metric: "+164%",
    metricLabel: "no faturamento mensal em 90 dias",
  },
  {
    slug: "proprium",
    brand: "Proprium",
    industry: "Imobiliária digital",
    problem:
      "Lead caía no e-mail e morria. Time comercial perdendo follow-up. Zero visão de origem.",
    solution:
      "Captação qualificada, CRM com automação por estágio e dashboard mostrando o que dá ROI.",
    metric: "3,8×",
    metricLabel: "mais visitas agendadas com o mesmo orçamento",
  },
  {
    slug: "dieisson",
    brand: "Dieisson Advocacia",
    industry: "Advocacia de alto ticket",
    problem:
      "Site institucional não fechava. Anúncios queimando dinheiro. Lead chegava na call sem contexto.",
    solution:
      "Landing por especialização, sequência de nutrição e qualificação automática antes da reunião.",
    metric: "R$ 180k",
    metricLabel: "em honorários atribuídos em 120 dias",
  },
];

export default function CasesSection() {
  return (
    <section
      id="cases"
      data-section="cases"
      className="relative py-28 md:py-36"
    >
      <div className="mx-auto max-w-container px-6">
        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Cases</p>
            <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-fg">
              Quem confia,
              <br className="hidden md:block" /> vê resultado em até 90 dias.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/55">
              Três operações que saíram do zero (ou do prejuízo) para
              faturamento previsível. A engenharia é a mesma que vamos aplicar
              no seu.
            </p>
          </div>

          <Link
            href="/cases"
            data-cta="secondary"
            data-label="ver-todos-cases"
            className="group inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg border border-white/[0.10] bg-white/[0.02] px-4 py-2.5 text-[13px] font-semibold text-white/75 transition duration-200 hover:border-white/25 hover:bg-white/[0.05] hover:text-white md:self-auto"
          >
            Ver todos os cases
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.18] hover:bg-white/[0.04]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <header className="flex items-center justify-between gap-3">
                <span className="text-[17px] font-semibold tracking-tight text-fg">
                  {c.brand}
                </span>
                <span className="shrink-0 rounded-full border border-white/[0.10] bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/55">
                  {c.industry}
                </span>
              </header>

              <div className="mt-9 space-y-6 text-[14px] leading-relaxed text-white/65">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
                    O problema
                  </p>
                  <p className="mt-2">{c.problem}</p>
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
                    O que a gente fez
                  </p>
                  <p className="mt-2">{c.solution}</p>
                </div>
              </div>

              <div className="mt-9 border-t border-white/[0.08] pt-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
                  O resultado
                </p>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-[34px] font-semibold leading-none tracking-tight text-accent">
                    {c.metric}
                  </span>
                  <span className="text-[13px] text-white/55">{c.metricLabel}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
