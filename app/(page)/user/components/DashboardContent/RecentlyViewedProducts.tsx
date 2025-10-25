import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
export default function RecentlyViewedProducts() {
  return (
    <div className="lg:pb-7">
      <section className="bg-white p-5 lg:rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <span className="font-danaBold">اخیرا مشاهده شده</span>
          <Link href="/courses">
            <FaArrowLeftLong className="size-3.5" />
          </Link>
        </div>
        {/* content */}
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 sm:col-span-4 xl:col-span-3 shadow-normal overflow-hidden group rounded-md">content</div>
        </div>
      </section>
    </div>
  );
}
