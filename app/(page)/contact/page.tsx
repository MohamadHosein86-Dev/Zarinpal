import React from "react";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import CompanyValues from "./components/CompanyValues";
import Timeline from "./components/Timeline";

export default function ContactPage() {
  return (
    <section>
      <HeroSection />
      <MissionSection />
      <CompanyValues />
      <Timeline />
    </section>
  );
}
