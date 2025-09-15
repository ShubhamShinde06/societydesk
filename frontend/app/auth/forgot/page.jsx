"use client";

import OTP from "@/components/AppComponents/OTP";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function Forgot() {
  const [OTPShow, setOTPShow] = useState(false);
  const [PhoneNo, setPhoneNo] = useState("");
  return (
    <>
      {/* Action Section */}
      <div className="w-full  bg-white/90 text-black backdrop-blur-xl shadow-2xl p-8 text-center rounded-t-3xl space-y-8 overflow-y-auto">
        <div className="w-full flex flex-col space-y-4 items-start">
          {OTPShow ? (
            <OTP PhoneNo={PhoneNo} />
          ) : (
            <>
              <div className="w-full flex flex-col items-start space-y-2">
                <label htmlFor="">Enter Register Phone No.</label>
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  className="border border-gray-400 w-full"
                  tabIndex={1}
                  value={PhoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
              <button
                onClick={() => setOTPShow(true)}
                className="btn-orange"
                tabIndex={4}
              >
                Send Code
              </button>
              {/* <p className="text-center w-full">
                Don't have an account?{" "}
                <Link href={"/auth/register"}>
                  <span className="text-orange-500" tabIndex={5}>
                    Register
                  </span>
                </Link>
              </p> */}
            </>
          )}
        </div>
      </div>
    </>
  );
}
