"use client";
import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSectin from "./_components/TemplateListSection";

function Dashboard() {
  const [userSearchinput, setUserSearchInput] = useState<string>();

  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={(value:string) => setUserSearchInput(value)}/>

      {/* Template Section */}
      <TemplateListSectin userSearchinput={userSearchinput}/>
    </div>
  );
}

export default Dashboard;
