import React from "react";
import Hero from "./components/Hero";
import PricingCards from "./components/PricingCard";
import ComparisonTable from "./components/ComparisonTable";
import FAQ from "./components/FAQ";
import TrustIndicators from "./components/TrustIndicators";
import CTA from "./components/CTA";

export default function PricingPage() {
  return (
    <section>
      <Hero />
      <PricingCards />
      <ComparisonTable />
      <FAQ />
      <TrustIndicators />
      <CTA />
    </section>
  );
}
