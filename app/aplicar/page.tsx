"use client";

import { useState } from "react";
import NavBar from "@/components/site/NavBar";
import ApplyHero from "@/components/apply/ApplyHero";
import ObjectiveCards, { OBJECTIVE_OPTIONS } from "@/components/apply/ObjectiveCards";
import LeadForm from "@/components/apply/LeadForm";
import TrustBar from "@/components/apply/TrustBar";

export default function AplicarPage() {
  const [selectedObjective, setSelectedObjective] = useState<string>(
    OBJECTIVE_OPTIONS[0].value
  );

  return (
    <>
      <NavBar />
      <main className="bg-bg text-fg">
        <ApplyHero />

        <section className="relative pb-8">
          <div className="pointer-events-none absolute inset-x-0 top-10 h-64 bg-[radial-gradient(circle_at_center,rgba(0,255,163,0.12),transparent_65%)]" />

          <div className="relative mx-auto grid w-full max-w-container gap-8 px-6 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-10">
            <aside className="order-1 lg:order-2 lg:sticky lg:top-28">
              <LeadForm selectedObjective={selectedObjective} />
            </aside>

            <div className="order-2 lg:order-1">
              <ObjectiveCards
                selectedObjective={selectedObjective}
                handler={setSelectedObjective}
              />
            </div>
          </div>
        </section>

        <TrustBar />
      </main>
    </>
  );
}
