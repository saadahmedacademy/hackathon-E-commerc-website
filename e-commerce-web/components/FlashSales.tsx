import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export const FlashSales = () => {
  return (
    <div className="container flex flex-col items-start px-10">
      {/* Title Section */}
      <div className="flex flex-col gap-3">
        <div className="w-[20px] h-[40px] bg-[#DB4444]"></div>
        <p className="h-[40px] text-xl font-bold">Today's</p>
      </div>

      {/* Timer and Navigation Section */}
      <div className="w-full flex items-center justify-between mt-5">
        {/* Timer */}
        <div className="w-1/2 py-2 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Flash Sales</h1>
          <div className="flex items-center gap-2 text-center">
            {/* Timer Block */}
            <div className="flex flex-col items-center px-2">
              <span className="text-sm font-medium">Days</span>
              <span className="text-lg font-bold">03</span>
            </div>
            <p className="text-lg font-bold">:</p>
            <div className="flex flex-col items-center px-2">
              <span className="text-sm font-medium">Hours</span>
              <span className="text-lg font-bold">23</span>
            </div>
            <p className="text-lg font-bold">:</p>
            <div className="flex flex-col items-center px-2">
              <span className="text-sm font-medium">Minutes</span>
              <span className="text-lg font-bold">19</span>
            </div>
            <p className="text-lg font-bold">:</p>
            <div className="flex flex-col items-center px-2">
              <span className="text-sm font-medium">Seconds</span>
              <span className="text-lg font-bold">56</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label="Previous Sale"
          >
            <FaArrowLeft className="text-2xl" />
          </button>
          <button
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label="Next Sale"
          >
            <FaArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};
