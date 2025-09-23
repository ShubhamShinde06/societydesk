"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import NameHeader from "@/components/AppComponents/NameHeader";

const ListSingleVisitorCom = () => {
  const visitor = {
    name: "Aarav Sharma",
    phone: "9595959595",
    gender: "Male",
    date: "16/08/2025",
    time: "09:30 AM",
    purpose: "To discuss terms and our agreement & To build connections.",
    image: "/profile.jpg",
    status: "Waiting for Approval",
  };

  const router = useRouter();

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <NameHeader 
        heading={'My Visitors'}
      />

      {/* Visitor Card */}
      <div className="bg-gradient-to-b from-purple-100 to-indigo-100 p-6 mx-4 mt-4 rounded-t-3xl shadow-md text-center">
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
        <div className="mt-4 space-y-3 text-sm text-gray-700 text-left px-6">
          <p>
            <span className="font-medium">Ph. Number :</span>{" "}
            <span className="font-semibold">{visitor.phone}</span>
          </p>
          <p>
            <span className="font-medium">Gender :</span>{" "}
            <span className="font-semibold">{visitor.gender}</span>
          </p>
          <p>
            <span className="font-medium">Date :</span>{" "}
            <span className="font-semibold">{visitor.date}</span>
          </p>
          <p>
            <span className="font-medium">Check In Time :</span>{" "}
            <span className="font-semibold">{visitor.time}</span>
          </p>
          <p>
            <span className="font-medium">Purpose :</span>{" "}
            <span className="font-semibold">{visitor.purpose}</span>
          </p>
        </div>
      </div>

      {/* Status Bar */}
      <div className=" mx-4 bg-gradient-to-r text-center from-purple-400 to-indigo-400 text-white text-sm font-medium mt-0 px-3 py-2 rounded-b-3xl">
        {visitor.status}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between gap-4 mt-40 px-2">
        <button className="flex-1 border-2 border-orange-400 text-orange-500 rounded-full py-3 font-medium hover:bg-orange-50 transition">
          Decline
        </button>
        <button className="flex-1 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-full py-3 font-medium shadow-md hover:opacity-90 transition">
          Approve
        </button>
      </div>
    </div>
  );
};

export default ListSingleVisitorCom;
