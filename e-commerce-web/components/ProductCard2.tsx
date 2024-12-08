import React from 'react'
import Image from "next/image";
import { FaRegHeart, FaStar } from 'react-icons/fa6';
import { IoEyeOutline } from 'react-icons/io5';

export const ProductCard2  = (items :any) => {
  return (
         <div
              className="flex-shrink-0 h-[322px] w-64 bg-white rounded-lg shadow space-y-3 pb-5"
            >
              {/* Image */}
              <div className="relative w-full h-40 px-2 py-1 bg-gray-200">
                <Image
                  src={items.image}
                  alt={items.name}
                  width={130}
                  height={100}
                  className="rounded-lg object-center w-[90%] h-[90%]"
                />
                <p className="text-green-600 font-bold absolute left-2 top-2">
                  {items.discount}
                </p>
                {/* Discount and Actions */}
                <div className="flex flex-col gap-2 items-center absolute right-3 top-2">
                  <div className="w-[20px] h-[20px] flex justify-center items-center rounded-md bg-white text-black">
                    <FaRegHeart className="text-gray-500 hover:text-red-500 cursor-pointer" />
                  </div>
                  <div className="w-[20px] h-[20px] flex justify-center items-center rounded-md bg-white text-black">
                    <IoEyeOutline className="text-gray-500 hover:text-blue-500 cursor-pointer" />
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <h1 className="text-lg font-semibold px-4">{items.name}</h1>
              
              <div className="flex items-center gap-2 px-4">
              <p className="text-red-500 text-lg font-bold">$120</p>
                <div className="flex gap-1 items-center">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">(80)</p>
              </div>

              <div className='flex items-center px-4 mx-auto justify-start gap-3'>
                <div className='w-[15px] h-[15px] rounded-full bg-gray-500'  />
                <div className='w-[15px] h-[15px] rounded-full bg-red-500'  />
              </div>
            </div>
  )
}
