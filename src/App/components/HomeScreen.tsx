import React from "react";
import SideNav from "./SideNav";
import Dashboard from "./DashBoard";

const HomeScreen = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-200 text-white  ">
        <SideNav />
      </div>
      <div className=" flex-1 bg-white z-10">
        <Dashboard />
      </div>
    </div>
  );
};

export default HomeScreen;
