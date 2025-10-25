"use client";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";

export default function LatestInteractions() {
  return (
    <div className="grid grid-cols-12 mb-2 lg:gap-7">
      {/* tickets */}
      <section className="lg:col-span-6 border-2 border-black/5 shadow-sm col-span-full bg-white p-5 lg:rounded-lg">
        {/* title */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-danaBold">تیکت های اخیر</span>
          <Link href="/courses">
            <FaArrowLeftLong className="size-3.5" />
          </Link>
        </div>
        {/* tickets */}
        <div className="space-y-5">
          {/* item */}
          <div className="p-5 space-y-5 border border-black/5 hover:border-black/15 transition-all rounded-md">
            <div className="flex items-center justify-between gap-x-3">
              <a href="#" className="text-base truncate">
                خطای ناشناخته در ساخت لینک امن
              </a>
              <a href="#" className="flex items-center gap-x-2 py-1 text-sm shrink-0 text-black/70">
                مشاهده
                <FaArrowLeftLong className="size-3.5" />
              </a>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2 text-xs select-none">
                <div className="flex items-center gap-x-1.5 text-black/70">
                  <IoDocumentTextOutline className="size-4" />
                  <span>دپارتمان:</span>
                </div>
                <span className="text-black font-danaBold">پشتیبانی</span>
              </div>
              <div className="w-25 text-center px-2 py-1 bg-primary/10 text-sm rounded-md">بسته شده </div>
            </div>
          </div>
        </div>
      </section>
      {/* Q & A */}
      <section className="lg:col-span-6 border-2 border-black/5 shadow-sm col-span-full bg-white p-5 lg:rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <span className="font-bold">پرسش های اخیر</span>
          <Link href="/#">
            <FaArrowLeftLong className="size-3.5" />
          </Link>
        </div>
        <div className="space-y-5">
          <div className="p-5 space-y-5 border border-black/5 hover:border-black/15 transition-all rounded-md">
            <div className="flex items-center justify-between gap-x-3">
              <a href="#" className="text-base truncate">
                خطای ناشناخته در ساخت لینک امن
              </a>
              <a href="#" className="flex items-center gap-x-2 py-1 text-sm shrink-0 text-black/70">
                مشاهده
                <FaArrowLeftLong className="size-3.5" />
              </a>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2 text-xs select-none">
                <div className="flex items-center gap-x-1.5 text-black/70">
                  <IoDocumentTextOutline className="size-4" />
                  <span>دپارتمان:</span>
                </div>
                <span className="text-black font-danaBold">پشتیبانی</span>
              </div>
              <div className="w-25 text-center px-2 py-1 bg-primary/10 text-sm rounded-md">بسته شده </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
