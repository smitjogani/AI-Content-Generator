"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import axios from "axios";

const Billing = () => {
  const checkoutButton = async () => {
    try {
      const response = await axios.post("/api/payment", {
        name: "AI Content Generator",
        price: 999,
      });

      const ResponseData = await response.data;

      window.location.href=ResponseData.url;

    } catch (error: any) {
      console.log({ msg: error.error });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[88vh]">
      <div className="my-4">
        <h1 className="text-3xl font-bold">Upgrade With Monthly plan</h1>
      </div>

      <div className="flex gap-8">
        <div className="border border-[#D88095] bg-white p-8 rounded-md">
          <div className="flex w-full justify-center mb-1">
            <h2 className="text-3xl flex items-center font-bold">Free</h2>
          </div>

          <div className="flex gap-1 w-full justify-center">
            <h1 className="text-4xl my-2 font-medium">₹0</h1>
            <h3 className="mt-6 my-2 font-medium">/month</h3>
          </div>

          <div className="p-2 flex flex-col items-start justify-center">
            <h1 className="py-1 text-[16px] font-medium">
              ✔ 1,00,000 Words/Month
            </h1>

            <h1 className="py-1 text-[16px] font-medium">
              ✔ 50+ Template Access
            </h1>

            <h1 className="py-1 text-[16px] font-medium">
              ✔ Limited Download & Copy
            </h1>

            <h1 className="py-1 text-[16px] font-medium">
              ✔ 1 Month of History
            </h1>
          </div>

          <Button className="w-full cursor-not-allowed bg-white border border-[#D88095] text-[#D88095] rounded-md">
            Free Tier
          </Button>
        </div>

        <div className="border border-[#D88095] bg-white p-8 rounded-md">
          <div className="flex w-full justify-center mb-1">
            <h2 className="text-3xl flex items-center font-bold">Monthly</h2>
          </div>

          <div className="flex gap-1 w-full justify-center">
            <h1 className="text-4xl my-2 font-medium">₹999</h1>
            <h3 className="mt-6 my-2 font-medium">/month</h3>
          </div>

          <div className="p-2 flex flex-col items-start justify-center">
            <h1 className="py-1 text-[16px] font-medium">
              ✔ 1,00,000 Words/Month
            </h1>

            <h1 className="py-1 text-[16px] font-medium">
              ✔ 50+ Template Access
            </h1>

            <h1 className="py-1 text-[16px] font-medium">
              ✔ Unlimted Download & Copy
            </h1>

            <h1 className="py-1 text-[16px] font-medium">
              ✔ 1 Year of History
            </h1>
          </div>

          <Button className="w-full" onClick={checkoutButton}>
            Activate Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
