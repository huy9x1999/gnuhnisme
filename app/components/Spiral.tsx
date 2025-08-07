"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import anh1 from "@/public/images/anh-1.svg";
import anh2 from "@/public/images/anh-2.svg";
import anh3 from "@/public/images/anh-3.svg";
import anh4 from "@/public/images/anh-4.svg";
import bgStar1 from "@/public/images/bg-star-1.svg";
import bgStar2 from "@/public/images/bg-star-2.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function getSpiralPath(
  cx: number,
  cy: number,
  startRadius: number,
  turns: number,
  growth: number,
  ellipseX = 1,
  ellipseY = 1
) {
  let d = "";
  for (let t = 0; t <= Math.PI * 2 * turns; t += 0.2) {
    // Tăng bước lên 0.5 để giảm điểm
    const r = startRadius + growth * t;
    const x = cx + ellipseX * r * Math.cos(t);
    const y = cy + ellipseY * r * Math.sin(t);
    d += (t === 0 ? "M" : " L") + x + "," + y;
  }
  return d;
}

export default function Spiral() {
  const containerRef = useRef(null);
  // const imageRef = useRef(null);
  const starRefBlue = useRef<SVGGElement>(null);
  const starRefYellow = useRef<SVGGElement>(null);
  const pathRefBlue = useRef<SVGPathElement | null>(null);
  const pathRefYellow = useRef<SVGPathElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgStar1Ref = useRef<HTMLDivElement>(null);
  const bgStar2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      if (!pathRefBlue.current) return;

      gsap.set(starRefBlue.current, { opacity: 0 });
      gsap.set(starRefYellow.current, { opacity: 0 });
      // gsap.set([starRefBlue.current, "#TrailBlue"], { opacity: 1 });
      // gsap.set([starRefYellow.current, "#TrailYellow"], { opacity: 1 });

      imageRefs.current.forEach((el) => {
        if (el) gsap.set(el, { x: 0, y: 0, opacity: 0 });
      });

      // const textPath = document.querySelector("#TrailBlue textPath");

      const tlText = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top",
          pin: true,
          end: "+=200%",
          scrub: 1,

          // markers: true,
        },
      });

      tlText
        // Star xuất hiện và bắt đầu di chuyển
        .to(
          starRefBlue.current,
          {
            opacity: 1,
            scale: 0.7,
            ease: "power1.inOut",
            motionPath: {
              path: "#outerSpiral",
              align: "#outerSpiral",
              autoRotate: true,
              start: 0,
              end: 1,
              alignOrigin: [0.5, 0.5],
            },
          },
          "<"
        )
        .to(
          starRefYellow.current,
          {
            opacity: 1,
            scale: 0.7,
            ease: "power1.inOut",
            motionPath: {
              path: "#innerSpiral",
              align: "#innerSpiral",
              start: 0,
              end: 1,
              autoRotate: true,
              alignOrigin: [0.5, 0.5],
            },
          },
          "<"
        )
        .to(
          starRefYellow.current,
          {
            opacity: 0,
            ease: "power1.inOut",
            clearProps: "motionPath",
          },
          ">"
        )
        .to(
          starRefBlue.current,
          {
            opacity: 0,
            ease: "power1.inOut",
            clearProps: "motionPath",
          },
          "<"
        );

      tlText.to(
        starRefYellow.current,
        {
          opacity: 1,
          ease: "power1.inOut",
          duration: 0.15,
        },
        0 // Tăng từ 0 → 1
      );
      tlText.to(
        starRefYellow.current,
        {
          opacity: 1,
          ease: "none",
          duration: 0.7,
        },
        0.1 // Giữ nguyên 1
      );
      tlText.to(
        starRefYellow.current,
        {
          opacity: 0,
          ease: "power1.inOut",
          duration: 0.15,
        },
        0.85 // Giảm từ 1 → 0
      );
      tlText.to(
        starRefBlue.current,
        {
          opacity: 1,
          ease: "power1.inOut",
          duration: 0.15,
        },
        0 // Tăng từ 0 → 1
      );
      tlText.to(
        starRefBlue.current,
        {
          opacity: 1,
          ease: "none",
          duration: 0.7,
        },
        0.1 // Giữ nguyên 1
      );
      tlText.to(
        starRefBlue.current,
        {
          opacity: 0,
          ease: "power1.inOut",
          duration: 0.15,
        },
        0.85 // Giảm từ 1 → 0
      );

      tlText.to(
        imageRefs.current,
        {
          opacity: 1,
          ease: "power1.inOut",
          stagger: 0.1,
        },
        ">"
      );

      imageRefs.current.forEach((img, i) => {
  const ends = [0.836, 0.35, 0.29, 0.882];
  const isInner = i === 0 || i === 1;
  const path = isInner ? pathRefYellow.current : pathRefBlue.current;
  if (!path || !img) return;

  tlText.to(
    img,
    {
      opacity: 1,
      ease: "power1.inOut",
      motionPath: {
        path: path,
        align: path,
        start: 0,
        end: ends[i],
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
      },
      duration: 1,
    },
    "<"
  );
});


      tlText.to(
        [bgStar1Ref.current, bgStar2Ref.current],
        {
          opacity: 1,
          ease: "power1.inOut",
          duration: 0.5,
        },
        "<+=0.5" // hoặc "imageScroll+=0.5" nếu bạn tách riêng timeline cho ảnh
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen min-h-screen relative overflow-hidden transform-gpu"
    >
      <svg
        width="100vw"
        height="100vh"
        viewBox="0 0 600 600"
        className="absolute inset-0 m-auto"
        style={{ willChange: "transform" }} // Tối ưu hóa will-change
      >
        <path
          ref={pathRefYellow}
          id="innerSpiral"
          d={getSpiralPath(300, 300, 20, 1.7, 35, 1, 1)}
          stroke="none"
          fill="none"
        />
        <path
          ref={pathRefBlue}
          id="outerSpiral"
          d={getSpiralPath(300, 300, 20, 1.7, 35, -1, -1)}
          stroke="none"
          fill="none"
        />
        <g ref={starRefBlue} transform="translate(300, 300) scale(0.5)">
          <path
            d="M139.263 144.395C209.861 119.34 264.564 91.9059 261.446 83.1202C258.328 74.3346 198.57 87.5238 127.972 112.579C57.3743 137.635 2.67137 165.068 5.78944 173.854C8.90751 182.64 68.6659 169.45 139.263 144.395Z"
            fill="#007DC5"
          />
          <path
            d="M118.04 133.98C92.9801 63.38 79.64 3.68002 88.24 0.620024C96.84 -2.42998 124.13 52.32 149.18 122.92C174.24 193.52 187.58 253.22 178.97 256.28C170.37 259.33 143.08 204.58 118.03 133.98H118.04Z"
            fill="#007DC5"
          />
          <path
            d="M139.37 116.37C176.64 134.12 204.28 153.91 201.11 160.59C197.93 167.27 165.14 158.29 127.86 140.55C90.59 122.8 62.95 103.01 66.12 96.3301C69.3 89.6501 102.09 98.6301 139.37 116.37Z"
            fill="#007DC5"
          />
          <path
            d="M145.7 134.21C127.95 171.48 108.16 199.12 101.48 195.95C94.8 192.77 103.78 159.98 121.52 122.7C139.27 85.43 159.06 57.79 165.74 60.96C172.42 64.14 163.44 96.93 145.7 134.21Z"
            fill="#007DC5"
          />
        </g>
        <g
          ref={starRefYellow}
          startOffset={0}
          transform="translate(300, 300) scale(0.5)"
        >
          <path
            d="M139.263 144.395C209.861 119.34 264.564 91.9059 261.446 83.1202C258.328 74.3346 198.57 87.5238 127.972 112.579C57.3743 137.635 2.67137 165.068 5.78944 173.854C8.90751 182.64 68.6659 169.45 139.263 144.395Z"
            fill="#FEEE52"
          />
          <path
            d="M118.04 133.98C92.9801 63.38 79.64 3.68002 88.24 0.620024C96.84 -2.42998 124.13 52.32 149.18 122.92C174.24 193.52 187.58 253.22 178.97 256.28C170.37 259.33 143.08 204.58 118.03 133.98H118.04Z"
            fill="#FEEE52"
          />
          <path
            d="M139.37 116.37C176.64 134.12 204.28 153.91 201.11 160.59C197.93 167.27 165.14 158.29 127.86 140.55C90.59 122.8 62.95 103.01 66.12 96.3301C69.3 89.6501 102.09 98.6301 139.37 116.37Z"
            fill="#FEEE52"
          />
          <path
            d="M145.7 134.21C127.95 171.48 108.16 199.12 101.48 195.95C94.8 192.77 103.78 159.98 121.52 122.7C139.27 85.43 159.06 57.79 165.74 60.96C172.42 64.14 163.44 96.93 145.7 134.21Z"
            fill="#FEEE52"
          />
        </g>
      </svg>

      {[anh1, anh2, anh3, anh4].map((img, index) => (
        <div
          key={index}
          ref={(el) => {
            imageRefs.current[index] = el;
          }}
          className="spiral-img opacity-0 absolute h-[35vh] w-auto transform-gpu"
          style={{
            top: "300px",
            left: "300px",
            willChange: "transform, opacity",
          }}
        >
          <Image
            src={img}
            alt={`image-${index}`}
            sizes="h-full"
            priority
            className={`w-full h-full object-contain ${
              index === 0 && "relative left-[10vw]"
            }`}
          />
        </div>
      ))}

      <div
        ref={bgStar1Ref}
        className="absolute 2xl:bottom-[160px] bottom-[80px] 2xl:left-[134px] left-[40px] w-[165px] h-[190px] opacity-0 transition"
      >
        <Image
          src={bgStar1}
          alt=""
          sizes="100%"
          priority
          className="w-full h-full object-contain"
        />
      </div>
      <div
        ref={bgStar2Ref}
        className="absolute 2xl:top-[160px] top-[80px] 2xl:right-[134px] right-[40px] w-[165px] h-[190px] opacity-0 transition"
      >
        <Image
          src={bgStar2}
          alt=""
          sizes="h-full"
          priority
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
