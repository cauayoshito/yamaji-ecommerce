// components/ProblemHookSolutionCompact.tsx
// Versão otimizada para leigos — linguagem emocional e CTA direto no WhatsApp

import { AlertTriangle, Sparkles, CheckCircle2 } from "lucide-react";

function Card({
  Icon,
  title,
  line,
  children,
}: {
  Icon: any;
  title: string;
  line: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0E1319] p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-teal-300" />
        <h2 className="text-base font-bold">{title}</h2>
      </div>
      <p className="text-[0.95rem] text-white/80">{line}</p>
      {children}
    </div>
  );
}

export default function ProblemHookSolutionCompact() {
  const WHATS = {
    phone: "5571992358249",
    text: "Oi%2C%20quero%20entender%20como%20fazer%20meu%20neg%C3%B3cio%20vender%20todos%20os%20dias%20com%20site%2C%20an%C3%BAncios%20e%20IA.",
    utm: "utm_source=site&utm_medium=cta&utm_campaign=phs",
  };
  const waLink = `https://wa.me/${WHATS.phone}?text=${WHATS.text}&${WHATS.utm}`;

  return (
    <section
      className="relative border-y border-white/10 bg-white/5"
      aria-label="Problema, oportunidade e solução"
      data-section="phs"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-10 grid gap-4 md:grid-cols-3">
        {/* Problema */}
        <Card
          Icon={AlertTriangle}
          title="O problema"
          line="Você posta, investe e mesmo assim quase ninguém chama no WhatsApp ou entra na loja. O site até existe, mas não vende."
        />

        {/* Gancho de oportunidade */}
        <Card
          Icon={Sparkles}
          title="O momento é agora"
          line="Quando atendimento, site e operação não conversam, oportunidades se perdem todos os dias. Organizar a base é o primeiro passo para crescer."
        />

        {/* Solução Yamaji */}
        <Card
          Icon={CheckCircle2}
          title="Solução Yamaji"
          line="Montamos tudo pra você: site que vende, anúncios que trazem gente e IA que responde no WhatsApp 24h."
        >
          <div className="flex gap-2 flex-wrap">
            <a
              href="/servicos/sites"
              data-cta="cta"
              data-label="PHC - Ver Sites"
              className="rounded-lg bg-white/10 hover:bg-white/15 px-3 py-1.5 text-sm"
            >
              Ver “Sites”
            </a>
            <a
              href="/servicos/ads"
              data-cta="cta"
              data-label="PHC - Ver Ads"
              className="rounded-lg bg-white/10 hover:bg-white/15 px-3 py-1.5 text-sm"
            >
              Ver “Ads”
            </a>
            <a
              href="/servicos/ia-automacao"
              data-cta="cta"
              data-label="PHC - Ver IA"
              className="rounded-lg bg-white/10 hover:bg-white/15 px-3 py-1.5 text-sm"
            >
              Ver “IA”
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              data-cta="whatsapp"
              data-label="PHC - Montar plano rápido"
              className="rounded-lg bg-teal-400/95 hover:bg-teal-400 px-3 py-1.5 text-sm font-semibold text-[#0B0F14]"
            >
              Montar plano rápido 💬
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
