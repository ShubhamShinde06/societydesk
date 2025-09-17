"use client";

import React, { useState } from "react";
import {
  Building,
  Users,
  User,
  PartyPopper,
  MailWarning,
  Wrench,
} from "lucide-react";
import Header from "@/components/AppComponents/Header";

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
  },
  {
    id: 2,
    name: "Committee",
    icon: <Users className="w-8 h-8 text-green-500" />,
    bg: "bg-green-50",
  },
  {
    id: 3,
    name: "My Visitors",
    icon: <User className="w-8 h-8 text-blue-500" />,
    bg: "bg-blue-50",
  },
  {
    id: 4,
    name: "Events",
    icon: <PartyPopper className="w-8 h-8 text-purple-500" />,
    bg: "bg-purple-50",
  },
  {
    id: 5,
    name: "Complaints",
    icon: <MailWarning className="w-8 h-8 text-red-500" />,
    bg: "bg-orange-100",
  },
  {
    id: 6,
    name: "Maintenance",
    icon: <Wrench className="w-8 h-8 text-pink-500" />,
    bg: "bg-pink-50",
  },
];
const HomeCom = () => {
  const [activeBanner, setActiveBanner] = useState(0);

  return (
    <>
      <div className="w-full h-full bg-[#FFFFFF]">
        <Header />

        <div className="p-4 space-y-6">
          {/* Banner / Ads */}
          <div className="h-30 relative bg-gradient-to-r from-purple-600 to-pink-500 text-white p-6  rounded-xl shadow-lg">
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
          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.id}
                className={`${f.bg} flex flex-col items-center justify-center p-8 rounded-xl shadow hover:scale-105 transition`}
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

export default HomeCom