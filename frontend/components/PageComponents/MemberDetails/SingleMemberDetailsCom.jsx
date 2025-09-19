"use client";

import ProfileHeader from "@/components/AppComponents/ProfileHeader";
import { ArrowLeft, Phone, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

const SingleMemberDetailsCom = () => {
  const familyMembers = [
    { name: "Mathew", relation: "Husband", image: "/LogoColor.png" },
    { name: "Amelia", relation: "Daughter", image: "/LogoColor.png" },
    { name: "Richard", relation: "Son", image: "/LogoColor.png" },
    { name: "Richards", relation: "Son", image: "/LogoColor.png" },
    { name: "Richardww", relation: "Son", image: "/LogoColor.png" },
  ];

  const vehicles = [
    { name: "TATA Curvv", number: "MH 04 AB 4444", image: "/LogoColor.png" },
    {
      name: "Yamaha MT 15 V2",
      number: "MH 04 A 5554",
      image: "/LogoColor.png",
    },
  ];
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  return (
    <div className="min-h-screen bg-gray-50 overflow-y-auto pb-20">
      {/* Header with background */}
      <ProfileHeader/>

      {/* Family Members */}
      <div className="mt-8 px-4">
        <h3 className="text-base font-semibold mb-3">Family members</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {familyMembers.map((member) => (
            <div
              key={member.name}
              className="min-w-[120px] card shadow rounded-xl p-4 flex flex-col items-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <p className="mt-2 font-medium text-sm">{member.name}</p>
              <p className="text-xs text-gray-500">{member.relation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicles */}
      <div className="mt-8 px-4 mb-10">
        <h3 className="text-base font-semibold mb-3">Vehicles</h3>
        <div className="grid grid-cols-2 gap-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="card shadow rounded-2xl p-3 flex flex-col items-center"
            >
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                width={100}
                height={60}
                className="object-contain"
              />
              <p className="mt-2 font-medium text-sm">{vehicle.name}</p>
              <p className="text-xs text-gray-500">{vehicle.number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleMemberDetailsCom;
