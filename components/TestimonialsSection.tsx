import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const WHATS = {
  phone: "5571992258349",
  text: "Oi%2C%20vi%20os%20depoimentos%20e%20quero%20ter%20esse%20resultado%20no%20meu%20neg%C3%B3cio.%20Pode%20me%20ajudar%3F",
  utm: "utm_source=site&utm_medium=cta&utm_campaign=testimonials",
};
const waLink = `https://wa.me/${WHATS.phone}?text=${WHATS.text}&${WHATS.utm}`;

const items = [
  {
    name: "Dieisson Vasques",
    role: "Personal Trainer",
    quote: "Entrega acima do esperado. Meu site virou meu melhor vendedor.",
    avatar: "/images/dieissonfoto.jpg",
  },
  {
    name: "Robert Emanuel",
    role: "Personal Trainer",
    quote: "Layout rápido e a conversão no WhatsApp disparou.",
    avatar: "/images/depoimento1.jpg",
  },
  {
    name: "Paulo",
    role: "AniFit",
    quote:
      "Catálogo, carrinho e checkout organizados. Experiência muito melhor.",
    avatar: "/images/joao.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative border-y border-white/10 bg-white/5"
      aria-labelledby="testi-title"
      data-section="testimonials"
    >
      {/* Schema leve para rich snippets */}
      <div className="sr-only" aria-hidden>
        <div itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="5.0" />
          <meta itemProp="reviewCount" content="30" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2
          id="testi-title"
          className="text-2xl md:text-3xl font-bold text-center"
        >
          O que nossos clientes dizem
        </h2>

        {/* selo de média */}
        <p className="mt-2 text-center text-white/70">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-400/10 px-3 py-1 text-xs text-yellow-200">
            ★ 5,0 • +30 negócios locais
          </span>
        </p>

        {/* MOBILE: carrossel com snap e aria */}
        <div
          className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory md:hidden pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
          aria-label="Depoimentos de clientes (carrossel)"
        >
          {items.map((t) => (
            <Card
              key={t.name}
              className="min-w-[85%] snap-start bg-[#0E1319] border-white/10"
              role="group"
              aria-label={`Depoimento de ${t.name}, ${t.role}`}
            >
              <CardContent className="p-6">
                <Header t={t} />
                <blockquote className="mt-3 text-white/80">
                  “{t.quote}”
                </blockquote>
                <div className="mt-3" aria-label="Avaliação 5 de 5">
                  <span className="text-yellow-400" aria-hidden>
                    ★★★★★
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* DESKTOP: grid */}
        <div
          className="mt-8 hidden md:grid gap-6 md:grid-cols-3"
          aria-label="Depoimentos de clientes (grade)"
        >
          {items.map((t) => (
            <Card
              key={t.name}
              className="bg-[#0E1319] border-white/10 hover:border-teal-400/30 transition"
              role="group"
              aria-label={`Depoimento de ${t.name}, ${t.role}`}
            >
              <CardContent className="p-6">
                <Header t={t} />
                <blockquote className="mt-3 text-white/80">
                  “{t.quote}”
                </blockquote>
                <div className="mt-3" aria-label="Avaliação 5 de 5">
                  <span className="text-yellow-400" aria-hidden>
                    ★★★★★
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTAs: aplicar no meu negócio + ver estudos */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            data-cta="whatsapp"
            data-label="Testimonials - Aplicar no meu negócio"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-400/95 hover:bg-teal-400 px-5 py-3 text-sm font-semibold text-[#0B0F14] focus-visible:ring-2 focus-visible:ring-teal-300"
            aria-label="Quero resultado assim no meu negócio (falar no WhatsApp)"
          >
            <MessageSquare className="h-4 w-4" />
            Quero resultado assim no meu negócio 💬
          </a>

          <a
            href="#cases"
            data-cta="cta"
            data-label="Testimonials - Ver estudos e prints"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-teal-300"
          >
            Ver estudos e prints ⚡
          </a>
        </div>
      </div>
    </section>
  );
}

function Header({ t }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/10">
        <Image
          src={t.avatar}
          alt={`Foto de ${t.name}`}
          fill
          sizes="40px"
          priority={false}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <p className="font-semibold">{t.name}</p>
        <p className="text-xs text-white/60">{t.role}</p>
      </div>
    </div>
  );
}
