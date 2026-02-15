// app/servicos/layout.tsx
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicosLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Skip link para acessibilidade */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2 focus:text-fg focus:outline-none focus:ring-2 focus:ring-accent/60"
      >
        Ir para o conteúdo
      </a>

      <Header />

      {/* Se o Header é fixo (h-16), dá um respiro */}
      <main id="conteudo" className="bg-bg text-fg pt-16">
        {children}
      </main>

      <Footer />
    </>
  );
}
