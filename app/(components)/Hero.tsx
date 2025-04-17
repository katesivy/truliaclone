"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import Search from "./Search";

const Hero: any = () => {
  return (
    <div className="flex px-4 w-full">
      <div className="relative text-center w-full">
        <div className="min-h-[500px]">
          <Image
            className="rounded-lg md:object-fill md:w-full min-h-[500px] min-w-[333px]"
            src="/home1.jpg"
            alt="home"
            width={600}
            height={400}
          />
        </div>
        <div className="absolute justify-items-center text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="max-w-64 md:max-w-[400px] mb-[48px] text-[28px] md:text-[50px] font-semibold text-shadow-[0_0px_5px_rgb(0_0_0)]">
            Discover a place you'll love to live
          </h3>
          <div className="flex justify-center rounded-lg mb-2 bg-zinc-700/50 font-bold md:font-normal ">
            <div className="px-[24px] py-[8px] text-[20px]  hover:font-bold hover:bg-cyan-50 hover:text-cyan-700 hover:rounded-lg hover:border-cyan-700 ">
              Buy
            </div>
            <div className="px-[24px] py-[8px] text-[20px]  hover:font-bold hover:bg-cyan-50 hover:text-cyan-700 hover:rounded-lg hover:border-cyan-700 ">
              Rent
            </div>
            <div className="px-[24px] py-[8px] text-[20px]  hover:font-bold hover:bg-cyan-50 hover:text-cyan-700 hover:rounded-lg hover:border-cyan-700 ">
              Sold
            </div>
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Hero;
