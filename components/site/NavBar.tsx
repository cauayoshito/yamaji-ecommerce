"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { cn } from "@/lib/utils";
import { APPLY_ROUTE } from "@/lib/routes";

const navLinks = [
  { label: "Soluções", href: "/#solucoes" },
  { label: "Sistemas", href: "/#sistemas" },
  { label: "Processo", href: "/#processo" },
  { label: "Cases", href: "/cases" },
  { label: "Sobre", href: "/sobre" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
          Yamaji Studio
        </Link>

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

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-fg md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <span className="h-px w-5 bg-white/70" />
          <span className="sr-only">Abrir menu</span>
        </button>
      </Container>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-bg/95 backdrop-blur-xl transition duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <Container className="flex h-full flex-col justify-between py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold">
              Yamaji Studio
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-fg"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
            >
              ✕
            </button>
          </div>
          <div className="space-y-6 text-2xl font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-fg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={APPLY_ROUTE}
              onClick={() => setOpen(false)}
              className="block text-fg"
            >
              Contato
            </Link>
          </div>
          <PrimaryButton href={APPLY_ROUTE} label="Agende uma consultoria" />
        </Container>
      </div>
    </header>
  );
}
