import { MessageCircle, ShieldCheck, Zap, Clock, Rocket } from "lucide-react";

const WHATS = {
  phone: "5571992358249",
  text: "Oi%2C%20quero%20testar%20a%20solu%C3%A7%C3%A3o%20da%20Yamaji%20sem%20compromisso%20por%2030%20dias.%20Pode%20me%20explicar%3F",
  utm: "utm_source=site&utm_medium=cta&utm_campaign=guarantees",
};
const waLink = `https://wa.me/${WHATS.phone}?text=${WHATS.text}&${WHATS.utm}`;

export default function Guarantees() {
  const items = [
    {
      icon: Rocket,
      title: "Onboarding em até 72h",
      desc: "Do briefing ao primeiro rascunho validado sem enrolação.",
    },
    {
      icon: Zap,
      title: "Primeiros leads na 1ª semana*",
      desc: "Mídia e landing no ar já captando contatos reais.",
    },
    {
      icon: Clock,
      title: "SLA de resposta < 2 min",
      desc: "IA + equipe humana integrada no WhatsApp e CRM.",
    },
    {
      icon: ShieldCheck,
      title: "Garantia de 30 dias",
      desc: "Sem risco: se não te atender, devolvemos o investimento.",
    },
  ];

  return (
    <section
      id="garantias"
      className="relative border-y border-white/10 bg-white/5"
      aria-labelledby="guarantee-title"
      data-section="guarantees"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2
          id="guarantee-title"
          className="text-2xl md:text-3xl font-bold text-center"
        >
          Garantias que você sente na prática
        </h2>
        <p className="text-center text-white/70 mt-2">
          Segurança, velocidade e resultado real sem promessas vazias.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#0E1319] p-4 md:p-6 shadow-lg shadow-black/10">
          <div className="grid gap-4 md:grid-cols-4">
            {items.map((it) => (
              <div
                key={it.title}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:border-teal-400/30 transition"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-teal-400">
                  <it.icon className="h-4 w-4 text-[#0B0F14]" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{it.title}</p>
                  <p className="text-xs text-white/60">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA de baixo risco */}
        <div className="mt-8 flex justify-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            data-cta="whatsapp"
            data-label="Guarantees - Testar sem compromisso"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-400/95 hover:bg-teal-400 text-[#0B0F14] px-5 py-3 font-semibold focus-visible:ring-2 focus-visible:ring-teal-300"
            aria-label="Testar sem compromisso por 30 dias (falar no WhatsApp)"
          >
            <MessageCircle className="h-4 w-4" />
            Testar sem compromisso 💬
          </a>
        </div>

        <p className="mt-3 text-center text-white/45 text-xs">
          *Tempo médio de ativação em projetos recentes. Resultados podem variar
          conforme nicho e investimento.
        </p>
      </div>
    </section>
  );
}
