"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";

type LeadFormProps = {
  selectedObjective: string;
};

type FormState = {
  name: string;
  whatsapp: string;
  company: string;
  challenge: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  whatsapp: "",
  company: "",
  challenge: "",
};

const objectiveLabelMap: Record<string, string> = {
  "estruturar-captacao": "Estruturar captação e conversão",
  "reposicionar-operacao": "Reposicionar operação para escalar",
  "aumentar-performance": "Aumentar performance com automação",
};

const DEFAULT_WHATSAPP_NUMBER = "5571999999999"; // TODO: trocar para o número oficial se NEXT_PUBLIC_WHATSAPP_NUMBER não estiver configurado.
const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? DEFAULT_WHATSAPP_NUMBER;

export default function LeadForm({ selectedObjective }: LeadFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const whatsappDigits = useMemo(
    () => form.whatsapp.replace(/\D/g, ""),
    [form.whatsapp]
  );

  const selectedObjectiveLabel =
    objectiveLabelMap[selectedObjective] ?? "Não informado";

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Informe seu nome.";
    }

    if (whatsappDigits.length < 10) {
      nextErrors.whatsapp = "Digite um WhatsApp válido com DDD.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const openWhatsApp = () => {
    const recipient = WHATSAPP_NUMBER.replace(/\D/g, "");
    const message =
      `Oi! Sou ${form.name.trim()}. Meu objetivo é: ${selectedObjectiveLabel}. ` +
      `Empresa: ${form.company.trim() || "—"}. ` +
      `Desafio: ${form.challenge.trim() || "—"}. ` +
      "Quero o diagnóstico Yamaji.";

    const url = `https://wa.me/${recipient}?text=${encodeURIComponent(message)}`;
    const popup = window.open(url, "_blank", "noopener,noreferrer");

    if (!popup) {
      window.location.href = url;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    if (!validate()) return;

    setIsSubmitting(true);

    const payload = {
      name: form.name.trim(),
      whatsapp: form.whatsapp.trim(),
      company: form.company.trim(),
      challenge: form.challenge.trim(),
      objective: selectedObjectiveLabel,
      source: "aplicar-page-whatsapp",
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Falha no envio");
      }

      setFeedback("Lead enviado. Abrindo WhatsApp...");
    } catch {
      setFeedback("Não consegui enviar agora, mas vou abrir o WhatsApp para você.");
    } finally {
      openWhatsApp();
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="rounded-2xl border border-white/10 bg-[#0f1218]/85 p-6 shadow-[0_0_48px_rgba(0,255,163,0.12)] backdrop-blur md:p-7"
      aria-labelledby="lead-form-title"
    >
      <h2 id="lead-form-title" className="text-2xl font-semibold text-fg">
        Solicite seu diagnóstico
      </h2>
      <p className="mt-2 text-sm text-muted">
        Me chama no WhatsApp e eu te mando o diagnóstico.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="lead-name" className="text-sm font-medium text-fg">
            Nome
          </label>
          <input
            id="lead-name"
            type="text"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="mt-2 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-sm text-fg placeholder:text-muted focus:border-accent/60"
            placeholder="Seu nome completo"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "lead-name-error" : undefined}
            autoComplete="name"
            required
          />
          {errors.name ? (
            <p id="lead-name-error" className="mt-2 text-xs text-rose-300">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="lead-whatsapp" className="text-sm font-medium text-fg">
            WhatsApp
          </label>
          <input
            id="lead-whatsapp"
            type="tel"
            inputMode="tel"
            value={form.whatsapp}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, whatsapp: event.target.value }))
            }
            className="mt-2 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-sm text-fg placeholder:text-muted focus:border-accent/60"
            placeholder="(71) 99999-9999"
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={errors.whatsapp ? "lead-whatsapp-error" : undefined}
            autoComplete="tel"
            required
          />
          {errors.whatsapp ? (
            <p id="lead-whatsapp-error" className="mt-2 text-xs text-rose-300">
              {errors.whatsapp}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="lead-company" className="text-sm font-medium text-fg">
            Empresa (opcional)
          </label>
          <input
            id="lead-company"
            type="text"
            value={form.company}
            onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
            className="mt-2 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-sm text-fg placeholder:text-muted focus:border-accent/60"
            placeholder="Nome da empresa"
            autoComplete="organization"
          />
        </div>

        <div>
          <label htmlFor="lead-challenge" className="text-sm font-medium text-fg">
            Desafio (opcional)
          </label>
          <textarea
            id="lead-challenge"
            value={form.challenge}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, challenge: event.target.value }))
            }
            className="mt-2 min-h-[110px] w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-sm text-fg placeholder:text-muted focus:border-accent/60"
            placeholder="Descreva em uma frase o cenário atual"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Enviando..."
            : "Chamar no WhatsApp e receber diagnóstico"}
        </button>

        <p className="text-xs text-muted">
          Resposta em até 24h úteis. Vagas limitadas por agenda.
        </p>

        {feedback ? (
          <p className="text-xs text-emerald-300" role="status" aria-live="polite">
            {feedback}
          </p>
        ) : null}
      </form>
    </section>
  );
}
