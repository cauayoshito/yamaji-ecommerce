import type { Metadata } from "next";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import YamajiEcommerceShowcase from "@/components/ecommerce/YamajiEcommerceShowcase";
import { createWhatsAppLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Experiência Yamaji E-commerce | Fluxo completo",
  description:
    "Explore a experiência autoral da Yamaji E-commerce, da vitrine ao checkout, pós-compra e painel de gestão.",
  alternates: { canonical: "/e-commerce/experiencia" },
};

const whatsappLink = createWhatsAppLink(
  "Olá! Vi a experiência Yamaji E-commerce e quero entender como esse fluxo funcionaria no meu negócio."
);

export default function YamajiEcommerceExperiencePage() {
  return (
    <div className="ecosystem-site min-h-screen overflow-x-hidden bg-[#08090B] text-white">
      <NavBar />
      <MobileStickyCTA
        label="Yamaji E-commerce: compra e gestão conectadas"
        actionLabel="Planejar minha loja"
        actionHref={whatsappLink}
        whatsappHref={whatsappLink}
      />
      <main
        className="overflow-x-hidden pt-16 md:pt-[68px]"
        data-page="yamaji-ecommerce-experience"
      >
        <YamajiEcommerceShowcase />
      </main>
      <Footer />
    </div>
  );
}
