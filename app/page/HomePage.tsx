"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import SplashScreen from "../components/SplashScreen";

import CharBlue from "@/public/images/char-1-blue.svg";
import Text1 from '@/public/images/text-1.svg'
import Text2 from '@/public/images/text-2.svg'
import ClockSwing from "../components/ClockSwing";

import Popup from '@/public/images/popup.svg'

export default function HomePage() {
  return (
    <>
      <div className="z-20">
        <SplashScreen />
      </div>

      <div className="z-10 w-screen h-screen relative overflow-hidden">
        {/* <SpiralScene /> */}
        {/* content */}
        <div>
          {/* anh */}
          <div className="z-10 2xl:w-[65%] w-[52%] absolute -left-[7%] -bottom-[6%]">
            <div className="group">
            <Image  src={CharBlue} alt="char-blue" />
            <Image src={Popup} alt="popup" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 2xl:w-[45%] w-[40%] absolute right-[10%] -top-[25%]" />
            </div>
            <ClockSwing />
          </div>
          {/* thong tin */}
          <div className="z-20 2xl:w-[50%] w-[43%] absolute right-12 2xl:top-28 top-20">
            <div className="">
            <Image className="" src={Text1} alt="" />
            </div>
            <div className="mt-8 pl-[36%]">
            <Image src={Text2} alt="" className=""/>
            </div>
          </div>
        </div>
        {/* //menu */}
        
      </div>
    </>
  );
}
