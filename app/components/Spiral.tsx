"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import anh1 from "@/public/images/anh1.svg";
import anh2 from "@/public/images/anh2.png";
import anh3 from "@/public/images/anh3.svg";
import anh4 from "@/public/images/anh4.svg";
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
  const TrailBlue = useRef<SVGPathElement | null>(null);
  const TrailYellow = useRef<SVGPathElement | null>(null);
  const [pathLengthBlue, setPathLengthBlue] = useState(0);
  const [pathLengthYellow, setPathLengthYellow] = useState(0);

  useEffect(() => {
    if (pathRefBlue.current) {
      setPathLengthBlue(pathRefBlue.current.getTotalLength());
    }
    if (pathRefYellow.current) {
      setPathLengthYellow(pathRefYellow.current.getTotalLength());
    }
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      gsap.set(starRefBlue, { opacity: 0 });
      gsap.set(starRefYellow, { opacity: 0 });
      gsap.set([starRefBlue.current, "#TrailBlue"], { opacity: 1 });
      gsap.set([starRefYellow.current, "#TrailYellow"], { opacity: 1 });

      const textPath = document.querySelector("#TrailBlue textPath");

      const tlText = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top",
          pin: true,
          end: "+=100%",
          scrub: 1,
          markers: true,
        },
        onUpdate: () => {
          const progress = tlText.progress(); // 0 -> 1
          const yellowTextPath = document.querySelector(
            "#TrailYellow textPath"
          );

          const blueTextPath = document.querySelector(
            "#TrailBlue textPath"
          );
          if (yellowTextPath) {
            yellowTextPath.setAttribute("startOffset", `${progress * 100}%`);
            blueTextPath?.setAttribute("startOffset", `${progress * 100}%`)
          }
        },
      });

      console.log(pathLengthBlue);

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
              start:0,
              end:1,
              alignOrigin: [0.5, 0.5],
            },
          },
          "<"
        ).to(
          starRefYellow.current,
          {
            opacity: 1,
            scale: 0.7,
            ease: "power1.inOut",
            motionPath: {
              path: "#innerSpiral",
              align: "#innerSpiral",
              start:0,
              end:1,
              autoRotate: true,
              alignOrigin: [0.5, 0.5],
            },
          },
          "<"
        )
        // Trail xuất hiện sau 0.2s và bắt đầu chạy theo
        // .to(
        //   "#TrailBlue path",
        //   {
        //     strokeDashoffset: 0,
        //     opacity: 1,
        //     ease: "none",
        //   },
        //   "<+0.1"
        // )
        // .to(
        //   "#TrailBlue path",
        //   {
        //     strokeDashoffset: 0,
        //     opacity: 1,
        //     ease: "none",
        //   },
        //   "<+0.1"
        // )

        // Sau khi di chuyển xong, ẩn star & trail
        .to(
          [starRefBlue.current, "#TrailYellow path"],
          {
            strokeDashoffset: 0,
            duration: 1,
            ease: "power1.out",
          },
          "<+0.1"
        )
        

        // .to([starRefYellow.current, "#TrailYellow textPath"], {
        //   opacity: 1,
        //   duration: 1,
        //   ease: "power1.out",
        // });
    }, containerRef);

    return () => ctx.revert();
  }, [pathLengthBlue, pathLengthYellow]);

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
          stroke="yellow"
          fill="none"
        />
        <path
          ref={pathRefBlue}
          id="outerSpiral"
          d={getSpiralPath(300, 300, 20, 1.7, 35, -1, -1)}
          stroke="red"
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

        <text
          id="TrailBlue"
          fontSize="20"
          fill="#00b4ff"
          fontFamily="monospace"
        >
          <textPath id="TrailTextPath" href="#outerSpiral" startOffset="0%">
            ____________________________
          </textPath>
        </text>
        <text id="TrailYellow" fontSize="20" fill="#000" fontFamily="monospace">
          <textPath id="TrailTextPath" href="#innerSpiral" startOffset="0%">
            ____________________________
          </textPath>
        </text>
      </svg>

      {/* {[anh1, anh2, anh3, anh4].map((img, i) => (
        <div
          key={i}
          ref={imageRef} // Thêm ref để tối ưu
          className={`spiral-img image  absolute 2xl:w-[400px] 2xl:h-[400px] w-[300px] h-[300px] transform-gpu ${
            i === 2 ? "rotate-[-20deg]" : i === 3 ? "rotate-[20deg]" : ""
          }`}
          style={{
            top: i === 0 ? "40%" : i === 1 ? "20%" : i === 2 ? "10%" : "40%",
            left: i === 0 ? "7%" : i === 1 ? "28%" : "auto",
            right: i === 2 ? "26%" : i === 3 ? "10%" : "auto",
            willChange: "transform, opacity", // Tối ưu hóa hiệu suất
          }}
        >
          <Image
            src={img}
            alt={`Image ${i + 1}`}
            className="w-full h-full object-contain"
            loading="lazy" // Sử dụng lazy loading
            // quality={75} // Giảm chất lượng để tối ưu
          />
        </div>
      ))} */}
    </div>
  );
}
