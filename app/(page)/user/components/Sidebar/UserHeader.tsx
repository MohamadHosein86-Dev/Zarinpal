"use client";
import { Input } from "@/app/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Bell, LogOut, Search, Settings } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function UserHeader() {
  const [searchTerm, setSearchTerm] = useState("");
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
              <h1 className="text-2xl font-heavy bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">داشبورد</h1>
              <p className="text-sm text-slate-600 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                خوش آمدید، علی رضایی
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.div className="relative hidden md:block" whileHover={{ scale: 1.02 }}>
              <Search className="absolute right-3 top-3 h-4 w-4 text-slate-400" />
              <Input placeholder="جستجو در تراکنش‌ها..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-64 pr-10 bg-white/50 border-slate-200 focus:bg-white transition-all duration-300 cursor-text" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="outline" size="icon" className="relative cursor-pointer hover:bg-blue-50 transition-colors bg-transparent">
                <Bell className="h-4 w-4" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </Button>
            </motion.div>

            <DropdownMenu dir="rtl">
              <DropdownMenuTrigger asChild>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full cursor-pointer">
                    <Avatar className="h-10 w-10 ring-2 ring-blue-100">
                      <AvatarImage src="/persian-tech-manager.png" alt="علی رضایی" />
                      <AvatarFallback className="bg-gray-500 text-white">ع.ر</AvatarFallback>
                    </Avatar>
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">علی رضایی</p>
                    <p className="text-xs leading-none text-muted-foreground">ali@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="ml-2 h-4 w-4" />
                  <span>تنظیمات</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/" className="flex items-center w-full">
                    <LogOut className="ml-2 h-4 w-4" />
                    <span>خروج</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
