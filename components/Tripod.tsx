import { Layers, Rocket, Bot, Star, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const REF = "ref=tripod";
const WHATS = {
  phone: "5571992358249",
  text: "Oi%2C%20quero%20montar%20um%20plano%20com%20Site%2C%20An%C3%BAncios%20e%20IA%20pra%20vender%20todos%20os%20dias.",
  utm: "utm_source=site&utm_medium=cta&utm_campaign=tripod",
};
const waLink = `https://wa.me/${WHATS.phone}?text=${WHATS.text}&${WHATS.utm}`;

type Item = {
  icon: any;
  title: string;
  desc: string;
  bullets: string[];
  href: string;
  cta: string;
  label: string;
  badge?: string;
};

const items: Item[] = [
  {
    icon: Layers,
    title: "Site que vende",
    desc: "Seu site vira um vendedor: rápido no celular, oferta clara e botão direto pro WhatsApp.",
    bullets: [
      "Abre em ~2s",
      "Oferta + prova social",
      "Botões visíveis no celular",
    ],
    href: `/servicos/sites?${REF}`,
    cta: "Quero meu site vendendo",
    label: "Tripod - Sites",
    badge: "Mais pedido",
  },
  {
    icon: Rocket,
    title: "Anúncios que trazem clientes",
    desc: "Google e Instagram falando com quem quer comprar agora e vindo direto pro seu WhatsApp.",
    bullets: [
      "Oferta certa por etapa",
      "Custo por cliente menor",
      "Mais cliques qualificados",
    ],
    href: `/servicos/ads?${REF}`,
    cta: "Quero clientes dos anúncios",
    label: "Tripod - Ads",
  },
  {
    icon: Bot,
    title: "IA que responde sozinha",
    desc: "Atendimento em minutos, inclusive de madrugada. Follow-up automático pra não perder venda.",
    bullets: [
      "Responde 24/7",
      "Retoma conversa sozinha",
      "Playbooks por nicho",
    ],
    href: `/servicos/ia-automacao?${REF}`,
    cta: "Quero IA no meu WhatsApp",
    label: "Tripod - IA",
  },
];

export default function Tripod() {
  return (
    <section
      id="servicos"
      className="relative border-y border-white/10 bg-white/5"
      aria-labelledby="tripod-title"
      data-section="tripod"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2
          id="tripod-title"
          className="text-2xl md:text-3xl font-bold text-center"
        >
          O tripé que gera resultado
        </h2>
        <p className="text-center text-white/70 mt-2">
          Site que vende, anúncios que trazem clientes e IA que responde
          funcionando juntos.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3" role="list">
          {items.map(
            ({ icon: Icon, title, desc, bullets, href, cta, label, badge }) => (
              <article
                key={title}
                role="listitem"
                aria-label={title}
                className="group rounded-xl border border-white/10 bg-[#0E1319] hover:bg-white/10 transition"
              >
                <Card className="bg-transparent border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Icon className="h-8 w-8 text-teal-300" />
                      <h3 className="font-semibold text-lg">{title}</h3>
                      {badge && (
                        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-teal-400/15 px-2 py-0.5 text-[11px] font-semibold text-teal-300">
                          <Star className="h-3 w-3" />
                          {badge}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-white/75 mt-3">{desc}</p>

                    {/* micro-benefícios (escaneáveis) */}
                    <ul className="mt-3 space-y-1.5 text-sm text-white/80 list-disc pl-5">
                      {bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>

                    {/* CTA do cartão */}
                    <a
                      href={href}
                      data-cta="cta"
                      data-label={label}
                      className="mt-4 inline-flex items-center gap-2 rounded-lg bg-teal-400/95 hover:bg-teal-400 px-4 py-2 font-semibold text-[#0B0F14] focus-visible:ring-2 focus-visible:ring-teal-300"
                      aria-label={`${cta} - ${title}`}
                    >
                      {cta}
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path
                          d="M5 12h14M13 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </CardContent>
                </Card>
              </article>
            )
          )}
        </div>

        {/* Acolhimento para indecisos */}
        <div className="mt-6 flex justify-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            data-cta="whatsapp"
            data-label="Tripod - Montar plano"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 text-sm font-semibold focus-visible:ring-2 focus-visible:ring-teal-300"
            aria-label="Montar meu plano com Site, Anúncios e IA (WhatsApp)"
          >
            <MessageCircle className="h-4 w-4" />
            Quero montar meu plano pra vender 24h 💬
          </a>
        </div>
      </div>
    </section>
  );
}
