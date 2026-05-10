"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const whatsMessage = encodeURIComponent(
  "Olá, vim pelo site da Yamaji Studio. Quero começar minha presença digital."
);
const WHATSAPP_LINK = `https://wa.me/5571992258349?text=${whatsMessage}`;

const navLinks = [
  { label: "E-commerce", href: "/e-commerce" },
  { label: "Sites", href: "/sites-landing-pages" },
  { label: "Social Media", href: "/social-marketing" },
  { label: "IA e Automação", href: "/automacao-ia" },
  { label: "Sistemas", href: "/sistemas/plataforma-educacional" },
  { label: "CRM", href: "/crm-clinicas" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-[#08090B]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-[68px]">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-accent/60"
          aria-label="Yamaji Studio — voltar para a home"
        >
          <span className="relative flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02]">
            <span className="text-[11px] font-bold tracking-tight text-accent">
              Y
            </span>
          </span>
          <span>Yamaji Studio</span>
        </Link>

        <nav className="hidden items-center gap-4 text-[12.5px] text-white/60 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded transition duration-200 hover:text-white focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer noopener"
            data-cta="primary"
            data-label="navbar-whatsapp"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-[13px] font-semibold text-black shadow-[0_1px_0_rgba(255,255,255,0.15)_inset] transition duration-200 hover:-translate-y-px hover:bg-[#7bf0dc] focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            Falar no WhatsApp
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-sm text-fg transition hover:border-white/20 hover:bg-white/[0.06] lg:hidden"
          onClick={() => setOpen(true)}
          aria-label={open ? "Menu aberto" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span
            className={cn(
              "absolute h-px w-4 bg-white transition-transform duration-200",
              open ? "rotate-45" : "-translate-y-1.5"
            )}
          />
          <span
            className={cn(
              "absolute h-px w-4 bg-white transition-opacity duration-200",
              open ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            className={cn(
              "absolute h-px w-4 bg-white transition-transform duration-200",
              open ? "-rotate-45" : "translate-y-1.5"
            )}
          />
        </button>
      </Container>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/70 backdrop-blur-[2px] transition-opacity lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-nav"
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-[88%] max-w-xs border-l border-white/[0.08] bg-[#0A0C11]/95 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-nav-title"
      >
        <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02]">
              <span className="text-[11px] font-bold tracking-tight text-accent">
                Y
              </span>
            </span>
            <h2
              id="mobile-nav-title"
              className="text-[14px] font-semibold tracking-tight text-white"
            >
              Yamaji Studio
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/80 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:ring-2 focus-visible:ring-accent/60"
            aria-label="Fechar menu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="p-5">
          <nav className="space-y-1 text-[15px] font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-white/85 transition hover:bg-white/[0.04] hover:text-white focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setOpen(false)}
            data-cta="primary"
            data-label="mobile-navbar-whatsapp"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-[13px] font-semibold text-black transition hover:bg-[#7bf0dc] focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            Falar no WhatsApp
            <span aria-hidden="true">→</span>
          </a>

          <div className="mt-4 text-center text-[11px] text-white/40">
            Atendimento humano por WhatsApp
          </div>
        </div>
      </aside>
    </header>
  );
}
