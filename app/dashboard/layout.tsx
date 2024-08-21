import React from "react";
import SideNav from "./_components/Sidenav";
import Header from "./_components/Header"

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen py-2 bg-slate-100">
      <div className="md:w-64 hidden md:block fixed">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <Header/>
      {children}
      </div>
    </div>
  );
}

export default layout;
