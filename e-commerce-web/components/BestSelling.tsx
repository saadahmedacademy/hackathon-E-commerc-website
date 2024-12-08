import React from "react";
import Image from "next/image";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import bestSellingjson from "@/jsondata/bestSelling.json";
import { ProductCard1 } from "./ProductCard1 ";

export const BestSelling = () => {
  return (
    <>
      <div className="container mx-auto  py-12 px-4 md:px-8 lg:px-16 flex flex-col items-start">
        {/* Title Section */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-[12px] md:w-[20px] h-[30px] md:h-[40px] bg-[#DB4444]"></div>
          <p className="h-[30px] md:h-[40px] text-lg md:text-xl font-bold">
          This Month
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-5 space-y-4 md:space-y-0">
          <div className="w-full  py-2 flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left">
            <h1 className="text-lg md:text-2xl font-semibold">
            Best Selling Products         
           </h1>
            <div>
              <button className="mx-auto px-4 py-2 text-center bg-[#DB4444] text-white">
                View All Product
              </button>
            </div>
          </div>
        </div>
      </div>


        {/* Product Cards Section */}
        <div className="container py-12 mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex gap-[34px] overflow-x-auto productSlide scrollbar-hide">
            {bestSellingjson.map((items) => (
              <ProductCard1 key={items.id} {...items} />
            ))}
          </div>
        </div>
      
    </>
  );
};
