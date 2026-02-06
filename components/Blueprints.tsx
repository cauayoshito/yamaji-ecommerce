// components/Blueprints.tsx
import Link from "next/link";
import { UtensilsCrossed, Stethoscope, ShoppingBag } from "lucide-react";

const items = [
  {
    icon: UtensilsCrossed,
    title: "Restaurante",
    desc: "LP + Ads + IA para pedidos e reservas.",
    href: "/blueprints/restaurante",
  },
  {
    icon: Stethoscope,
    title: "Clínica/Estética",
    desc: "Captação de consultas com qualificação no Whats.",
    href: "/blueprints/clinica",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce local",
    desc: "Campanhas de conversão e recuperação de carrinho.",
    href: "/blueprints/ecommerce",
  },
];

export default function Blueprints() {
  return (
    <section className="bg-bg">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="h2">Blueprints por nicho</h2>
          <p className="lead">
            Fluxos prontos de Sites + Ads + IA para começar rápido.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc, href }) => (
            <Link
              key={title}
              href={`${href}?utm_source=home&utm_medium=cta&utm_campaign=blueprint`}
              className="group rounded-xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_10px_40px_rgba(0,255,163,0.12)]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                <Icon className="h-5 w-5 text-accent" />
              </span>
              <h3 className="mt-3 font-medium">{title}</h3>
              <p className="mt-1 text-sm text-muted">{desc}</p>
              <div className="mt-3 text-sm font-medium text-accent group-hover:underline">
                Ver blueprint →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
