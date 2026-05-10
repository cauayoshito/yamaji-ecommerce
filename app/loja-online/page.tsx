import type { Metadata } from "next";
import NavBar from "@/components/site/NavBar";
import Hero from "@/components/loja-online/Hero";
import Pain from "@/components/loja-online/Pain";
import Solution from "@/components/loja-online/Solution";
import HowItWorks from "@/components/loja-online/HowItWorks";
import Plans from "@/components/loja-online/Plans";
import Comparison from "@/components/loja-online/Comparison";
import Niches from "@/components/loja-online/Niches";
import Faq from "@/components/loja-online/Faq";
import FinalCTA from "@/components/loja-online/FinalCTA";
import StickyMobileCTA from "@/components/loja-online/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Loja online com suporte humano · Planos a partir de R$ 37/mês",
  description:
    "Sua loja online pronta para vender em poucos dias. Sem template genérico, com suporte humano e foco em vendas reais. Planos START, GROW e PRO da Yamaji Studio.",
  alternates: { canonical: "/loja-online" },
  openGraph: {
    title: "Loja online com suporte humano · Yamaji Studio",
    description:
      "Sua loja online pronta para vender em poucos dias. Sem plataforma genérica, sem suporte robótico.",
    type: "website",
  },
};

export default function LojaOnlinePage() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-white"
      >
        Ir para o conteúdo
      </a>

      <NavBar />

      <main
        id="conteudo"
        className="bg-bg text-fg overflow-x-hidden pt-20 md:pt-24"
      >
        <Hero />
        <Pain />
        <Solution />
        <HowItWorks />
        <Plans />
        <Comparison />
        <Niches />
        <Faq />
        <FinalCTA />
      </main>

      <StickyMobileCTA />
    </>
  );
}
