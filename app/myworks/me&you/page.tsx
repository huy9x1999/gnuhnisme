"use client";
import { getClassHeadOfMyWorksText, ScrollChangeHeader } from "@/public/util";
import Image from "next/image";
import React from "react";
import bg from "../../../public/images/me-you/bg.png";
import img1 from "../../../public/images/me-you/img-1.png";
import img2 from "../../../public/images/me-you/img-2.png";
import img3 from "../../../public/images/me-you/img-3.png";
import img4 from "../../../public/images/me-you/img-4.png";
import img5 from "../../../public/images/me-you/img-5.png";
import img6 from "../../../public/images/me-you/img-6.png";
import footerImg from "../../../public/images/me-you/footer-img.png";
import Link from "next/link";

const MeYou = () => {
  const { scrolled } = ScrollChangeHeader();
  const stickyClass = getClassHeadOfMyWorksText({ check: scrolled });
  return (
    <div className="min-h-screen relative ">
      <div className="relative bg-[#FFFDEC] z-10 rounded-b-[70px] pb-[120px]">
        <div className="flex flex-col items-center justify-start pt-20 px-8">
          <div
            className={`flex items-center fixed text-[#007DC5] tracking-wider transition-all duration-500 ${stickyClass} z-10`}
          >
            <div className="flex flex-col h-full items-center justify-center">
              {!scrolled && (
                <span className="mb-6 text-[31px] font-roboto leading-[31px]">
                  2024
                </span>
              )}
              <p className="text-center h-full">ME&YOU</p>
            </div>
          </div>
          <div className="2xl:px-[70px] mx-10 pt-[350px] w-full text-[#0D71BA]">
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
                <span className="font-extralight">Branding publication</span>
              </p>
              <p className="font-extralight">
                <span className="font-medium">Year:</span> 2024
              </p>
            </div>
            <div className="mt-[45px] relative">
              <p className="2xl:pr-[70px] pr-10 2xl:text-[44px] text-[35px] font-medium font-roboto  ">
                The &quot;ME&YOU&quot; project is a unique program designed to help
                adolescents navigate through this crucial stage of their lives
                positively and confidently. The project aims to provide
                knowledge but also to build self-confidence, self-respect, and
                independence for adolescents going through puberty.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-between 2xs:gap-20 gap-15 text-[#0D71BA]">
          <div className="w-1/2">
            <div className="ml-10 relative right-0 mb-[100px]">
              <div className="w-full ">
                <Image priority src={img1} alt="" sizes="100%" />
              </div>
            </div>
            <div className="w-full rounded-r-[5%] overflow-hidden">
              <Image priority src={img2} alt="" sizes="100%" />
            </div>
            <div className="flex flex-col 2xl:pl-[70px] pl-10 my-[70px]">
              <p className="font-roboto text-[30px]">
                &quot;ME&YOU&quot; is a fun pop-up book that helps kids
                understand what happens to their minds and bodies during
                puberty. With playful pictures and pop-up surprises, it makes
                growing up feel less confusing. The book gently encourages
                sharing, caring, and learning together.
              </p>
            </div>
            <div className="w-full  rounded-r-[5%] overflow-hidden">
              <Image priority src={img5} alt="" sizes="100%" />
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col 2xl:pl-[70px] pr-[40px] mt-[60px] mb-[80px]">
              <p className="font-roboto text-[30px]">
                &quot;ME&YOU&quot; is a conceptual model inspired by
                the project logo, symbolizing connection and support during
                puberty. Its form reflects the emotional and physical changes of
                adolescence, emphasizing the importance of empathy and
                companionship through this journey.
              </p>
            </div>
            <div className="ml-10 relative right-0 mb-[100px]">
              <div className="w-full ">
                <Image priority src={img3} alt="" sizes="100%" />
              </div>
            </div>
            <div className="w-full  rounded-l-[5%] mb-[80px] overflow-hidden">
              <Image priority src={img4} alt="" sizes="100%" />
            </div>
            <div className="w-full  rounded-l-[5%] overflow-hidden">
              <Image priority src={img6} alt="" sizes="100%" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full mt-[-150px] z-0">
        <Image priority src={footerImg} alt="" sizes="100%" className="w-full object-cover"/>
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full pt-[150px] flex justify-center items-center">
          <Link
            href="/myworks/cookify"
            className=" cursor-pointer text-[130px] text-center text-white"
          >
            next work
          </Link>
        </div>
        <Link
          href="/myworks/auralisacademy"
          className="absolute cursor-pointer text-[55px] text-white 2xl:left-[70px] left-10 2xl:bottom-[70px] bottom-10"
        >
          PREVIOUS WORK
        </Link>
      </div>
    </div>
  );
};

export default MeYou;
