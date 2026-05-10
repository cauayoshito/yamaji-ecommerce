type Row = {
  feature: string;
  yamaji: string | boolean;
  others: string | boolean;
};

const rows: Row[] = [
  { feature: "Loja feita sob medida", yamaji: true, others: false },
  { feature: "Hospedagem inclusa", yamaji: true, others: "Cobrada à parte" },
  { feature: "Suporte humano via WhatsApp", yamaji: true, others: "Bot e ticket" },
  { feature: "Layout sem cara de template", yamaji: true, others: false },
  { feature: "Configuração feita por você", yamaji: false, others: true },
  { feature: "Mensalidade que cabe", yamaji: "A partir de R$ 37", others: "R$ 79+" },
  { feature: "Tempo para entrar no ar", yamaji: "Poucos dias", others: "Você se vira" },
  { feature: "Foco em vender, não em opção", yamaji: true, others: false },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-2 text-accent">
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l3.5 3.5L13 4"
          />
        </svg>
        <span className="text-[13px] font-medium text-fg">Sim</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center gap-2 text-white/35">
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path
            d="M18 6L6 18M6 6l12 12"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-[13px]">Não</span>
      </span>
    );
  }
  return <span className="text-[13px] text-white/75">{value}</span>;
}

export default function Comparison() {
  return (
    <section
      data-section="loja-comparativo"
      className="relative border-b border-white/[0.06] py-24 md:py-32"
    >
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <p className="eyebrow">Comparativo</p>
          <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-fg">
            Yamaji vs plataformas genéricas.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            A diferença entre ter uma loja que vende e ter mais um login para
            esquecer.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
          <div className="grid grid-cols-3 border-b border-white/[0.08] bg-white/[0.02] px-5 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-white/45 md:px-7 md:py-5">
            <div>Recurso</div>
            <div className="text-center text-accent">Yamaji Studio</div>
            <div className="text-center">Plataformas genéricas</div>
          </div>

          <ul className="divide-y divide-white/[0.06]">
            {rows.map((row) => (
              <li
                key={row.feature}
                className="grid grid-cols-3 items-center px-5 py-4 transition duration-200 hover:bg-white/[0.02] md:px-7 md:py-5"
              >
                <div className="pr-3 text-[14px] text-white/80">
                  {row.feature}
                </div>
                <div className="flex justify-center">
                  <Cell value={row.yamaji} />
                </div>
                <div className="flex justify-center text-center">
                  <Cell value={row.others} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
