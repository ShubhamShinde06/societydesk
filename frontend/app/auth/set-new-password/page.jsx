"use client";

import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SetNewPassword() {
  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowPasswordTwo, setShowPasswordTwo] = useState(false)
  return (
    <>
      {/* Action Section */}
      <div className="w-full  bg-white/90 text-black backdrop-blur-xl shadow-2xl p-8 text-center rounded-t-3xl space-y-8 overflow-y-auto">
        <h1 className="text-2xl font-semibold">Set New Password</h1>
        <div className="w-full flex flex-col space-y-4 items-start">
          <div className="w-full flex flex-col items-start space-y-2">
            <label htmlFor="">New Password</label>
            <div className="border border-gray-400 w-full text-start rounded-md flex items-center justify-between">
              <Input
                type={ShowPassword ? "text" : "password"}
                placeholder="Enter new password"
                className="  flex-1"
                tabIndex={1}
              />
              <div
                className="pr-2"
                onClick={() => setShowPassword((perv) => !perv)}
              >
                {ShowPassword ? <EyeIcon /> : <EyeOff />}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-start space-y-2">
            <label htmlFor="">Confirm Password</label>
            <div className="border border-gray-400 w-full text-start rounded-md flex items-center justify-between">
              <Input
                type={ShowPasswordTwo ? "text" : "password"}
                placeholder="Enter confirm password"
                className="  flex-1"
                tabIndex={1}
              />
              <div
                className="pr-2"
                onClick={() => setShowPasswordTwo((perv) => !perv)}
              >
                {ShowPasswordTwo ? <EyeIcon /> : <EyeOff />}
              </div>
            </div>
           
          </div>

          <button className="btn-orange" tabIndex={4}>
          <Link href={'/auth/login'}>Change Password</Link>  
          </button>
          {/* <p className="text-center w-full">
            Don't have an account?{" "}
            <Link href={"/auth/register"}>
              <span className="text-[#5649A7]" tabIndex={5}>
                Register
              </span>
            </Link>
          </p> */}
        </div>
      </div>
    </>
  );
}
