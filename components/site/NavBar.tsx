"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { cn } from "@/lib/utils";
import { APPLY_ROUTE } from "@/lib/routes";

const navLinks = [
  { label: "Soluções", href: "/#solucoes" },
  { label: "Sistemas", href: "/sistemas" }, // (está aqui ✅)
  { label: "Processo", href: "/#processo" },
  { label: "Cases", href: "/cases" },
  { label: "Sobre", href: "/sobre" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Fecha no ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Fecha ao clicar fora do dropdown
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
          Yamaji Studio
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={APPLY_ROUTE}
            className="text-sm text-muted transition hover:text-fg"
          >
            Contato
          </Link>
          <PrimaryButton href={APPLY_ROUTE} label="Agende uma consultoria" />
        </div>

        {/* Mobile button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-fg md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-px w-5 bg-white/70" />
            <span className="h-px w-5 bg-white/70" />
            <span className="h-px w-5 bg-white/70" />
          </div>
        </button>
      </Container>

      {/* Overlay leve (não é menu fullscreen, só captura clique fora) */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] transition md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Dropdown mobile abaixo do header */}
      <div
        className={cn(
          "md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          ref={panelRef}
          className={cn(
            "absolute left-0 right-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-xl transition duration-200",
            open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          )}
        >
          <Container className="py-4">
            <div className="max-h-[70vh] overflow-y-auto rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="space-y-2 text-base font-semibold">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-fg transition hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href={APPLY_ROUTE}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-fg transition hover:bg-white/5"
                >
                  Contato
                </Link>
              </div>

              <div className="mt-4">
                <PrimaryButton
                  href={APPLY_ROUTE}
                  label="Agende uma consultoria"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
