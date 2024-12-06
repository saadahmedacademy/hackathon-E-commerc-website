"use client";
import { BestSelling } from "@/components/BestSelling";
import { BrowsCategory } from "@/components/BrowsCatagory";
import { FlashSales } from "@/components/FlashSales";
import { HomeDesign } from "@/components/HomeDesign";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showTime, setShowTime] = useState([
    {
      numbershow: "23",
      period: "Hours",
    },
    {
      numbershow: "05",
      period: "Days",
    },
    {
      numbershow: "59",
      period: "Minutes",
    },
    {
      numbershow: "35",
      period: "Seconds",
    },
  ]);

  return (
    <>
      <HomeDesign />
      <FlashSales />
      <BrowsCategory />
      <BestSelling />
      <div className="container h-auto mx-auto py-12 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row w-full h-auto md:h-[500px] bg-black text-white">
          {/* Promotion Content */}
          <div className="w-full md:w-1/2 flex px-4 md:pl-14 items-start justify-center py-5 md:py-5 flex-col gap-4 md:gap-6">
            <div className="flex justify-start items-center">
              <p className="text-lg text-green-500 md:text-2xl">Categories</p>
            </div>
            <h2 className="text-2xl md:text-5xl text-start font-bold py-1 leading-loose">
              Enhance Your <br /> Music Experience
            </h2>

            <div className="flex gap-3 items-justify-start w-full">
              {showTime.map((item, index) => (
                <div
                  key={index}
                  className="w-[62px] h-[62px] flex flex-col items-center justify-center px-1 gap-1 bg-white text-black rounded-full shadow-md"
                >
                  <span className="text-xs md:text-sm font-medium">
                    {item.numbershow}
                  </span>
                  <span className="text-sm md:text-md font-bold px-1">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>

            <button className="px-4 py-2 text-center bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              View All Products
            </button>
          </div>

          {/* Image Section with White Shine */}
          <div className="w-full md:w-1/2 flex items-center justify-center py-5 md:py-0 relative">
            {/* White Shine */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[85%] md:w-[90%] h-[85%] md:h-[90%] bg-white blur-[30px] rounded-full opacity-30"></div>
            </div>
            {/* Image */}
            <Image
              src="/ourProducts/headsphone.svg"
              alt="Headphone promotional image"
              width={500}
              height={500}
              className="relative z-10 object-center w-[90%] md:w-[100%] h-auto md:h-[80%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
