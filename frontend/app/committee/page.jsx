"use client";

import Header from "@/components/AppComponents/Header";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CommitteePage() {
  const data = [
    {
      id: 1,
      image: "/LogoColor.png",
      name: "Shubham Shinde",
      post: "President",
    },
    {
      id: 2,
      image: "/LogoColor.png",
      name: "Shubham Shinde",
      post: "President",
    },
    {
      id: 3,
      image: "/LogoColor.png",
      name: "Shubham Shinde",
      post: "President",
    },
    {
      id: 4,
      image: "/LogoColor.png",
      name: "Shubham Shinde",
      post: "President",
    },
    {
      id: 5,
      image: "/LogoColor.png",
      name: "Shubham Shinde",
      post: "President",
    },
    {
      id: 6,
      image: "/LogoColor.png",
      name: "Shubham Shinde",
      post: "President",
    },
  ];

  return (
    <>
      <div className="w-full h-full bg-gray-50 overflow-y-auto pb-20">
        {/* Header */}
        <Header
          href={"home"}
          heading={`Commitee`}
          placholder={"Search for commitee"}
        />

        <h1 className=" font-semibold mt-4 m-4 text-center">
          Managing Commitee <span className="text-yellow-500">2024-2025</span>
        </h1>

        <div className="grid grid-cols-2 gap-3  place-items-center px-3">
          {data.map((res) => (
            <Link
              href={`/committee/details/${res.id}`}
              key={res.id}
              className="card w-full py-5 rounded-lg shadow-sm flex flex-col items-center border border-gray-200"
            >
              <Image
                src={res.image}
                alt={res.image}
                width={100}
                height={100}
                className="object-contain"
              />
              <p className="font-medium">{res.name}</p>
              <p className="text-sm text-gray-500">{res.post}</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="w-8 h-8 flex items-center justify-center bg-white shadow-xl rounded-full text-yellow-500">
                  <Phone size={18} />
                </div>
                <div className="w-8 h-8 flex items-center justify-center bg-white shadow-xl rounded-full text-yellow-500">
                  <Mail size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
