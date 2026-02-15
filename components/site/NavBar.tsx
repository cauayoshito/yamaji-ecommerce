"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { cn } from "@/lib/utils";
import { APPLY_ROUTE } from "@/lib/routes";
import { systems } from "@/data/systems";

const navLinks = [
<<<<<<< HEAD
  { label: "Solucoes", href: "/#solucoes" },
=======
  { label: "Soluções", href: "/#solucoes" },
  { label: "Sistemas", href: "/sistemas" }, // (está aqui ✅)
>>>>>>> 858ba39 (update: aplicar page + novos serviços)
  { label: "Processo", href: "/#processo" },
  { label: "Cases", href: "/cases" },
  { label: "Sobre", href: "/sobre" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
<<<<<<< HEAD
  const [systemsOpen, setSystemsOpen] = useState(false);
  const [mobileSystemsOpen, setMobileSystemsOpen] = useState(false);
  const systemsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!systemsMenuRef.current) return;
      if (!systemsMenuRef.current.contains(event.target as Node)) {
        setSystemsOpen(false);
      }
    }

    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setSystemsOpen(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);
=======
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
>>>>>>> 858ba39 (update: aplicar page + novos serviços)

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

<<<<<<< HEAD
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex" aria-label="Navegacao principal">
=======
        {/* Desktop */}
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
>>>>>>> 858ba39 (update: aplicar page + novos serviços)
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-fg"
            >
              {link.label}
            </Link>
          ))}

          <div className="relative" ref={systemsMenuRef}>
            <button
              type="button"
              className="inline-flex items-center gap-1 transition hover:text-fg"
              onClick={() => setSystemsOpen((value) => !value)}
              aria-haspopup="menu"
              aria-expanded={systemsOpen}
              aria-controls="systems-menu"
            >
              Sistemas
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", systemsOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>

            {systemsOpen && (
              <div
                id="systems-menu"
                role="menu"
                className="absolute right-0 mt-3 min-w-[260px] rounded-2xl border border-white/10 bg-[#0B0F14]/95 p-2 shadow-2xl backdrop-blur"
              >
                <Link
                  href="/sistemas"
                  role="menuitem"
                  className="block rounded-xl px-4 py-2.5 text-sm text-fg transition hover:bg-white/5"
                  onClick={() => setSystemsOpen(false)}
                >
                  Visao geral de Sistemas
                </Link>
                <div className="my-2 h-px bg-white/10" />
                {systems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className="block rounded-xl px-4 py-2.5 text-sm text-fg transition hover:bg-white/5"
                    onClick={() => setSystemsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
<<<<<<< HEAD
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          aria-controls="mobile-menu"
=======
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
>>>>>>> 858ba39 (update: aplicar page + novos serviços)
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
<<<<<<< HEAD
        <Container className="flex h-full flex-col justify-between py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold" onClick={() => setOpen(false)}>
              Yamaji Studio
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-fg"
              onClick={() => {
                setOpen(false);
                setMobileSystemsOpen(false);
              }}
              aria-label="Fechar menu"
            >
              x
            </button>
          </div>

          <nav id="mobile-menu" className="space-y-6 text-2xl font-semibold" aria-label="Navegacao mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setOpen(false);
                  setMobileSystemsOpen(false);
                }}
                className="block text-fg"
              >
                {link.label}
              </Link>
            ))}

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setMobileSystemsOpen((value) => !value)}
                className="flex w-full items-center justify-between text-left text-fg"
                aria-expanded={mobileSystemsOpen}
                aria-controls="mobile-systems-menu"
              >
                <span>Sistemas</span>
                <ChevronDown
                  className={cn(
                    "h-6 w-6 transition-transform",
                    mobileSystemsOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>

              {mobileSystemsOpen && (
                <div id="mobile-systems-menu" className="space-y-3 border-l border-white/10 pl-4 text-lg">
                  <Link
                    href="/sistemas"
                    className="block text-fg"
                    onClick={() => {
                      setOpen(false);
                      setMobileSystemsOpen(false);
                    }}
                  >
                    Visao geral
                  </Link>
                  {systems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-fg"
                      onClick={() => {
                        setOpen(false);
                        setMobileSystemsOpen(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={APPLY_ROUTE}
              onClick={() => {
                setOpen(false);
                setMobileSystemsOpen(false);
              }}
              className="block text-fg"
            >
              Contato
            </Link>
          </nav>

          <PrimaryButton href={APPLY_ROUTE} label="Agende uma consultoria" />
        </Container>
=======
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
>>>>>>> 858ba39 (update: aplicar page + novos serviços)
      </div>
    </header>
  );
}
