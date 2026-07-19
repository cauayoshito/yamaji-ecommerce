import type { Metadata } from "next";
import VerticalLanding from "@/components/ecosystem/VerticalLanding";
import { getEcosystemSolution } from "@/data/ecosystem";

const solution = getEcosystemSolution("fit");
const title = "Yamaji Fit — Tecnologia para academias e estúdios";

export const metadata: Metadata = {
  title: { absolute: title },
  description: solution.heroDescription,
  alternates: { canonical: "/fit" },
  openGraph: {
    title,
    description: solution.heroDescription,
    url: "/fit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: solution.heroDescription,
  },
};

export default function FitPage() {
  return <VerticalLanding solution={solution} />;
}
