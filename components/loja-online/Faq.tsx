"use client";

import { useState } from "react";

type Item = { q: string; a: string };

const items: Item[] = [
  {
    q: "Em quanto tempo a loja fica pronta?",
    a: "Em poucos dias. Depois que você manda os produtos, identidade visual e textos, a gente entrega geralmente entre 3 e 7 dias úteis, dependendo do plano.",
  },
  {
    q: "Tem fidelidade ou contrato preso?",
    a: "Não. A mensalidade é livre. Você pode cancelar quando quiser, sem multa, sem burocracia.",
  },
  {
    q: "E se eu já tenho uma loja, dá para migrar?",
    a: "Dá. A gente avalia sua loja atual, te orienta sobre os produtos, fotos e domínio, e migra tudo para o novo padrão Yamaji.",
  },
  {
    q: "A hospedagem é cobrada à parte?",
    a: "Não. Hospedagem entra no plano mensal. Você não paga servidor, certificado de segurança nem nada extra.",
  },
  {
    q: "Posso usar meu domínio próprio?",
    a: "Sim. Se você já tem um domínio (tipo seunome.com.br), a gente conecta na sua loja sem custo extra.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Direto pelo WhatsApp. Sem ticket, sem fila de espera, sem bot. Você fala com gente que conhece a sua loja.",
  },
  {
    q: "Posso mudar de plano depois?",
    a: "Sim. Quando quiser. Começou no START e quer subir para o GROW ou PRO? É só avisar e a gente ajusta na hora.",
  },
  {
    q: "Vocês ajudam a tirar foto dos produtos?",
    a: "A gente orienta o que funciona melhor para venda online. Se precisar de fotógrafo, indicamos parceiros.",
  },
];

function FaqItem({ item, defaultOpen }: { item: Item; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-5 text-left transition hover:text-white"
      >
        <span className="text-[15px] font-medium text-fg">{item.q}</span>
        <span
          aria-hidden="true"
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.03] text-white/60 transition duration-200 ${
            open ? "rotate-45 border-accent/40 text-accent" : ""
          }`}
        >
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3v10M3 8h10" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-12 text-[14px] leading-relaxed text-white/65">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section
      data-section="loja-faq"
      className="relative border-b border-white/[0.06] py-24 md:py-32"
    >
      <div className="mx-auto max-w-container px-6">
        <div className="grid gap-12 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Dúvidas comuns</p>
            <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-fg">
              Antes de você
              <br /> chamar a gente.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/55">
              As perguntas que mais recebemos. Se ficou outra dúvida, manda no
              WhatsApp.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 md:px-8">
            {items.map((item, i) => (
              <FaqItem key={item.q} item={item} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
