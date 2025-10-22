import RecentlyViewedProducts from "./RecentlyViewedProducts";
import LatestInteractions from "./LatestInteractions";

export default function DashboardContent() {
  return (
    <section className="flex flex-col lg:gap-y-8 w-full overflow-hidden">
      <section className="bg-white p-5 sm:p-7 lg:rounded-lg h-full">
        <div className="-mx-5 -mb-6 lg:-m-7 bg-black/5">
          <RecentlyViewedProducts />
          <LatestInteractions />
        </div>
      </section>
    </section>
  );
}
