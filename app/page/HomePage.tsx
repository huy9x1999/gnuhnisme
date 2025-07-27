"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import bg from "@/public/images/spiral2.svg";
import SplashScreen from "../components/SplashScreen";
import CharBlue from "@/public/images/char-1-blue.png";
import Text1 from '@/public/images/text-1.png'
import Text2 from '@/public/images/text-2.png'
import TextHome from '@/public/images/text-home.png'
import TextWorks from '@/public/images/text-works.png'
import TextContent from '@/public/images/text-contact.png'
import ClockSwing from "../components/ClockSwing";

export default function HomePage() {
  return (
    <>
      <div className="z-20">
        <SplashScreen />
      </div>

      <div className="z-10 w-screen h-screen relative overflow-hidden">
        <Image
          src={bg}
          alt="bg"
          className="w-full block absolute left-0 top-0 bottom-0 right-0"
        />
        <header className="fixed left-[66px] top-[52px]">
          <Image src={logo} alt="logo" />
        </header>
        {/* content */}
        <div>
          {/* anh */}
          <div className="2xl:w-[65%] sm:w-[60%] w-[60%] absolute -left-[7%] -bottom-[6%]">
            <Image  src={CharBlue} alt="char-blue" />
            <ClockSwing />
          </div>
          {/* thong tin */}
          <div className="w-[50%] absolute right-12 top-28 font-">
            <div className="">
            <Image className="" src={Text1} alt="" />
            </div>
            <div className="mt-8 pl-[36%]">
            <Image src={Text2} alt="" className=""/>
            </div>
          </div>
        </div>
        {/* //menu */}
        <div className="font-bold text-2xl text-[#007DC5] px-9 gap-10 fixed bottom-6 right-6 rounded-[12px] bg-[#FEEE52] min-h-16 flex items-center justify-between">
          <span className="cursor-pointer"><Image src={TextWorks} alt="" className=""/></span>
          <span className="cursor-pointer"><Image src={TextHome} alt="" className=""/></span>
          <span className="cursor-pointer"><Image src={TextContent} alt="" className=""/></span>
        </div>
      </div>
    </>
  );
}
