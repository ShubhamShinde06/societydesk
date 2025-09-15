"use client";

import { EyeIcon, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="w-full h-2/3 bg-white/90 text-black backdrop-blur-xl shadow-2xl p-8 text-center rounded-t-3xl space-y-8 overflow-y-auto">
        <h1 className="text-2xl font-semibold">Register</h1>
        <div className="w-full flex flex-col space-y-4 items-start">
          {/* Society Code */}
          <div className="w-full flex flex-col items-start space-y-2">
            <label>Society Code</label>
            <Input
              type="text"
              placeholder="Enter your society"
              className="w-full border border-gray-300"
              tabIndex={1}
              
            />
          </div>

          {/* Wing Dropdown */}
          <div className="w-full flex flex-col items-start space-y-2">
            <label>Wing</label>
            <Select>
              <SelectTrigger className="w-full border border-gray-300">
                <SelectValue placeholder="Select Wing" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Available Wings</SelectLabel>
                  <SelectItem value="A">Wing A</SelectItem>
                  <SelectItem value="B">Wing B</SelectItem>
                  <SelectItem value="C">Wing C</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Floor Dropdown */}
          <div className="w-full flex flex-col items-start space-y-2">
            <label>Floor</label>
            <Select>
              <SelectTrigger className="w-full border border-gray-300">
                <SelectValue placeholder="Select Floor" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Floors</SelectLabel>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <SelectItem key={i} value={`floor-${i + 1}`}>
                      Floor {i + 1}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Flat Number Dropdown */}
          <div className="w-full flex flex-col items-start space-y-2">
            <label>Flat No.</label>
            <Select >
              <SelectTrigger className="w-full border border-gray-300">
                <SelectValue placeholder="Select Flat No." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Flats</SelectLabel>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <SelectItem key={i} value={`flat-${i + 1}`}>
                      Flat {i + 1}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Full Name */}
          <div className="w-full flex flex-col items-start space-y-2">
            <label>Full Name</label>
            <Input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300"
            />
          </div>

          {/* Phone */}
          <div className="w-full flex flex-col items-start space-y-2">
            <label>Phone No.</label>
            <Input
              type="number"
              placeholder="Enter your phone no."
              className="w-full border border-gray-300"
            />
          </div>

          {/* Password */}
          <div className="w-full flex flex-col items-start space-y-2">
            <label>Set Password</label>
            <div className="border border-gray-300 rounded-md w-full  text-start flex justify-between items-center">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Set password"
                className="bg-transparent border-0 outline-0 flex-1 px-2 "
              />
              <div
                className="pr-2 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeIcon /> : <EyeOff />}
              </div>
            </div>
          </div>

          {/* Family Members */}
          <div className="w-full flex flex-col items-start space-y-2">
            <label>How Many Members in Family</label>
            <Input type="number" placeholder="Enter number" className="w-full border border-gray-300" />
          </div>

          {/* Register Button */}
          <button className="btn-skyblue w-full">Register</button>

          {/* Login Link */}
          <p className="text-center w-full">
            Already have an account?{" "}
            <Link href={"/auth/login"}>
              <span className="text-[#0FE7C8] font-semibold">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
