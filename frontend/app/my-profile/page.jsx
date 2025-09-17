"use client";

import MySelfForm from "@/components/PageComponents/MyProfile/MySelfForm";
import { ArrowLeft, Phone, Mail, Edit, Building2, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MyProfilePage() {
  const family = [
    { name: "Emilia", relation: "Wife", img: "/LogoColor.png" },
    { name: "Amelia", relation: "Daughter", img: "/LogoColor.png" },
    { name: "Sophia", relation: "Mother", img: "/LogoColor.png" },
  ];

  const vehicles = [
    { name: "TATA Curvv", number: "MH 04 AB 4444", img: "/LogoColor.png" },
    { name: "Yamaha MT 15 V2", number: "MH 04 A 5554", img: "/LogoColor.png" },
  ];

  const [ShowMySelfForm, setShowMySelfForm] = useState(false);

  return (
    <div className="w-full h-full p-4 space-y-6 overflow-y-scroll pb-20">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href={"/home"}>
          <ArrowLeft className="h-6 w-6 cursor-pointer" />
        </Link>
        <h1 className="text-lg font-semibold">My Profile</h1>
      </div>

      {/* Profile Card */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-start gap-4 relative">
        <Image
          src="/LogoColor.png"
          alt="Profile"
          width={70}
          height={70}
          className="rounded-full"
        />
        <div className="flex-1">
          <h2 className="text-lg font-bold">John Doe</h2>
          <p className="flex items-center gap-2 text-gray-700 text-sm">
            <Phone className="h-4 w-4" /> +91 9595454512
          </p>
          <p className="flex items-center gap-2 text-gray-700 text-sm">
            <Mail className="h-4 w-4" /> johndoe@gmail.com
          </p>
        </div>
        <button className="absolute top-4 right-4 text-orange-500">
          <Edit className="h-5 w-5" onClick={()=>setShowMySelfForm(true)} />
        </button>
      </div>

      {/* Address */}
      <div className="flex items-center gap-2 bg-white border rounded-lg p-3 shadow-sm">
        <Building2 className="text-orange-500" />
        <p className="text-gray-800 font-medium">302, Wing A, Jackson Height</p>
      </div>

      {/* Maintenance Due */}
      <div className="bg-white border rounded-lg p-4 shadow-sm flex justify-between items-center">
        <p className="text-gray-600">
          <span className="font-medium">Maintenance Due: </span> ₹300
        </p>
        <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-4 py-2 rounded-lg shadow-md">
          Pay Now
        </button>
      </div>

      {/* My Family */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">My Family</h3>
          <Link href={"/my-profile/family-member/add"}>
            <button className="flex items-center text-orange-500 gap-1">
              <Plus className="h-4 w-4" /> Add
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {family.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white p-3 rounded-lg shadow-sm"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={70}
                height={70}
                className="rounded-full object-cover"
              />
              <p className="font-medium">{member.name}</p>
              <p className="text-sm text-gray-500">{member.relation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* My Vehicles */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">My Vehicles</h3>
          <Link href={"/my-profile/vehicle/add"}>
            <button className="flex items-center text-orange-500 gap-1">
              <Plus className="h-4 w-4" /> Add
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {vehicles.map((vehicle, idx) => (
            <div
              key={idx}
              className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center"
            >
              <Image
                src={vehicle.img}
                alt={vehicle.name}
                width={120}
                height={70}
                className="object-contain"
              />
              <p className="font-medium">{vehicle.name}</p>
              <p className="text-sm text-gray-500">{vehicle.number}</p>
            </div>
          ))}
        </div>
      </div>

      {/* My Self Form */}
      {ShowMySelfForm && (
        <>
          <div className="fixed w-full inset-0 z-50 flex items-end justify-center bg-opacity-60 bg-black/50 backdrop-blur-x">
            <div className="w-full lg:w-1/2 rounded overflow-hidden">
              <MySelfForm setShowMySelfForm={setShowMySelfForm}/>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
