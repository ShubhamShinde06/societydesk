"use client";

import React, { useState } from "react";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import Header from "@/components/AppComponents/Header";
import Link from "next/link";

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const events = [
    {
      id: 1,
      title: "MUSIC FESTIVAL",
      date: "SAT | 9 NOV 2024",
      location: "NEAR WING B",
      image: "/api/placeholder/400/200",
      type: "featured",
      bgColor: "bg-gradient-to-r from-purple-900 via-blue-900 to-purple-800",
    },
    {
      id: 2,
      title: "New Year Celebration Party Event",
      date: "Sat | 01 Jan 2025",
      location: "Near B Wing",
      image: "/api/placeholder/200/150",
      type: "regular",
    },
    {
      id: 3,
      title: "New Year Celebration Party Event",
      date: "Sat | 01 Jan 2025",
      location: "Near B Wing",
      image: "/api/placeholder/200/150",
      type: "regular",
    },
    {
      id: 4,
      title: "New Year Celebration Party Event",
      date: "Sat | 01 Jan 2025",
      location: "Near B Wing",
      image: "/api/placeholder/200/150",
      type: "regular",
    },
  ];

  const pastEvents = [
    {
      id: 5,
      title: "New Year Celebration Party Event",
      date: "Sat | 01 Jan 2025",
      location: "Near B Wing",
      status: "completed",
      photos: [
        "/api/placeholder/150/120",
        "/api/placeholder/150/120",
        "/api/placeholder/150/120",
      ],
      photoCount: 20,
    },
    {
      id: 6,
      title: "New Year Celebration Party Event",
      date: "Sat | 01 Jan 2025",
      location: "Near B Wing",
      status: "cancelled",
      photos: [],
      photoCount: 0,
    },
    {
      id: 7,
      title: "New Year Celebration Party Event",
      date: "Sat | 01 Jan 2025",
      location: "Near B Wing",
      status: "completed",
      photos: [
        "/api/placeholder/150/120",
        "/api/placeholder/150/120",
        "/api/placeholder/150/120",
      ],
      photoCount: 20,
    },
    {
      id: 8,
      title: "New Year Celebration Party Event",
      date: "Sat | 01 Jan 2025",
      location: "Near B Wing",
      status: "completed",
      photos: [
        "/api/placeholder/150/120",
        "/api/placeholder/150/120",
        "/api/placeholder/150/120",
      ],
      photoCount: 20,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 relative overflow-y-auto pb-20">
      {/* Header */}
      <Header heading={"Events"} placholder={"Search for events"} />

      {/* Tab Navigation */}
      <div className="absolute top-26 w-full flex items-center justify-center z-20">
        <div className="bg-white rounded-full shadow-lg flex items-center p-1 mx-4">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === "upcoming"
                ? "bg-orange-400 text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === "past"
                ? "bg-orange-400 text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Past
          </button>
        </div>
      </div>

      {/* Events Content */}
      <div className="pt-15 pb-8 px-4">
        {activeTab === "upcoming" && (
          <div className="space-y-4">
            {/* Featured Event */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className={`${events[0].bgColor} h-40 relative`}>
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="h-16 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 w-full h-8 bg-black opacity-50"></div>
                </div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    <span className="text-purple-300">MUSIC</span>{" "}
                    <span className="text-white">FESTIVAL</span>
                  </h2>
                  <p className="text-white text-sm font-medium">
                    {events[0].date} - {events[0].location}
                  </p>
                </div>
                {/* Crowd silhouette effect */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
            </div>

            {/* Regular Events */}
            {events.slice(1).map((event) => (
              <Link
                href={'/events/details/2'}
                key={event.id}
                className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="relative z-10">
                      <div className="text-white text-xs font-bold">2025</div>
                      <div className="text-yellow-300 text-lg font-bold leading-none">
                        NEW
                      </div>
                      <div className="text-yellow-300 text-lg font-bold leading-none">
                        YEAR
                      </div>
                    </div>
                    {/* Fireworks effect */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-80"></div>
                    <div className="absolute top-1 left-3 w-1 h-1 bg-pink-400 rounded-full opacity-60"></div>
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-70"></div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4 text-orange-400" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {activeTab === "past" && (
          <div className="space-y-4">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-sm p-4 flex items-start gap-4"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative">
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="relative z-10">
                      <div className="text-white text-xs font-bold">2025</div>
                      <div className="text-yellow-300 text-lg font-bold leading-none">
                        NEW
                      </div>
                      <div className="text-yellow-300 text-lg font-bold leading-none">
                        YEAR
                      </div>
                    </div>
                    {/* Fireworks effect */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-80"></div>
                    <div className="absolute top-1 left-3 w-1 h-1 bg-pink-400 rounded-full opacity-60"></div>
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-70"></div>
                  </div>

                  {/* Status Banner */}
                  <div className="absolute -top-1 -right-1 -left-1 transform rotate-12">
                    <div
                      className={`text-center py-1 px-2 text-xs font-bold text-white shadow-md ${
                        event.status === "completed"
                          ? "bg-orange-400"
                          : "bg-gray-500"
                      }`}
                    >
                      {event.status === "completed" ? "Completed" : "Cancelled"}
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>

                  {event.status === "completed" && event.photos.length > 0 ? (
                    <div className="flex items-center gap-2">
                      {/* Photo thumbnails */}
                      <div className="flex gap-1">
                        {event.photos.slice(0, 3).map((photo, index) => (
                          <div
                            key={index}
                            className="w-12 h-10 rounded-md overflow-hidden bg-gray-200"
                          >
                            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* More photos indicator */}
                      {event.photoCount > 3 && (
                        <span className="text-orange-400 font-semibold text-sm">
                          +{event.photoCount} More
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="text-gray-400 text-sm">No Pictures</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
