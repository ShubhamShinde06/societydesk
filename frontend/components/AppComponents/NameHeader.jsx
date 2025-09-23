"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const NameHeader = ({ heading, herf }) => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-3  p-4">
      <ArrowLeft
        onClick={() => router.back()}
        className="h-6 w-6 cursor-pointer"
      />

      <h1 className="text-lg font-semibold">{heading}</h1>
    </div>
  );
};

export default NameHeader;
