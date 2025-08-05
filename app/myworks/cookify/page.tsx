"use client";
import { getClassHeadOfMyWorksText, ScrollChangeHeader } from "@/public/util";
import Image from "next/image";
import React from "react";
import bg from "../../../public/images/cookify/bg.svg";
import img1 from "../../../public/images/cookify/img-1.svg";
import img2 from "../../../public/images/cookify/img-2.svg";
import img3 from "../../../public/images/cookify/img-3.svg";
import footerImg from "../../../public/images/cookify/footer-img.svg";
import Link from "next/link";

const Cookify = () => {
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
                  2024
                </span>
              )}
              <p className="text-center">ME&YOU</p>
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
                <span className="font-extralight">User Interface</span>
              </p>
              <p className="font-extralight">
                <span className="font-medium">Year:</span> 2023
              </p>
            </div>
            <div className="mt-[45px] mr-[15vw] relative">
              <p className=" 2xl:text-[44px] text-[35px] font-medium font-roboto  ">
                Cookify is a smart cooking app with thousands of recipes and
                features like ingredient scanning, recipe search, and
                auto-generated shopping lists. It also lets users create
                personalized cookbooks and earn badges, making cooking easier
                and more enjoyable.
              </p>
            </div>
          </div>
        </div>
        <div className="2x:px-[70px] px-[40px] mt-20 flex justify-between 2xs:gap-20 gap-15 text-[#0D71BA]">
          <div className="w-1/2">
            <div className="relative mb-[100px] mt-[80px]">
              <div className="w-full">
                <Image priority src={img1} alt="" sizes="100%" />
              </div>
            </div>
          </div>
          <div className="w-1/2 ">
            <div className="flex justify-end">
              <div className="2xl:w-[300px] w-[260px] h-auto  right-0 rounded-l-[5%] 2x:mb-[80px] mb-[60px] overflow-hidden">
                <Image priority src={img2} alt="" sizes="100%" />
              </div>
            </div>
            <div className="flex flex-col mt-[40px] mb-[80px]">
              <p className="font-roboto text-[30px]">
                &quot;ME&YOU&quot; is a fun pop-up book that helps kids
                understand what happens to their minds and bodies during
                puberty. With playful pictures and pop-up surprises, it makes
                growing up feel less confusing. The book gently encourages
                sharing, caring, and learning together.
              </p>
            </div>
            <div className="flex justify-center mx-20">
              <div className="w-full ">
                <Image priority src={img3} alt="" sizes="100%" />
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-video w-full 2x:px-[70px] px-10 my-10">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/A4H6_tuLbxY"
            title="Cookify - Cooking App"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="relative w-full mt-[-150px] z-0">
        <Image priority src={footerImg} alt="" sizes="100%" />
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full pt-[150px] flex justify-center items-center">
          <Link
            href="/myworks/babysteps"
            className=" cursor-pointer text-[130px] text-center text-white"
          >
            next work
          </Link>
        </div>
        <Link href="/myworks/me&you" className="absolute cursor-pointer text-[55px] text-white 2xl:left-[70px] left-10 2xl:bottom-[70px] bottom-10" >PREVIOUS WORK</Link>
      </div>
    </div>
  );
};

export default Cookify;
