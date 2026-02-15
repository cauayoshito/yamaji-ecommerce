"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Maximize2, Minimize2 } from "lucide-react";
import NavBar from "@/components/site/NavBar";
import PlatformEducationDemo from "@/components/sistemas/PlatformEducationDemo";

export default function PlataformaEducacionalDemoPage() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = async () => {
    if (!frameRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await frameRef.current.requestFullscreen();
        setIsFullscreen(true);
        return;
      }

      await document.exitFullscreen();
      setIsFullscreen(false);
    } catch {
      // ignore fullscreen errors
    }
  };

  return (
    <>
      <NavBar />

      <main className="min-h-screen bg-bg pt-24 text-fg">
        <section className="mx-auto w-full max-w-[1680px] px-4 pb-10 md:px-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-white/45">
                Yamaji Academy
              </p>
              <h1 className="text-2xl font-bold md:text-3xl">
                Demonstração em tela cheia
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                {isFullscreen ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
                {isFullscreen ? "Sair do fullscreen" : "Entrar em fullscreen"}
              </button>

              <Link
                href="/sistemas/plataforma-educacional"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Link>
            </div>
          </div>

          <div
            ref={frameRef}
            className="rounded-2xl border border-white/10 bg-[#0B0D11] p-3 md:p-5"
          >
            <PlatformEducationDemo fullScreen />
          </div>
        </section>
      </main>
    </>
  );
}
