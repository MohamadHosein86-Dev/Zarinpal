import UserHeader from "./components/Sidebar/UserHeader";
import UserSidebar from "./components/Sidebar/UserSidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="">
      <UserHeader />
      <div className="relative flex lg:items-start lg:gap-x-8 lg:p-9 max-w-[1480px] mx-auto">
        <UserSidebar />
        <div className=" w-full ">{children}</div>
      </div>
    </section>
  );
}
