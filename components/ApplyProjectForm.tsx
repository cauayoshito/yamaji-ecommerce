"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";

type FormState = {
  fullName: string;
  whatsapp: string;
  budgetRange: string;
  context: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const budgetOptions = [
  "Até R$ 5.000",
  "R$ 5.000 a R$ 15.000",
  "R$ 15.000 a R$ 30.000",
  "R$ 30.000+",
];

const initialState: FormState = {
  fullName: "",
  whatsapp: "",
  budgetRange: "",
  context: "",
};

async function submitProjectApplication(payload: FormState) {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return payload;
}

export default function ApplyProjectForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const whatsappDigits = useMemo(() => form.whatsapp.replace(/\D/g, ""), [form.whatsapp]);

  const updateField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Informe seu nome completo.";
    }

    if (!whatsappDigits) {
      nextErrors.whatsapp = "Informe seu WhatsApp.";
    } else if (!/^\d{10,13}$/.test(whatsappDigits)) {
      nextErrors.whatsapp = "Digite um número válido com DDD.";
    }

    if (!form.budgetRange) {
      nextErrors.budgetRange = "Selecione a faixa de orçamento.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (!validate()) return;

    setStatus("loading");

    try {
      await submitProjectApplication(form);
      setStatus("success");
      setMessage("Recebemos sua aplicação. Retornaremos em breve.");
      setForm(initialState);
      setErrors({});
    } catch {
      setStatus("error");
      setMessage("Não foi possível enviar agora. Tente novamente em instantes.");
    }
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-[#0F1113] p-5 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)] sm:p-7">
      <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
        <div>
          <label htmlFor="project-full-name" className="mb-2 block text-sm font-medium text-zinc-200">
            Nome completo
          </label>
          <input
            id="project-full-name"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="Seu nome"
            className="h-12 w-full rounded-2xl border border-white/15 bg-black/30 px-4 text-base text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-accent/70 focus:ring-2 focus:ring-accent/20"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "project-full-name-error" : undefined}
            required
          />
          {errors.fullName ? (
            <p id="project-full-name-error" className="mt-1.5 text-xs text-rose-300">
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="project-whatsapp" className="mb-2 block text-sm font-medium text-zinc-200">
            WhatsApp
          </label>
          <input
            id="project-whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.whatsapp}
            onChange={(event) => updateField("whatsapp", event.target.value)}
            placeholder="(11) 99999-9999"
            className="h-12 w-full rounded-2xl border border-white/15 bg-black/30 px-4 text-base text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-accent/70 focus:ring-2 focus:ring-accent/20"
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={errors.whatsapp ? "project-whatsapp-error" : undefined}
            required
          />
          {errors.whatsapp ? (
            <p id="project-whatsapp-error" className="mt-1.5 text-xs text-rose-300">
              {errors.whatsapp}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="project-budget" className="mb-2 block text-sm font-medium text-zinc-200">
            Faixa de orçamento
          </label>
          <select
            id="project-budget"
            value={form.budgetRange}
            onChange={(event) => updateField("budgetRange", event.target.value)}
            className="h-12 w-full rounded-2xl border border-white/15 bg-black/30 px-4 text-base text-zinc-100 outline-none transition focus:border-accent/70 focus:ring-2 focus:ring-accent/20"
            aria-invalid={Boolean(errors.budgetRange)}
            aria-describedby={errors.budgetRange ? "project-budget-error" : undefined}
            required
          >
            <option value="" className="text-zinc-700">
              Selecione uma opção
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option} className="text-zinc-900">
                {option}
              </option>
            ))}
          </select>
          {errors.budgetRange ? (
            <p id="project-budget-error" className="mt-1.5 text-xs text-rose-300">
              {errors.budgetRange}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="project-context" className="mb-2 block text-sm font-medium text-zinc-200">
            Contexto do projeto
          </label>
          <textarea
            id="project-context"
            value={form.context}
            onChange={(event) => updateField("context", event.target.value)}
            placeholder="Resumo rápido do que você precisa"
            rows={4}
            className="w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-base text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-accent/70 focus:ring-2 focus:ring-accent/20"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex h-14 w-full items-center justify-center rounded-2xl bg-accent px-6 text-base font-semibold text-[#04120F] shadow-[0_14px_35px_-18px_rgba(93,255,184,0.95)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <span className="inline-flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#04120F]/30 border-t-[#04120F]" />
              Enviando...
            </span>
          ) : (
            "Quero aplicar meu projeto"
          )}
        </button>

        <p className="text-center text-xs text-zinc-400">Resposta em até 24h úteis. Vagas limitadas.</p>

        {message ? (
          <p className={`text-center text-sm ${status === "success" ? "text-emerald-300" : "text-rose-300"}`}>
            {message}
          </p>
        ) : null}
      </form>
    </section>
  );
}
