"use client";

import { UserProfile } from "@clerk/nextjs";
import React from "react";

const Setting = () => {
  return (
    <div className="flex justify-center items-center h-full py-5 flex-col">
      <UserProfile />
    </div>
  );
};

export default Setting;
