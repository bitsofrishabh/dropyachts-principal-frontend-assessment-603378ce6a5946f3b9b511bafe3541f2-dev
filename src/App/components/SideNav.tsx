import React from "react";
import "./sidenav.css";

const SideNav = () => {
  return (
    <div className="text-left mt-5 ml-5">
      <p className="font-bold text-3xl text-violet-600 mb-10">Dashboard</p>
      <ul className="font-bold text-2xl text-black">
        <li>Analytical</li>
        <li>E-commerce</li>
        <li>Notes</li>
        <li>Calender</li>
        <li>Extras</li>
      </ul>
    </div>
  );
};

export default SideNav;
