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
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import {
  showErrorToast,
  showSuccessToast,
} from "@/components/AppComponents/Notification";

const indiaStates = {
  "Andhra Pradesh": [
    "Visakhapatnam",
    "Vijayawada",
    "Guntur",
    "Nellore",
    "Kurnool",
    "Tirupati",
  ],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro", "Pasighat"],
  Assam: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur"],
  Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
  Chhattisgarh: ["Raipur", "Bilaspur", "Korba", "Durg", "Bhilai"],
  Goa: ["Panaji", "Margao", "Vasco da Gama"],
  Gujarat: [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Jamnagar",
    "Bhavnagar",
  ],
  Haryana: ["Gurgaon", "Faridabad", "Ambala", "Panipat", "Hisar"],
  "Himachal Pradesh": ["Shimla", "Dharamshala", "Manali", "Solan"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
  Karnataka: ["Bengaluru", "Mysore", "Mangalore", "Hubli", "Belgaum"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Alappuzha"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  Manipur: ["Imphal"],
  Meghalaya: ["Shillong"],
  Mizoram: ["Aizawl"],
  Nagaland: ["Kohima"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
  Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Kota", "Ajmer"],
  Sikkim: ["Gangtok"],
  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Tiruchirappalli",
    "Salem",
  ],
  Telangana: ["Hyderabad", "Warangal"],
  Tripura: ["Agartala"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut"],
  Uttarakhand: ["Dehradun", "Haridwar", "Nainital"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri"],
  Delhi: ["New Delhi", "Dwarka", "Rohini"],
  "Union Territories": {
    Delhi: ["New Delhi"],
    Puducherry: ["Puducherry"],
    Chandigarh: ["Chandigarh"],
    "Andaman & Nicobar Islands": ["Port Blair"],
    Lakshadweep: ["Kavaratti"],
  },
};

export default function SocietyRegister() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedWings, setSelectedWings] = useState([]);
  const [numFloors, setNumFloors] = useState(0);
  const [flatsPerFloor, setFlatsPerFloor] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  // Form fields
  const [socName, setSocName] = useState("");
  const [address, setAddress] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const wings = Array.from(
    { length: 26 },
    (_, i) => String.fromCharCode(65 + i) // 65 = 'A' in ASCII
  );

  const toggleWing = (wing) => {
    setSelectedWings((prev) =>
      prev.includes(wing) ? prev.filter((w) => w !== wing) : [...prev, wing]
    );
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");

    const SocietyData = {
      SocName: socName,
      State: selectedState,
      City: selectedCity,
      Address: address,
      SocWings: selectedWings, // should be array
      SocFloor: Number(numFloors),
      SocFlats_per_Floor: Number(flatsPerFloor),
    };

    const MemberData = {
      Name: fullName,
      Email: email,
      MobNo: phone,
      Pwd: password,
    };

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/society-register",
        {
          SocietyData,
          MemberData,
        }
      );

      console.log("API Response:", res.data);

      if (res.data.success) {
        showSuccessToast({ heading: "Society registered successfully!" });
      } else {
        showErrorToast({ heading: res.data.message || "Something went wrong" });
      }
    } catch (error) {
      console.log("API Error:", error.response?.data || error.message);
      showErrorToast({ heading: "Server error. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:max-w-2xl h-2/3 bg-white/90 text-black backdrop-blur-xl shadow-2xl p-8 text-center rounded-t-3xl space-y-8 overflow-y-auto">
      <h1 className="text-2xl font-semibold">Society Register</h1>
      <div className="w-full flex flex-col space-y-4 items-start">
        {/* Society Name */}
        <div className="w-full flex flex-col items-start space-y-2">
          <label>Society Name</label>
          <Input
            type="text"
            placeholder="Enter society name"
            value={socName}
            onChange={(e) => setSocName(e.target.value)}
            className="w-full border border-gray-300"
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
            <Select onValueChange={setSelectedCity}>
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300"
          />
        </div>

        {/* Wings Multi-Select */}
        <div className="w-full flex flex-col items-start space-y-2 ">
          <label>Select Wings</label>
          <div className="w-full border border-gray-300 rounded-md p-2 place-items-center grid grid-cols-2 md:grid-cols-4 gap-4">
            {wings.map((wing) => (
              <div key={wing} className="flex items-center space-x-2">
                <Checkbox
                  checked={selectedWings.includes(wing)}
                  onCheckedChange={() => toggleWing(wing)}
                />
                <span>Wing {wing}</span>
              </div>
            ))}
          </div>
          {selectedWings.length > 0 && (
            <p className="text-sm text-gray-500">
              Selected: {selectedWings.join(", ")}
            </p>
          )}
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
          />
        </div>

        {/* Full Name */}
        <div className="w-full flex flex-col items-start space-y-2">
          <label>Full Name</label>
          <Input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full border border-gray-300"
          />
        </div>

        {/* Email */}
        <div className="w-full flex flex-col items-start space-y-2">
          <label>Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full border border-gray-300"
          />
        </div>

        {/* Phone */}
        <div className="w-full flex flex-col items-start space-y-2">
          <label>Phone No.</label>
          <Input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            className="w-full border border-gray-300"
          />
        </div>

        {/* Password */}
        <div className="w-full flex flex-col items-start space-y-2">
          <label>Set Password</label>
          <div className="border border-gray-300 rounded-md w-full flex items-center">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Set password"
              className="flex-1 border-0 outline-0 px-2"
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
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn-orange w-full"
        >
          {loading ? "Registering..." : "Society Register"}
        </button>

        {/* Login Link */}
        <p className="text-center w-full">
          Already registered Society?{" "}
          <Link href={"/auth"}>
            <span className="text-orange-400 font-semibold">Back</span>
          </Link>
        </p>
      </div>

      {/* Show message */}
      {message && (
        <p className="mt-4 text-center font-medium text-red-600">{message}</p>
      )}

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
