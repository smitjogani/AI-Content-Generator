"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";
import Link from "next/link";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    // {
    //   name: "History",
    //   icon: FileClock,
    //   path: "/dashboard/history",
    // },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen p-3 border rounded-md mb-2 mx-2 bg-white">
      <div className="flex justify-center items-start p-3">
        <Image src={"/logo.svg"} alt="logo" width={140} height={140} />
      </div>
      <hr className="mt-[-24px]" />
      <div className="mt-5">
        {MenuList.map((menu, index) => (
          <div
            className={`flex items-center gap-2 p-3 mb-3 hover:bg-[#89D1D0] hover:rounded-lg hover:cursor-pointer ${
              path == menu.path &&
              `text-white bg-[#d88095] rounded-lg cursor-pointer`
            }`}
          >
            <menu.icon className="h-7 w-7" />
            <Link href={`${menu.path}`}><h2 className="text-lg">{menu.name}</h2></Link>
          </div>
        ))}
      </div>
      <div className="mt-[100%] bottom-0 pb-10 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
