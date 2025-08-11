"use client";
import { getClassHeadOfMyWorksText, ScrollChangeHeader } from "@/public/util";
import Image from "next/image";
import React from "react";
import bg from "../../../public/images/babysteps/bg.png";
import img1 from "../../../public/images/babysteps/img-1.png";
import img2 from "../../../public/images/babysteps/img-2.png";
import img3 from "../../../public/images/babysteps/img-3.png";
import footerImg from "../../../public/images/babysteps/footer-img.png";
import Link from "next/link";

const Babysteps = () => {
  const { scrolled } = ScrollChangeHeader();
  const stickyClass = getClassHeadOfMyWorksText({ check: scrolled });
  return (
    <div className="min-h-screen relative ">
      <div className="relative bg-[#FFFDEC] z-10 rounded-b-[70px] pb-[120px]">
        <div className="flex flex-col items-center justify-start pt-20">
          <div
            className={`fixed flex items-center text-[#007DC5] tracking-wider transition-all duration-500 ${stickyClass} z-10`}
          >
            <div className="flex flex-col items-center justify-center">
              {!scrolled && (
                <span className="mb-6 text-[31px] font-roboto leading-[31px]">
                  2023
                </span>
              )}
              <p className="text-center">
                BABY
                <br />
                STEPS
              </p>
            </div>
          </div>
          <div className="2xl:px-[70px] px-[40px] pt-[350px] w-full text-[#0D71BA]">
            <Image
              priority
              src={bg}
              sizes="100%"
              alt="ME&YOU"
              className="w-full h-auto"
            />
            <div className="mt-10 text-end font-roboto text-[30px] leading-[34px]">
              <p className="">
                <span className="font-medium">Type of work: </span>
                <span className="font-extralight">Packaging</span>
              </p>
              <p className="font-extralight">
                <span className="font-medium">Year:</span> 2023
              </p>
            </div>
            <div className="mt-[45px] mr-[15vw] relative">
              <p className=" 2xl:text-[44px] text-[35px] font-medium font-roboto  ">
                In this project, I will redesign the packaging for Baby Steps’
                trial goat milk line, featuring a custom goat symbol made from
                simple shapes. This design enhances visual appeal while allowing
                the icon to blend naturally into the layout, creating a clean
                and modern look.
              </p>
            </div>
          </div>
        </div>
        <div className="2xl:px-[70px] px-[40px] mt-20 text-[#0D71BA]">
          <div className="flex items-center relative mb-[100px] gap-10 mt-[80px]">
            <div className="ml-[-30px] grow w-full">
              <Image priority src={img1} alt="" sizes="100%" />
            </div>
            <div className="2xl:w-[25vw] w-[30vw] mt-10 2xl:mr-10">
              <Image priority src={img2} alt="" sizes="100%" className="w-full h-auto" />
            </div>
          </div>
          <div className="">
            <div className="flex justify-center gap-10">
              <div className="2xl:ml-[70px] w-1/2 mr-5">
                <Image
                  className="w-full"
                  priority
                  src={img3}
                  alt=""
                  sizes="100%"
                />
              </div>
              <div className="w-1/2 flex flex-col 2xl:ml-[70px] ml-[40px] 2xl:mt-[160px] mt-[100px] mb-[80px]">
                <p className="font-roboto text-[30px]">
                  The packaging uses soft, playful visuals and a custom
                  goat-shaped symbol to create a friendly and comforting look.
                  The design highlights purity, nutrition, and care, making it
                  easy for parents to trust and appealing for young children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full mt-[-150px] z-0">
        <Image priority src={footerImg} alt="" sizes="100%" className="w-screen h-auto" />
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full pt-[150px] flex justify-center items-center">
          <Link
            href="/myworks/aodaihue"
            className=" cursor-pointer text-[130px] text-center text-white"
          >
            next work
          </Link>
        </div>
        <Link
          href="/myworks/cookify"
          className="absolute cursor-pointer text-[55px] text-white 2xl:left-[70px] left-10 2xl:bottom-[70px] bottom-10"
        >
          PREVIOUS WORK
        </Link>
      </div>
    </div>
  );
};

export default Babysteps;
