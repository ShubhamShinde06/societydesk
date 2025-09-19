"use client";

import { Home, Wrench, ClipboardList, Shield, HelpCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";


const menuItems = [
  { name: "Home", icon: Home, herf:'/home' },
  { name: "Services", icon: Wrench, herf:'#' },
  { name: "Activity", icon: ClipboardList, herf:'#' },
  { name: "Security", icon: Shield, herf:'#' },
  { name: "Help", icon: HelpCircle, herf:'#' },
];

const Footer = () => {

  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md rounded-t-3xl">
      <div className="flex justify-around py-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.herf;

          return (
            <button
              key={item.name}
              onClick={() => router.push(item.herf)}
              className="flex flex-col items-center text-xs focus:outline-none pb-1"
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  isActive ? "bg-orange-100" : ""
                }`}
              >
                <Icon
                  className={`w-6 h-6 ${
                    isActive ? "text-yellow-500" : "text-gray-500"
                  }`}
                />
              </div>
              <span
                className={` ${
                  isActive ? "text-yellow-500 font-medium" : "text-gray-500"
                }`}
              >
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
