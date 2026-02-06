"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL || "/api/lead";

type Lead = { nome: string; whatsapp: string; objetivo: string };
const onlyDigits = (s: string) => s.replace(/\D/g, "");

// helper para ler UTMs
function getUTMs() {
  if (typeof window === "undefined") return {};
  const url = new URL(window.location.href);
  const params = Object.fromEntries(url.searchParams.entries());
  const utm: Record<string, string> = {};
  [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ].forEach((k) => {
    if (params[k]) utm[k] = params[k];
  });
  return utm;
}

export default function AboutSection() {
  const [form, setForm] = useState<Lead>({
    nome: "",
    whatsapp: "",
    objetivo: "",
  });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [msg, setMsg] = useState<string>("");

  // honeypot anti-spam
  const [honey, setHoney] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honey) return; // bot

    setLoading(true);
    setOk(null);
    setMsg("");

    try {
      const payload = {
        nome: form.nome.trim(),
        whatsapp: onlyDigits(form.whatsapp),
        objetivo: form.objetivo.trim(),
        source: typeof window !== "undefined" ? window.location.href : "",
        referrer: typeof document !== "undefined" ? document.referrer : "",
        utm: getUTMs(),
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      };

      if (!payload.nome || payload.whatsapp.length < 10) {
        throw new Error("Preencha um WhatsApp válido.");
      }

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || json?.ok !== true) {
        throw new Error(json?.error || `Erro (${res.status}) ao enviar`);
      }

      setOk(true);
      setMsg("Recebido! Em instantes te chamamos no WhatsApp 🚀");
      setForm({ nome: "", whatsapp: "", objetivo: "" });

      // abrir WhatsApp opcional
      if (payload.whatsapp && payload.whatsapp.length >= 10) {
        const link = `https://wa.me/55${
          payload.whatsapp
        }?text=${encodeURIComponent(
          "Oi! Quero o diagnóstico gratuito da Yamaji Studio."
        )}`;
        window.open(link, "_blank", "noopener,noreferrer");
      }
    } catch (err: any) {
      setOk(false);
      setMsg(err?.message || "Falha ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="about"
      className="section bg-gradient-to-b from-bg/50 to-bg scroll-mt-24"
    >
      <div className="container grid items-start gap-12 md:grid-cols-2">
        {/* Lado de texto / diferenciais */}
        <div>
          <span className="chip">Diagnóstico gratuito</span>
          <h2 className="mt-4 h2">
            Descubra por que seu site não vende e como virar o jogo
          </h2>
          <p className="lead">
            Em 15 minutos avaliamos <b>Site</b>, <b>Ads</b> e <b>IA</b>. Você
            sai com um plano de ação claro.
          </p>

          <ul className="mt-6 space-y-3 text-muted">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
              <span>Insights práticos (sem jargão técnico)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
              <span>Prioridades que destravam conversão em 30 dias</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
              <span>Seguimos para proposta só se fizer sentido pra você</span>
            </li>
          </ul>

          <p className="mt-6 font-semibold text-fg">
            Preencha e receba seu link de agendamento:
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={onSubmit} className="card glass space-y-4 w-full">
          {/* honeypot invisível */}
          <input
            type="text"
            name="empresa"
            value={honey}
            onChange={(e) => setHoney(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <div>
            <label htmlFor="nome" className="block text-sm font-medium mb-1">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              value={form.nome}
              onChange={onChange}
              required
              placeholder="Seu nome"
              className="w-full rounded-md bg-bg/60 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label
              htmlFor="whatsapp"
              className="block text-sm font-medium mb-1"
            >
              WhatsApp
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              value={form.whatsapp}
              onChange={onChange}
              required
              inputMode="tel"
              placeholder="(71) 99999-9999"
              className="w-full rounded-md bg-bg/60 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <p className="mt-1 text-xs text-muted">
              Usaremos apenas para enviar o link de agendamento. Sem spam.
            </p>
          </div>

          <div>
            <label
              htmlFor="objetivo"
              className="block text-sm font-medium mb-1"
            >
              Objetivo
            </label>
            <input
              id="objetivo"
              name="objetivo"
              value={form.objetivo}
              onChange={onChange}
              placeholder="Ex.: mais clientes, aparecer no Google…"
              className="w-full rounded-md bg-bg/60 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full justify-center"
            disabled={loading}
            aria-disabled={loading}
          >
            {loading ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Enviando…
              </span>
            ) : (
              "Quero meu diagnóstico gratuito"
            )}
          </button>

          {ok === true && <p className="text-sm text-accent">{msg}</p>}
          {ok === false && <p className="text-sm text-red-400">{msg}</p>}

          <p className="small-muted">
            Ao enviar, você concorda em receber um contato da Yamaji Studio.
          </p>
        </form>
      </div>
    </section>
  );
}
