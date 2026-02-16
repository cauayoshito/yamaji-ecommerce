"use client";

const items = [
  "Diagnóstico em 24h úteis",
  "Execução premium com prazo",
  "Estrutura que vira ativo",
];

export default function TrustBar() {
  return (
    <section className="pb-16 pt-8 md:pb-20">
      <div className="mx-auto w-full max-w-container px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
          <ul className="grid gap-3 text-sm text-fg md:grid-cols-3 md:gap-4">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-accent shadow-glow"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
