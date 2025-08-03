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
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".image", { opacity: 0, y: 50 });
      gsap.set("textPath", { opacity: 0 });

      if (!containerRef.current) return;
      const images = gsap.utils.toArray(".image");

      // Animation cho text
      const tlText = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          // scroller:"#scroll-container",
          start: "top",
          pin: true, // Giữ nguyên vị trí khi cuộn
          end: "+=50%", // Giảm độ dài để giảm áp lực
          scrub: 1, // Giảm độ trễ
        },
      });
      tlText
        .to("#Text1 textPath", { opacity: 1, duration: 0.05, ease: "none" })
        .to(
          "#Text1 textPath",
          {
            attr: { startOffset: "100%" },
            duration: 2,
            ease: "expo.out",
          },
          0
        )
        .to(
          "#Text2 textPath",
          { opacity: 1, duration: 0.05, ease: "power1.out" },
          0.2
        )
        .to(
          "#Text2 textPath",
          {
            attr: { startOffset: "100%" },
            duration: 2,
            ease: "expo.out",
          },
          0.2
        )
        .to(
          images,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=1"
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
        <text id="Text1" fontSize="40" fill="white" fontWeight="bold">
          <textPath href="#innerSpiral" startOffset="0%">
            SEE YOU ON THE INNER SPIRAL
          </textPath>
        </text>
        <text id="Text2" fontSize="40" fill="yellow" fontWeight="bold">
          <textPath href="#outerSpiral">DON&apos;T BLIND!</textPath>
        </text>
      </svg>

      {[anh1, anh2, anh3, anh4].map((img, i) => (
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
      ))}
    </div>
  );
}
