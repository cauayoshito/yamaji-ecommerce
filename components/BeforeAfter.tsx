// components/BeforeAfter.tsx
// Experiência interativa “Antes × Depois” com variação por contexto (Sites / Ads / IA)
// Otimizado para leigos: microcopy simples, CTA WhatsApp, tracking data-cta/data-label
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Layers,
  Rocket,
  Bot,
  CheckCircle2,
  XCircle,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Mode = "antes" | "depois";
type Track = "sites" | "ads" | "ia";

const tracks: { key: Track; label: string; icon: any }[] = [
  { key: "sites", label: "Sites", icon: Layers },
  { key: "ads", label: "Anúncios", icon: Rocket },
  { key: "ia", label: "IA", icon: Bot },
];

// WhatsApp (edite uma vez)
const WHATS = {
  phone: "5571992358249",
  utm: "utm_source=site&utm_medium=cta&utm_campaign=beforeafter",
};
const wa = (msg: string) =>
  `https://wa.me/${WHATS.phone}?text=${encodeURIComponent(msg)}&${WHATS.utm}`;

const copy = {
  sites: {
    antes: [
      "Site lento e sem oferta clara",
      "Quase ninguém encontra no Google",
      "Layout bonito, mas ninguém chama",
    ],
    depois: [
      "Oferta clara + prova social que dá confiança",
      "Rápido e fácil de usar no celular",
      "Botões que levam direto pro WhatsApp",
    ],
    kpi: [
      "Até 2× mais pedidos",
      "Abre em ~2s",
      "Mais gente chegando do Google",
    ],
    ctaHref: "/servicos/sites?ref=ba",
    cta: "Quero meu site vendendo",
    waMsg:
      "Oi, vi o Antes×Depois de *Sites* e quero meu site vendendo de verdade.",
  },
  ads: {
    antes: [
      "Paga caro no anúncio e quase ninguém clica",
      "Sem oferta certa para cada público",
      "Relatórios confusos; difícil saber o que funciona",
    ],
    depois: [
      "Oferta e criativos por etapa (descoberta → compra)",
      "Google e Instagram trazendo gente certa pro WhatsApp",
      "Painel simples com o que importa: pedidos e vendas",
    ],
    kpi: [
      "Custo por cliente ↓",
      "Mais cliques de gente certa",
      "Vendas mais previsíveis",
    ],
    ctaHref: "/servicos/ads?ref=ba",
    cta: "Quero clientes dos anúncios",
    waMsg:
      "Oi, vi o Antes×Depois de *Anúncios* e quero anúncios que tragam clientes no WhatsApp.",
  },
  ia: {
    antes: [
      "Leads somem no WhatsApp",
      "Atendimento lento; perde venda",
      "Sem rotina: cada caso vira um improviso",
    ],
    depois: [
      "Bot que responde 24h e não deixa lead esfriar",
      "Follow-up automático e retomada de conversa",
      "Roteiros por oferta e nicho atendimento redondo",
    ],
    kpi: [
      "Resposta em minutos",
      "Mais fechamentos",
      "Nunca perde um lead de madrugada",
    ],
    ctaHref: "/servicos/ia-automacao?ref=ba",
    cta: "Quero IA no meu WhatsApp",
    waMsg:
      "Oi, vi o Antes×Depois de *IA* e quero ativar respostas e follow-up 24h no meu WhatsApp.",
  },
} as const;

