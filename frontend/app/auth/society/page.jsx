"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EyeIcon, EyeOff } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const indiaStates = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
  Karnataka: ["Bangalore", "Mysore", "Mangalore"],
  Delhi: ["New Delhi", "Dwarka", "Rohini"],
};

export default function SocietyRegister() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedWings, setSelectedWings] = useState([]);
  const [numFloors, setNumFloors] = useState(0);
  const [flatsPerFloor, setFlatsPerFloor] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const wings = ["A", "B", "C", "D", "E"];

  const toggleWing = (wing) => {
    setSelectedWings((prev) =>
      prev.includes(wing) ? prev.filter((w) => w !== wing) : [...prev, wing]
    );
  };

  return (
    <div className="w-full  lg:max-w-2xl h-2/3 bg-white/90 text-black backdrop-blur-xl shadow-2xl p-8 text-center rounded-t-3xl space-y-8 overflow-y-auto">
      <h1 className="text-2xl font-semibold">Society Register</h1>
      <div className="w-full flex flex-col space-y-4 items-start">
        {/* Society Name */}
        <div className="w-full flex flex-col items-start space-y-2">
          <label>Society Name</label>
          <Input
            type="text"
            placeholder="Enter society name "
            className="w-full border border-gray-300"
            tabIndex={1}
          />
        </div>

        {/* State Dropdown */}
        <div className="w-full flex flex-col items-start space-y-2">
          <label>State</label>
          <Select
            onValueChange={(val) => {
              setSelectedState(val);
              setSelectedCity("");
            }}
            tabIndex={2}
          >
            <SelectTrigger className="w-full border border-gray-300">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Indian States</SelectLabel>
                {Object.keys(indiaStates).map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* City Dropdown */}
        {selectedState && (
          <div className="w-full flex flex-col items-start space-y-2">
            <label>City</label>
            <Select tabIndex={3} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-full border border-gray-300">
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{selectedState} Cities</SelectLabel>
                  {indiaStates[selectedState].map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Address Input */}
        <div className="w-full flex flex-col items-start space-y-2">
          <label>Address</label>
          <Textarea
            placeholder="Enter your society address"
            className="w-full border border-gray-300"
            tabIndex={4}
          />
        </div>

        {/* Wings Multi-Select */}
        <div className="w-full flex flex-col items-start space-y-2">
          <label>Select Wings</label>
          <Select tabIndex={5}>
            <SelectTrigger className="w-full border border-gray-300">
              <SelectValue
                placeholder="Select wings"
                // Show selected items as comma separated
                defaultValue=""
              >
                {selectedWings.length > 0
                  ? selectedWings.join(", ")
                  : "Select Wings"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Available Wings</SelectLabel>
                {wings.map((wing) => (
                  <SelectItem
                    key={wing}
                    value={wing}
                    onClick={() => toggleWing(wing)}
                  >
                    {selectedWings.includes(wing)
                      ? `✅ Wing ${wing}`
                      : `Wing ${wing}`}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Floors Input */}
        <div className="w-full flex flex-col items-start space-y-2">
          <label>Number of Floors</label>
          <Input
            type="number"
            value={numFloors}
            onChange={(e) => setNumFloors(Number(e.target.value))}
            placeholder="Enter number of floors"
            className="w-full border border-gray-300"
            tabIndex={6}
          />
        </div>

        {/* Flats Per Floor Input */}
        <div className="w-full flex flex-col items-start space-y-2">
          <label>Flats per Floor</label>
          <Input
            type="number"
            value={flatsPerFloor}
            onChange={(e) => setFlatsPerFloor(Number(e.target.value))}
            placeholder="Enter flats per floor"
            className="w-full border border-gray-300"
            tabIndex={7}
          />
        </div>

        {/* Full Name */}
        <div className="w-full flex flex-col items-start space-y-2">
          <label>Full Name</label>
          <Input
            type="text"
            placeholder="Enter your full name"
            className="w-full border border-gray-300"
            tabIndex={8}
          />
        </div>

        {/* Phone */}
        <div className="w-full flex flex-col items-start space-y-2">
          <label>Email</label>
          <Input
            type="email"
            placeholder="Enter email"
            className="w-full border border-gray-300"
            tabIndex={9}
          />
        </div>

        {/* Phone */}
        <div className="w-full flex flex-col items-start space-y-2">
          <label>Phone No.</label>
          <Input
            type="number"
            placeholder="Enter phone number"
            className="w-full border border-gray-300"
            tabIndex={10}
          />
        </div>

        {/* Password */}
        <div className="w-full flex flex-col items-start space-y-2">
          <label>Set Password</label>
          <div className="border border-gray-300 rounded-md w-full flex items-center">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Set password"
              className="flex-1 border-0 outline-0 px-2"
              tabIndex={11}
            />
            <div
              className="pr-2 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeIcon /> : <EyeOff />}
            </div>
          </div>
        </div>

        {/* Register Button */}
        <button className="btn-orange w-full" tabIndex={12}>
          Society Register
        </button>

        {/* Login Link */}
        <p className="text-center w-full">
          Already register Society?{" "}
          <Link href={"/auth"}>
            <span className="text-orange-400 font-semibold" tabIndex={13}>
              Back
            </span>
          </Link>
        </p>
      </div>

      {/* Dummy Data Preview */}
      {selectedWings.length > 0 && numFloors > 0 && flatsPerFloor > 0 && (
        <div className="mt-6 text-left bg-gray-100 p-4 rounded-md">
          <h2 className="font-semibold">Generated Structure:</h2>
          {selectedWings.map((wing) => (
            <div key={wing}>
              <h3 className="font-medium">Wing {wing}</h3>
              {Array.from({ length: numFloors }).map((_, f) => (
                <p key={f}>
                  Floor {f + 1} → Flats:{" "}
                  {Array.from({ length: flatsPerFloor })
                    .map((_, flat) => flat + 1)
                    .join(", ")}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
