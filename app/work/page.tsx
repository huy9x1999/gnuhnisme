"use client";
import React, { useLayoutEffect, useState } from "react";
import Contact from "../components/Contact";

import sec11 from "@/public/images/section-image/sec-1-1.svg";
import sec12 from "@/public/images/section-image/sec-1-2.svg";
import sec13 from "@/public/images/section-image/sec-1-3.svg";
import sec14 from "@/public/images/section-image/sec-1-4.svg";
import sec21 from "@/public/images/section-image/sec-2-1.svg";
import sec22 from "@/public/images/section-image/sec-2-2.svg";
import sec23 from "@/public/images/section-image/sec-2-3.svg";
import sec31 from "@/public/images/section-image/sec-3-1.svg";
import sec32 from "@/public/images/section-image/sec-3-2.svg";
import sec33 from "@/public/images/section-image/sec-3-3.svg";
import sec41 from "@/public/images/section-image/sec-4-1.svg";
import sec42 from "@/public/images/section-image/sec-4-2.svg";
import sec51 from "@/public/images/section-image/sec-5-1.svg";
import sec52 from "@/public/images/section-image/sec-5-2.svg";
import sec53 from "@/public/images/section-image/sec-5-3.svg";
import sec61 from "@/public/images/section-image/sec-6-1.svg";
import sec62 from "@/public/images/section-image/sec-6-2.svg";
import sec63 from "@/public/images/section-image/sec-6-3.svg";
import Image from "next/image";
import {ScrollChangeHeader} from "@/public/util";
import Link from "next/link";

