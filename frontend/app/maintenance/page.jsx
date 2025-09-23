import React from "react";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import NameHeader from "@/components/AppComponents/NameHeader";
import Link from "next/link";

export default function MaintenanceBillUI() {
  const paymentHistory = [
    { month: "Jan 2024", paidDate: "01/02/2024", amount: 1000 },
    { month: "Feb 2024", paidDate: "01/03/2024", amount: 1000 },
    { month: "Mar 2024", paidDate: "01/04/2024", amount: 1000 },
    { month: "Apr 2024", paidDate: "01/05/2024", amount: 1000 },
    { month: "May 2024", paidDate: "01/06/2024", amount: 1000 },
    { month: "Jun 2024", paidDate: "01/07/2024", amount: 1000 },
  ];

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* Header */}
      <NameHeader heading={"Maintenace"} herf={"home"} />

      {/* Main Bill Card */}
      <div className="mx-4 mt-6 bg-white rounded-2xl p-6 shadow-sm">
        {/* Icon and Title */}
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
            <div className="w-6 h-6 text-[#FFA800]">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9ZM14 8V3.5L18.5 8H14Z" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-medium text-gray-900">
            Maintenance Bill
          </h2>
        </div>

        {/* Bill Details */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 text-base">This Month Nov 2024</span>
            <span className="text-gray-900 text-base font-medium">Rs 1000</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-700 text-base">Outstanding dues</span>
            <span className="text-gray-900 text-base font-medium">Rs 300</span>
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <span className="text-[#FFA800] text-base font-medium">
              Total Dues
            </span>
            <span className="text-[#FFA800] text-base font-bold">Rs 1300</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-gradient-to-r from-[#FFB703] to-[#FF8800] hover:from-orange-600 hover:to-orange-700 text-white py-3 px-4 rounded-full font-medium text-base transition-colors flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 mr-2" />
           <Link href={'/maintenance/pay/2'}>Pay Now</Link> 
          </button>
          <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-full font-medium text-base transition-colors flex items-center justify-center">
            <Clock className="w-4 h-4 mr-2" />
            History
          </button>
        </div>
      </div>

      {/* Payment History Section */}
      <div className="mx-4 mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Last 10 Payments
        </h3>

        <div className="space-y-4">
          {paymentHistory.map((payment, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="text-base font-medium text-gray-900 mb-1">
                    Maintenance Bill
                  </h4>
                  <p className="text-[#FFA800] text-sm font-medium">
                    For {payment.month}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-base font-medium text-gray-900 mb-1">
                    Rs {payment.amount}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Paid on : {payment.paidDate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom padding */}
      <div className="h-8"></div>
    </div>
  );
}
