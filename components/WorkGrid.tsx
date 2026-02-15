"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Project = {
  title: string;
  url: string;
  image: string; // /images/...
  tag: "Web" | "Identidade" | "Branding" | "Loja" | "Landing";
  sub?: string;
  results?: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Dieisson Vasques — Personal Trainer",
    url: "https://www.dieissonvasques.com.br",
    image: "/images/dieisson.jpg",
    tag: "Web",
    sub: "Landing focada em captação via WhatsApp.",
    results: ["Conversões +38%", "Lighthouse 95+"],
  },
  {
    title: "Proprium — Leilão de Imóveis",
    url: "https://proprium-imoveis.vercel.app",
    image: "/images/proprium.jpg",
    tag: "Branding",
    sub: "Identidade + UI para plataforma de leilões.",
    results: ["Tempo de sessão +32%"],
  },
  {
    title: "AniPet — E-commerce Pet",
    url: "https://anipet2.vercel.app",
    image: "/images/anipet.jpg",
    tag: "Loja",
    sub: "Loja com UX clara e checkout ágil.",
    results: ["Bounce -22%", "Checkout simplificado"],
  },
  {
    title: "Yamaji Ads Academy",
    url: "https://yamajiads.vercel.app",
    image: "/images/ads.jpg",
    tag: "Landing",
    sub: "Landing de curso com foco em conversão.",
    results: ["CTR de CTA +27%"],
  },
];

const FILTERS = [
  { key: "Todos", match: (_: Project) => true },
  { key: "Web", match: (p: Project) => p.tag === "Web" },
  {
    key: "Identidade/Branding",
    match: (p: Project) => p.tag === "Identidade" || p.tag === "Branding",
  },
  { key: "Loja", match: (p: Project) => p.tag === "Loja" },
  { key: "Landing", match: (p: Project) => p.tag === "Landing" },
] as const;

export default function WorkGrid() {
  const [active, setActive] =
    useState<(typeof FILTERS)[number]["key"]>("Todos");
  const list = useMemo(
    () =>
      PROJECTS.filter((p) => FILTERS.find((f) => f.key === active)!.match(p)),
    [active]
  );

  return (
    <>
      {/* filtros */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {FILTERS.map((f) => {
          const isActive = active === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={[
                "px-3 py-1 rounded-full border text-sm transition",
                isActive
                  ? "bg-accent/20 text-accent border-accent/30"
                  : "border-white/10 text-muted hover:text-fg hover:border-white/20",
              ].join(" ")}
            >
              {f.key}
            </button>
          );
        })}
      </div>

      {/* grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
          <Link
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] transition hover:border-accent/30 hover:shadow-[0_0_60px_-20px_var(--accent)]"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='1000'%3E%3Crect width='100%25' height='100%25' fill='%23090a0b'%3E%3C/rect%3E%3C/svg%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="badge">{p.tag}</span>
                <span className="text-xs text-muted opacity-0 group-hover:opacity-100 transition">
                  Abrir site ↗
                </span>
              </div>

              <h3 className="mt-2 font-semibold">{p.title}</h3>
              {p.sub && <p className="mt-1 text-sm text-muted">{p.sub}</p>}

              {p.results?.length ? (
                <ul className="mt-3 grid gap-1 text-sm text-muted">
                  {p.results.map((r, i) => (
                    <li key={i}>• {r}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
