"use client";
import React, { useState } from "react";
import SideNav from "./_components/Sidenav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContaxt";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";
import { UserSubscription } from "../(context)/UserSubscription";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();
  const [userSubscription, setUserSubscription] = useState<boolean>(false);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscription.Provider value={{userSubscription, setUserSubscription}}>
      <UpdateCreditUsageContext.Provider value={{updateCreditUsage, setUpdateCreditUsage}}>
        <div className=" py-2 bg-slate-100">
          <div className="md:w-64 hidden md:block fixed">
            <SideNav />
          </div>
          <div className="md:ml-64">
            <Header />
            {children}
          </div>
        </div>
      </UpdateCreditUsageContext.Provider>
      </UserSubscription.Provider>
    </TotalUsageContext.Provider>
  );
}

export default layout;
