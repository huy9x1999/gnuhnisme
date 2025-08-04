"use client";

import { getClassHeadOfMyWorksText, ScrollChangeHeader } from "@/public/util";
import Image from "next/image";
import React from "react";
import bg from "../../../public/images/auralis/bg-auralis.svg";
import trainText from "../../../public/images/auralis/text-img.svg";
import img1 from "../../../public/images/auralis/img-1.svg";
import img2 from "../../../public/images/auralis/img-2.svg";
import img3 from "../../../public/images/auralis/img-3.svg";
import img4 from "../../../public/images/auralis/img-4.svg";
import img5 from "../../../public/images/auralis/img-5.svg";
import footer from "../../../public/images/auralis/footer.svg";
import Link from "next/link";

const AuralisAcademyPage = () => {
  const { scrolled } = ScrollChangeHeader();
  const stickyClass = getClassHeadOfMyWorksText({check:scrolled});
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
        <div className="px-[70px] pt-[450px] w-full text-[#0D71BA]">
          <Image
            src={bg}
            sizes="100%"
            alt="Auralis Academy"
            className="w-full h-auto"
          />
          <div className="mt-10 text-end font-roboto text-[30px] leading-[34px]">
            <p className="">
              <span className="font-semibold">Type of work: </span>
              <span className="text">Branding space</span>
            </p>
            <p>
              <span>Year:</span> 2025
            </p>
          </div>
          <div className="mt-[45px] mr-[15vw] relative">
            <p className=" 2xl:text-[44px] text-[35px] font-semibold font-roboto  ">
              Auralis Academy is a spatial design project for deaf children,
              completed in July 2025. The project explores how playful learning
              and visual communication can be integrated into educational spaces
              to support accessibility and inclusivity.{" "}
              <Image
                src={trainText}
                alt=""
                sizes="100%"
                className="scale-[3] mt-5 pl-[60px] 2xl:h-[45px] h-[35px] w-auto inline-block"
              />
            </p>
          </div>
        </div>
        <div className="flex justify-between 2xs:gap-20 gap-10 text-[#0D71BA]">
          <div className="w-1/2">
            <div className="w-full">
              <Image src={img1} alt="" sizes="100%" />
            </div>
            <div className="relative top-[-6.5vw] mb-[-6.5vw]">
              <Image src={img2} alt="" sizes="100%" />
            </div>
            <div className="flex flex-col pl-[70px] mt-[110px]">
              <p className="font-roboto text-[30px]">
                Auralis Academy is a pioneering school for deaf children,
                embracing visual communication as a primary language. With a
                learn through play approach and engaging spaces, it fosters
                knowledge, social skills, and self-confidence.
              </p>
              <div className="mt-[112px] w-[80%] ml-[5%]">
                <Image
                  src={img4}
                  alt=""
                  sizes="100%"
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-[119%] relative left-[-9.5vw] right-0 top-[4.5vw]">
              <Image src={img3} alt="" sizes="100%" className="w-full" />
            </div>

            <div className="pr-[70px] mt-[120px] flex items-center flex-col">
              <p className="font-roboto text-[30px]">
                Auralis Academy is a pioneering school for deaf children,
                embracing visual communication as a p rimary language. With a
                learn through play approach and engaging spaces, it fosters
                knowledge, social skills, and self-confidence.
              </p>
              <div className="mt-[112px] w-full ml-[5%]">
                <Image
                  src={img5}
                  alt=""
                  sizes="100%"
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full mt-[-150px] -z-10">
        <Image src={footer} alt="" sizes="100%" />
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full pt-[150px] flex justify-center items-center">
          <Link href="/myworks/me&you" className=" cursor-pointer text-[130px] text-center text-white">next work</Link>
        </div>
      </div>
    </div>
  );
};

export default AuralisAcademyPage;
