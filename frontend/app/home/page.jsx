"use client";

import React, { useState } from "react";
import {
  Building,
  Users,
  User,
  PartyPopper,
  MailWarning,
  Wrench,
  Search,
  Bell,
  Menu,
} from "lucide-react";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";

const banners = [
  { id: 1, text: "Diwali Festival of Lights – Nov 2 & 3, 2024" },
  { id: 2, text: "Maintenance Notice – Water Supply off on Sunday" },
  { id: 3, text: "Annual General Meeting – Dec 15, 2024" },
];

const features = [
  {
    id: 1,
    name: "My Society",
    icon: <Building className="w-8 h-8 text-yellow-500" />,
    bg: "bg-orange-50",
    herf: "/my-society",
  },
  {
    id: 2,
    name: "Committee",
    icon: <Users className="w-8 h-8 text-green-500" />,
    bg: "bg-green-50",
    herf: "/committee",
  },
  {
    id: 3,
    name: "My Visitors",
    icon: <User className="w-8 h-8 text-blue-500" />,
    bg: "bg-blue-50",
    herf: "/my-visitors",
  },
  {
    id: 4,
    name: "Events",
    icon: <PartyPopper className="w-8 h-8 text-purple-500" />,
    bg: "bg-purple-50",
    herf: "/events",
  },
  {
    id: 5,
    name: "Complaints",
    icon: <MailWarning className="w-8 h-8 text-red-500" />,
    bg: "bg-orange-100",
    herf: "/complaints",
  },
  {
    id: 6,
    name: "Maintenance",
    icon: <Wrench className="w-8 h-8 text-pink-500" />,
    bg: "bg-pink-50",
    herf: "/maintenance",
  },
];
export default function HomePage() {
  const [activeBanner, setActiveBanner] = useState(0);
  const router = useRouter();
   const { toggleSidebar } = useSidebar();

  return (
    <>
      <div className="w-full h-full bg-gray-50">
        <div className="w-full header px-4 py-3 rounded-b-3xl shadow-md">
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <SidebarTrigger className={"text-black"} />
            {/* <Menu onClick={() => window.innerWidth < 1024 && toggleSidebar()}/> */}

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

        <div className="p-4 space-y-6">
          {/* Banner / Ads */}
          <div className="h-30 lg:h-60 relative bg-gradient-to-r from-purple-600 to-pink-500 text-white p-6  rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold">
              {banners[activeBanner].text}
            </h2>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
              {banners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveBanner(i)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    i === activeBanner ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.id}
                className={`${f.bg} flex flex-col items-center justify-center p-8 lg:p-12 rounded-xl shadow hover:scale-105 transition`}
                onClick={() => router.push(`${f.herf}`)}
              >
                {f.icon}
                <p className="mt-2 text-sm font-medium text-gray-800">
                  {f.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
