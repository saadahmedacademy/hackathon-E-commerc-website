import React from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaRegHeart, FaStar } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import ourProductsjson from "@/jsondata/ourproduct1.json";
import { ProductCard2 } from "./ProductCard2";

export const OurProducts = () => {
  return (
    <>
      <div className="container mx-auto py-12 px-4 md:px-8 lg:px-16 flex flex-col items-start">
        {/* Title Section */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-[12px] md:w-[20px] h-[30px] md:h-[40px] bg-[#DB4444]"></div>
          <p className="h-[30px] md:h-[40px] text-lg md:text-xl font-bold">
          Our Products
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-5 space-y-4 md:space-y-0">
          <div className="w-full  py-2 flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left">
            <h1 className="text-lg md:text-2xl font-semibold">
            Explore Our Products
            </h1>
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
      </div>

      {/* Product Cards Section */}
      <div className="container flex flex-col gap-6 py-12 mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex gap-[34px] overflow-x-auto productSlide scrollbar-hide">
          {ourProductsjson.map((items) => (
            <ProductCard2 key={items.id} {...items} />
          ))}
        </div>

        <div className="flex gap-[34px] overflow-x-auto productSlide scrollbar-hide">
          {ourProductsjson.slice(4, 8).map((items) => (
            <ProductCard2 key={items.id} {...items} />
          ))}
        </div>
      </div>
    </>
  );
};
