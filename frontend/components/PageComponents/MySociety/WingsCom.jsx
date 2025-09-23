"use client";

import React, { useState } from "react";
import { Building, ChevronRight } from "lucide-react";
import Header from "@/components/AppComponents/SearchHeader";
import Link from "next/link";

const floors = ["1st Floor", "2nd Floor", "3rd Floor", "4th Floor", "5th Floor", "6th Floor"];

const flats = [
  {
    id: "A101",
    residents: [
      { id: 1, name: "Nick Joy", role: "Owner", img: "/profile.jpg" },
      { id: 2, name: "Amanda Mary", role: "Tenant", img: "/profile.jpg" },
    ],
  },
  {
    id: "A102",
    residents: [{ id: 1, name: "Nick Joy", role: "Owner", img: "/profile.jpg" }],
  },
  {
    id: "A103",
    residents: [
      { id: 1, name: "Mitchel Shawn", role: "Owner", img: "/profile.jpg" },
      { id: 2, name: "David", role: "Tenant", img: "/profile.jpg" },
    ],
  },
  {
    id: "A104",
    residents: [
      { id: 1, name: "Mitchel Shawn", role: "Owner", img: "/profile.jpg" },
      { id: 2, name: "David", role: "Tenant", img: "/profile.jpg" },
    ],
  },
  {
    id: "A105",
    residents: [
      { id: 1, name: "Mitchel Shawn", role: "Owner", img: "/profile.jpg" },
      { id: 2, name: "David", role: "Tenant", img: "/profile.jpg" },
    ],
  },
  {
    id: "A106",
    residents: [
      { id: 1, name: "Mitchel Shawn", role: "Owner", img: "/owner2.jpg" },
      { id: 2, name: "David", role: "Tenant", img: "/tenant2.jpg" },
    ],
  },
  {
    id: "A107",
    residents: [
      { id: 1, name: "Mitchel Shawn", role: "Owner", img: "/owner2.jpg" },
      { id: 2, name: "David", role: "Tenant", img: "/tenant2.jpg" },
    ],
  },
];

const WingsCom = ({ alphabet }) => {
  const [activeFloor, setActiveFloor] = useState("1st Floor");

  return (
    <div className="w-full h-full bg-white overflow-y-auto pb-20">
      {/* Header */}
      <Header
        href={"my-society"}
        heading={`Wing ${alphabet}`}
        placholder={"Search for resident"}
      />

      <p className="text-gray-500 text-sm mt-4 m-4 ">View Wing details</p>
      {/* Tabs for Floors */}
      <div className="flex gap-2 overflow-x-auto  m-4">
        {floors.map((floor) => (
          <button
            key={floor}
            onClick={() => setActiveFloor(floor)}
            className={`px-4 py-2 rounded-lg border text-sm font-medium ${
              activeFloor === floor
                ? "bg-[#FFA800] text-white"
                : "bg-white border-gray-300 text-gray-600"
            }`}
          >
            {floor}
          </button>
        ))}
      </div>

      {/* Flats List */}
      <div className="space-y-4 m-4">
        {flats.map((flat) => (
          <div key={flat.id} className="border rounded-xl shadow-sm">
            {/* Flat Header */}
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-t-xl">
              <Building className="w-5 h-5 text-blue-500" />
              <p className="font-medium text-gray-800">Flat {flat.id}</p>
            </div>

            {/* Residents */}
            <div className=" px-4 py-3  space-y-3">
              {flat.residents.map((res) => (
                <Link key={res.id} href={`/member-details/${res.id}`}>
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-3">
                      <img
                        src={res.img}
                        alt={res.name}
                        className="w-10 h-10 lg:w-25 lg:h-25 rounded-full object-cover mb-2"
                      />
                      <div>
                        <p className="text-sm lg:text-xl font-semibold text-gray-800">
                          {res.name}
                        </p>
                        <p className="text-xs text-gray-500">{res.role}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WingsCom;
