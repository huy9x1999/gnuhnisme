"use client";
import { getClassHeadOfMyWorksText, ScrollChangeHeader } from "@/public/util";
import Image from "next/image";
import React from "react";
import bg from "../../../public/images/makeitfun/bg.png";
import img1 from "../../../public/images/makeitfun/img-1.png";
import img2 from "../../../public/images/makeitfun/img-2.png";
import footerImg from "../../../public/images/makeitfun/footer-img.png";
import Link from "next/link";

const Makeitfun = () => {
  const { scrolled } = ScrollChangeHeader();
  const stickyClass = getClassHeadOfMyWorksText({ check: scrolled });
  return (
    <div className="min-h-screen relative ">
      <div className="relative bg-[#FFFDEC] z-10 rounded-b-[70px] pb-[80px]">
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
                MAKE
                <br />
                IT FUN
              </p>
            </div>
          </div>
          <div className="2xl:px-[70px] px-[40px] pt-[350px] w-full text-[#0D71BA]">
            <Image
              priority
              src={bg}
              sizes="100%"
              alt="ME&YOU"
              className="w-full h-auto rounded-[50px]"
            />
            <div className="mt-10 text-end font-roboto text-[30px] leading-[34px]">
              <p className="">
                <span className="font-medium">Type of work: </span>
                <span className="font-extralight">Advertising</span>
              </p>
              <p className="font-extralight">
                <span className="font-medium">Client:</span> Duolingo
              </p>
              <p className="font-extralight">
                <span className="font-medium">Year:</span> 2023
              </p>
            </div>
            <div className="mt-[45px] mr-[15vw] relative">
              <p className=" 2xl:text-[44px] text-[35px] font-medium font-roboto  ">
                In this project, I will work with a team to help Duolingo
                promote math learning habits through Duolingo Math. Since the
                pandemic, math scores have dropped due to disrupted learning. My
                role is to develop ideas that align with Duolingo&#39;s brand while
                keeping the app&#39;s design and functionality intact.
              </p>
            </div>
          </div>
        </div>
        <div className="2xl:px-[70px] px-[40px] mt-20 text-[#0D71BA]">
          <div className="flex items-center relative mb-[80px] gap-10 mt-[80px]">
            <Image priority src={img1} alt="" sizes="100%" />
          </div>
          <div className="">
            <div className="flex justify-center gap-10">
              <Image
                className="w-full"
                priority
                src={img2}
                alt=""
                sizes="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full mt-[-150px] z-0">
        <Image priority src={footerImg} alt="" sizes="100%" />
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full pt-[150px] flex justify-center items-center">
          <Link
            href="/myworks/auralisacademy"
            className=" cursor-pointer text-[130px] text-center text-white"
          >
            next work
          </Link>
        </div>
        <Link
          href="/myworks/aodaihue"
          className="absolute cursor-pointer text-[55px] text-white 2xl:left-[70px] left-10 2xl:bottom-[70px] bottom-10"
        >
          PREVIOUS WORK
        </Link>
      </div>
    </div>
  );
};

export default Makeitfun;
