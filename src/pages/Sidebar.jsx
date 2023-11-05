import React, { useState } from "react";
import {
  MdDashboard,
  MdPermContactCalendar
} from "react-icons/md";
import { BiSolidWalletAlt, BiDollar, BiSolidUser } from "react-icons/bi";
import { AiFillFileText } from "react-icons/ai";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  // Menu items data
  const menuItems = [
    { label: "Dashboard", icon: <MdDashboard size={22} /> },
    { label: "Accounts", icon: <BiSolidWalletAlt size={22} /> },
    { label: "Payroll", icon: <BiDollar size={22} /> },
    { label: "Reports", icon: <AiFillFileText size={22} /> },
    { label: "Advisor", icon: <BiSolidUser size={22} /> },
    { label: "Contacts", icon: <MdPermContactCalendar size={22} /> },
  ];

  return (
    <div className="sidebar w-2/12 lg:w-1/6 shadow-md">
      <div>
        <img
          className="p-5 mx-auto"
          src="https://desk.assiduus.in/content/images/2023/08/Assiduus_TM_Logo--1-.png"
          alt="logo"
        />
      </div>
      <div className="text-center mt-14">
        <ul>
          {menuItems.map((item) => (
            <li key={item.label}>
              <h3
                className={`${
                  activeItem === item.label
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-500 hover:text-white"
                } my-3 py-3 cursor-pointer flex items-center justify-center lg:justify-start pl-4`}
                onClick={() => setActiveItem(item.label)}
              >
                {item.icon}
                <span className="hidden lg:inline ml-2">{item.label}</span>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
