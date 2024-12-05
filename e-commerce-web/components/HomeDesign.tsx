import Image from "next/image";
import React from "react";
import { FaApple, FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export const HomeDesign = () => {
  return (
    <div className="container mx-auto p-2 flex md:justify-center md:items-center flex-row-reverse h-[400px]">
      <div className="flex md:w-[80%] w-full h-[344px] bg-black text-white">
        {/* Promotion Content */}
        <div className="w-1/2 h-full flex pl-10 items-start justify-center py-2 flex-col gap-5">
          <div className="flex justify-center items-center gap-2 md:gap-3">
            <FaApple className="md:text-5xl text-4xl" />
            <p className="text-xl md:text-2xl">iPhone 14 Series</p>
          </div>
          <h2 className="md:text-4xl text-2xl text-start font-bold leading-tight">
            Up to 10% off Voucher
          </h2>
          <div
            className="flex justify-center items-center gap-2 text-xl hover:underline cursor-pointer"
            aria-label="Shop for iPhone 14 Series"
          >
            <p>Shop Now</p> <FaArrowRight />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/iphone.svg"
            alt="iPhone 14 Series promotional image"
            width={500}
            height={500}
            className="object-cover object-center w-[100%] h-[90%]"
          />
        </div>
      </div>

      <section className="w-full h-full md:w-[30%] hidden lg:flex justify-end py-3 pl-20">
        <div className="flex flex-col items-start justify-center gap-2 h-[344px] w-full px-4">
          <div className="flex justify-center items-center gap-2">
            <p className="text-xl">Woman’s Fashion</p> <IoIosArrowForward />
          </div>
          <div className="flex justify-center items-center gap-2">
            <p className="text-xl">Men’s Fashion</p> <IoIosArrowForward />
          </div>
          <p className="text-xl">Electronics</p>
          <p className="text-xl">Home & Lifestyle</p>
          <p className="text-xl">Medicine</p>
          <p className="text-xl">Sports & Outdoor</p>
          <p className="text-xl">Groceries & Pets</p>
          <p className="text-xl">Health & Beauty</p>
        </div>
      </section>
    </div>
  );
};
