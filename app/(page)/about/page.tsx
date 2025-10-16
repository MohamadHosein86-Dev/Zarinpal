import React from "react";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import CompanyValues from "./components/CompanyValues";

export default function AboutPage() {
  return (
    <section>
      <HeroSection />
      <MissionSection />
      <CompanyValues />
    </section>
  );
}
