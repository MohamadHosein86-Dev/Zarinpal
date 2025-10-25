import { RiEdit2Line } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { MdOutlineManageAccounts } from "react-icons/md";

import Link from "next/link";
import * as motion from "motion/react-client";
import AsideMenuItem from "./UserSidebarMenuItem";

const AsideMenuItems = [
  { id: 4, title: " پروفایل ", link: "/user", icon: HiOutlineChatAlt2 },
  { id: 6, title: "جزئیات حساب", link: "/user/acount", icon: MdOutlineManageAccounts },
  { id: 1, title: "خانه", link: "/", icon: BiHomeAlt2 },
  { id: 7, title: "خروج", link: "/logout", icon: TbLogout2 }
];

export default function UserSidebar() {
  return (
    <motion.aside initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="navigatio shadow-sm border-1 border-black/5 lg:!h-[calc(100vh-64px)] -right-65 sm:-right-70  fixed top-0 bottom-0 z-50 md:static lg:sticky lg:top-5 overflow-y-auto w-65 sm:w-70 md:w-66 lg:w-70 shrink-0 bg-white px-7 py-5 lg:rounded-lg max-md:transition-all max-md:duration-300">
      <div className="flex items-center justify-between pb-5 mb-5 border-b border-b-black/5">
        <div className="flex items-center gap-x-2">
          <img className="size-11 rounded-full" src="https://secure.gravatar.com/avatar/305d06cbd488be05e4d58cce3723d4d5?s=96&amp;d=mm&amp;r=g" loading="lazy" />
          <div className="flex flex-col gap-2">
            <span className="max-w-28 truncate select-none text-sm font-danaBold">حسین</span>
            <span className="text-black text-xs">09176437156</span>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link href="/user/acount">
              <RiEdit2Line className="size-5 text-[#19bfd3] transition-colors cursor-pointer" />
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        {AsideMenuItems.map((item) => (
          <AsideMenuItem key={item.id} {...item} />
        ))}
      </div>
    </motion.aside>
  );
}
