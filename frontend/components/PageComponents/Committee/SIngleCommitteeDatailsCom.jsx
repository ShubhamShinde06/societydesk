"use client";

import ProfileHeader from "@/components/AppComponents/ProfileHeader";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import Image from "next/image";
const SIngleCommitteeDatailsCom = () => {
  const moreMembers = [
    { id: 1, name: "Emily Novak", role: "Secretary", img: "/user1.jpg" },
    { id: 2, name: "Olivia Harrington", role: "Treasurer", img: "/user2.jpg" },
    { id: 3, name: "James Carter", role: "Member", img: "/user3.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileHeader/>

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
        <h3 className="font-semibold text-orange-500 mb-2">
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
        <div className="grid grid-cols-2 gap-4">
          {moreMembers.map((m) => (
            <div
              key={m.id}
              className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center"
            >
              <Image
                src={m.img}
                alt={m.name}
                width={70}
                height={70}
                className="rounded-full"
              />
              <p className="mt-2 font-medium text-sm">{m.name}</p>
              <p className="text-xs text-gray-500">{m.role}</p>
              <div className="flex gap-2 mt-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-50">
                  <Phone className="text-orange-500" size={16} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-50">
                  <Mail className="text-orange-500" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-12"></div>
    </div>
  );
}

export default SIngleCommitteeDatailsCom