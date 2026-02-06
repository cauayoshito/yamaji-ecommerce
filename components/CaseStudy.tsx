import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MessageSquare, TrendingUp, Clock } from "lucide-react";

const WHATS = {
  phone: "5571992358249",
  text: "Oi%2C%20vi%20o%20case%20de%20e-commerce%20%2B27%25%20em%2030%20dias%20e%20quero%20implementar%20no%20meu%20neg%C3%B3cio.",
  utm: "utm_source=site&utm_medium=cta&utm_campaign=casestudy",
};
const waLink = `https://wa.me/${WHATS.phone}?text=${WHATS.text}&${WHATS.utm}`;

export default function CaseStudy() {
  const items = [
    {
      title: "Menos abandono, mais pedidos",
      body: "Tiramos ruído da landing e deixamos os botões claros: a pessoa clica e já chama no WhatsApp. Resultado: menos gente indo embora e mais pedidos fechados.",
      icon: Clock,
    },
    {
      title: "Anúncios que trazem gente certa",
      body: "Google & Instagram com oferta certa para cada etapa (descoberta, interesse e compra). Paramos de “gritar para todos” e falamos com quem realmente compra.",
      icon: TrendingUp,
    },
    {
      title: "IA que responde sozinha",
      body: "Chatbot no WhatsApp + fluxos de follow-up. Resposta em minutos, inclusive de madrugada. O lead não esfria e você não perde venda.",
      icon: MessageSquare,
    },
  ];

  const numbers = [
    { k: "Vendas", v: "+27% em 30 dias" },
    { k: "Tempo de resposta", v: "~2 min" },
    { k: "Abandono", v: "-40%" },
  ];

  return (
    <section
      id="cases"
      className="relative"
      aria-labelledby="case-title"
      data-section="cases"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2
          id="case-title"
          className="text-2xl md:text-3xl font-bold text-center"
        >
          Case real
        </h2>

        <p className="text-center text-white/70 mt-2">
          E-commerce local{" "}
          <span className="text-teal-400 font-semibold">
            +27% de vendas em 30 dias
          </span>
        </p>

        {/* Números traduzidos para “vida real” */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {numbers.map((n) => (
            <span
              key={n.k}
              className="inline-flex items-center rounded-full border border-teal-300/20 bg-teal-400/10 px-3 py-1 text-xs text-teal-200"
            >
              <strong className="mr-1">{n.k}:</strong> {n.v}
            </span>
          ))}
        </div>

        {/* Mini história: o que mudou de fato */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((c) => (
            <Card
              key={c.title}
              className="bg-[#0E1319] border-white/10 hover:border-teal-400/30 transition"
            >
              <CardHeader className="flex flex-row items-center gap-2">
                <c.icon className="h-5 w-5 text-teal-300" />
                <CardTitle className="text-base">{c.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-white/80">
                {c.body}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Prova humana curta (sem jargão) */}
        <figure className="mt-8 max-w-3xl mx-auto rounded-xl border border-white/10 bg-white/5 p-5">
          <blockquote className="text-white/85 text-[0.95rem]">
            “Eu achava que site era só pra ter presença. Depois das mudanças,
            começou a pingar mensagem no WhatsApp todo dia. Em um mês, vendi
            mais que nos três anteriores.”
          </blockquote>
          <figcaption className="mt-3 text-white/60 text-sm">
            — Ana, dona de uma loja de roupas local
          </figcaption>
        </figure>

        {/* CTAs: falar agora e ver estudo completo */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            data-cta="whatsapp"
            data-label="Case - Falar no WhatsApp"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-400/95 hover:bg-teal-400 px-5 py-3 text-sm font-semibold text-[#0B0F14] focus-visible:ring-2 focus-visible:ring-teal-300"
            aria-label="Quero aplicar esse case no meu negócio (falar no WhatsApp)"
          >
            Aplicar no meu negócio 💬
          </a>

          <a
            href="#cta"
            data-cta="cta"
            data-label="Case - Ver estudo completo"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-teal-300"
          >
            Ver estudo completo
          </a>
        </div>
      </div>
    </section>
  );
}
