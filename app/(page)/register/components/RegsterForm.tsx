"use client";
import { toast, Toaster } from "sonner";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { User, Mail, Phone, Building, Eye, EyeOff, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { otpcodereq, regester, resendOtp } from "@/app/services/api";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegsterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState("regster");
  const [otpCode, setOtp] = useState<string>("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control
  } = useForm<RegisterFormData>();

  const onSubmit = async (Data: RegisterFormData) => {
    const { confirmPassword, firstName, lastName, email, phone, businessName, businessType, password } = Data;
    if (password && confirmPassword) {
      await regester({ firstName, lastName, email, phone, businessName, businessType, password });
      setStep("otp");
      const res = await resendOtp({ phone });
      setOtp(res.CodeOtp);
      toast.success(`کد تایید شما ${res.CodeOtp} است`);
    }
  };
  const verifyOtp = async (Data: RegisterFormData) => {
    const { phone } = Data;
    const CodeOtp = otpCode as string;
    await otpcodereq({ phone, CodeOtp });
    router.push("/user");
  };

  return (
    <section>
      {isSubmitting ? (
        <div className="relative text-center flex justify-center   max-w-[1480px] mx-auto">
          <div className=" h-screen ">
            <div className=" size-25 mt-80 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <h1 className="text-blue-500  font-semibold mt-2 text-xl animate-pulse">لطفا صبر کنید...</h1>
          </div>
        </div>
      ) : (
        <>
          <Toaster richColors position="top-center" />
          {step === "regster" && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white font-medium">
                    نام *
                  </Label>
                  <div className="relative">
                    <User className="absolute right-3 top-3 h-4 w-4 text-white/50" />
                    <Input
                      {...register("firstName", {
                        required: "نام الزامی است",
                        minLength: { value: 3, message: "حداقل 3 کاراکتر" }
                      })}
                      id="firstName"
                      placeholder="نام خود را وارد کنید"
                      className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                      required
                    />
                  </div>
                  <p className="text-red-400 text-sm">{errors.firstName?.message as string}</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white font-medium">
                    نام خانوادگی *
                  </Label>
                  <Input
                    {...register("lastName", {
                      required: "نام خوانوادگی الزامی است",
                      minLength: { value: 3, message: "حداقل 3 کاراکتر" }
                    })}
                    id="lastName"
                    placeholder="نام خانوادگی"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                    required
                  />
                  {<p className="text-red-400 text-sm">{errors.lastName?.message as string}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">
                    ایمیل *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-3 h-4 w-4 text-white/50" />
                    <Input
                      {...register("email", {
                        required: " ایمیل الزامی است",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "ایمیل معتبر نیست"
                        }
                      })}
                      id="email"
                      type="email"
                      placeholder="example@domain.com"
                      className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                      required
                    />
                  </div>
                  {<p className="text-red-400 text-sm">{errors.email?.message as string}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white font-medium">
                    شماره موبایل *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-3 h-4 w-4 text-white/50" />
                    <Input
                      {...register("phone", {
                        required: "شماره تلفن الزامی است",
                        pattern: {
                          value: /^(?:\+98|0)?9\d{9}$/,
                          message: "شماره موبایل معتبر نیست (مثلاً 09123456789)"
                        }
                      })}
                      id="phone"
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                      required
                    />
                  </div>
                  {<p className="text-red-400 text-sm">{errors.phone?.message as string}</p>}
                </div>
              </div>
              {/* Business Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="text-white font-medium">
                    نام کسب‌وکار *
                  </Label>
                  <div className="relative">
                    <Building className="absolute right-3 top-3 h-4 w-4 text-white/50" />
                    <Input
                      {...register("businessName", {
                        required: "نام شرکت یا کسب‌وکار الزامی است "
                      })}
                      id="businessName"
                      placeholder="نام شرکت یا کسب‌وکار"
                      className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                      required
                    />
                  </div>
                  {<p className="text-red-400 text-sm">{errors.businessName?.message as string}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType" className="text-white font-medium">
                    نوع کسب‌وکار
                  </Label>
                  <Controller
                    name="businessType"
                    control={control}
                    defaultValue="technical"
                    rules={{ required: "انتخاب نوع کسب‌وکار الزامی است" }}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="text-right !text-white cursor-pointer border border-gray-300">
                          <SelectValue placeholder="انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent className="text-right">
                          <SelectItem value="technical">مشکل فنی</SelectItem>
                          <SelectItem value="billing">مسائل مالی</SelectItem>
                          <SelectItem value="sales">فروش و مشاوره</SelectItem>
                          <SelectItem value="partnership">همکاری</SelectItem>
                          <SelectItem value="other">سایر</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {<p className="text-red-400 text-sm">{errors.businessType?.message as string}</p>}
                </div>
              </div>

              {/* Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white font-medium">
                    رمز عبور *
                  </Label>
                  <div className="relative">
                    <Input
                      {...register("password", {
                        pattern: {
                          value: /^.{8,}$/,
                          message: "رمز عبور باید حداقل ۸ کاراکتر باشد"
                        }
                      })}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="حداقل ۸ کاراکتر"
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                      required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-3 top-3 text-white/50 hover:text-white cursor-pointer">
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {<p className="text-red-400 text-sm">{errors.password?.message as string}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white font-medium">
                    تکرار رمز عبور *
                  </Label>
                  <Input
                    {...register("confirmPassword", {
                      pattern: {
                        value: /^.{8,}$/,
                        message: "رمز عبور باید حداقل ۸ کاراکتر باشد"
                      }
                    })}
                    id="confirmPassword"
                    type="password"
                    placeholder="تکرار رمز عبور"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                    required
                  />
                  {<p className="text-red-400 text-sm">{errors.confirmPassword?.message as string}</p>}
                </div>
              </div>
              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 space-x-reverse">
                  {/*                       <Checkbox id="terms" checked={formData.agreeToTerms} onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)} className="border-white/30 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500" required />
                   */}{" "}
                  <Label htmlFor="terms" className="text-sm text-white/80">
                    با{" "}
                    <Link href="/terms" className="text-emerald-400 hover:underline cursor-pointer">
                      قوانین و مقررات
                    </Link>{" "}
                    و{" "}
                    <Link href="/privacy" className="text-emerald-400 hover:underline cursor-pointer">
                      حریم خصوصی
                    </Link>{" "}
                    موافقم *
                  </Label>
                </div>
                <div className="flex items-center gap-2 space-x-reverse">
                  {/*                       <Checkbox id="marketing" checked={formData.agreeToMarketing} onCheckedChange={(checked) => handleInputChange("agreeToMarketing", checked as boolean)} className="border-white/30 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500" />
                   */}{" "}
                  <Label htmlFor="marketing" className="text-sm text-white/80">
                    از اخبار و پیشنهادات ویژه زرین‌پال مطلع شوم
                  </Label>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold text-lg py-6 rounded-2xl group cursor-pointer shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin ml-2"></div>
                      در حال ایجاد حساب...
                    </>
                  ) : (
                    <>
                      <Rocket className="w-6 h-6 ml-3 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                      شروع ماجراجویی
                    </>
                  )}
                </Button>
              </motion.div>

              <div className="text-center pt-4 border-t border-white/20">
                <p className="text-white/70">
                  قبلاً حساب دارید؟{" "}
                  <Link href="/dashboard" className="text-emerald-400 hover:underline font-medium cursor-pointer">
                    وارد شوید
                  </Link>
                </p>
              </div>
            </form>
          )}
          {step === "otp" && (
            <form onSubmit={handleSubmit(verifyOtp)} className="space-y-6">
              <div>
                <div className="  space-y-2">
                  <Label htmlFor="email" className="text-white flex justify-center  text-xl font-medium">
                    کد تایید *
                  </Label>
                  <div className="relative w-full">
                    <Input
                      {...register("otp", {
                        pattern: {
                          value: /^.{6,}$/,
                          message: "کد تایید باید 6 کاراکتر باشد"
                        }
                      })}
                      type="text"
                      id="otp"
                      placeholder="کد تایید را وارد کنید"
                      className="pr-10 w-full h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                    />
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                  </div>
                  <p>{errors.otp?.message as string}</p>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold text-lg py-6 rounded-2xl group cursor-pointer shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin ml-2"></div>
                      در حال ایجاد حساب...
                    </>
                  ) : (
                    <>
                      <Rocket className="w-6 h-6 ml-3 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                      تایید کد
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          )}
        </>
      )}
    </section>
  );
}
