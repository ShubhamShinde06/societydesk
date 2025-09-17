"use client";

import { Home, Wrench, ClipboardList, Shield, HelpCircle } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { name: "Home", icon: Home },
  { name: "Services", icon: Wrench },
  { name: "Activity", icon: ClipboardList },
  { name: "Security", icon: Shield },
  { name: "Help", icon: HelpCircle },
];

const Footer = () => {
  const [active, setActive] = useState("Home");

  return (

      <div className="flex justify-between">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.name;

          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className="flex flex-col items-center text-xs focus:outline-none"
            >
              <Icon
                className={`w-6 h-6 ${
                  isActive ? "text-orange-500 fill-orange-500" : "text-gray-500"
                }`}
              />
              <span
                className={`mt-1 ${
                  isActive ? "text-orange-500 font-medium" : "text-gray-500"
                }`}
              >
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
 
  );
};

export default Footer;
