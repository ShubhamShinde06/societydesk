import React from 'react';
import { ArrowLeft, Droplet, Calendar, Clock, User, Check } from 'lucide-react';

const TrackComplaintCom = () => {
  return (
    <div className="max-w-sm mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center p-4 bg-white">
        <ArrowLeft className="w-6 h-6 text-gray-800 mr-4" />
        <h1 className="text-xl font-medium text-gray-800">Track Complaint</h1>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-6">
        {/* Complaint Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          {/* Header with Icon and Status */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                <Droplet className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Water</h2>
                <p className="text-gray-500">#65248</p>
              </div>
            </div>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              Open
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">Leakage from main pipes or public sources</p>

          {/* Details Box */}
          <div className="bg-orange-50 rounded-2xl p-4 space-y-3">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700">
                Complaint raised on <span className="font-semibold text-gray-900">10 Nov 2024</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-orange-500" />
              <span className="text-gray-900 font-semibold text-lg">04:00 PM</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700">
                Raised by <span className="font-semibold text-gray-900">Rony Gill</span>
              </span>
            </div>
          </div>
        </div>

        {/* Tracking Status */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Tracking Status</h3>
          
          <div className="space-y-6">
            {/* Step 1 - Completed */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">You Raised a request</h4>
                <p className="text-orange-500 text-sm">10th November 2024 | 04:00 PM</p>
              </div>
            </div>
            
            {/* Connecting line */}
            <div className="ml-5 w-0.5 h-8 bg-orange-300"></div>
            
            {/* Step 2 - Completed */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">Notified to Manager</h4>
                <p className="text-orange-500 text-sm">20th November 2024 | 04:00 PM</p>
              </div>
            </div>
            
            {/* Connecting line */}
            <div className="ml-5 w-0.5 h-8 bg-gray-200"></div>
            
            {/* Step 3 - Pending */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-600">Addressed to respective team</h4>
                <p className="text-gray-400 text-sm">24th November 2024 | 04:00 PM</p>
              </div>
            </div>
            
            {/* Connecting line */}
            <div className="ml-5 w-0.5 h-8 bg-gray-200"></div>
            
            {/* Step 4 - Pending */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-600">Resolved</h4>
                <p className="text-gray-400 text-sm">26th November 2024 | 04:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Go Back Button */}
        <button className="w-full bg-white border-2 border-orange-300 text-gray-800 font-semibold text-lg py-4 px-6 rounded-full hover:bg-orange-50 transition-colors duration-200">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default TrackComplaintCom;