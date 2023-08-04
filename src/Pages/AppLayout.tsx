import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import MobileSidebar from "../Components/MobileSidebar";

const AppLayout: FC = () => {
  return (
    <div className="md:flex h-screen">
      <MobileSidebar />
      <Sidebar />
      <div className="overflow-scroll bg-red-300 static h-screen w-full md:w-3/4 lg:w-4/5 md:bg-yellow-500">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
