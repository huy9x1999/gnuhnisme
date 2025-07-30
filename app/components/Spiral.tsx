/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import anh1 from "@/public/images/anh1.svg";
import anh2 from "@/public/images/anh2.svg";
import anh3 from "@/public/images/anh3.svg";
import anh4 from "@/public/images/anh4.svg";

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
  const [scope, animate] = useAnimate();
  const [showText, setShowText] = useState(false);
  const innerText = "!DNILB T'NOD";
  const outerText = "LARIPS GNINNIPS EHT TA KOOL";

  // Show text after delay
  useEffect(() => {
    const id = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(id);
  }, []);

  // Ultra-optimized animations with minimal DOM manipulation
  useEffect(() => {
    if (!showText || !scope.current) return;

    const animateElements = () => {
      // Reduce text animation frequency - animate fewer characters
      const chars = scope.current.querySelectorAll(".char");

      // Only animate every 3rd character to reduce load
      chars.forEach((char: any, i: number) => {
        if (i % 3 === 0) {
          // Only animate every 3rd character
          animate(
            char,
            {
              opacity: [0, 1, 0],
              transform: "translateZ(0)", // Keep GPU layer
            },
            {
              duration: 4, // Shorter duration
              delay: i * 0.03, // Faster stagger
              ease: "linear",
            }
          );
        } else {
          // Just fade in other characters without complex animation
          animate(
            char,
            { opacity: [0, 0.7] },
            { duration: 0.5, delay: i * 0.01 }
          );
        }
      });

      // Simplified image animations
      const imgs = scope.current.querySelectorAll(".spiral-img");

      imgs.forEach((img: any, i: number) => {
        animate(
          img,
          {
            scale: [0.5, 1], // Less dramatic scale change
            opacity: [0, 1],
          },
          {
            duration: 1.2, // Much faster
            delay: i * 0.1,
            ease: "easeOut", // Simple easing
          }
        );
      });
    };

    // Debounce with shorter delay
    const timeoutId = setTimeout(animateElements, 100);
    return () => clearTimeout(timeoutId);
  }, [showText, scope, animate]);

  return (
    <div
      ref={scope}
      className="w-screen h-screen relative overflow-hidden transform-gpu"
    >
      {/* SVG Paths */}
      <svg
        width="70vw"
        height="70vh"
        viewBox="0 0 600 600"
        className="absolute inset-0 m-auto transform rotate-23"
        style={{ willChange: "auto" }}
      >
        <path
          id="innerSpiral"
          d={getSpiralPath(300, 300, 20, 2, 38, 1.2, 0.7)}
          stroke="none"
          fill="none"
        />
        <path
          id="outerSpiral"
          d={getSpiralPath(300, 300, 120, 2, 38, -1.2, 0.7)}
          stroke="none"
          fill="none"
        />
      </svg>

      {/* Inner text - Reduced characters for better performance */}
      <div
        className={`absolute inset-0 m-auto transform ${
          showText ? "opacity-100" : "opacity-0"
        } contain-layout`}
      >
        {innerText.split("").map((c, i) => (
          <span
            key={i}
            className="char absolute text-[28px] font-bold text-yellow-500 transform-gpu"
            style={{
              offsetPath: `path('#innerSpiral')`,
              offsetDistance: `${(i / innerText.length) * 100}%`,
              backfaceVisibility: "hidden",
              perspective: "1000px",
            }}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Outer text - Simplified */}
      <div
        className={`absolute inset-0 m-auto transform ${
          showText ? "opacity-100" : "opacity-0"
        } contain-layout`}
      >
        {outerText.split("").map((c, i) => (
          <span
            key={i}
            className="char absolute text-[32px] font-bold text-white transform-gpu"
            style={{
              offsetPath: `path('#outerSpiral')`,
              offsetDistance: `${(i / outerText.length) * 100}%`,
              backfaceVisibility: "hidden",
              perspective: "1000px",
            }}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Images positioned near center circle - Hardware accelerated */}
      <div className="absolute inset-0 flex items-center justify-center contain-layout">
        <div className="relative w-[400px] h-[400px]">
          <div
            className="spiral-img opacity-0 absolute -top-20 left-1/2 -translate-x-1/2 w-[120px] h-[120px] transform-gpu"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={anh1}
              alt=""
              className="w-full h-full object-contain"
              priority
            />
          </div>

          <div
            className="spiral-img opacity-0 absolute top-1/2 -right-20 -translate-y-1/2 w-[120px] h-[120px] transform-gpu"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={anh2}
              alt=""
              className="w-full h-full object-contain"
              priority
            />
          </div>

          <div
            className="spiral-img opacity-0 absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120px] h-[120px] transform-gpu"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={anh3}
              alt=""
              className="w-full h-full object-contain"
              priority
            />
          </div>

          <div
            className="spiral-img opacity-0 absolute top-1/2 -left-20 -translate-y-1/2 w-[120px] h-[120px] transform-gpu"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={anh4}
              alt=""
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