export default function BeforeAfter() {
  const [mode, setMode] = useState<Mode>("antes");
  const [track, setTrack] = useState<Track>("sites");
  const TrackIcon = useMemo(
    () => tracks.find((t) => t.key === track)?.icon || Layers,
    [track]
  );
  const data = copy[track];

  // aria-live para leitores de tela entenderem a mudança
  const [live, setLive] = useState("");
  useEffect(() => {
    setLive(
      `Mostrando ${mode === "antes" ? "Antes" : "Depois"} de ${labelByTrack(
        track
      )}`
    );
  }, [mode, track]);

  return (
    <section
      className="relative"
      id="como-funciona"
      aria-labelledby="ba-title"
      data-section="before-after"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2 id="ba-title" className="text-2xl md:text-3xl font-bold">
            Antes × Depois (experiência real)
          </h2>

          {/* seletor de modo */}
          <div
            role="tablist"
            aria-label="Antes ou Depois"
            className="rounded-lg bg-white/5 p-1 border border-white/10"
          >
            <button
              role="tab"
              aria-selected={mode === "antes"}
              onClick={() => setMode("antes")}
              className={cn(
                "px-3 py-1.5 text-sm rounded-md transition",
                mode === "antes"
                  ? "bg-[#0E1319] text-white"
                  : "text-white/70 hover:text-white"
              )}
            >
              Antes
            </button>
            <button
              role="tab"
              aria-selected={mode === "depois"}
              onClick={() => setMode("depois")}
              className={cn(
                "px-3 py-1.5 text-sm rounded-md transition",
                mode === "depois"
                  ? "bg-[#0E1319] text-white"
                  : "text-white/70 hover:text-white"
              )}
            >
              Depois
            </button>
          </div>
        </div>

        {/* status para screen readers */}
        <p className="sr-only" aria-live="polite">
          {live}
        </p>

        {/* trilhas (Sites/Anúncios/IA) */}
        <div className="mt-4 flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {tracks.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTrack(key)}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition",
                track === key
                  ? "border-teal-400/30 bg-teal-400/10 text-white"
                  : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
              )}
              aria-pressed={track === key}
              data-cta="cta"
              data-label={`BA - Troca trilha - ${label}`}
            >
              <Icon className="h-4 w-4" /> {label}
            </button>
          ))}
        </div>

        {/* cartões */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Antes */}
          <div
            className={cn(
              "rounded-xl border p-5 transition",
              mode === "antes"
                ? "border-rose-400/20 bg-rose-400/5"
                : "border-white/10 bg-white/5"
            )}
          >
            <header className="flex items-center gap-2 mb-2">
              <XCircle className="h-5 w-5 text-rose-300" />
              <h3 className="font-semibold">Antes ({labelByTrack(track)})</h3>
            </header>
            <ul
              className="space-y-2 text-sm text-white/80 list-disc pl-5"
              role="list"
            >
              {data.antes.map((item) => (
                <li key={item} role="listitem">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Depois */}
          <div
            className={cn(
              "rounded-xl border p-5 transition",
              mode === "depois"
                ? "border-emerald-400/25 bg-emerald-400/10"
                : "border-white/10 bg-white/5"
            )}
          >
            <header className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-300" />
              <h3 className="font-semibold">Depois (Yamaji Studio)</h3>
            </header>

            <ul
              className="space-y-2 text-sm text-white/80 list-disc pl-5"
              role="list"
            >
              {data.depois.map((item) => (
                <li key={item} role="listitem">
                  {item}
                </li>
              ))}
            </ul>

            {/* KPIs rápidos (tradução de jargão → vida real) */}
            <div className="mt-4 flex flex-wrap gap-2">
              {data.kpi.map((k) => (
                <span
                  key={k}
                  className="inline-flex items-center rounded-full border border-emerald-300/20 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-200"
                >
                  {k}
                </span>
              ))}
            </div>

            {/* CTAs: serviço + WhatsApp + ver casos */}
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={data.ctaHref}
                data-cta="cta"
                data-label={`BA - ${track} - Ver serviço`}
                className="inline-flex items-center gap-2 rounded-lg bg-teal-400/95 hover:bg-teal-400 px-4 py-2 font-semibold text-[#0B0F14] focus-visible:ring-2 focus-visible:ring-teal-300"
                aria-label={`${data.cta}`}
              >
                <TrackIcon className="h-4 w-4" />
                {data.cta}
              </a>

              <a
                href={wa(data.waMsg)}
                target="_blank"
                rel="noopener"
                data-cta="whatsapp"
                data-label={`BA - ${track} - Quero assim no meu negócio`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-4 py-2 font-semibold text-white focus-visible:ring-2 focus-visible:ring-teal-300"
                aria-label="Quero assim no meu negócio (falar no WhatsApp)"
              >
                <MessageCircle className="h-4 w-4" />
                Quero assim no meu negócio
              </a>

              <a
                href="#cases"
                data-cta="cta"
                data-label={`BA - ${track} - Ver exemplos`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-teal-300"
                aria-label="Ver exemplos reais"
              >
                Ver exemplos reais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function labelByTrack(t: Track) {
  if (t === "sites") return "site atual";
  if (t === "ads") return "anúncios atuais";
  return "atendimento atual";
}
