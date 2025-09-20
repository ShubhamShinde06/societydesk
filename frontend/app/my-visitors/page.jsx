"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import Image from "next/image";
import Header from "@/components/AppComponents/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MyVisitorsPage() {
  const [tab, setTab] = useState("Upcoming");
  const router = useRouter()

  const tabs = ["Upcoming", "Past", "Declined"];

  const visitorRequest = {
    name: "Rohan Mehta",
    date: "16/08/2025",
    time: "09:30 AM",
    purpose: "Meeting",
    image: "/profile.jpg",
  };

  const visitors = [
    {
      id: 1,
      name: "Aditya Verma",
      purpose: "Meeting",
      time: "11:00 AM",
      image: "/profile.jpg",
      status: "Upcoming",
    },
    {
      id: 2,
      name: "Rajiv Nair",
      purpose: "Meeting",
      time: "01:00 PM",
      image: "/profile.jpg",
      status: "Past",
    },
    {
      id: 3,
      name: "Kavya Desai",
      purpose: "Meeting",
      time: "04:00 PM",
      image: "/profile.jpg",
      status: "Declined",
    },
  ];

  //  Filter visitors based on active tab
  const filteredVisitors = visitors.filter((v) => v.status === tab);

  return (
    <div className="w-full h-full bg-white">
      {/* Header */}
      <Header heading={"My Visitors"} placholder={"Search for visitors"} />

      {/* Visitor Request */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-base font-semibold">
            Visitor Request{" "}
            <span className="text-xs text-white bg-orange-500 px-2 py-0.5 rounded-full">
              12
            </span>
          </h2>
          <span onClick={()=>router.push('/my-visitors/list')} className="text-sm text-gray-500 cursor-pointer">View All</span>
        </div>

        <Link href={'/my-visitors/list/details/2'} className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-2xl flex gap-4 shadow">
          {/* Visitor Image */}
          <Image
            src={visitorRequest.image}
            alt="visitor"
            width={120}
            height={50}
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

            {/* Date & Time in one row */}
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
              <button className="flex-1 bg-gradient-to-r from-orange-400 to-yellow-400 text-white text-sm py-2 rounded-full shadow">
                Approve
              </button>
              <button className="flex-1 border border-gray-300 text-gray-600 text-sm py-2 rounded-full shadow">
                Decline
              </button>
            </div>
          </div>
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex px-4 gap-3">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 rounded-full text-sm font-medium ${
              tab === t
                ? "bg-purple-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Visitor List */}
      <div className={`p-4 space-y-3`}>
        {filteredVisitors.length > 0 ? (
          filteredVisitors.map((v) => (
            <div key={v.id}>
              <div
                className={`flex items-center gap-3 p-3 ${
                  tab == "Past"
                    ? "rounded-t-xl bg-white"
                    : "rounded-xl bg-orange-50 "
                }  shadow-sm`}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={v.image}
                    alt={v.name}
                    width={58}
                    height={58}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{v.name}</p>
                  <p className="text-sm text-gray-600">{v.purpose}</p>
                </div>
                {tab == "Past" ? (
                  <>
                    <div className="flex flex-col items-end  gap-2 text-sm text-gray-700">
                      <h1 className="w-12 p-0.5 bg-black text-white rounded-xl text-center font-semibold">
                        Left
                      </h1>
                      <p className="font-semibold text-sm">12th Sep 2025</p>
                    </div>
                  </>
                ) : (
                  <>
                    {tab != "Declined" && (
                      <>
                        <div className="flex items-center gap-1 text-sm text-gray-700">
                          <Clock className="w-4 h-4 text-yellow-500" />
                          {v.time}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
              {tab == "Past" && (
                <>
                  <div className=" flex items-center justify-between border-b rounded-b-xl p-1 px-3  bg-orange-50">
                    <h1>
                      Check In:{" "}
                      <span className="text-orange-600 font-semibold">
                        08:30
                      </span>
                    </h1>
                    <h1>
                      Check Out:{" "}
                      <span className="text-orange-600 font-semibold">
                        11:30
                      </span>
                    </h1>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-sm">
            No {tab.toLowerCase()} visitors
          </p>
        )}
      </div>
    </div>
  );
}
