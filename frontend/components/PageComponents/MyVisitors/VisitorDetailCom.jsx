"use client";

import NameHeader from "@/components/AppComponents/NameHeader";
import { Phone, QrCode, CheckCircle2, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const VisitorDetailCom = () => {
  const visitor = {
    name: "Aditya Verma",
    phone: "9595959595",
    gender: "Male",
    date: "16/08/2025",
    time: "09:30 AM",
    purpose: "Meeting",
    image: "/profile.jpg",
    status: "Approved",
  };

  const router = useRouter();

  return (
    <div className=" h-full bg-white flex flex-col relative">
      {/* Header */}
      <NameHeader 
        heading={'My Visitors'}
      />

      {/* Visitor Card */}
      <div className="bg-gradient-to-b from-purple-50 to-indigo-50 p-6 m-4 rounded-3xl shadow-md text-center">
        {/* Profile */}
        <div className="flex justify-center">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={visitor.image}
              alt="Profile"
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Name */}
        <h2 className="mt-4 text-lg font-semibold text-gray-900">
          {visitor.name}
        </h2>

        {/* Details */}
        <div className="mt-4 space-y-2 text-sm text-left px-6">
          {[
            { label: "Ph. Number", value: visitor.phone },
            { label: "Gender", value: visitor.gender },
            { label: "Date", value: visitor.date },
            { label: "Check In Time", value: visitor.time },
            { label: "Purpose", value: visitor.purpose },
          ].map((item, index) => (
            <div
              key={index}
              className={"flex items-center justify-center gap-1"}
            >
              <span className={"text-gray-700 text-[16px]"}>
                {item.label} :
              </span>

              <h1 className="text-[18px] text-black font-semibold">
                {item.value}
              </h1>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-blue-600 font-medium">
            <Phone size={18} /> Call
          </button>
          <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-indigo-600 font-medium">
            <QrCode size={18} /> QR
          </button>
        </div>
      </div>

      {/* Status */}
      <div className="flex flex-col items-center mt-4">
        <CheckCircle2 className="text-yellow-400 w-12 h-12" />
        <p className="text-lg font-medium mt-2 text-gray-900">
          {visitor.status}
        </p>
      </div>

      {/* Cancel Button */}
      <div className="mt-6">
        <button className="w-full border border-yellow-400 text-black rounded-full py-3 font-medium hover:bg-yellow-50 transition">
          Cancel Approval
        </button>
      </div>
    </div>
  );
};

export default VisitorDetailCom;
