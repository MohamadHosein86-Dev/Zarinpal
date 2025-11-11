"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function UserHeader() {
  const { theme } = useTheme();
  return (
    <motion.header className="sticky top-0 z-10000 w-full border-b bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-sm" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="flex items-center select-none">
                <Image src={theme === "dark" ? "/logo/logo-white.svg" : "/logo/logo-black.svg"} alt="زرین‌پال" width={120} height={32} className="cursor-pointer" />
              </Link>{" "}
            </motion.div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-heavy bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">پروفایل شما</h1>
              <p className="text-sm text-slate-600 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                خوش آمدید
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="outline" size="icon" className="relative cursor-pointer hover:bg-blue-50 transition-colors bg-transparent">
                <Bell className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
