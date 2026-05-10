import Reveal from "./Reveal";

const items = [
  {
    title: "Loja feita por desenvolvedor",
    text: "Não é template arrastado. Cada loja é construída por gente que entende de código e de venda.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 6L2 12l6 6M16 6l6 6-6 6M14 4l-4 16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Hospedagem inclusa",
    text: "Você não paga servidor, domínio extra, certificado nem nada à parte. Tudo entra no plano mensal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="4"
          width="18"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <rect
          x="3"
          y="14"
          width="18"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="7" cy="7" r="1" fill="currentColor" />
        <circle cx="7" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Suporte humano de verdade",
    text: "Você fala direto com a gente pelo WhatsApp. Sem ticket, sem fila, sem bot que te manda para o FAQ.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Estrutura focada em conversão",
    text: "Cada botão, cada bloco, cada texto pensado para o cliente comprar. Sem frescura, sem enfeite que atrapalha.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 3v18h18M7 14l4-4 4 4 5-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Solution() {
  return (
    <section
      data-section="loja-solution"
      className="relative border-b border-white/[0.06] bg-surface py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(94,234,212,0.06),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-container px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <p className="eyebrow">A diferença Yamaji</p>
          <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-fg">
            Loja online de verdade. Feita para o seu negócio.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            Você não vai depender de tutorial do YouTube. A gente faz, entrega
            e fica do seu lado.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 transition duration-300 hover:border-accent/30 hover:bg-white/[0.05]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                <span className="block h-5 w-5">{item.icon}</span>
              </div>
              <h3 className="mt-5 text-[15px] font-semibold tracking-tight text-fg">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
