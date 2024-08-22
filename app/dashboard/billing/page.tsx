import { Button } from "@/components/ui/button";
import React from "react";

const Billing = () => {
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

          <Button className="w-full">Currently activate Plan</Button>
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

          <Button className="w-full">Currently activate Plan</Button>
        </div>

      </div>
    </div>
  );
};

export default Billing;