export default function MyWorksPage() {
  const {stickyClass} = ScrollChangeHeader();  
  return (
    <div className="min-h-screen bg-[#007DC5] relative overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-start pt-20 px-8">
        {/* Title */}
        <h1
          className={`fixed text-[#FEEE52] tracking-wider transition-all duration-200 w-full flex items-center justify-center ease-in-out ${stickyClass} z-10`}
        >
          MY WORKS
        </h1>

        {/* Works List */}
        <div className="flex flex-col 2xl:mt-[600px]  mt-[450px] items-center space-y-8 text-center">
          <div className="flex items-center justify-center relative group h-[50vh] w-[100vw]">
            <div className="z-20 transition-opacity duration-500 text-white group-hover:text-[#FEEE52] group-hover:opacity-100 flex flex-col justify-center items-center 2xl:text-[112px] text-[80px] 2xl:leading-[120px] leading-[82px] font-bold opacity-60">
              {}<span className="mb-6 text-[31px] font-roboto leading-[31px]">
                2025
              </span>
              <Link href="/myworks/auralisacademy">
                <p className="">
                  AURALIS
                  <br />
                  ACADEMY
                </p>
              </Link>
            </div>
            <Link href="/myworks/auralisacademy" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[15%] h-[60%] left-[15%] -top-[1%] object-cover">
              <Image fill src={sec11.src} alt="sec61" />
            </Link>
            <Link href="/myworks/auralisacademy" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[30%] h-[120%] 2xl:left-[4%] left-[10%] bottom-[-60%] object-cover">
              <Image fill src={sec12.src} alt="sec61" />
            </Link>
            <Link href="/myworks/auralisacademy" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[40%] h-[130%] 2xl:right-[4%] -right-[2%] top-[-66%]">
              <Image fill src={sec13.src} alt="sec61" />
            </Link>
            <Link href="/myworks/auralisacademy" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[40%] h-[90%] 2xl:right-[6%] right-[10%] bottom-[-36%]">
              <Image fill src={sec14.src} alt="sec61" />
            </Link>
          </div>
          <div className="relative group h-[50vh] w-[100vw] flex items-center justify-center">
            <div className="text-white flex flex-col justify-center items-center group-hover:text-[#FEEE52] group-hover:opacity-100 2xl:text-[112px] text-[80px] 2xl:leading-[120px] leading-[82px] font-bold opacity-60">
              <span className="mb-6 text-[31px] font-roboto leading-[31px]">
                2024
              </span>
              <Link href="/myworks/me&you" className="">ME&YOU</Link>
            </div>
            <Link href="/myworks/me&you" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[30%] h-[120%] 2xl:left-[4%] left-[10%] bottom-[-50%] object-cover">
              <Image fill src={sec21.src} alt="sec21" />
            </Link>
            <Link href="/myworks/me&you" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[40%] h-[130%] 2xl:right-[4%] -right-[2%] top-[-66%]">
              <Image fill src={sec22.src} alt="sec61" />
            </Link>
            <Link href="/myworks/me&you" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[40%] h-[90%] 2xl:right-[6%] right-[10%] bottom-[-36%]">
              <Image fill src={sec23.src} alt="sec61" />
            </Link>
          </div>
          <div className="relative group h-[50vh] w-[100vw] flex items-center justify-center">
            <div className="text-white flex flex-col justify-center items-center group-hover:text-[#FEEE52] group-hover:opacity-100 2xl:text-[112px] text-[80px] 2xl:leading-[120px] leading-[82px] font-bold opacity-60">
              <span className="mb-6 text-[31px] font-roboto leading-[31px]">
                2023
              </span>
              <Link href="/myworks/cookify">COOKIFY</Link>
              <Link href="/myworks/cookify" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[40%] h-[160%] 2xl:left-[4%] left-[0%] bottom-[-50%] object-cover">
                <Image fill src={sec31.src} alt="sec21" />
              </Link>
              <Link href="/myworks/cookify" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[35%] h-[130%] 2xl:right-[4%] right-[5%] top-[-30%]">
                <Image fill src={sec32.src} alt="sec61" />
              </Link>
              <Link href="/myworks/cookify" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[35%] h-[140%] right-[20%] bottom-[-50%]">
                <Image fill src={sec33.src} alt="sec61" />
              </Link>
            </div>
          </div>
          <div className="relative group h-[50vh] w-[100vw] flex items-center justify-center">
            <div className="text-white h-[50vh] flex flex-col justify-center items-center group-hover:text-[#FEEE52] group-hover:opacity-100 2xl:text-[112px] text-[80px] 2xl:leading-[120px] leading-[82px] font-bold opacity-60">
              <span className="mb-6 text-[31px] font-roboto leading-[31px]">
                2023
              </span>
              <Link href="/myworks/babysteps">
                BABY
                <br />
                STEPS
              </Link>
            </div>
            <Link href="/myworks/babysteps" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[35%] h-[130%] 2xl:left-[4%] left-[5%] top-[-20%]">
              <Image fill src={sec41.src} alt="sec61" />
            </Link>
            <Link href="/myworks/babysteps" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[35%] h-[140%] right-[2%] bottom-[-15%]">
              <Image fill src={sec42.src} alt="sec61" />
            </Link>
          </div>
          <div className="relative group h-[50vh] w-[100vw] flex items-center justify-center">
            <div className="text-white h-[50vh] flex flex-col justify-center items-center group-hover:text-[#FEEE52] group-hover:opacity-100 2xl:text-[112px] text-[80px] 2xl:leading-[120px] leading-[82px] font-bold opacity-60">
              <span className="mb-6 text-[31px] font-roboto leading-[31px]">
                2023
              </span>
              <Link href="/myworks/aodaihue">
                AO DAI
                <br />
                HUE
              </Link>
            </div>
            <Link href="/myworks/aodaihue" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[40%] h-[120%] 2xl:left-[4%] left-[0%] bottom-[-30%] object-cover">
              <Image fill src={sec51.src} alt="sec21" />
            </Link>
            <Link href="/myworks/aodaihue" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[35%] h-[100%] 2xl:right-[4%] right-[5%] top-[-30%]">
              <Image fill src={sec52.src} alt="sec61" />
            </Link>
            <Link href="/myworks/aodaihue" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[35%] h-[70%] right-[4%] bottom-[-30%]">
              <Image fill src={sec53.src} alt="sec61" />
            </Link>
          </div>
          <div className="relative group h-[50vh] mb-[30vh] w-[100vw] flex items-center justify-center">
            <div className="text-white  flex flex-col justify-center items-center group-hover:text-[#FEEE52] group-hover:opacity-100 2xl:text-[112px] text-[80px] 2xl:leading-[120px] leading-[82px] font-bold opacity-60">
              <span className="mb-6 text-[31px] font-roboto leading-[31px]">
                2023
              </span>
              <Link href="/myworks/makeitfun">
                MAKE
                <br />
                IT FUN
              </Link>
            </div>
            <Link href="/myworks/makeitfun" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[40%] h-[120%] 2xl:left-[4%] left-[0%] bottom-[-30%] object-cover">
              <Image fill src={sec61.src} alt="sec21" />
            </Link>
            <Link href="/myworks/makeitfun" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[25%] h-[100%] right-[8%] top-[-30%]">
              <Image fill src={sec62.src} alt="sec61" />
            </Link>
            <Link href="/myworks/makeitfun" className="group-hover:opacity-100 duration-300 opacity-0 absolute w-[38%] h-[100%] right-[4%] bottom-[-50%]">
              <Image fill src={sec63.src} alt="sec61" />
            </Link>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
