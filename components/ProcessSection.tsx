import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const WHATS = {
  phone: "5571992258349",
  text: "Oi%2C%20quero%20passar%20pelo%20processo%20da%20Yamaji%20pra%20melhorar%20meu%20neg%C3%B3cio.%20Pode%20me%20explicar%3F",
  utm: "utm_source=site&utm_medium=cta&utm_campaign=process",
};
const waLink = `https://wa.me/${WHATS.phone}?text=${WHATS.text}&${WHATS.utm}`;

export default function Process() {
  const steps = [
    {
      title: "1. Diagnóstico",
      desc: "Descobrimos onde seu site e anúncios estão perdendo clientes. Você recebe um plano visual do que mudar primeiro.",
    },
    {
      title: "2. Execução",
      desc: "Criamos o site otimizado, anúncios com a oferta certa e configuramos a IA pra responder sozinha no WhatsApp.",
    },
    {
      title: "3. Escala",
      desc: "Acompanhamos semanalmente e ajustamos campanhas pra aumentar resultados mês a mês.",
    },
  ];

  return (
    <section
      id="processo"
      className="relative border-t border-white/10 bg-white/5"
      aria-labelledby="process-title"
      data-section="process"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2
          id="process-title"
          className="text-2xl md:text-3xl font-bold text-center"
        >
          Como entregamos resultado
        </h2>
        <p className="text-center text-white/70 mt-2">
          Em 3 etapas simples: entender, construir e escalar com acompanhamento
          real pelo WhatsApp.
        </p>

        <ol className="mt-8 grid gap-6 md:grid-cols-3" role="list">
          {steps.map((s) => (
            <li key={s.title} role="listitem">
              <Card className="bg-[#0E1319] border-white/10 hover:border-teal-400/20 transition">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-teal-300">
                    {s.title}
                  </h3>
                  <p className="text-white/80 text-sm mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>

        {/* CTA final — leva direto ao WhatsApp */}
        <div className="mt-8 flex justify-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            data-cta="whatsapp"
            data-label="Process - Quero passar por esse processo"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-400/95 hover:bg-teal-400 px-5 py-3 text-sm font-semibold text-[#0B0F14] focus-visible:ring-2 focus-visible:ring-teal-300"
            aria-label="Falar no WhatsApp sobre o processo Yamaji"
          >
            <MessageCircle className="h-4 w-4" />
            Quero passar por esse processo 💬
          </a>
        </div>
      </div>
    </section>
  );
}
