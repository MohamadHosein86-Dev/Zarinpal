"use client";
import { Shield, Zap, Users, Sparkles, Star, Badge } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import BgRegsterPage from "./components/BgRegsterPage";
import RegsterForm from "./components/RegsterForm";

export default function RegisterPage() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <BgRegsterPage />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 border-emerald-400/30 hover:bg-emerald-500/30 text-lg px-6 py-2 cursor-pointer">
              <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
              عضویت در خانواده زرین‌پال
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-heavy mb-4 text-white leading-tight">
              آماده شروع <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">ماجراجویی هستید؟</span>
            </h1>
            <p className="text-xl text-white/80">در کمتر از ۵ دقیقه حساب خود را ایجاد کنید و شروع کنید</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            {[
              { icon: Zap, title: "راه‌اندازی سریع", desc: "کمتر از ۱۰ دقیقه", color: "from-yellow-400 to-orange-400" },
              { icon: Shield, title: "امنیت بالا", desc: "استاندارد بانکی", color: "from-emerald-400 to-blue-400" },
              { icon: Users, title: "پشتیبانی ۲۴/۷", desc: "همیشه در کنارتان", color: "from-purple-400 to-pink-400" }
            ].map((benefit, index) => (
              <motion.div key={index} className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 group cursor-pointer hover:bg-white/15 transition-all duration-300" whileHover={{ scale: 1.05, y: -5 }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}>
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                <p className="text-sm text-white/70">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-heavy text-white flex items-center justify-center gap-3">
                  <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
                  ایجاد حساب کاربری
                  <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
                </CardTitle>
                <p className="text-white/70 text-lg">اطلاعات خود را وارد کنید</p>
              </CardHeader>

              <CardContent>
                <RegsterForm />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div className="text-center mt-8 text-white/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <p className="text-lg">✨ با ثبت نام، به خانواده بیش از یک میلیون کسب‌وکار موفق می‌پیوندید ✨</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
