"use client";

import { getClassHeadOfMyWorksText, ScrollChangeHeader } from "@/public/util";
import Image from "next/image";
import React from "react";
import bg from "../../../public/images/auralis/bg-auralis.png";
import trainText from "../../../public/images/auralis/text-img.svg";
import img1 from "../../../public/images/auralis/img-1.png";
import img2 from "../../../public/images/auralis/img-2.png";
import img3 from "../../../public/images/auralis/img-3.png";
import img4 from "../../../public/images/auralis/img-4.png";
import img5 from "../../../public/images/auralis/img-5.png";
import footer from "../../../public/images/auralis/footer.png";
import Link from "next/link";

const AuralisAcademyPage = () => {
  const { scrolled } = ScrollChangeHeader();
  const stickyClass = getClassHeadOfMyWorksText({ check: scrolled });

  return (
    <div className="min-h-screen relative ">
      <div className="relative bg-[#FFFDEC] z-10 rounded-b-[70px] pb-[120px]">
        <div className="flex flex-col items-center justify-start pt-20 px-8">
          <div
            className={`fixed text-[#007DC5] tracking-wider transition-all duration-500 ${stickyClass} z-10`}
          >
            <div className="flex flex-col items-center justify-center">
              {!scrolled && (
                <span className="mb-6 text-[31px] font-roboto leading-[31px]">
                  2025
                </span>
              )}
              <p className="text-center">
                AURALIS
                <br />
                ACADEMY
              </p>
            </div>
          </div>
        </div>
        <div className="2xl:px-[70px] px-10 pt-[450px] w-full text-[#0D71BA]">
          <Image
            priority
            src={bg}
            sizes="100%"
            alt="Auralis Academy"
            className="w-full h-auto"
          />
          <div className="mt-10 text-end font-roboto text-[30px] leading-[34px]">
            <p className="">
              <span className="font-medium">Type of work: </span>
              <span className="font-extralight">Branding space</span>
            </p>
            <p>
              <span className="font-medium">Year:</span>{" "}
              <span className="font-extralight">2025</span>
            </p>
          </div>
          <div className=" mt-[45px] 2xl:px-0 px-[30px] mr-[13vw]  relative">
            <p className=" 2xl:text-[44px] text-[40px] font-medium font-roboto  ">
              Auralis Academy is a spatial design project for deaf children,
              completed in July 2025. The project explores how playful learning
              and visual communication can be integrated into educational spaces
              to support accessibility and inclusivity.{" "}
              <Image
                priority
                src={trainText}
                alt=""
                sizes="100%"
                className="scale-[3] mt-5 pl-[60px] 2xl:h-[45px] h-[35px] w-auto inline-block"
              />
            </p>
          </div>
        </div>
        <div className="flex justify-between 2xl:mt-[60px] 2xs:gap-20 gap-15 text-[#0D71BA]">
          <div className="w-1/2">
            <div className="w-full">
              <Image priority src={img1} alt="" sizes="100%" className="w-full h-auto" />
            </div>
            <div className="relative top-[-6.5vw] mb-[-6.5vw]">
              <Image priority src={img2} alt="" sizes="100%" className="w-full h-auto" />
            </div>
            <div className="flex flex-col 2xl:pl-[70px] pl-10 mt-[110px]">
              <p className="font-roboto text-[30px]">
                Auralis Academy is a pioneering school for deaf children,
                embracing visual communication as a primary language. With a
                learn through play approach and engaging spaces, it fosters
                knowledge, social skills, and self-confidence.
              </p>
              <div className="mt-[112px] w-[80%] ml-[5%]">
                <Image
                  priority
                  src={img4}
                  alt=""
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-[119%] relative left-[-9.5vw] right-0 top-[4.5vw]">
              <Image
                priority
                src={img3}
                alt=""
                sizes="100%"
                className="w-full h-auto"
              />
            </div>

            <div className="2xl:pr-[70px] pr-[40px] mt-[120px] flex items-center flex-col">
              <p className="font-roboto text-[30px] font-normal">
                The classroom features light blue walls to create a calm,
                focused environment. Vibrant window frames help enhance visual
                memory for deaf students, while high-contrast doors improve
                emergency visibility. Desks are arranged in a U-shape to support
                eye contact and clear sign language communication.
              </p>
              <div className="mt-[112px] w-full ml-[5%]">
                <Image
                  src={img5}
                  alt=""
                  sizes="100%"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full mt-[-150px] z-0 mb-[-10px]">
        <Image priority src={footer} alt="" sizes="100%" className="w-full object-cover"/>
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full pt-[150px] flex justify-center items-center">
          <Link
            href="/myworks/me&you"
            className=" cursor-pointer text-[130px] text-center text-white"
          >
            next work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuralisAcademyPage;
