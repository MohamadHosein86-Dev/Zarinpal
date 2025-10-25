"use client";
import HeroUser from "../components/DashboardContent/HeroUser";
import EditeUser from "./components/EditeUser";
import TrustIndicatorsUser from "./components/TrustIndicatorsUser";
import { motion } from "framer-motion";

const user = {
  نام: "محمد حسین",
  "نام خوانوادگی": "صفریان",
  تلفن: "09397997265",
  ایمیل: "mohamadhosein8666666@outlook.com",
  "نام کسب و کار": "استارت اپ تویتر ایرانی",
  "نوع کسب و کار": "partnership"
};
export default function AcountPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className=" text-black  mb-6 border-1 border-black/5 rounded-xl bg-white ">
      <HeroUser acount={true} />

      <div className="  grid grid-cols-2 flex-col   ">
        {Object.entries(user).map((res) => {
          const key = res[0];
          const value = res[1];

          return <EditeUser key={key} keyUser={key} value={value} />;
        })}
      </div>
      <TrustIndicatorsUser />
    </motion.div>
  );
}
