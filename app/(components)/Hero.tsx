"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

const Hero: any = () => {
  return (
    <div className="@container px-4">
      <div className="relative text-center">
        <img className="rounded-lg" src="/home.jpg" alt="home" />
        <div className="absolute justify-items-center text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="max-w-[400px] mb-[48px] text-[50px] font-semibold ">
            Discover a place you'll love to live
          </h3>
          <div className="flex justify-center rounded-lg  bg-zinc-700/50 text-xl font-normal ">
            <div className="px-[24px] py-[8px]   hover:font-bold hover:bg-cyan-50 hover:text-cyan-700 hover:rounded-lg hover:border-cyan-700 ">
              Buy
            </div>
            <div className="px-[24px] py-[8px]   hover:font-bold hover:bg-cyan-50 hover:text-cyan-700 hover:rounded-lg hover:border-cyan-700 ">
              Rent
            </div>
            <div className="px-[24px] py-[8px]   hover:font-bold hover:bg-cyan-50 hover:text-cyan-700 hover:rounded-lg hover:border-cyan-700 ">
              Sold
            </div>
          </div>
          <div className="flex place-content-between items-center rounded-lg bg-red-700">
            <div className="md:w-96 bg-slate-200 rounded-l-lg text-black-200 ">
              <input className="max-w-full rounded-l-lg "></input>
            </div>
            <div className="text-xl justify-end w-12">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
