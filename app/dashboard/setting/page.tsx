"use client";
import { Button } from "@/components/ui/button";
import { useClerk, UserProfile } from "@clerk/nextjs";
import React from "react";

const Setting = () => {
  const { signOut } = useClerk();
  return (
    <div className="flex justify-center items-center h-full py-5 flex-col">
      <div className="w-full flex items-center justify-end pb-5 px-5">
        <Button onClick={() => signOut({ redirectUrl: "/" })}>Signout</Button>
      </div>
      <UserProfile />
    </div>
  );
};

export default Setting;
