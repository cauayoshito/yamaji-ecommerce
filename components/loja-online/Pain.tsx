import Reveal from "./Reveal";

const pains = [
  {
    title: "Plataformas complicadas",
    text: "Você passa horas tentando configurar e ainda fica perdido. Mensalidade alta e funções que você nem usa.",
  },
  {
    title: "Layout genérico",
    text: "Aquela cara de template pronto que qualquer um reconhece. Cliente entra, sente desconfiança e sai sem comprar.",
  },
  {
    title: "Suporte robótico",
    text: "Você abre um ticket, fica esperando dias. Quando responde, é uma mensagem automática que não resolve nada.",
  },
  {
    title: "Difícil de começar",
    text: "Sem conhecimento técnico, montar uma loja vira pesadelo. Você desiste antes mesmo da primeira venda.",
  },
];

export default function Pain() {
  return (
    <section
      data-section="loja-pain"
      className="relative border-b border-white/[0.06] py-24 md:py-32"
    >
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <p className="eyebrow">A dor de quem tenta sozinho</p>
          <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-fg">
            Por que tanta gente tenta vender online e desiste?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            A maioria das plataformas promete fácil, mas no fim te deixa
            sozinho com tudo nas costas.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {pains.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.06}
              className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 transition duration-300 hover:border-white/[0.18] hover:bg-white/[0.04]"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-red-400/20 bg-red-400/10 text-red-300">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M18 6L6 18M6 6l12 12"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold tracking-tight text-fg">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                    {p.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
