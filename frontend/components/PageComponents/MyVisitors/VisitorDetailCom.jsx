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
    <div className="min-h-screen bg-white flex flex-col p-4 pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <ArrowLeft
          onClick={() => router.back()}
          className="h-6 w-6 cursor-pointer"
        />
        <h1 className="text-lg font-semibold">My Visitors</h1>
      </div>

      {/* Visitor Card */}
      <div className="bg-gradient-to-b from-purple-50 to-indigo-50 p-6 rounded-3xl shadow-md text-center">
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
        <div className="mt-4 space-y-2 text-sm text-gray-700 text-left px-6">
          <p>
            <span className="font-medium">Ph. Number :</span> {visitor.phone}
          </p>
          <p>
            <span className="font-medium">Gender :</span> {visitor.gender}
          </p>
          <p>
            <span className="font-medium">Date :</span> {visitor.date}
          </p>
          <p>
            <span className="font-medium">Check In Time :</span> {visitor.time}
          </p>
          <p>
            <span className="font-medium">Purpose :</span> {visitor.purpose}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-blue-600 font-medium">
            <Phone size={18} /> Call
          </button>
          <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-indigo-600 font-medium">
            <QrCode size={18} /> QR
          </button>
        </div>
      </div>

      {/* Status */}
      <div className="flex flex-col items-center mt-10">
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
