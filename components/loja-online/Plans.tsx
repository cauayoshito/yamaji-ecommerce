import { planMessage } from "./whatsapp";
import Reveal from "./Reveal";

type Plan = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  ideal: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "START",
    price: "R$ 37",
    tagline: "Para começar a vender já.",
    features: [
      "Loja simples e profissional",
      "Catálogo de produtos",
      "Botão direto para WhatsApp",
      "Hospedagem inclusa",
      "Suporte humano",
    ],
    ideal: "Ideal para começar rápido sem complicação.",
  },
  {
    name: "GROW",
    price: "R$ 67",
    tagline: "Para vender todos os dias.",
    features: [
      "Tudo do START",
      "Carrinho simples",
      "Checkout via link e WhatsApp",
      "Personalização leve da loja",
      "Atualizações de produtos",
    ],
    ideal: "Ideal para quem já tem fluxo e quer profissionalizar.",
    featured: true,
  },
  {
    name: "PRO",
    price: "R$ 97",
    tagline: "Para escalar com estrutura.",
    features: [
      "Tudo do GROW",
      "Painel de pedidos",
      "Controle de produtos",
      "Estrutura mais completa",
      "Prioridade no suporte",
    ],
    ideal: "Ideal para quem quer escalar com organização.",
  },
];

export default function Plans() {
  return (
    <section
      id="planos"
      data-section="loja-planos"
      className="relative border-b border-white/[0.06] bg-surface py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(94,234,212,0.07),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-container px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <p className="eyebrow">Planos mensais</p>
          <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-fg">
            Escolha o plano que combina com o seu momento.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            Sem fidelidade. Sem taxa escondida. Você sobe ou desce de plano
            quando quiser.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 0.08}
              y={24}
              className={`relative rounded-2xl p-[1px] ${
                plan.featured
                  ? "bg-[linear-gradient(160deg,rgba(94,234,212,0.55),rgba(129,140,248,0.2),rgba(255,255,255,0.04))]"
                  : "bg-white/[0.06]"
              }`}
            >
              <div
                className={`relative flex h-full flex-col rounded-2xl border border-white/[0.06] bg-[#0B0E14] p-8 transition duration-300 ${
                  plan.featured
                    ? "shadow-[0_30px_80px_-30px_rgba(94,234,212,0.28)]"
                    : "hover:border-white/[0.14]"
                }`}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-accent/50 bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-black">
                    Mais escolhido
                  </span>
                ) : null}

                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[14px] font-bold uppercase tracking-[0.18em] text-white/80">
                    {plan.name}
                  </h3>
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-[44px] font-semibold leading-none tracking-tight text-fg">
                    {plan.price}
                  </span>
                  <span className="text-[14px] text-white/50">/mês</span>
                </div>
                <p className="mt-2 text-[14px] text-white/60">{plan.tagline}</p>

                <ul className="mt-7 space-y-2.5 text-[14px] text-white/70">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        className="mt-[3px] h-3.5 w-3.5 shrink-0 text-accent"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l3.5 3.5L13 4"
                        />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex-1" />

                <p className="mb-5 text-[12px] text-white/45">{plan.ideal}</p>

                <a
                  href={planMessage(plan.name)}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cta="primary"
                  data-label={`loja-plano-${plan.name.toLowerCase()}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[13px] font-semibold transition duration-200 ${
                    plan.featured
                      ? "bg-accent text-black hover:-translate-y-px hover:bg-[#7bf0dc]"
                      : "border border-white/[0.12] bg-white/[0.03] text-white hover:-translate-y-px hover:border-white/25 hover:bg-white/[0.06]"
                  }`}
                >
                  Quero o {plan.name}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-[12px] text-white/45">
          Pagamento mensal. Sem fidelidade. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
