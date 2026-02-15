// app/services/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { services } from "@/components/services/data";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export const metadata = {
  title: "Serviços — Yamaji Studio",
  description: "Web, Identidade Visual e SEO com foco em resultado.",
};

function TiltCard({
  index,
  title,
  desc,
  href,
}: {
  index: number;
  title: string;
  desc: string;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // motion values para tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-50, 50], [8, -8]);
  const rotateY = useTransform(mx, [-50, 50], [-8, 8]);
  const scale = useTransform(mx, [-50, 50], [1.01, 1.01]); // sutil

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mx.set((x / (rect.width / 2)) * 50); // -50 a 50
    my.set((y / (rect.height / 2)) * 50); // -50 a 50
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <Link href={href} className="block group">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, scale }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
        transition={{ duration: 0.5, delay: index * 0.04 }}
        className="relative rounded-2xl border border-white/10 bg-[#0E0E0E] p-6
                   will-change-transform shadow-[0_0_0_0_rgba(0,0,0,0)]
                   hover:shadow-[0_10px_40px_-10px_rgba(0,255,178,0.25)]
                   transition-shadow"
      >
        {/* glow sutil que segue o mouse */}
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background:
              "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(0,255,178,0.14), transparent 40%)",
          }}
        />
        {/* atualiza variáveis CSS com a posição do mouse */}
        <div
          className="absolute inset-0 rounded-2xl"
          onMouseMove={(e) => {
            const el = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - el.left) / el.width) * 100;
            const y = ((e.clientY - el.top) / el.height) * 100;
            (e.currentTarget.parentElement as HTMLElement)?.style.setProperty(
              "--x",
              `${x}%`
            );
            (e.currentTarget.parentElement as HTMLElement)?.style.setProperty(
              "--y",
              `${y}%`
            );
          }}
        />

        <div className="relative z-10">
          <div className="text-accent text-xs tracking-wider opacity-80">
            0{index + 1}
          </div>
          <h3 className="text-lg font-semibold mt-2">{title}</h3>
          <p className="text-sm text-muted mt-2">{desc}</p>
          <span className="inline-block mt-4 text-sm opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition">
            Ver detalhes →
          </span>
        </div>

        {/* borda ativa no hover */}
        <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-accent/30 transition" />
      </motion.div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Serviços</h1>
            <p className="text-muted mt-3 max-w-2xl mx-auto">
              Estratégia, design e desenvolvimento para transformar presença
              digital em resultado.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {services.map((s, idx) => (
              <TiltCard
                key={s.slug}
                index={idx}
                title={s.name}
                desc={s.short}
                href={`/services/${s.slug}`}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
