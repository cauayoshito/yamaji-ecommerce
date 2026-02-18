import Link from "next/link";
import { Layers, Rocket, Bot, Star } from "lucide-react";

const REF = "ref=home-servicepromo";
const WHATS = {
  phone: "5571992258349",
  text: "Oi%2C%20n%C3%A3o%20sei%20por%20onde%20come%C3%A7ar%2C%20mas%20quero%20vender%20todos%20os%20dias.%20Pode%20me%20ajudar%3F",
  utm: "utm_source=site&utm_medium=cta&utm_campaign=servicepromo",
};
const waLink = `https://wa.me/${WHATS.phone}?text=${WHATS.text}&${WHATS.utm}`;

const items = [
  {
    href: `/servicos/sites?${REF}`,
    Icon: Layers,
    title: "Sites que vendem",
    line: "Fazemos seu site vender de verdade: rápido, bonito e fácil de usar.",
    cta: "Quero meu site vendendo",
    label: "ServicePromo - Sites",
    badge: "Mais pedido",
  },
  {
    href: `/servicos/ads?${REF}`,
    Icon: Rocket,
    title: "Anúncios que trazem clientes",
    line: "Anúncios no Google e Instagram para gente certa te chamar no WhatsApp.",
    cta: "Quero clientes dos anúncios",
    label: "ServicePromo - Ads",
  },
  {
    href: `/servicos/ia-automacao?${REF}`,
    Icon: Bot,
    title: "IA que responde sozinha",
    line: "WhatsApp/CRM respondendo em minutos, sem perder lead de madrugada.",
    cta: "Quero IA no meu WhatsApp",
    label: "ServicePromo - IA",
  },
];

export default function ServicePromo() {
  return (
    <section
      className="relative"
      aria-labelledby="servicos-home"
      data-section="promo"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <h2
          id="servicos-home"
          className="text-center text-lg font-semibold mb-4"
        >
          Escolha o próximo passo
        </h2>

        <div className="grid gap-4 md:grid-cols-3" role="list">
          {items.map(({ href, Icon, title, line, cta, label, badge }) => (
            <article
              key={href}
              role="listitem"
              className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5 focus-within:ring-2 focus-within:ring-teal-400"
              aria-label={title}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-teal-300" />
                <h3 className="font-semibold">{title}</h3>

                {badge && (
                  <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-teal-400/15 px-2 py-0.5 text-[11px] font-semibold text-teal-300">
                    <Star className="h-3 w-3" /> {badge}
                  </span>
                )}
              </div>

              <p className="mt-2 text-[0.95rem] text-white/80">{line}</p>

              <Link
                href={href}
                data-cta="cta"
                data-label={label}
                className="mt-3 inline-flex items-center gap-2 text-teal-300 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                aria-label={`${cta} - ${title}`}
              >
                {cta}
                <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden>
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* "Não sei por onde começar" — acolhe o leigo e aumenta cliques */}
        <div className="mt-5 flex justify-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            data-cta="whatsapp"
            data-label="ServicePromo - Nao sei por onde comecar"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold bg-teal-400/95 text-[#0B0F14] hover:bg-teal-400 focus-visible:ring-2 focus-visible:ring-teal-300"
            aria-label="Falar no WhatsApp: não sei por onde começar"
          >
            Não sei por onde começar me ajuda 💬
          </a>
        </div>
      </div>
    </section>
  );
}
