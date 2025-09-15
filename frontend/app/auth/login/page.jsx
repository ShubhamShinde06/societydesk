"use client";

import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [ShowPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* Action Section */}
      <div className="w-full h-2/3 bg-white/90 text-black backdrop-blur-xl shadow-2xl p-8 text-center rounded-t-3xl space-y-8 overflow-y-auto">
        <h1 className="text-2xl font-semibold">Login</h1>
        <div className="w-full flex flex-col space-y-4 items-start">
          <div className="w-full flex flex-col items-start space-y-2">
            <label htmlFor="">Society Code</label>
            <Input
              type="text"
              placeholder="Enter your society code"
              className="border border-gray-400  w-full "
              tabIndex={1}
              
            />
          </div>

          <div className="w-full flex flex-col items-start space-y-2">
            <label htmlFor="">Phone No.</label>
            <Input
              type="text"
              placeholder="Enter your phone no."
              className="border border-gray-400 w-full "
              tabIndex={2}
            />
          </div>

          <div className="w-full flex flex-col items-start space-y-2">
            <label htmlFor="">Password</label>
            <div className="border border-gray-400 w-full text-start rounded-md flex items-center justify-between">
              <Input
                type={ShowPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="  flex-1"
                tabIndex={3}
              />
              <div
                className="pr-2"
                onClick={() => setShowPassword((perv) => !perv)}
              >
                {ShowPassword ? <EyeIcon /> : <EyeOff />}
              </div>
            </div>
            <p className="w-full text-end underline text-xs font-normal text-gray-400"><Link href={'/auth/forgot'}>Forgot Password?</Link></p>
          </div>

          <button className="btn-purple" tabIndex={4}>
            Login
          </button>
          <p className="text-center w-full">
            Don't have an account?{" "}
            <Link href={"/auth/register"}>
              <span className="text-[#5649A7]" tabIndex={5}>
                Register
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
