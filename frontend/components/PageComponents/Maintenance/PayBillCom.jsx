import React from "react";
import { ArrowLeft } from "lucide-react";
import NameHeader from "@/components/AppComponents/NameHeader";

const PayBillCom = () => {
  return (
    <div className=" space-y-6 bg-white min-h-screen">
      {/* Header */}
      <NameHeader heading={"Maintenance Bill"} />

      {/* Main Content */}
      <div className="px-4 pb-8">
        {/* Bill Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden relative">
          {/* Header Section with curved edges */}
          <div className="relative bg-orange-50">
            <div className="px-6 py-5 text-center border-b-2 border-dashed border-orange-300">
              <h2 className="text-lg font-semibold text-gray-900">
                Maintenance Due - Nov 2024
              </h2>
            </div>

            {/* Left semicircle cutout */}
            <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full border border-gray-200"></div>

            {/* Right semicircle cutout */}
            <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full border border-gray-200"></div>
          </div>

          {/* Bill Details */}
          <div className="px-6 py-6 space-y-5 bg-white">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-base">Name</span>
              <span className="text-gray-900 font-medium text-base">
                John Doe
              </span>
            </div>

            <div className="flex justify-between items-start">
              <span className="text-gray-700 text-base">Flat No.</span>
              <span className="text-gray-900 font-medium text-base text-right">
                302, Wing A, Jackson Height
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-base">Bill No.</span>
              <span className="text-gray-900 font-medium text-base">
                002121200222
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-base">Bill Date</span>
              <span className="text-gray-900 font-medium text-base">
                01/11/2024
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-base">Bill Due Date</span>
              <span className="text-gray-900 font-medium text-base">
                01/11/2024
              </span>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-700 text-base">
                Maintenance Charge
              </span>
              <span className="text-gray-900 font-semibold text-xl">1300</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-50 space-y-4">
          <button className="btn-orange">
            Pay Now
          </button>

          <div className="text-center">
            <button className="text-gray-700 font-medium text-lg py-2 px-4 hover:text-gray-900 transition-colors">
              Remind Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayBillCom;
