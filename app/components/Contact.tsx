import React from "react";

import textPing from "@/public/images/text-ping.svg";
import CharPing2 from "@/public/images/char-ping.svg";
import BoxUp from "@/public/images/box-up.svg";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="relative bg-[#007DC5] w-full h-screen">
      <div className="2xl:w-[55%] w-[55%] absolute left-0 bottom-0">
        <div className="relative">
          <Image className="w-full" alt="" src={CharPing2} />
          <div className="absolute top-[16%] left-[10%] w-[56%]">
            <Image className="" alt="" src={BoxUp} />
          </div>
        </div>
      </div>

      <div className="2xl:text-[47px] text-[32px] le flex flex-col justify-start gap-5 2xl:leading-[50px] leading-[32px] font-roboto text-[#FEEE52] absolute w-[25%] top-[12%] right-[5%]">
        <div className="">
          <p className=" font-bold ">Phone:</p>
          <p  className=" text-white">+84 888 118 325</p>
        </div>
        <div>
          <p className=" font-bold">Email:</p>
          <p className=" text-white">gnuhnisme@gmail.com</p>
        </div>
        <div className=" font-bold flex wrap justify-between">
          <Link href="https://www.linkedin.com/in/gnuhnisme/" target="_bland" className="w-1/2">Linkedin</Link>
          <Link href="https://www.instagram.com/gnuhnisme.ds/" target="_bland" className="w-1/2 text-end">Instagram</Link>
        </div>
        <Link target="_bland" href="https://www.behance.net/jinkagamine" className=" font-bold w-full">Behance</Link>
      </div>
    </div>
  );
};
