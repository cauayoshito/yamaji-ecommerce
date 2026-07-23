import type { Metadata } from "next";
import VerticalLanding from "@/components/ecosystem/VerticalLanding";
import { getEcosystemSolution } from "@/data/ecosystem";

const solution = getEcosystemSolution("eats");
const title = "Yamaji Eats — Tecnologia para restaurantes e delivery";

export const metadata: Metadata = {
  title: { absolute: title },
  description: solution.heroDescription,
  alternates: { canonical: "/eats" },
  openGraph: {
    title,
    description: solution.heroDescription,
    url: "/eats",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: solution.heroDescription,
  },
};

export default function EatsPage() {
  return <VerticalLanding solution={solution} />;
}
