import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = ({ href, heading, placholder }) => {
  const router = useRouter();

  return (
    <div className="w-full header px-4 py-3 rounded-b-3xl shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ArrowLeft
            onClick={() => router.back()}
            className="h-6 w-6 cursor-pointer"
          />

          <h1 className="text-lg font-semibold">{heading}</h1>
        </div>
      </div>
      {/* Search Bar */}
      <div className="mt-3">
        <div className="flex items-center bg-white rounded-full shadow px-3 py-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={placholder}
            className="ml-2 flex-1 outline-none bg-transparent text-sm text-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
