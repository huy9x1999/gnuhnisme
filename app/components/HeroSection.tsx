"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

import SplashScreen from "../components/SplashScreen";
import CharBlue from "@/public/images/char-1-blue.svg";
import Text1 from "@/public/images/text-1.svg";
import Text2 from "@/public/images/text-2.svg";
import Popup from "@/public/images/popup.svg";
import bg from "@/public/images/spiral.svg";
import ClockSwing from "../components/ClockSwing";

export default function HeroSection() {

  return (
    <>
      <SplashScreen />

      <div  className="min-h-screen w-full relative scroll-section overflow-x-hidden">
        <Image src={bg} alt="char-blue" className="-z-10 w-full h-full absolute top-0 left-0 right-0 bottom-0" />
        <div
          className="left-image relative -left-[7%] mt-[50vh] z-10 2xl:w-[65%] w-[52%]"
         >
          <div className="group">
            <Image src={CharBlue} alt="char-blue" />
            <Image
              src={Popup}
              alt="popup"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 2xl:w-[45%] w-[40%] absolute right-[10%] -top-[25%]"
            />
          </div>
          <ClockSwing />
        </div>

        {/* Text bên phải */}
        <div
          className="right-text absolute z-20 right-12 2xl:top-28 top-20 2xl:w-[50%] w-[43%]"
         >
          <Image src={Text1} alt="" />
          <div className="mt-8 pl-[36%]">
            <Image src={Text2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
