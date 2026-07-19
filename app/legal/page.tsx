import type { Metadata } from "next";
import VerticalLanding from "@/components/ecosystem/VerticalLanding";
import { getEcosystemSolution } from "@/data/ecosystem";

const solution = getEcosystemSolution("legal");
const title = "Yamaji Legal — Tecnologia para escritórios jurídicos";

export const metadata: Metadata = {
  title: { absolute: title },
  description: solution.heroDescription,
  alternates: { canonical: "/legal" },
  openGraph: {
    title,
    description: solution.heroDescription,
    url: "/legal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: solution.heroDescription,
  },
};

export default function LegalPage() {
  return <VerticalLanding solution={solution} />;
}
