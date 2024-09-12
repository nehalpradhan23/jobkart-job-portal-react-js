import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      {/* <div className="grid-background"></div> */}
      <main className="min-h-screen px-5">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
