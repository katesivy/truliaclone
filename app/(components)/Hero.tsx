"use client";
import React from "react";
import Image from "next/image";

const Hero: any = () => {
  return (
    <div className="@container px-4">
      <div className="relative">
        <img className="rounded-lg" src="/home.jpg" alt="home" />
        <div className="absolute bottom-1/2 left-1/4 text-white">
          <h3 className="text-5xl font-semibold ">
            Discover a place you'll love to live
          </h3>
          <div className="flex text-2xl">
            <div>Buy</div>
            <div>Rent</div>
            <div>Sold</div>
          </div>
          <div className="flex">
            <div className="w-32 md:w-64 h-10 bg-slate-200 rounded-md text-black-200 "></div>
            <button className="bg-white-400 rounded-md text-2xl">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
