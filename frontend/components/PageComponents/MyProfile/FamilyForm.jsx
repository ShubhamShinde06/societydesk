"use client";

import { ArrowLeft, Calendar, ImageIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
const FamilyForm = () => {
  const [form, setForm] = useState({
    name: "",
    relation: "",
    age: "",
    contact: "",
    emergencyContact: "",
    education: "",
    school: "",
    hobby: "",
    birthday: "",
    anniversary: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Header */}
      <div className="flex items-center gap-3">
       <Link href={'/my-profile'}><ArrowLeft className="h-6 w-6 cursor-pointer" /></Link> 
        <h1 className="text-lg font-semibold">Add Family Member</h1>
      </div>

      {/* Form */}
      <form className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Relation + Age */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Relation</label>
            <input
              type="text"
              name="relation"
              value={form.relation}
              onChange={handleChange}
              placeholder="Relation"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              placeholder="Age"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        {/* Contact No */}
        <div>
          <label className="block text-sm font-medium mb-1">Contact No</label>
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Text here"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Emergency Contact */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Emergency Contact No
          </label>
          <input
            type="text"
            name="emergencyContact"
            value={form.emergencyContact}
            onChange={handleChange}
            placeholder="Text here"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Education */}
        <div>
          <label className="block text-sm font-medium mb-1">Education</label>
          <input
            type="text"
            name="education"
            value={form.education}
            onChange={handleChange}
            placeholder="Text here"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* School/College */}
        <div>
          <label className="block text-sm font-medium mb-1">
            School/College Name
          </label>
          <input
            type="text"
            name="school"
            value={form.school}
            onChange={handleChange}
            placeholder="Text here"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Hobby/Passion */}
        <div>
          <label className="block text-sm font-medium mb-1">Hobby/Passion</label>
          <input
            type="text"
            name="hobby"
            value={form.hobby}
            onChange={handleChange}
            placeholder="Text here"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Birthday + Anniversary */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Birthday</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <input
                type="date"
                name="birthday"
                value={form.birthday}
                onChange={handleChange}
                className="w-full focus:outline-none"
              />
              {/* <Calendar className="h-5 w-5 text-gray-400" /> */}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Anniversary</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <input
                type="date"
                name="anniversary"
                value={form.anniversary}
                onChange={handleChange}
                className="w-full focus:outline-none"
              />
              {/* <Calendar className="h-5 w-5 text-gray-400" /> */}
            </div>
          </div>
        </div>

        {/* Upload Photo */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Upload Photo of Family Member
          </label>
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
          className="btn-orange"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FamilyForm