import type { Metadata } from "next";
import VerticalLanding from "@/components/ecosystem/VerticalLanding";
import StudioExperienceRoute from "@/components/ecosystem/StudioExperienceRoute";
import { getEcosystemSolution } from "@/data/ecosystem";

const solution = getEcosystemSolution("studio");
const title = "Yamaji Studio — Sites, e-commerce e sistemas sob medida";

export const metadata: Metadata = {
  title: { absolute: title },
  description: solution.heroDescription,
  alternates: { canonical: "/studio" },
  openGraph: {
    title,
    description: solution.heroDescription,
    url: "/studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: solution.heroDescription,
  },
};

export default function StudioPage() {
  return (
    <>
      <VerticalLanding solution={solution} />
      <StudioExperienceRoute />
    </>
  );
}
