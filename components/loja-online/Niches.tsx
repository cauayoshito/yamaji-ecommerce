import Reveal from "./Reveal";

const niches = [
  { name: "Perfumarias", emoji: "🌸" },
  { name: "Moda e roupa", emoji: "👗" },
  { name: "Cosméticos", emoji: "💄" },
  { name: "Suplementos", emoji: "💪" },
  { name: "Delivery e comida", emoji: "🍔" },
  { name: "Papelaria criativa", emoji: "📓" },
  { name: "Presentes", emoji: "🎁" },
  { name: "Acessórios", emoji: "👜" },
];

export default function Niches() {
  return (
    <section
      data-section="loja-nichos"
      className="relative border-b border-white/[0.06] bg-surface py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(94,234,212,0.05),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-container px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <p className="eyebrow">Para quem é</p>
          <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-fg">
            Feita para o seu nicho.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            Já criamos lojas para vários tipos de negócio. A estrutura se
            adapta ao que você vende.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {niches.map((n, i) => (
            <Reveal
              key={n.name}
              as="li"
              delay={i * 0.04}
              className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.05]"
            >
              <span
                aria-hidden="true"
                className="text-xl transition-transform duration-300 group-hover:scale-110"
              >
                {n.emoji}
              </span>
              <span className="text-[14px] font-medium text-white/80">
                {n.name}
              </span>
            </Reveal>
          ))}
        </ul>

        <p className="mt-10 text-center text-[13px] text-white/50">
          Não viu seu nicho na lista? A gente atende qualquer negócio que
          quiser vender online.
        </p>
      </div>
    </section>
  );
}
