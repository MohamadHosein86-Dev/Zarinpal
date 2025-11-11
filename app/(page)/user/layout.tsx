"use client";

import useUser from "@/app/hooks/useUser";
import UserHeader from "./components/Sidebar/UserHeader";
import UserSidebar from "./components/Sidebar/UserSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isLoading } = useUser();

  return (
    <section className="">
      {isLoading ? (
        <div className="relative text-center flex justify-center   max-w-[1480px] mx-auto">
          <div className=" h-screen ">
            <div className=" size-25 mt-80 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <h1 className="text-blue-500  font-semibold mt-2 text-xl animate-pulse">لطفا صبر کنید...</h1>
          </div>
        </div>
      ) : (
        <>
          <UserHeader />
          <div className="relative flex lg:items-start lg:gap-x-8 lg:p-9 max-w-[1480px] mx-auto">
            <UserSidebar />
            <div className=" w-full ">{children}</div>
          </div>
        </>
      )}
    </section>
  );
}
