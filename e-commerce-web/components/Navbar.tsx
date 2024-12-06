import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-black flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-2 md:py-4">
        <div className="flex flex-col md:flex-row items-center justify-center flex-grow gap-2 md:gap-8 text-center">
          <p className="text-white text-xs md:text-sm leading-5">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link href="#">
            <p className="text-white text-xs md:text-sm font-semibold underline cursor-pointer">
              Shop Now
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <p className="text-white text-xs md:text-sm leading-5">English</p>
          <span className="flex items-center justify-center w-6 h-6">
            <IoIosArrowDown className="text-white transform" />
          </span>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-center items-center h-[60px] px-4 md:px-6 py-3 border bg-white shadow-md">
        <div className="flex container items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-lg md:text-2xl font-bold text-black">
              Exclusive
            </h1>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8">
            <li>
              <Link href="/" className="text-sm lg:text-base text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm lg:text-base text-black">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm lg:text-base text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="/signup" className="text-sm lg:text-base text-black">
                Sign Up
              </Link>
            </li>
          </ul>

          {/* Search and Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="outline-none px-2 w-28 md:w-40 lg:w-60"
              />
              <CiSearch className="text-gray-500" />
            </div>
            <Link href="/favorites">
              <CiHeart className="text-lg lg:text-xl text-black" aria-label="Favorites" />
            </Link>
            <Link href="/cart">
              <CiShoppingCart className="text-lg lg:text-xl text-black" aria-label="Shopping Cart" />
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden">
            <FaBarsStaggered className="text-xl text-black" />
          </div>
        </div>
      </div>
    </>
  );
};
