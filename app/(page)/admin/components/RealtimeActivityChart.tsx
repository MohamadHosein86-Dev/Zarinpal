"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Activity } from "lucide-react"; // درست
import { motion } from "framer-motion";
import { LineChart, ResponsiveContainer, CartesianGrid, Line, Tooltip, XAxis, YAxis } from "recharts"; // درست

const realtimeData = [
  { time: "09:00", value: 120 },
  { time: "10:00", value: 180 },
  { time: "11:00", value: 250 },
  { time: "12:00", value: 320 },
  { time: "13:00", value: 280 },
  { time: "14:00", value: 380 },
  { time: "15:00", value: 420 }
];

export default function RealtimeActivityChart() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-8">
      <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-indigo-50 to-purple-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
              <Activity className="w-6 h-6 text-indigo-600" />
              فعالیت لحظه‌ای امروز
            </CardTitle>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              زنده
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={realtimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" stroke="#64748b" />
              <YAxis stroke="#64748b" tickFormatter={(value) => new Intl.NumberFormat("fa-IR").format(value)} />
              <Tooltip
                formatter={(value) => [`${new Intl.NumberFormat("fa-IR").format(value as number)} تراکنش`, "تعداد"]}
                contentStyle={{
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
                }}
              />
              <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} dot={{ fill: "#6366f1", strokeWidth: 2, r: 4 }} activeDot={{ r: 6, stroke: "#6366f1", strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}
