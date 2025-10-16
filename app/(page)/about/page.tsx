import React from "react";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import CompanyValues from "./components/CompanyValues";
import Timeline from "./components/Timeline";
import TeamSection from "./components/TeamSection";
import OfficeLocation from "./components/OfficeLocation";

export default function AboutPage() {
  return (
    <section>
      <HeroSection />
      <MissionSection />
      <CompanyValues />
      <Timeline />
      <TeamSection />
      <OfficeLocation />
    </section>
  );
}
