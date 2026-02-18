import { Check, X, MessageSquare } from "lucide-react";

const REF = "ref=comparison";
const WHATS = {
  phone: "5571992258349",
  text: "Oi%2C%20vi%20o%20comparativo%20e%20quero%20isso%20no%20meu%20neg%C3%B3cio.%20Pode%20me%20ajudar%3F",
  utm: "utm_source=site&utm_medium=cta&utm_campaign=comparison",
};
const waLink = `https://wa.me/${WHATS.phone}?text=${WHATS.text}&${WHATS.utm}`;

const features = [
  {
    label: "Abre rápido no celular (sem travar)",
    yamaji: "Mais cliques viram pedidos",
    generico: "Demora e o cliente desiste",
  },
  {
    label: "Encontrado no Google",
    yamaji: "Visitas todos os dias",
    generico: "Depende só de anúncio",
  },
  {
    label: "Responde em minutos no WhatsApp",
    yamaji: "Não perde cliente de madrugada",
    generico: "Demora e o lead esfria",
  },
  {
    label: "Checkout sem dor de cabeça",
    yamaji: "Compra rápida e simples",
    generico: "Fricção e abandono",
  },
];

export default function Comparison() {
  return (
    <section
      className="relative"
      aria-labelledby="cmp-title"
      data-section="comparison"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2
          id="cmp-title"
          className="text-2xl md:text-3xl font-bold text-center"
        >
          Por que escolher a Yamaji
        </h2>
        <p className="mt-2 text-center text-white/70">
          O que você sente na pele quando usa um site que realmente vende.
        </p>

        {/* MOBILE: cartões (escaneável) */}
        <div
          className="mt-6 space-y-3 md:hidden"
          aria-label="Comparativo em cartões"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-start justify-between"
            >
              <p className="text-white/85 text-[0.95rem] pr-3">{f.label}</p>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-400/15 text-emerald-300 px-2.5 py-1 text-xs">
                  <Check className="h-4 w-4" /> {f.yamaji}
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg bg-rose-400/15 text-rose-300 px-2.5 py-1 text-xs">
                  <X className="h-4 w-4" /> {f.generico}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP: tabela completa */}
        <div
          className="mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/20 hidden md:block"
          aria-label="Comparativo em tabela"
        >
          <table className="w-full text-sm">
            <caption className="sr-only">
              Comparativo de benefícios Yamaji vs. genérico
            </caption>
            <thead className="bg-white/5">
              <tr>
                <th scope="col" className="text-left p-4">
                  Experiência
                </th>
                <th scope="col" className="text-left p-4">
                  Yamaji
                </th>
                <th scope="col" className="text-left p-4">
                  Genérico
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr
                  key={i}
                  className="odd:bg-white/0 even:bg-white/5 hover:bg-white/10 transition"
                >
                  <td className="p-4 text-white/85">{f.label}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-400/15 text-emerald-300 px-2.5 py-1">
                      <Check className="h-4 w-4" /> {f.yamaji}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-rose-400/15 text-rose-300 px-2.5 py-1">
                      <X className="h-4 w-4" /> {f.generico}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTAs: WhatsApp + âncora */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            data-cta="whatsapp"
            data-label="Comparison - Quero isso no meu negócio"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-400/95 hover:bg-teal-400 text-[#0B0F14] px-5 py-3 font-semibold focus-visible:ring-2 focus-visible:ring-teal-300"
            aria-label="Quero isso no meu negócio (falar no WhatsApp)"
          >
            <MessageSquare className="h-4 w-4" />
            Quero isso no meu negócio 💬
          </a>

          <a
            href={`#cta?${REF}`}
            data-cta="cta"
            data-label="Comparison - Escolher a Yamaji agora"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 font-semibold transition focus-visible:ring-2 focus-visible:ring-teal-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Escolher a Yamaji agora
          </a>
        </div>

        {/* nota de confiança */}
        <p className="mt-3 text-center text-white/45 text-xs">
          *Resultados variam conforme nicho, região e investimento. Mostramos
          exemplos e números reais na conversa.
        </p>
      </div>
    </section>
  );
}
