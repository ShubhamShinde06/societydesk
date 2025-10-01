"use client";

import ProfileHeader from "@/components/AppComponents/ProfileHeader";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import Image from "next/image";

const SingleCommitteeDetailsCom = () => {
  const moreMembers = [
    { id: 1, name: "Emily Novak", role: "Secretary", img: "/user1.jpg" },
    { id: 2, name: "Olivia Harrington", role: "Treasurer", img: "/user2.jpg" },
    { id: 3, name: "James Carter", role: "Member", img: "/user3.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-10 overflow-y-auto">
      <ProfileHeader />

      {/* Bio */}
      <div className="mt-6 px-6">
        <h3 className="font-semibold text-lg">Bio</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          Mason, President of the XYZ Historical Society. Mason holds a Master's
          in Public Administration and has over 15 years of experience in
          non-profit management.
        </p>
      </div>

      {/* Role & Responsibilities */}
      <div className="mt-6 mx-6 bg-blue-50 rounded-xl p-4">
        <h3 className="font-semibold text-[#FFA800] mb-2">
          Role and Responsibilities
        </h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>✔ Leadership & Strategy: Setting vision and compliance</li>
          <li>✔ Event Oversight: Organizing aligned events</li>
          <li>✔ Representation: Serving as public face</li>
          <li>✔ Financial Oversight: Managing budgets</li>
          <li>✔ Crisis Management: Resolving conflicts</li>
          <li>✔ Succession Planning: Ensuring leadership transitions</li>
        </ul>
      </div>

      {/* More from Committee */}
      <div className="mt-8 px-6">
        <h3 className="font-semibold text-lg mb-4">More from committee</h3>
        <div className="flex gap-2 overflow-x-auto">
          {moreMembers.map((m) => (
            <div
              key={m.id}
              className="min-w-40 bg-white rounded-xl shadow-sm p-4 flex flex-col items-center"
            >
              <div className="w-22 h-22 overflow-hidden rounded-full">
                <Image
                  src={"/profile.jpg"}
                  alt={m.name}
                  width={70}
                  height={70}
                  className=" object-cover w-full h-full"
                />
              </div>

              <p className="mt-2 font-medium text-sm">{m.name}</p>
              <p className="text-xs text-gray-500">{m.role}</p>
              <div className="flex gap-2 mt-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-50">
                  <Phone className="text-[#FFA800]" size={16} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-50">
                  <Mail className="text-[#FFA800]" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-12"></div>
    </div>
  );
};

export default SingleCommitteeDetailsCom;
