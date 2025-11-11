"use client";
import HeroUser from "../components/DashboardContent/HeroUser";
import EditeUser from "./components/EditeUser";
import TrustIndicatorsUser from "./components/TrustIndicatorsUser";
import { motion } from "framer-motion";
import useUser from "@/app/hooks/useUser";

export default function AcountPage() {
  const { user, refetch, isLoading } = useUser();
  const id = user.id;

  return (
    <section>
      {isLoading ? (
        <div className="relative text-center flex justify-center   max-w-[1480px] mx-auto">
          <div className=" h-screen ">
            <div className=" size-25 mt-80 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <h1 className="text-blue-500  font-semibold mt-2 text-xl animate-pulse">لطفا صبر کنید...</h1>
          </div>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className=" text-black  mb-6 border-1 border-black/5 rounded-xl bg-white ">
          <HeroUser acount={true} />
          <div className="  grid grid-cols-2 flex-col   ">
            {Object.entries(user).map((res) => {
              const key = res[0];
              const value = res[1];

              return <EditeUser refetch={refetch} id={id} key={key} keyUser={key} value={String(value)} />;
            })}
          </div>
          <TrustIndicatorsUser />
        </motion.div>
      )}
    </section>
  );
}
