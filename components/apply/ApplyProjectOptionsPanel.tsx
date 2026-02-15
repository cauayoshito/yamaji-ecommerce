"use client";

import { useMemo, useState } from "react";
import ApplyForm, { type ApplyProjectOptions } from "@/components/ApplyForm";
import { cn } from "@/lib/utils";

type ServiceItem = {
  title: string;
  desc: string;
  tag: string;
};

type ApplyProjectOptionsPanelProps = {
  services: ServiceItem[];
};

const goals = [
  { value: "captar leads", label: "Captar leads" },
  { value: "vender online", label: "Vender online" },
  { value: "recorrência", label: "Recorrência" },
  { value: "automação", label: "Automação" },
  { value: "outro", label: "Outro" },
] as const;

const urgencies = [
  { value: "agora", label: "Agora" },
  { value: "15 dias", label: "15 dias" },
  { value: "30 dias", label: "30 dias" },
  { value: "60+", label: "60+" },
] as const;

const budgetRanges = ["<1k", "1k-3k", "3k-6k", "6k+"] as const;

const contactPreferences: Array<ApplyProjectOptions["contactPreference"]> = [
  "WhatsApp",
  "Email",
];

export default function ApplyProjectOptionsPanel({
  services,
}: ApplyProjectOptionsPanelProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [goal, setGoal] = useState("");
  const [urgency, setUrgency] = useState("");
  const [budget, setBudget] = useState("");
  const [contactPreference, setContactPreference] =
    useState<ApplyProjectOptions["contactPreference"]>("WhatsApp");

  const options = useMemo<ApplyProjectOptions>(
    () => ({
      selectedServices,
      goal,
      urgency,
      budget,
      contactPreference,
    }),
    [selectedServices, goal, urgency, budget, contactPreference]
  );

  const toggleService = (serviceTitle: string) => {
    setSelectedServices((current) =>
      current.includes(serviceTitle)
        ? current.filter((item) => item !== serviceTitle)
        : [...current, serviceTitle]
    );
  };

  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-fg">
          Opções do projeto
        </h2>

        <div className="mt-5 space-y-5">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Seleção de serviço
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {services.map((service) => {
                const selected = selectedServices.includes(service.title);
                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => toggleService(service.title)}
                    className={cn(
                      "rounded-full border px-3 py-2 text-xs font-semibold transition",
                      selected
                        ? "border-accent/40 bg-accent/15 text-accent"
                        : "border-white/10 bg-black/20 text-muted hover:border-white/20 hover:text-fg"
                    )}
                  >
                    {service.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Objetivo principal
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {goals.map((item) => (
                <label
                  key={item.value}
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-muted transition hover:border-white/20"
                >
                  <input
                    type="radio"
                    name="goal"
                    className="h-4 w-4 border-white/20 bg-white/10 text-accent"
                    checked={goal === item.value}
                    onChange={() => setGoal(item.value)}
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Urgência</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {urgencies.map((item) => (
                <label
                  key={item.value}
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-muted transition hover:border-white/20"
                >
                  <input
                    type="radio"
                    name="urgency"
                    className="h-4 w-4 border-white/20 bg-white/10 text-accent"
                    checked={urgency === item.value}
                    onChange={() => setUrgency(item.value)}
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="budget-range"
              className="text-xs uppercase tracking-[0.18em] text-muted"
            >
              Faixa de orçamento
            </label>
            <select
              id="budget-range"
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-fg focus:border-accent/60 focus:outline-none"
            >
              <option value="">Selecione</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Preferência de contato
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {contactPreferences.map((item) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-muted transition hover:border-white/20"
                >
                  <input
                    type="radio"
                    name="contactPreference"
                    className="h-4 w-4 border-white/20 bg-white/10 text-accent"
                    checked={contactPreference === item}
                    onChange={() => setContactPreference(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ApplyForm projectOptions={options} />
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-muted">
        <p className="font-semibold text-fg">Resposta rápida</p>
        <p className="mt-1">
          Se fizer sentido, você recebe um direcionamento com escopo sugerido e
          próximo passo.
        </p>
      </div>
    </div>
  );
}
