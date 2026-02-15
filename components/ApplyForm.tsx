"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { trackEvent } from "@/lib/analytics";

const WHATSAPP_NUMBER = "5571992258349"; // Altere aqui se o número mudar.

const projectTypes = [
  "Landing Page",
  "Site Institucional",
  "Sistema Web",
  "E-commerce",
  "Automação/IA",
  "Outro",
];

const deadlines = ["Urgente (7 dias)", "15 dias", "30 dias", "Flexível"];

type FormState = {
  name: string;
  whatsapp: string;
  projectType: string;
  deadline: string;
  context: string;
  hasReference: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  whatsapp: "",
  projectType: "",
  deadline: "",
  context: "",
  hasReference: false,
};

export default function ApplyForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappDigits = useMemo(
    () => form.whatsapp.replace(/\D/g, ""),
    [form.whatsapp]
  );

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Informe seu nome.";
    if (whatsappDigits.length < 10)
      nextErrors.whatsapp = "Digite um WhatsApp válido com DDD.";
    if (!form.projectType) nextErrors.projectType = "Selecione o tipo.";
    if (!form.deadline) nextErrors.deadline = "Selecione o prazo.";
    if (form.context.trim().length < 20)
      nextErrors.context = "Descreva com pelo menos 20 caracteres.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const messageLines = [
      `Olá, sou ${form.name}. Quero aplicar para um projeto na Yamaji.`,
      `Tipo: ${form.projectType}`,
      `Prazo: ${form.deadline}`,
      `WhatsApp: ${form.whatsapp}`,
      `Contexto: ${form.context}`,
      `Referência: ${form.hasReference ? "Sim" : "Não"}`,
    ];

    const message = encodeURIComponent(messageLines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    try {
      trackEvent("apply_submit", { category: "lead", label: "aplicar" });
    } catch {
      // ignore analytics failures
    }

    window.location.href = url;
  };

  return (
    <GlassCard className="p-6 md:p-8">
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label
            htmlFor="apply-name"
            className="text-xs uppercase tracking-[0.2em] text-muted"
          >
            Nome
          </label>
          <input
            id="apply-name"
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fg focus:border-accent/60 focus:outline-none"
            placeholder="Seu nome completo"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "apply-name-error" : undefined}
            required
          />
          {errors.name && (
            <p id="apply-name-error" className="mt-2 text-xs text-accent">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="apply-whatsapp"
            className="text-xs uppercase tracking-[0.2em] text-muted"
          >
            WhatsApp
          </label>
          <input
            id="apply-whatsapp"
            type="tel"
            inputMode="tel"
            value={form.whatsapp}
            onChange={(event) => updateField("whatsapp", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fg focus:border-accent/60 focus:outline-none"
            placeholder="(71) 99999-9999"
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={
              errors.whatsapp ? "apply-whatsapp-error" : undefined
            }
            required
          />
          {errors.whatsapp && (
            <p id="apply-whatsapp-error" className="mt-2 text-xs text-accent">
              {errors.whatsapp}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="apply-project-type"
            className="text-xs uppercase tracking-[0.2em] text-muted"
          >
            Tipo de projeto
          </label>
          <select
            id="apply-project-type"
            value={form.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fg focus:border-accent/60 focus:outline-none"
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? "apply-project-type-error" : undefined
            }
            required
          >
            <option value="">Selecione uma opção</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p
              id="apply-project-type-error"
              className="mt-2 text-xs text-accent"
            >
              {errors.projectType}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="apply-deadline"
            className="text-xs uppercase tracking-[0.2em] text-muted"
          >
            Prazo
          </label>
          <select
            id="apply-deadline"
            value={form.deadline}
            onChange={(event) => updateField("deadline", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fg focus:border-accent/60 focus:outline-none"
            aria-invalid={Boolean(errors.deadline)}
            aria-describedby={errors.deadline ? "apply-deadline-error" : undefined}
            required
          >
            <option value="">Selecione um prazo</option>
            {deadlines.map((deadline) => (
              <option key={deadline} value={deadline}>
                {deadline}
              </option>
            ))}
          </select>
          {errors.deadline && (
            <p id="apply-deadline-error" className="mt-2 text-xs text-accent">
              {errors.deadline}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="apply-context"
            className="text-xs uppercase tracking-[0.2em] text-muted"
          >
            Contexto do projeto
          </label>
          <textarea
            id="apply-context"
            value={form.context}
            onChange={(event) => updateField("context", event.target.value)}
            className="mt-2 min-h-[140px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fg focus:border-accent/60 focus:outline-none"
            placeholder="Ex.: objetivo, escopo, equipe atual, métricas, integrações..."
            aria-invalid={Boolean(errors.context)}
            aria-describedby={errors.context ? "apply-context-error" : undefined}
            required
          />
          {errors.context && (
            <p id="apply-context-error" className="mt-2 text-xs text-accent">
              {errors.context}
            </p>
          )}
        </div>

        <label className="flex items-center gap-3 text-sm text-muted">
          <input
            type="checkbox"
            checked={form.hasReference}
            onChange={(event) => updateField("hasReference", event.target.checked)}
            className="h-4 w-4 rounded border-white/20 bg-white/10 text-accent focus:ring-accent/60"
          />
          Tenho referência/inspiração
        </label>

        <button
          type="submit"
          className="btn btn-primary w-full justify-center"
          disabled={isSubmitting}
        >
          Enviar aplicação e falar no WhatsApp
        </button>
        <p className="text-xs text-muted">
          Respondemos em até 24h úteis. Vagas limitadas por agenda.
        </p>
      </form>
    </GlassCard>
  );
}
