import dynamic from "next/dynamic";
const LatestInteractions = dynamic(() => import("./LatestInteractions"));
export default function DashboardContent() {
  return (
    <section className="flex flex-col lg:gap-y-8 w-full overflow-hidden">
      <section className="bg-white p-5 sm:p-7 lg:rounded-lg h-full">
        <div className="-mx-5 -mb-6 lg:-m-7 ">
          <LatestInteractions />
        </div>
      </section>
    </section>
  );
}
