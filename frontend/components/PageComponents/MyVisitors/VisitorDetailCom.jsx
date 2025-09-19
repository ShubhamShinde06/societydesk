"use client";

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
    <div className="min-h-screen bg-white p-4 pb-20 overflow-y-auto">
      {/* Header */}
      <div className="w-full  py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ArrowLeft
              onClick={() => router.back()}
              className="h-6 w-6 cursor-pointer"
            />

            <h1 className="text-lg font-semibold">Visitor Details</h1>
          </div>
        </div>
      </div>

      {/* Visitor Card */}
      <div className="bg-gradient-to-b from-purple-50 to-indigo-50 p-6 rounded-3xl shadow text-center">
        {/* Profile */}
        <div className="w-32 h-32 rounded-full overflow-hidden flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="mt-4 text-xl font-semibold">{visitor.name}</h2>

        {/* Details */}
        <div className="mt-4 space-y-2 text-left text-sm">
          <p>
            <span className="font-medium text-gray-700">Ph. Number: </span>
            {visitor.phone}
          </p>
          <p>
            <span className="font-medium text-gray-700">Gender: </span>
            {visitor.gender}
          </p>
          <p>
            <span className="font-medium text-gray-700">Date: </span>
            {visitor.date}
          </p>
          <p>
            <span className="font-medium text-gray-700">Check In Time: </span>
            {visitor.time}
          </p>
          <p>
            <span className="font-medium text-gray-700">Purpose: </span>
            {visitor.purpose}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow text-blue-600 font-medium border border-gray-200">
            <Phone size={18} /> Call
          </button>
          <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow text-indigo-600 font-medium border border-gray-200">
            <QrCode size={18} /> QR
          </button>
        </div>
      </div>

      {/* Status */}
      <div className="flex flex-col items-center mt-8">
        <CheckCircle2 className="text-yellow-400 w-12 h-12" />
        <p className="text-lg font-medium mt-2 text-gray-800">
          {visitor.status}
        </p>
      </div>

      {/* Cancel Approval */}
      <div className="mt-6">
        <button className="w-full border border-gray-300 rounded-full py-3 text-gray-700 font-medium hover:bg-gray-50 transition">
          Cancel Approval
        </button>
      </div>
    </div>
  );
};

export default VisitorDetailCom;
