"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import React, { use, useContext, useEffect, useState } from "react";
import { HISTORY } from "../history/page";
import { eq } from "drizzle-orm";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContaxt";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
import Link from "next/link";
import { UserSubscription } from "@/app/(context)/UserSubscription";

const UsageTrack = () => {
  const { user } = useUser();

  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(
    UpdateCreditUsageContext
  );

  const {userSubscription, setUserSubscription} = useContext(UserSubscription);

  useEffect(() => {
    user && GetData();
  }, [user]);

  useEffect(() => {
    user && GetData();
  }, [updateCreditUsage && user]);

  const GetData = async () => {
    {
      /*@ts-ignore*/
    }
    const result: HISTORY[] = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createBy, user?.primaryEmailAddress?.emailAddress));

    GetTotalUsage(result);
  };

  const GetTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;

    result.forEach((element) => {
      total += Number(element.aiResponse?.length);
    });

    // console.log(total);
    setTotalUsage(total);
  };

  return (
    <div className="flex flex-col gap-2 overflow-x-hidden">
      <div className="bg-gradient-to-tr to-[#89D1D0] via-[#8E84C8] from-[#d88095] rounded-md p-3 text-white">
        <h2 className="font-medium text-[18px]">Credits</h2>
        <div className="h-2 w-full mt-3 rounded-full bg-[#534c7b]">
          <div
            className="h-2 bg-[#fff] rounded-full"
            style={{ width: (totalUsage / 10000) * 100 + "%" }}
          ></div>
        </div>
        <h2 className="text-sm mt-2">{totalUsage}/10,000 credit used</h2>
      </div>

      <Link href={'/dashboard/billing'}>
        <Button variant={"secondary"} className="w-full">
          Upgrade
        </Button>
      </Link>
    </div>
  );
};

export default UsageTrack;
