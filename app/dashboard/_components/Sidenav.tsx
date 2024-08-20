import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import React from "react";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
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

  return (
    <div className="h-screen p-3 border rounded-md ml-2">
      <div className="flex justify-center items-start p-3">
        <Image src={"/logo.svg"} alt="logo" width={140} height={140} />
      </div>
      <hr className="mt-[-24px]"/>
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <div
            className="flex items-center gap-2 p-3 hover:bg-[#89D1D0] hover:rounded-lg hover:cursor-pointer"
          >
            <menu.icon />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
