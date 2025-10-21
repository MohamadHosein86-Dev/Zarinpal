"use client";
import dynamic from "next/dynamic";
import DashboardAnalytics from "./components/DashboardAnalytics";
import RealtimeActivityChart from "./components/RealtimeActivityChart";
import RecentTransactionsTable from "./components/RecentTransactionsTable ";
import { Button } from "@/app/components/ui/button";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const AdminHeader = dynamic(() => import("./components/AdminHeader"));
const Hero = dynamic(() => import("./components/Hero"));
const StaticCart = dynamic(() => import("./components/StaticCart"));

export default function AdminPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <AdminHeader />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <StaticCart />
        <DashboardAnalytics />
        <RealtimeActivityChart />
        <RecentTransactionsTable />
        <motion.div className="fixed bottom-8 left-8" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button size="lg" className="rounded-full shadow-2xl bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-600 text-white border-0 cursor-pointer h-16 w-16 p-0">
            <Plus className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
