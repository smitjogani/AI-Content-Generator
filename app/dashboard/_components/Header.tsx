import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

function Header() {
  const { signOut } = useClerk();

  return (
    <div className="p-1 pr-4 border rounded-md mb-2 mx-2 flex justify-between items-center bg-white">
      <div className="flex gap-2 items-center p-2 border rounded-md m-2 max-w-sm">
        <Search />
        <input type="text" placeholder="search" className="outline-none" />
      </div>

      <div className="flex items-center justify-between">
      <div className="w-full flex items-center justify-end px-5">
          <Button onClick={() => signOut({ redirectUrl: "/" })}>Signout</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
