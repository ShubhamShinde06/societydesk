"use client";
//ComplaintsListPage
import React, { useState } from "react";
import { ArrowLeft, Calendar, Clock, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ComplaintsListPage() {
  const [activeTab, setActiveTab] = useState("Active");
  const [OpenSetting, setOpenSetting] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("This Week");
  const router = useRouter()
  const complaints = [
    {
      id: 1,
      type: "Water",
      description: "Leakage from multiple sources",
      date: "10 Nov 2024",
      time: null,
      status: "active",
    },
    {
      id: 2,
      type: "Water",
      description: "Leakage from main pipes or public sources",
      date: "10 Nov 2024",
      time: "04:00 PM",
      status: "resolved",
    },
    {
      id: 3,
      type: "Water",
      description: "Leakage from main pipes or public sources",
      date: "10 Nov 2024",
      time: "04:00 PM",
      status: "resolved",
    },
    {
      id: 4,
      type: "Water",
      description: "Leakage from main pipes or public sources",
      date: "10 Nov 2024",
      time: "04:00 PM",
      status: "resolved",
    },
  ];

  const periods = ["This Week", "This Month", "Last 6 months", "Last year"];

  return (
    <div className=" bg-white min-h-screen space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between p-4 ">
        <div className="flex items-center">
          <ArrowLeft onClick={()=>router.push('/complaints')} className="w-6 h-6 text-gray-600" />
          <h1 className="text-xl font-medium text-gray-900 ml-4">Complaints</h1>
        </div>
        <Settings
          onClick={() => setOpenSetting((prev) => !prev)}
          className="w-6 h-6 text-gray-400"
        />
      </div>

      {/* Tab Navigation */}
      <div className="px-4 mb-6">
        <div className="flex bg-gray-100 rounded-full p-1">
          {["Active", "History"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-[#FFA800] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Section - Only show for History tab */}
      {activeTab === "History" && OpenSetting === true && (
        <div className="px-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            {periods.map((period) => (
              <div key={period} className="flex items-center mb-3 last:mb-0">
                <div
                  className={`w-4 h-4 rounded-full border-2 mr-3 cursor-pointer ${
                    selectedPeriod === period
                      ? "bg-orange-500 border-orange-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedPeriod(period)}
                >
                  {selectedPeriod === period && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                  )}
                </div>
                <span className="text-gray-700 text-sm">{period}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Complaints List */}
      <div className="px-4 space-y-4">
        {complaints.map((complaint) => (
          <div
            key={complaint.id}
            className="bg-gray-50 rounded-xl p-4 relative"
          >
            {/* Status Badge */}
            {complaint.status === "resolved" && (
              <div className="absolute top-4 right-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  Resolved
                </span>
              </div>
            )}

            {/* Icon and Content */}
            <div className="flex items-start">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <div className="w-5 h-5 text-orange-500">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H11.81C11.28 22.27 11 21.4 11 20.5C11 18.57 12.57 17 14.5 17C16.43 17 18 18.57 18 20.5C18 21.4 17.72 22.27 17.19 23H19C20.11 23 21 22.11 21 21V9ZM14 8V3.5L18.5 8H14Z" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 font-medium text-base mb-1">
                  {complaint.type}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {complaint.description}
                </p>

                {/* Date and Time */}
                <div className="flex items-center text-gray-400 text-xs space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{complaint.date}</span>
                  </div>
                  {complaint.time && (
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{complaint.time}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Create New Complaint Button */}
        <Link href={'/complaints/create'}>
        <button className="btn-orange " >+ Create New Complaint</button>
        </Link>
      </div>

      {/* Bottom padding to account for fixed button */}
      <div className="h-24"></div>
    </div>
  );
}
