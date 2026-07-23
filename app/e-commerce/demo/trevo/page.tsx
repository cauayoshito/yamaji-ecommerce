import type { Metadata } from "next";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import TrevoFlowShowcase from "@/components/ecommerce/TrevoFlowShowcase";
import { createWhatsAppLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Fluxo completo de e-commerce | Yamaji Studio",
  description:
    "Conheça uma demonstração completa de e-commerce baseada no case Trevo Modas, da vitrine ao painel de gestão.",
  alternates: { canonical: "/e-commerce/demo/trevo" },
};

const whatsappLink = createWhatsAppLink(
  "Olá! Vi a demonstração de e-commerce baseada na Trevo e quero entender como esse fluxo funcionaria no meu negócio."
);

export default function TrevoEcommerceShowcasePage() {
  return (
    <div className="ecosystem-site min-h-screen overflow-x-hidden bg-[#080A0D] text-white">
      <NavBar />
      <MobileStickyCTA
        label="E-commerce completo: vitrine, checkout e gestão"
        actionLabel="Planejar minha loja"
        actionHref={whatsappLink}
        whatsappHref={whatsappLink}
      />
      <main className="overflow-x-hidden pt-16 md:pt-[68px]">
        <TrevoFlowShowcase />
      </main>
      <Footer />
    </div>
  );
}
