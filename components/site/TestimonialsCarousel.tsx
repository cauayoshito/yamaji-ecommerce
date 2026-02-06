"use client";

import { useEffect, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import IconBadge from "@/components/ui/IconBadge";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Camila Rocha",
    role: "Operações • consultoria jurídica",
    quote:
      "O time conectou marketing e operação em um fluxo único. Hoje sabemos exatamente de onde vem cada lead.",
  },
  {
    name: "Henrique Duarte",
    role: "CEO • indústria de energia",
    quote:
      "A Yamaji entrou como braço tech. Painéis, automações e site — tudo conversando.",
  },
  {
    name: "Larissa Monteiro",
    role: "Head de Growth • educação",
    quote:
      "A estrutura de tracking mudou nossa previsibilidade. Agora crescemos sem perder qualidade.",
  },
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 text-sm text-muted">
        <IconBadge className="h-9 w-9 text-accent">★</IconBadge>
        Depoimentos selecionados
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <GlassCard
            key={item.name}
            className={cn(
              "min-h-[220px] transition duration-300",
              index === activeIndex
                ? "border-accent/60 shadow-glow"
                : "opacity-70"
            )}
          >
            <p className="text-sm leading-relaxed text-fg">“{item.quote}”</p>
            <div className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">
              {item.name}
            </div>
            <div className="text-xs text-muted">{item.role}</div>
          </GlassCard>
        ))}
      </div>
      <div className="flex gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            className={cn(
              "h-2 w-10 rounded-full transition",
              index === activeIndex ? "bg-accent" : "bg-white/10"
            )}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
