/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import anh1 from "@/public/images/anh1.svg";
import anh2 from "@/public/images/anh2.png";
import anh3 from "@/public/images/anh3.svg";
import anh4 from "@/public/images/anh4.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  for (let t = 0; t <= Math.PI * 2 * turns; t += 0.1) {
    const r = startRadius + growth * t;
    const x = cx + ellipseX * r * Math.cos(t);
    const y = cy + ellipseY * r * Math.sin(t);
    d += (t === 0 ? "M" : " L") + x + "," + y;
  }
  return d;
}

export default function Spiral() {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    // Text1 - inner spiral
    gsap.set(".image", {
      opacity: 0,
      y: 50,
    });

    gsap.set("textPath", {
      opacity: 0,
    });

    // Tạo timeline chính
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#Text1", // dùng trigger text đầu tiên
        scroller: ".scroll-container",
        start: "top-=300 top",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    tl.to("#Text1 textPath", {
      opacity: 1,
      duration: 0.01, // hoặc dùng .set()
    });
    
    // 1. Animation Text1 chạy trên spiral
    tl.to("#Text1 textPath", {
      attr: { startOffset: "100%" },
      duration: 3,
      ease: "none",
    });

    tl.to("#Text2 textPath", {
      opacity: 1,
      duration: 0.01, // hoặc dùng .set()
    }, "-=2.4");
    // 2. Animation Text2 chạy trên spiral
    tl.to(
      "#Text2 textPath",
      {
        attr: { startOffset: "100%" },
        duration: 3,
        ease: "none",
      },
      "-=2.4"
    );

    // 3. Sau khi 2 textPath hoàn tất → hiện từng ảnh
    tl.to(".image", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2, // từng ảnh hiện ra cách nhau
      ease: "power2.out",
    });

    // Refresh khi layout đã xong
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Cleanup
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className=" w-screen h-screen relative overflow-hidden transform-gpu"
    >
      {/* SVG Paths */}
      <svg
        width="100vw"
        height="100vh"
        viewBox="0 0 600 600"
        className="absolute inset-0 m-auto"
        style={{ willChange: "auto", transform: "rotate(26deg)" }}
      >
        {/* Spiral Path */}
        <path
          id="innerSpiral"
          d={getSpiralPath(300, 300, 30, 1.5, 38, 1.2, 0.8)}
          stroke="none"
          fill="none"
        />
        <path
          id="outerSpiral"
          d={getSpiralPath(280, 280, 40, 1.5, 46, -1.2, 0.5)}
          stroke="none"
          fill="none"
        />

        {/* TEXT chạy theo path */}
        <text id="Text1" fontSize="40" fill="white" fontWeight="bold">
          <textPath href="#innerSpiral" startOffset="0%">
            SEE YOU ON THE INNER SPIRAL
          </textPath>
        </text>

        <text id="Text2" fontSize="40" fill="yellow" fontWeight="bold">
          <textPath href="#outerSpiral">DON&apos;T BLIND!</textPath>
        </text>
      </svg>
      <div
        className="hire spiral-img absolute 2xl:w-[400px] 2xl:h-[400px] w-[300px] h-[300px] transform-gpu"
        style={{
          backfaceVisibility: "hidden",
          top: "40%",
          left: "7%",
        }}
      >
        <Image
          src={anh1}
          alt=""
          className="image w-full h-full object-contain"
          priority
        />
      </div>
      <div
        className="hire spiral-img absolute 2xl:w-[400px] 2xl:h-[400px] w-[300px] h-[300px] transform-gpu"
        style={{
          top: "20%",
          left: "28%",
        }}
      >
        <Image
          src={anh2}
          alt=""
          className="image w-full h-full object-contain"
          priority
        />
      </div>

      <div
        className="spiral-img rotate-[-20deg] 2xl:w-[400px] 2xl:h-[400px] absolute w-[300px] h-[300px] transform-gpu"
        style={{
          // backfaceVisibility: "hidden",
          top: "10%",
          right: "26%",
        }}
      >
        <Image
          src={anh3}
          alt=""
          className="image w-full h-full object-contain"
          priority
        />
      </div>

      <div
        className="rotate-[20deg] spiral-img absolute 2xl:w-[400px] 2xl:h-[400px] w-[300px] h-[300px] transform-gpu"
        style={{
          backfaceVisibility: "hidden",
          top: "40%",
          right: "10%",
        }}
      >
        <Image
          src={anh4}
          alt=""
          className="image w-full h-full object-contain"
          priority
        />
      </div>
    </div>
  );
}
