"use client";
import React, { useState } from "react";
import Image from "next/image";
import Search from "./Search";

const Hero: any = () => {
  const [searchInput, setSearchInput] = useState<string>("buy");
  const [buyColor, setBuyColor] = useState<string>("font-bold text-cyan-700 border-cyan-700 bg-cyan-50");
  const [rentColor, setRentColor] = useState<string>("bg-zinc-700/50 md:font-normal");
  const [sellColor, setSellColor] = useState<string>("bg-zinc-700/50 md:font-normal");
  
    const handleClick = (input: string) => {
      setSearchInput(input);
       if (input === "buy") {
        setBuyColor(colors.clickedColor);
      } else {
        setBuyColor(colors.unClickedColor);
      }
      if (input === "rent") {
        setRentColor(colors.clickedColor);
      } else {
        setRentColor(colors.unClickedColor);
      }
      if (input === "sell") {
        setSellColor(colors.clickedColor);
      } else {
        setSellColor(colors.unClickedColor);
      }
     
    };

  const colors: {
    clickedColor: string,
    unClickedColor: string
  } = {
    clickedColor: "font-bold text-cyan-700 border-cyan-700 bg-cyan-50",
    unClickedColor: "bg-zinc-700/50 md:font-normal text-white hover:font-bold hover:bg-cyan-50 hover:border-cyan-700 hover:text-cyan-700"
  }

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
          <div className="flex justify-center rounded-lg mb-2 font-bold md:font-normal *:transition *:duration-100  [&:has(:hover)>*:not(:hover)]:bg-zinc-700/50 [&:has(:hover)>*:not(:hover)]:text-white">
            <button
              className={`px-[24px] py-[8px] text-[20px] rounded-lg hover:bg-cyan-50 hover:font-normal active:bg-cyan-700 active:border-transparent active:text-white ${buyColor}`}
              onClick={() => {handleClick('buy')}}
            >
              Buy
            </button>
            <button
              className={`px-[24px] py-[8px] text-[20px] rounded-lg hover:bg-cyan-50 hover:font-normal active:bg-cyan-700 active:border-transparent active:text-white ${rentColor}`}
              onClick={() => {handleClick('rent')}}
            >
              Rent
            </button>
            <button
              className={`px-[24px] py-[8px] text-[20px] rounded-lg hover:bg-cyan-50 hover:font-normal active:bg-cyan-700 active:border-transparent active:text-white ${sellColor}`}
              onClick={() => {handleClick('sell')}}
            >
              Sold
            </button>
          </div>
          <Search props={searchInput} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
