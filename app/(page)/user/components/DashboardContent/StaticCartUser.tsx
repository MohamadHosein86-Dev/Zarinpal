"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { TrendingUp, CreditCard, ArrowUpRight, CheckCircle, Wallet } from "lucide-react";
import { formatCurrency } from "@/app/lib/helpfunc";

const data = [
  {
    title: "کل تراکنش‌ها",
    value: formatCurrency(0),
    change: "0٪",
    icon: CreditCard,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    title: "تراکنش‌های موفق",
    value: formatCurrency(0),
    change: "0٪ نرخ موفقیت",
    icon: CheckCircle,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600"
  },
  {
    title: "کل درآمد",
    value: formatCurrency(0),
    change: "0٪",
    icon: Wallet,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600"
  },
  {
    title: "رشد ماهانه",
    value: `+%${formatCurrency(0)}`,
    change: "عملکرد عالی",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600"
  }
];

export default function StaticCartUser() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {data.map((stat, index) => (
        <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ scale: 1.02, y: -5 }} className="cursor-pointer">
          <Card className={`hover:shadow-2xl transition-all duration-300 border-0 ${stat.bgColor} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-slate-600">{stat.title}</CardTitle>
              <div className={`p-2 rounded-xl bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className={`text-3xl font-heavy ${stat.textColor} mb-1`}>{stat.value}</div>
              <p className="text-xs text-slate-500 flex items-center">
                <ArrowUpRight className="h-3 w-3 text-emerald-500 ml-1" />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
