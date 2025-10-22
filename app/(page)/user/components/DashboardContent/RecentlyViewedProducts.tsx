import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
export default function RecentlyViewedProducts() {
  return (
    <div className="lg:pb-7">
      <section className="bg-white p-5 lg:rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <span className="font-danaBold">اخیرا مشاهده شده</span>
          <Link href="/courses" className="btn btn-primary btn-xs bg-black/5 text-black/70 py-2.5">
            <FaArrowLeftLong className="size-3.5" />
          </Link>
        </div>
        {/* content */}
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 sm:col-span-4 xl:col-span-3 shadow-normal overflow-hidden group rounded-md">
            <div className="relative overflow-hidden rounded-md">
              {/* image */}
              <img className="size-full rounded-md group-hover:scale-105 transition-all object-cover" src="/images/p-1.png" alt="" />
            </div>
            <div className="p-3">
              <div className="pb-4 mb-4 border-b border-b-black/10">
                <Link href="#" target="_blank" className="text-xs xl:text-sm h-7 xl:h-10 line-clamp-2">
                  ظرف غذا هه تهته تهت هت هتمخصوص پرندگان
                </Link>
              </div>
              <div className="btn btn-primary btn-sm w-full">مشاهده</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
