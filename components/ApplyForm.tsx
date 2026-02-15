"use client";

import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Landing Page",
  "Site Institucional",
  "Sistema Web",
  "E-commerce",
  "Automação/IA",
  "Outro",
];

const deadlines = ["Urgente (7 dias)", "15 dias", "30 dias", "Flexível"];

export type ApplyProjectOptions = {
  selectedServices: string[];
  goal: string;
  urgency: string;
  budget: string;
  contactPreference: "WhatsApp" | "Email" | "";
};

type FormState = {
  name: string;
  whatsapp: string;
  projectType: string;
  deadline: string;
  context: string;
  hasReference: boolean;
};

type ApplyFormProps = {
  projectOptions?: ApplyProjectOptions;
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

export default function ApplyForm({ projectOptions }: ApplyFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const whatsappDigits = useMemo(
    () => form.whatsapp.replace(/\D/g, ""),
    [form.whatsapp]
  );

  useEffect(() => {
    if (!projectOptions) return;

    const firstService = projectOptions.selectedServices[0];
    setForm((prev) => ({
      ...prev,
      projectType: prev.projectType || firstService || prev.projectType,
      deadline: prev.deadline || projectOptions.urgency || prev.deadline,
    }));
  }, [projectOptions]);

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Informe seu nome.";
    if (whatsappDigits.length < 10)
      nextErrors.whatsapp = "Digite um WhatsApp válido com DDD.";
    if (!form.projectType) nextErrors.projectType = "Selecione o tipo.";
    if (!form.deadline) nextErrors.deadline = "Selecione o prazo.";
    if (!form.context.trim())
      nextErrors.context = "Descreva o contexto do projeto.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitMessage("");

    if (!validate()) return;

    setSubmitState("loading");

    const payload = {
      ...form,
      projectOptions,
      contextLength: form.context.length,
      createdAt: new Date().toISOString(),
      source: "aplicar-page",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Não foi possível enviar agora.");
      }

      try {
        trackEvent("apply_submit", { category: "lead", label: "aplicar" });
      } catch {
        // ignore analytics failures
      }

      setSubmitState("success");
      setSubmitMessage("Aplicação enviada com sucesso. Retornaremos em até 24h úteis.");
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Erro inesperado ao enviar aplicação."
      );
    }
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
          <div className="mt-2 flex items-center justify-between">
            {errors.context ? (
              <p id="apply-context-error" className="text-xs text-accent">
                {errors.context}
              </p>
            ) : (
              <span className="text-xs text-muted">Sem limite de caracteres</span>
            )}
            <span className="text-xs text-muted">{form.context.length} caracteres</span>
          </div>
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
          disabled={submitState === "loading"}
        >
          {submitState === "loading"
            ? "Enviando aplicação..."
            : "Enviar aplicação"}
        </button>

        {submitMessage ? (
          <p
            className={cn(
              "text-xs",
              submitState === "success" ? "text-emerald-300" : "text-rose-300"
            )}
          >
            {submitMessage}
          </p>
        ) : null}

        <p className="text-xs text-muted">
          Respondemos em até 24h úteis. Vagas limitadas por agenda.
        </p>
      </form>
    </GlassCard>
  );
}
