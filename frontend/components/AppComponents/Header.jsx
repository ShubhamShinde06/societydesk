"use client";

import { Menu, Bell, Search } from "lucide-react";
import React from "react";
import { SidebarTrigger } from "../ui/sidebar";

const Header = () => {
  return (
    <div className="w-full body px-4 py-3 rounded-b-3xl shadow-md">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        {/* Left - Hamburger */}
        {/* <button className="p-2"> */}
          {/* <Menu className="w-6 h-6 text-gray-700" /> */}
          <SidebarTrigger className={'text-black'} />
        {/* </button> */}

        {/* Middle - Greeting */}
        <div className="text-center">
          <p className="text-sm text-gray-500">Hello John!</p>
          <h1 className="text-xl font-bold text-gray-900">302, Wing A</h1>
        </div>

        {/* Right - Notification */}
        <button className="relative p-2">
          <Bell className="w-6 h-6 text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="mt-3">
        <div className="flex items-center bg-white rounded-full shadow px-3 py-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="ml-2 flex-1 outline-none bg-transparent text-sm text-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
