import { LOJA_WHATSAPP } from "./whatsapp";

const steps = [
  {
    n: "01",
    title: "Você chama no WhatsApp",
    text: "Conta o que vende, qual o seu objetivo e a gente já te explica qual plano combina com o seu negócio.",
  },
  {
    n: "02",
    title: "Envia produtos e identidade",
    text: "Fotos, descrições, logo e cores. Tudo organizado em uma pastinha. A gente te guia se precisar.",
  },
  {
    n: "03",
    title: "A gente cria a sua loja",
    text: "Em poucos dias sua loja está pronta, com cara de empresa séria e tudo configurado para vender.",
  },
  {
    n: "04",
    title: "Você começa a vender",
    text: "Compartilha o link da loja, recebe pedidos pelo WhatsApp ou pelo painel. Simples assim.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      data-section="loja-how"
      className="relative border-b border-white/[0.06] py-24 md:py-32"
    >
      <div className="mx-auto max-w-container px-6">
        <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-[minmax(0,360px)_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Como funciona</p>
            <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-fg">
              Quatro passos simples.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/55">
              Você não precisa entender nada de tecnologia. A gente cuida da
              parte chata enquanto você foca em vender.
            </p>
            <a
              href={LOJA_WHATSAPP}
              target="_blank"
              rel="noreferrer noopener"
              data-cta="primary"
              data-label="loja-how-whatsapp"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-[13px] font-semibold text-black shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_8px_24px_-12px_rgba(94,234,212,0.45)] transition duration-200 hover:-translate-y-px hover:bg-[#7bf0dc]"
            >
              Começar agora pelo WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <ol className="relative">
            {steps.map((step, i) => (
              <li
                key={step.n}
                className={`group relative border-l border-white/[0.12] pl-8 ${
                  i === steps.length - 1 ? "pb-0" : "pb-10"
                }`}
              >
                <span className="absolute -left-[5px] top-1 flex h-[10px] w-[10px] items-center justify-center rounded-full border-2 border-white/25 bg-bg transition duration-200 group-hover:border-accent group-hover:bg-accent" />
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-[15px] font-semibold text-accent">
                    {step.n}
                  </span>
                  <h3 className="text-[17px] font-semibold tracking-tight text-fg">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/60">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
