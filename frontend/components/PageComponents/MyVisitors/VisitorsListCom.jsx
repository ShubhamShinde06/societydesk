"use client";

import Header from "@/components/AppComponents/SearchHeader";
import Image from "next/image";
import Link from "next/link"; 
import { useRouter } from "next/navigation";
import React from "react";

const VisitorsListCom = () => {
  const router = useRouter();

  // Temporary sample data
  const visitorRequest = {
    id: 1,
    name: "Rahul Sharma",
    date: "19 Sep 2025",
    time: "11:30 AM",
    purpose: "Meeting",
    image: "/profile.jpg",
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <Header heading={"My Visitors List"} placholder={"Search for visitors"} href={'my-visitors'}/>

      {/* Visitor Request Section */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold flex items-center gap-2">
            Visitor Request
            <span className="text-xs text-white bg-[#FFA800] px-2 py-0.5 rounded-full">
              12
            </span>
          </h2>
          <span
            className="text-sm text-[#FFA800] underline font-medium cursor-pointer hover:underline"
            onClick={() => router.push("/my-visitors")}
          >
            Clear All
          </span>
        </div>

        {/* Visitor Card */}
        <Link
          href={`/my-visitors/details/${visitorRequest.id}`}
          className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-2xl flex gap-4 shadow hover:shadow-md transition"
        >
          {/* Visitor Image */}
          <Image
            src={visitorRequest.image}
            alt="visitor"
            width={100}
            height={100}
            className="rounded-xl object-cover"
          />

          {/* Visitor Info */}
          <div className="flex-1 space-y-2">
            {/* Name */}
            <div>
              <p className="text-sm text-gray-600">Name:</p>
              <h1 className="text-base font-semibold text-gray-900">
                {visitorRequest.name}
              </h1>
            </div>

            {/* Date & Time */}
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-600">Date:</p>
                <h1 className="text-sm font-medium">{visitorRequest.date}</h1>
              </div>
              <div>
                <p className="text-sm text-gray-600">Time:</p>
                <h1 className="text-sm font-medium">{visitorRequest.time}</h1>
              </div>
            </div>

            {/* Purpose */}
            <div>
              <p className="text-sm text-gray-600">Purpose:</p>
              <h1 className="text-sm font-medium">{visitorRequest.purpose}</h1>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-1">
              <button className="flex-1 bg-gradient-to-r from-orange-400 to-yellow-400 text-white text-sm py-2 rounded-full shadow hover:opacity-90 transition">
                Approve
              </button>
              <button className="flex-1 border border-gray-300 text-gray-600 text-sm py-2 rounded-full shadow hover:bg-gray-100 transition">
                Decline
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VisitorsListCom;
