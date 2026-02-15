"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HoverCard from "@/components/HoverCard";
import Script from "next/script";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";

export default function AboutClient() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* JSON-LD de organização para SEO */}
      <Script id="org-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Yamaji Studio",
          url: "https://yamaji.vercel.app",
          logo: "https://yamaji.vercel.app/images/logo-yamaji-aqua.png",
          sameAs: [],
        })}
      </Script>

      <Header />

      <MotionConfig
        transition={{ duration: reduce ? 0 : 0.6, ease: "easeOut" }}
      >
        <main className="bg-gradient-to-b from-[#0B0B0B] via-black to-[#131313] text-white">
          {/* HERO */}
          <section
            className="min-h-[50vh] flex flex-col justify-center items-center text-center px-6"
            aria-labelledby="about-hero-title"
          >
            <motion.h1
              id="about-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight mb-4"
            >
              Sobre a Yamaji Studio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-slate-300 max-w-2xl"
            >
              Design estratégico + performance. Criamos sites e marcas que
              impressionam, conectam e geram resultado.
            </motion.p>
          </section>

          {/* QUEM SOMOS + KPIs */}
          <section
            className="max-w-6xl mx-auto px-6 pb-8 grid gap-8 md:grid-cols-[1.2fr_.8fr]"
            aria-labelledby="quem-somos-title"
          >
            <div className="leading-relaxed text-slate-300 text-base md:text-lg">
              <h2
                id="quem-somos-title"
                className="text-3xl font-bold text-white mb-4"
              >
                Quem somos
              </h2>
              <p className="mb-4">
                Somos um estúdio enxuto, focado em{" "}
                <strong>web design, front-end e SEO</strong>. Da pesquisa à
                publicação, cuidamos de cada etapa para entregar experiências
                rápidas, responsivas e vendedoras.
              </p>
              <p>
                Nosso processo combina direção de arte, copy e engenharia de
                performance. Resultado: páginas que brilham no visual — e no
                Google.
              </p>
            </div>

            <div className="grid gap-4" aria-label="Indicadores da Yamaji">
              {[
                { kpi: "90+", label: "páginas otimizadas (UX + SEO)" },
                { kpi: "1.5s", label: "LCP médio em produção" },
                { kpi: "↑ SEO", label: "ganhos consistentes de posição" },
              ].map((m, i) => (
                <HoverCard key={i} className="p-5">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold text-[var(--accent)]">
                      {m.kpi}
                    </span>
                    <span className="text-sm text-slate-300">{m.label}</span>
                  </div>
                </HoverCard>
              ))}
            </div>
          </section>

          {/* VALORES */}
          <section className="py-16 px-6" aria-labelledby="valores-title">
            <div className="max-w-6xl mx-auto">
              <h2
                id="valores-title"
                className="text-3xl font-bold text-center mb-12"
              >
                Nossos valores
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Qualidade",
                    desc: "Figma → código fiel. Acessibilidade, semântica e performance como padrão.",
                  },
                  {
                    title: "Transparência",
                    desc: "Processo claro, prazos realistas e comunicação direta.",
                  },
                  {
                    title: "Resultado",
                    desc: "Decisões guiadas por dados e negócio, não por achismo.",
                  },
                ].map((v) => (
                  <HoverCard key={v.title}>
                    <motion.h3
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 }}
                      className="text-xl font-semibold mb-2"
                    >
                      {v.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-sm text-slate-300"
                    >
                      {v.desc}
                    </motion.p>
                  </HoverCard>
                ))}
              </div>
            </div>
          </section>

          {/* METODOLOGIA */}
          <section className="pb-20 px-6" aria-labelledby="metodo-title">
            <div className="max-w-6xl mx-auto">
              <h2
                id="metodo-title"
                className="text-3xl font-bold text-center mb-12"
              >
                Nossa metodologia
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  "Diagnóstico",
                  "Estratégia",
                  "Execução",
                  "Entrega & Suporte",
                ].map((step, i) => (
                  <HoverCard key={step} className="text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 18,
                      }}
                      className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)]/20 text-[var(--accent)] font-bold"
                      aria-hidden
                    >
                      {i + 1}
                    </motion.div>
                    <p className="font-medium">{step}</p>
                  </HoverCard>
                ))}
              </div>
            </div>
          </section>

          {/* CTA FINAL */}
          <section className="px-6 pb-24" aria-labelledby="cta-title">
            <div className="max-w-4xl mx-auto text-center border border-white/10 rounded-2xl p-8 bg-white/5">
              <h2
                id="cta-title"
                className="text-2xl md:text-3xl font-bold mb-3"
              >
                Pronto para elevar sua presença digital?
              </h2>
              <p className="text-slate-300 mb-6">
                Vamos criar um site rápido, bonito e otimizado para SEO — do
                jeito que seu negócio merece.
              </p>
              <a
                href="https://wa.me/5571987194367?text=Ol%C3%A1!%20Quero%20um%20projeto%20com%20a%20Yamaji%20Studio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[var(--accent)] text-black font-medium hover:opacity-90 transition"
              >
                Falar no WhatsApp
              </a>
            </div>
          </section>
        </main>
      </MotionConfig>

      <Footer />
    </>
  );
}
