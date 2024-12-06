import Image from "next/image";
import React from "react";
import { FaApple, FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export const HomeDesign = () => {
  return (
    <div className="container mx-auto border-b  p-2 flex flex-col md:flex-row-reverse md:justify-center md:items-center h-auto md:h-[400px]">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:w-[80%] w-full h-auto md:h-[344px] bg-black text-white">
        {/* Promotion Content */}
        <div className="w-full md:w-1/2 h-full flex px-4 md:pl-10 items-start justify-center py-5 md:py-2 flex-col gap-4 md:gap-5">
          <div className="flex justify-center md:justify-start items-center gap-2 md:gap-3">
            <FaApple className="md:text-5xl text-3xl" />
            <p className="text-lg md:text-2xl">iPhone 14 Series</p>
          </div>
          <h2 className="text-2xl md:text-5xl text-start font-bold py-1 leading-loose">
            Up to 10% <br />
            off Voucher
          </h2>

          <div
            className="flex justify-center md:justify-start items-center gap-2 text-lg md:text-xl hover:underline cursor-pointer"
            aria-label="Shop for iPhone 14 Series"
          >
            <p>Shop Now</p> <FaArrowRight />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center py-5 md:py-0">
          <Image
            src="/iphone.svg"
            alt="iPhone 14 Series promotional image"
            width={500}
            height={500}
            className="object-cover object-center w-[90%] md:w-[100%] h-auto md:h-[90%]"
          />
        </div>
      </div>

      {/* Sidebar Navigation */}
      <section className="w-full md:w-[30%] flex md:hidden lg:flex justify-end py-5 md:py-3 md:pl-20">
        <div className="flex flex-col items-start justify-center gap-3 h-auto md:h-[344px] w-full px-4">
          <div className="flex justify-start items-center gap-2">
            <p className="text-lg md:text-xl">Woman’s Fashion</p>{" "}
            <IoIosArrowForward />
          </div>
          <div className="flex justify-start items-center gap-2">
            <p className="text-lg md:text-xl">Men’s Fashion</p>{" "}
            <IoIosArrowForward />
          </div>
          <p className="text-lg md:text-xl">Electronics</p>
          <p className="text-lg md:text-xl">Home & Lifestyle</p>
          <p className="text-lg md:text-xl">Medicine</p>
          <p className="text-lg md:text-xl">Sports & Outdoor</p>
          <p className="text-lg md:text-xl">Groceries & Pets</p>
          <p className="text-lg md:text-xl">Health & Beauty</p>
        </div>
      </section>
    </div>
  );
};
