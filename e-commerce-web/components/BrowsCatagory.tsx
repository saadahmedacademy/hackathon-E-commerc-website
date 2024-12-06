import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import browsJson from "@/jsondata/browsdata.json";
import Image from "next/image";


export const BrowsCategory = () => {
  return (
    <>
      {/* Header Section */}
      <div className="container mx-auto py-12 px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="w-[12px] md:w-[20px] h-[30px] md:h-[40px] bg-[#DB4444]"></div>
            <p className="text-lg md:text-xl font-bold">Browse By Category</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Previous Category"
            >
              <FaArrowLeft className="text-xl md:text-2xl" />
            </button>
            <button
              className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Next Category"
            >
              <FaArrowRight className="text-xl md:text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container h-[180px] border-b mx-auto px-4 md:px-8 lg:px-16 mt-6 flex items-center justify-start gap-5 overflow-x-auto productSlide">
      {
        browsJson.map((items) => (
          <div
          key={items.id}
          className={`w-[170px] h-[145px] md:p-6 px-7 py-8 border flex flex-col gap-3 items-center cursor-pointer justify-center ${
            items.id === "4" ? "bg-[#DB4444] text-white" : "bg-white text-black"
          }`}
          aria-label={`Category: ${items.name}`}
        >
          <Image
            src={items.image}
            alt={items.name}
            width={56}
            height={56}
            className="object-cover object-center w-[56px] h-[56px]"
          />
          <p className="text-sm md:text-base font-medium">{items.name}</p>
        </div>
        ))
      }
      </div>
    </>
  );
};

export default BrowsCategory;
