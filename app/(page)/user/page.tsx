import React from "react";
import UserSidebar from "./components/Sidebar/UserSidebar";

export default function UserPage() {
  return (
    <div>
      <section className="bg-black/5">
        <div className="relative flex lg:items-start lg:gap-x-8 lg:p-9 max-w-[1440px] mx-auto">
          <UserSidebar />
        </div>
      </section>
    </div>
  );
}
