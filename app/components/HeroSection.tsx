"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

import SplashScreen from "../components/SplashScreen";
import CharBlue from "@/public/images/char-1-blue.svg";
import Text1 from "@/public/images/text-1.svg";
import Text2 from "@/public/images/text-2.svg";
import Popup from "@/public/images/popup.svg";
import bg from "@/public/images/spiral.svg";
import ClockSwing from "../components/ClockSwing";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  useLayoutEffect(() => {
    // Your layout effect code here
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%", // Adjust as needed
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });

      tl.to(
        imageRef.current,
        {
          x: -100,
          opacity: 0,
          duration: 4,
          ease: "power2.out",
        },
        "-=3"
      ).to(textRef.current,{
        y:-200,
        opacity: 0,
        duration: 4,
        ease: "power2.out",
      }, "-=3");
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <SplashScreen />

      <div
        ref={containerRef}
        className="min-h-screen w-full relative scroll-section overflow-visible"
      >
        <div className="left-image relative -left-[7%] pt-[45vh] z-10 2xl:w-[70%] w-[61%]">
          <div ref={imageRef} className="w-full">
            <div className="group w-full">
              <Image className="char-blue" src={CharBlue} alt="char-blue" />

              <Image
                src={Popup}
                alt="popup"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 2xl:w-[45%] w-[40%] absolute right-[10%] -top-[25%]"
              />
            </div>
            <ClockSwing />
          </div>
        </div>

        {/* Text bên phải */}
        <div ref={textRef} className="right-text absolute z-20 right-12 2xl:top-[150px] top-[10%] 2xl:min-w-[50%] min-w-[43%]">
          <div className="text-[#FEEE52]">
            <h3 className="2xl:text-[125px] text-[110px] leading-[140px]">welcome</h3>
            <h4 className=" text-[56px] leading-[54px]">
              <span className="font-roboto text-[48px] font-thin">TO THE</span> TRANCE ZONE
            </h4>
          </div>
          {/* <Image src={Text1} alt="" /> */}
          <div className="mt-8 pl-[36%]">
            <Image src={Text2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
