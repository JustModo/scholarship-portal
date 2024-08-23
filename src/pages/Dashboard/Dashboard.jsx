import React from "react";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="w-full h-full flex relative">
      <SideBar />
      <div className="flex flex-grow pt-10 overflow-x-hidden overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
