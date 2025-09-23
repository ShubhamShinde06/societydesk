import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const OTP = ({Email}) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const router = useRouter()
  const handleChange = (index, value) => {
    const newCode = [...code];

    //handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      //focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < s ? lastFilledIndex + 1 : s;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      //move focus to the  next input field if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKayDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className=" justify-center w-full flex flex-col gap-5">
      <h1 className=" lg:text-4xl text-2xl font-semibold pl-1 lg:pl-0">
        {"Enter Code"}
      </h1>
      <p className=" leading-tight tracking-tight text-black lg:text-xl">
        Enter the 6-digit code sent to your {Email}
      </p>
      <form
        //  onSubmit={handleSubmit}
        className="w-full  flex flex-col gap-6 items-center rounded-xl p-5"
      >
        <div className="flex justify-between gap-3">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="6"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKayDown(index, e)}
              //disabled={isLoading || code.some((digit) => !digit)}
              className=" border border-gray-300  rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 lg:py-5 bg-[#32333 text-black text-center text-xl"
              required=""
            />
          ))}
        </div>
        <p>if you didn't receive a code, <span className="text-orange-500">Resend</span></p>
        {/* {error && (
                <p className=" text-red-500 font-semibold mt-2">{error}</p>
              )} */}
        <button  className="btn-orange">
          {/* {isLoading ? "Verifying..." : "Verify"} */}
        <Link href={'/auth/set-new-password'}>Verify</Link>   
        </button>
      </form>
    </div>
  );
};

export default OTP;
