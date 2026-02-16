"use client";

export const OBJECTIVE_OPTIONS = [
  {
    value: "estruturar-captacao",
    title: "Estruturar captação e conversão",
    description:
      "Quero organizar a operação digital para gerar leads qualificados com previsibilidade.",
  },
  {
    value: "reposicionar-operacao",
    title: "Reposicionar operação para escalar",
    description:
      "Preciso de clareza em processo, tecnologia e execução para crescer sem gargalo.",
  },
  {
    value: "aumentar-performance",
    title: "Aumentar performance com automação",
    description:
      "Quero ganhar eficiência com fluxos e integrações que reduzam esforço manual.",
  },
] as const;

type ObjectiveCardsProps = {
  selectedObjective: string;
  handler: (objective: string) => void;
};

export default function ObjectiveCards({
  selectedObjective,
  handler,
}: ObjectiveCardsProps) {
  return (
    <section aria-labelledby="objective-title" className="space-y-6">
      <div>
        <h2 id="objective-title" className="text-2xl font-semibold text-fg md:text-3xl">
          Qual é o seu objetivo principal?
        </h2>
        <p className="mt-2 text-sm text-muted md:text-base">
          Selecione o cenário que melhor descreve sua necessidade atual.
        </p>
      </div>

      <fieldset className="space-y-4" aria-label="Objetivo principal">
        {OBJECTIVE_OPTIONS.map((option) => {
          const id = `objective-${option.value}`;
          const selected = selectedObjective === option.value;

          return (
            <label
              key={option.value}
              htmlFor={id}
              className="block cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-accent/40 hover:bg-white/[0.08]"
            >
              <input
                id={id}
                type="radio"
                name="objective"
                className="sr-only"
                checked={selected}
                onChange={() => handler(option.value)}
              />
              <div
                className={[
                  "rounded-xl border px-4 py-3 transition",
                  selected
                    ? "border-accent/60 bg-accent/10 shadow-[0_0_32px_rgba(0,255,163,0.16)]"
                    : "border-white/10 bg-black/25",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={[
                      "h-4 w-4 rounded-full border transition",
                      selected ? "border-accent bg-accent shadow-glow" : "border-white/30",
                    ].join(" ")}
                  />
                  <p className="text-base font-semibold text-fg">{option.title}</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{option.description}</p>
              </div>
            </label>
          );
        })}
      </fieldset>
    </section>
  );
}
