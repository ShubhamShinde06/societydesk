"use client";

import { Camera, X } from "lucide-react";
import { useState } from "react";

const MySelfForm = ({setShowMySelfForm}) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    flatNo: "",
    wing: "",
    contact: "",
    email: "",
    emergencyContact: "",
  });

  const [profilePic, setProfilePic] = useState();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    // if (e.target.files && e.target.files[0]) {
    //   const reader = new FileReader();
    //   reader.onload = () => setProfilePic();
    //   reader.readAsDataURL(e.target.files[0]);
    // }
  };

  return (
    <div className="p-4 space-y-6 bg-white">
      {/* Header */}
      <div className="flex items-center gap-3">
        <X className="h-6 w-6 cursor-pointer" onClick={()=>setShowMySelfForm(false)}/>
        {/* <h1 className="text-lg font-semibold">My Profile</h1> */}
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center relative">
        <div className="relative">
          <img
            src={profilePic || "/default-avatar.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
          />
          <label
            htmlFor="profilePicInput"
            className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow cursor-pointer"
          >
            <Camera className="h-5 w-5 text-orange-500" />
          </label>
          <input
            id="profilePicInput"
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </div>
      </div>

      {/* Form */}
      <form className="space-y-5">
        {/* First + Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name*</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="John"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name*</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        {/* Flat No + Wing */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Flat No*</label>
            <input
              type="text"
              name="flatNo"
              value={form.flatNo}
              onChange={handleChange}
              placeholder="302"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Wing*</label>
            <input
              type="text"
              name="wing"
              value={form.wing}
              onChange={handleChange}
              placeholder="A"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        {/* Contact No */}
        <div>
          <label className="block text-sm font-medium mb-1">Contact No*</label>
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Text Here"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email ID*</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
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

        {/* Save Button */}
        <button
          type="submit"
          className="btn-orange "
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default MySelfForm