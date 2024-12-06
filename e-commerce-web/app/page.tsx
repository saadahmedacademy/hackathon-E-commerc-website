import { BestSelling } from "@/components/BestSelling";
import { BrowsCategory } from "@/components/BrowsCatagory";
import { FlashSales } from "@/components/FlashSales";
import { HomeDesign } from "@/components/HomeDesign";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeDesign/>
      <FlashSales/>
      <BrowsCategory/>
      <BestSelling/>
      <div className="container  h-[500px] mx-auto py-12 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row  w-full h-auto md:h-[344px] bg-black text-white">
        {/* Promotion Content */}
        <div className="w-full md:w-1/2 h-full flex px-4 md:pl-12 items-start justify-center py-5 md:py-2 flex-col gap-4 md:gap-5">
          <div className="flex justify-start md:justify-start items-center ">
            <p className="text-lg text-green-500 md:text-2xl">Categories</p>
          </div>
          <h2 className="text-2xl md:text-5xl text-start font-bold py-1 leading-loose">
          Enhance Your <br /> Music Experience
          </h2>

          <button className=" px-4 py-2 text-center bg-green-500 text-white">
          View All Product
        </button>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center py-5 md:py-0">
          <Image
            src="/ourProducts/headsphone.svg"
            alt="iPhone 14 Series promotional image"
            width={500}
            height={500}
            className=" object-center w-[90%] md:w-[100%] h-auto md:h-[80%]"
          />
        </div>
      </div>
      </div>
    </>
  );
}
