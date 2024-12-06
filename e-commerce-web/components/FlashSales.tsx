import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaArrowRight, FaRegHeart, FaStar } from "react-icons/fa6";
import flashSalesjson from "@/jsondata/flashSales.json";
import { ProductCard1 } from "./ProductCard1 ";

export const FlashSales = () => {
  return (
    <>
      {/* Header Section */}
      <div className="container mx-auto  py-12 px-4 md:px-8 lg:px-16 flex flex-col items-start">
        {/* Title Section */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-[12px] md:w-[20px] h-[30px] md:h-[40px] bg-[#DB4444]"></div>
          <p className="h-[30px] md:h-[40px] text-lg md:text-xl font-bold">
            Today's
          </p>
        </div>

        {/* Timer and Navigation Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-5 space-y-4 md:space-y-0">
          {/* Timer */}
          <div className="w-full md:w-1/2 py-2 flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left">
            <h1 className="text-lg md:text-2xl font-bold">Flash Sales</h1>
            <div className="flex items-center gap-2 md:gap-4 mt-4 md:mt-0">
              {/* Timer Block */}
              <div className="flex flex-col items-center px-2">
                <span className="text-xs md:text-sm font-medium">Days</span>
                <span className="text-lg md:text-xl font-bold">03</span>
              </div>
              <p className="text-base md:text-lg font-bold">:</p>
              <div className="flex flex-col items-center px-2">
                <span className="text-xs md:text-sm font-medium">Hours</span>
                <span className="text-lg md:text-xl font-bold">23</span>
              </div>
              <p className="text-base md:text-lg font-bold">:</p>
              <div className="flex flex-col items-center px-2">
                <span className="text-xs md:text-sm font-medium">Minutes</span>
                <span className="text-lg md:text-xl font-bold">19</span>
              </div>
              <p className="text-base md:text-lg font-bold">:</p>
              <div className="flex flex-col items-center px-2">
                <span className="text-xs md:text-sm font-medium">Seconds</span>
                <span className="text-lg md:text-xl font-bold">56</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 justify-center md:justify-end w-full md:w-auto">
            <button
              className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Previous Sale"
            >
              <FaArrowLeft className="text-xl md:text-2xl" />
            </button>
            <button
              className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Next Sale"
            >
              <FaArrowRight className="text-xl md:text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Section */}
      <div className="container flex justify-start items-center gap-[34px] mx-auto px-4 md:px-8 lg:px-16 overflow-x-auto">
      {
        flashSalesjson.map((items) => (
          <ProductCard1 key={items.id} {...items} />
        ))
      }
      </div>
      <div className="flex justify-center border-b py-10">
        <button className="mx-auto px-4 py-2 text-center bg-[#DB4444] text-white">
          View All Product
        </button>
      </div>
    </>
  );
};
