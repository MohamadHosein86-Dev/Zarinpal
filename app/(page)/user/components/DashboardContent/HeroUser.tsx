"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroUser({ acount }: { acount: boolean }) {
  return (
    <motion.div className="mb-8 p-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl text-white relative overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10"></div>
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            {!acount ? (
              <div>
                <h2 className="text-3xl font-heavy mb-2 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
                  آمار لحظه‌ای
                </h2>
                <p className="text-blue-100 text-lg">فعالیت های امروز شما</p>
              </div>
            ) : (
              <h2 className="text-3xl font-heavy mb-2 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
                اطلاعات حساب شما
              </h2>
            )}
          </div>
          {acount ? (
            <div className="">
              <div className="text-2xl font-bold text-emerald-300">100٪</div>
              <div className="text-sm text-blue-100"> اطلاعات با موفقیت ثبت شده است </div>
            </div>
          ) : (
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">0</div>
                <div className="text-sm text-blue-100">تراکنش های شما</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-300">0٪</div>
                <div className="text-sm text-blue-100">نرخ موفقیت</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-4 right-20 w-16 h-16 bg-white/10 rounded-full blur-xl"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}
