"use client";

import { useState } from "react";
import { ArrowLeft, Calendar, Upload } from "lucide-react";
import Link from "next/link";
import NameHeader from "@/components/AppComponents/NameHeader";

const ComplaintForm = () => {
  const [category, setCategory] = useState("Water");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("High");

  return (
    <div className="space-y-4 overflow-y-auto">
      {/* Header */}
      <NameHeader
        heading={'Create New Complaint'}
        herf={'complaints'}
      />

      {/* Form */}
      <div className="px-4">
        <h2 className="text-lg font-semibold mb-5">Raise A Complaint</h2>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Complaint Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-3 py-2 bg-white focus:ring-2 focus:ring-orange-400 outline-none"
          >
            <option>Water</option>
            <option>Maintenance</option>
            <option>Parking</option>
            <option>Electricity</option>
            <option>Lift</option>
            <option>Others</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Description
          </label>
          <textarea
            placeholder="Leakage from main pipes or public sources"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-3 py-2 h-20 resize-none bg-white focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Select Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-3 py-2 bg-white focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <Calendar className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Priority */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Priority Level
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-3 py-2 bg-white focus:ring-2 focus:ring-orange-400 outline-none"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        {/* Upload Photo */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Upload Photo
          </label>
          <div className="border-2 border-dashed border-orange-400 rounded-xl p-6 text-center bg-orange-50 cursor-pointer">
            <Upload className="mx-auto mb-2 w-10 h-10 text-orange-500" />
            <p className="text-sm font-medium text-gray-700">
              Drag & Drop or <span className="text-orange-500">Choose</span>{" "}
              file to Upload
            </p>
            <p className="text-xs text-gray-400">
              Select jpg, png, jpeg format only
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button className="btn-orange ">Submit Complaint</button>
      </div>
    </div>
  );
};

export default ComplaintForm;
