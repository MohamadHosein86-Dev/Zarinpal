"use clinet";
import dynamic from "next/dynamic";
import HeroUser from "./components/DashboardContent/HeroUser";
import DashboardContent from "./components/DashboardContent/DashboardContent";
const StaticCartUser = dynamic(() => import("./components/DashboardContent/StaticCartUser"));
const DashboardAnalyticsUser = dynamic(() => import("./components/DashboardContent/DashboardAnalytics"));

export default function UserPage() {
  return (
    <section>
      <HeroUser acount={false} />
      <StaticCartUser />
      <DashboardAnalyticsUser />
      <DashboardContent />
    </section>
  );
}
