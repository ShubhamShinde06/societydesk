"use client";

import React from "react";
import { Building2 } from "lucide-react";
import Header from "@/components/AppComponents/Header";
import { useRouter } from "next/navigation";

const wings = [
  { id: 1, name: "Wing A", flats: "40 Flat", href:'/my-society/wing/a' },
  { id: 2, name: "Wing B", flats: "40 Flat", href:'/my-society/wing/b' },
  { id: 3, name: "Wing C", flats: "40 Flat", href:'/my-society/wing/c' },
  { id: 4, name: "Wing D", flats: "40 Flat", href:'/my-society/wing/d' },
  { id: 5, name: "Wing E", flats: "40 Flat", href:'/my-society/wing/e' },
  { id: 6, name: "Wing F", flats: "40 Flat", href:'/my-society/wing/f' },
];
export default function MySocietyPage() {
  const router = useRouter()

  return (
    <div className="w-full h-full bg-white">
      {/* Header */}
      <Header
        href={'home'}
        heading={'My Society'}
        placholder={'Search for resident'}
      />

      {/* Info Text */}
      <div className="px-4 mt-3">
        <p className="text-sm text-gray-400">View society residents details</p>
      </div>

      {/* Wings Grid */}
      <div className="grid grid-cols-2 gap-y-6 py-6 place-items-center">
        {wings.map((wing) => (
          <div
            key={wing.id}
            className="bg-[#FEFAF2] border border-[#F6EDDA] w-40 h-40 flex flex-col items-center justify-center rounded-full shadow-sm hover:scale-105 transition"
            onClick={()=>router.push(wing.href)}
          >
            <Building2 className="w-10 h-10 text-[#E19925]" />
            <p className="mt-2 text-base font-semibold text-gray-800">
              {wing.name}
            </p>
            <p className="text-xs text-gray-500">{wing.flats}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
