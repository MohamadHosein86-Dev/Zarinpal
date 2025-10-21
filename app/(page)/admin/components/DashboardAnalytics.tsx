"use client";

import React from "react";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge, TrendingUp } from "lucide-react";
import { formatCurrency } from "@/app/lib/helpfunc";

const chartData = [
  { name: "فروردین", amount: 4000000, transactions: 1250, growth: 12 },
  { name: "اردیبهشت", amount: 3000000, transactions: 980, growth: -8 },
  { name: "خرداد", amount: 5000000, transactions: 1680, growth: 25 },
  { name: "تیر", amount: 4500000, transactions: 1420, growth: 15 },
  { name: "مرداد", amount: 6000000, transactions: 1890, growth: 33 },
  { name: "شهریور", amount: 5500000, transactions: 1750, growth: 18 }
];
const pieData = [
  { name: "موفق", value: 85, color: "#10b981" },
  { name: "ناموفق", value: 10, color: "#ef4444" },
  { name: "در انتظار", value: 5, color: "#f59e0b" }
];

export default function DashboardAnalytics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-2">
        <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">نمودار درآمد ماهانه</CardTitle>
              <Badge className="bg-emerald-100 text-emerald-700 cursor-pointer">
                <TrendingUp className="w-4 h-4 ml-1" />
                رشد ۲۵٪
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" tickFormatter={(value) => new Intl.NumberFormat("fa-IR").format(value as number)} />
                <Tooltip
                  formatter={(value) => [formatCurrency(value as number), "درآمد"]}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
                  }}
                />
                <Area type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={3} fill="url(#colorAmount)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
        <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">وضعیت تراکنش‌ها</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${new Intl.NumberFormat("fa-IR").format(value as number)}%`, "درصد"]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {pieData.map((entry, index) => (
                <motion.div key={index} className="flex items-center gap-2 cursor-pointer" whileHover={{ scale: 1.05 }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                  <span className="text-sm font-medium">{entry.name}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
