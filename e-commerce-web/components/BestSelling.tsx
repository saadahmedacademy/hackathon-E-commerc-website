import React from "react";
import Image from "next/image";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import bestSellingjson from "@/jsondata/bestSelling.json";
import { ProductCard1 } from "./ProductCard1 ";

export const BestSelling = () => {
  return (
    <>
      <div className="container py-12 mx-auto border-b px-4 md:px-8 lg:px-16 flex flex-col items-start">
        {/* Title Section */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-[12px] md:w-[20px] h-[30px] md:h-[40px] bg-[#DB4444]"></div>
          <p className="h-[30px] md:h-[40px] text-lg md:text-xl font-bold">
            Best Selling Products
          </p>
        </div>

        {/* Product Cards Section */}
        <div className="container py-11 border-b  flex items-center justify-start gap-4 md:gap-[34px] mx-auto px-4 md:px-8 lg:px-16">
          {bestSellingjson.map((items) => (
            <div
              key={items.id}
              className="flex-shrink-0 w-[calc(100%-20px)] sm:w-[calc(50%-16px)] md:w-[calc(33%-20px)] lg:w-[calc(25%-20px)]"
            >
              <ProductCard1 {...items} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};