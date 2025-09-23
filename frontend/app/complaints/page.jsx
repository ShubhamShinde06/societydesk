"use client";

import Header from "@/components/AppComponents/SearchHeader";
import {
  Construction,
  Ellipsis,
  GlassWater,
  ParkingCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { GiLift } from "react-icons/gi";

export default function MyComplaintsPage() {
  const data = [
    {
      icon: <Construction className="w-7 h-7 text-[#FFA800]" />,
      heading: "Maintenance",
    },
    {
      icon: <GlassWater className="w-7 h-7 text-[#FFA800]" />,
      heading: "Water",
    },
    {
      icon: <ParkingCircle className="w-7 h-7 text-[#FFA800]" />,
      heading: "Parking",
    },
    {
      icon: <Zap className="w-7 h-7 text-[#FFA800]" />,
      heading: "Electricity",
    },
    { icon: <GiLift className="w-7 h-7 text-[#FFA800]" />, heading: "Lift" },
    {
      icon: <Ellipsis className="w-7 h-7 text-[#FFA800]" />,
      heading: "Others",
    },
  ];

  return (
    <>
      <div className="w-full h-full bg-gray-50 overflow-y-auto">
        {/* Header */}
        <Header heading={"Complaints"} placholder={"Search for Complaint"} href={'home'} />

        {/* Category Section */}
        <div className="pt-5 px-4">
          <h1 className="mb-4 font-semibold text-lg">Category</h1>
          <div className="grid grid-cols-3 gap-4">
            {data.map((res, i) => (
              <div
                key={i}
                className="p-5 bg-orange-50 border border-orange-200 rounded-2xl 
                           flex flex-col items-center justify-center gap-2 shadow-sm"
              >
                {res.icon}
                <h1 className="text-sm font-medium text-gray-700">
                  {res.heading}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* My Complaints Section */}
        <div className="pt-6 px-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-semibold text-lg">My Complaints</h1>
            <Link href={'/complaints/list'}>
            <button className="text-sm text-[#FFA800] font-medium">
              View All
            </button>
            </Link>
          </div>

          <div className="space-y-4 pb-5">
            <div className="p-4 bg-white rounded-2xl shadow-md border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <GlassWater className="w-5 h-5 text-[#FFA800]" />
                  <h1 className="font-semibold text-gray-800">Water</h1>
                </div>
                <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-lg">
                  Open
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                Leakage from main pipes or public sources
              </p>
              <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">📅 10 Nov 2024</span>
                <span className="flex items-center gap-1">⏰ 04:00 PM</span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <button className="flex-1 border border-gray-300 text-gray-700 rounded-xl py-1 font-medium">
                  Cancel
                </button>
                <button className="flex-1 bg-[#FFA800] text-white rounded-xl py-1 font-medium">
                  Track
                </button>
              </div>
            </div>

             <div className="p-4 bg-white rounded-2xl shadow-md border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <GlassWater className="w-5 h-5 text-[#FFA800]" />
                  <h1 className="font-semibold text-gray-800">Water</h1>
                </div>
                <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-lg">
                  Open
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                Leakage from main pipes or public sources
              </p>
              <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">📅 10 Nov 2024</span>
                <span className="flex items-center gap-1">⏰ 04:00 PM</span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <button className="flex-1 border border-gray-300 text-gray-700 rounded-xl py-1 font-medium">
                  Cancel
                </button>
                <button className="flex-1 bg-[#FFA800] text-white rounded-xl py-1 font-medium">
                <Link href={'/complaints/track/2'}>Track</Link>  
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Link href={'/complaints/create'}>
            <button type="button" className="btn-orange">
              + Create New Complaint
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
