"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { APPLY_ROUTE } from "@/lib/routes";

const navLinks = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Metodologia", href: "/#metodologia" },
  { label: "Resultados", href: "/#resultados" },
  { label: "Sistemas", href: "/sistemas" },
  { label: "Sobre", href: "/sobre" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B0D11]/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-accent/60"
        >
          <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
          Yamaji Studio
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md transition hover:text-white focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <Link
            href={APPLY_ROUTE}
            className="inline-flex items-center rounded-xl border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-bg focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            Agende sua conversa
          </Link>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-fg transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen(true)}
          aria-label={open ? "Menu aberto" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span
            className={cn(
              "absolute h-px w-5 bg-white transition-transform duration-200",
              open ? "rotate-45" : "-translate-y-1.5"
            )}
          />
          <span
            className={cn(
              "absolute h-px w-5 bg-white transition-opacity duration-200",
              open ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            className={cn(
              "absolute h-px w-5 bg-white transition-transform duration-200",
              open ? "-rotate-45" : "translate-y-1.5"
            )}
          />
        </button>
      </Container>

      {/* Overlay (clicável) */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/70 backdrop-blur-[1px] transition-opacity md:hidden",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        id="mobile-nav"
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-[88%] max-w-xs border-l border-white/10 bg-[#0D1118]/95 backdrop-blur-xl shadow-2xl transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-nav-title"
      >
        {/* Header interno do drawer */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
            <h2
              id="mobile-nav-title"
              className="text-sm font-semibold text-white"
            >
              Yamaji Studio
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-accent/60"
            aria-label="Fechar menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="p-5">
          <nav className="space-y-2 text-base font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-white/90 transition hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href={APPLY_ROUTE}
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-accent/20 bg-accent/10 px-4 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-bg focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            Agende sua conversa
          </Link>
        </div>
      </aside>
    </header>
  );
}
