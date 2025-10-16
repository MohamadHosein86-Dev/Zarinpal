import React from "react";
import Hero from "./components/Hero";
import PricingCards from "./components/PricingCard";
import ComparisonTable from "./components/ComparisonTable";
import FAQ from "./components/FAQ";

export default function PricingPage() {
  return (
    <section>
      <Hero />
      <PricingCards />
      <ComparisonTable />
      <FAQ />
    </section>
  );
}
