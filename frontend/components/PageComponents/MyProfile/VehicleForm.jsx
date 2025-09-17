"use client";

import { ArrowLeft, ImageIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const VehicleForm = () => {
  const [company, setCompany] = useState("TATA");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [file, setFile] = useState(null);

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href={'/my-profile'}><ArrowLeft className="h-6 w-6 cursor-pointer" /></Link>
        <h1 className="text-lg font-semibold">Add Vehicle</h1>
      </div>

      {/* Form */}
      <form className="space-y-5">
        {/* Vehicle Company */}
        <div>
          <label className="block text-sm font-medium mb-1">Vehicle Company</label>
          <select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"

          >
            <option>TATA</option>
            <option>Hyundai</option>
            <option>Maruti Suzuki</option>
            <option>Honda</option>
            <option>Mahindra</option>
          </select>
        </div>

        {/* Vehicle Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Vehicle Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter vehicle name"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Vehicle Number */}
        <div>
          <label className="block text-sm font-medium mb-1">Vehicle Number</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter vehicle number"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Upload Photo */}
        <div>
          <label className="block text-sm font-medium mb-1">Upload Photo of Vehicle</label>
          <div
            className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center cursor-pointer hover:bg-orange-50"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            <ImageIcon className="mx-auto h-10 w-10 text-orange-400 mb-2" />
            <p>
              Drag & Drop or{" "}
              <span className="text-orange-500 font-semibold">Choose</span> file to Upload
            </p>
            <p className="text-xs text-gray-500">Select jpg, png, jpeg format only</p>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>
          {file && (
            <p className="mt-2 text-sm text-gray-600">Selected: {file.name}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className=" btn-orange"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default VehicleForm