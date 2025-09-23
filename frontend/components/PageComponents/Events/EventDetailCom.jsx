"use client";

import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import NameHeader from "@/components/AppComponents/NameHeader";

const EventDetailCom = () => {
  const router = useRouter();

  const event = {
    title: "New Year Celebration Party Event",
    type: "Party",
    date: "Sat | 01 Jan 2025",
    location: "Near B Wing",
    banner: "/event-banner.jpg",
    gallery: ["/img1.jpg", "/img2.jpg", "/img3.jpg"],
    moreCount: 20,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
    organizer: {
      name: "Aditya Verma",
      role: "Meeting",
      avatar: "/profile.jpg",
    },
  };

  return (
    <div className=" h-full overflow-y-auto bg-gray-50 flex flex-col gap-4 ">
      {/* Header */}
      <NameHeader 
        heading={'Upcoming Events'}
      />

      {/* Banner */}
      <div className="relative">
        <Image
          src={event.banner}
          alt="Event Banner"
          width={500}
          height={250}
          className="w-full h-52 object-cover"
        />
      </div>

      {/* Event Content */}
      <div className="p-4 -mt-6 bg-gray-50 rounded-t-3xl">
        {/* Event Type */}
        <p className="text-sm text-orange-500 font-medium">{event.type}</p>

        {/* Title */}
        <h2 className="text-lg font-semibold mt-1">{event.title}</h2>

        {/* Date & Location */}
        <div className="flex items-center gap-6 text-sm text-gray-600 mt-2">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-orange-500" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Gallery */}
        <div className="flex items-center gap-2 mt-3">
          {event.gallery.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`Gallery ${i}`}
              width={50}
              height={50}
              className="w-12 h-12 rounded-md object-cover"
            />
          ))}
          <span className="text-sm text-gray-600 font-medium">
            +{event.moreCount} More
          </span>
        </div>

        {/* About Event */}
        <div className="mt-4">
          <h3 className="font-semibold text-gray-900">About Event</h3>
          <p className="text-sm text-gray-600 mt-1">
            {event.description}{" "}
            <span className="text-orange-500 cursor-pointer">
              Read More...
            </span>
          </p>
        </div>

        {/* Organizer */}
        <div className="mt-5">
          <h3 className="font-semibold text-gray-900 mb-2">Organizer</h3>
          <div className="flex items-center justify-between bg-gradient-to-r from-orange-50 to-white border rounded-xl p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <Image
                src={event.organizer.avatar}
                alt="Organizer"
                width={45}
                height={45}
                className="rounded-full"
              />
              <div>
                <h4 className="font-medium text-gray-900">
                  {event.organizer.name}
                </h4>
                <p className="text-sm text-gray-500">{event.organizer.role}</p>
              </div>
            </div>
            <button className="p-2 bg-orange-500 rounded-full text-white">
              <Phone className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between gap-4 mt-auto p-4">
        <button className="flex-1 border-2 border-orange-400 text-orange-500 rounded-full py-3 font-medium hover:bg-orange-50 transition">
          Previous
        </button>
        <button className="flex-1 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-full py-3 font-medium shadow-md hover:opacity-90 transition">
          Next
        </button>
      </div>
    </div>
  );
};

export default EventDetailCom;
