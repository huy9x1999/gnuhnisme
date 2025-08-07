"use client";

import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import dobSpiral from "@/public/images/dob-spiral-cir.svg";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// Hàm tạo spiral path
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
    const r = startRadius + growth * t;
    const x = cx + ellipseX * r * Math.cos(t);
    const y = cy + ellipseY * r * Math.sin(t);
    d += (t === 0 ? "M" : " L") + x + "," + y;
  }
  return d;
}

const CloseLest = () => {
  const containerRef = useRef(null);
  const spiralRef = useRef(null);
  const sectionRef = useRef(null); // dùng để pin

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      // Set initial style
      gsap.set(containerRef.current, {
        position: "absolute",
        borderRadius: "60px",
        scale: 0.3,
        transformOrigin: "center center",
        xPercent: -50,
        yPercent: -50,
        top: "50%",
        left: "50%",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%", // đoạn scroll dài hơn cho đủ cả spiral và zoom
          scrub: true,
          pin: true,
          // markers: true,
        },
      });

      // Phase 1: spiral move + scale 0.2 → 0.4
      tl.to(
        containerRef.current,
        {
          scale: 0.4,
          opacity: 1,
          motionPath: {
            path: "#innerSpiralCloseLest",
            align: "#innerSpiralCloseLest",
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 0.8,
          },
          ease: "power1.inOut",
        },
        0
      ); // bắt đầu từ scroll progress 0
      tl.to(
        containerRef.current,
        {
          opacity: 1,
          ease: "power1.inOut",
        },
        0.1
      );
      // Phase 2: zoom và reset về vị trí section
      tl.to(
        containerRef.current,
        {
          clearProps: "motionPath", // dừng motionPath
          scale: 1,
          xPercent: 0,
          yPercent: 0,
          borderRadius: "0",
          top: 0,
          left: 0,
          transformOrigin: "center center",
          transform: "rotate(0deg)",
          position: "relative",
          ease: "power2.out",
        },
        0.65
      );
      tl.to(
        containerRef.current,
        {
          clearProps: "motionPath", // dừng motionPath
          ease: "power2.out",
        },
        0.75
      ); // bắt đầu khi scroll đạt 0.65 (65%)
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative w-screen h-[100vh]">
      <svg
        width="100vw"
        height="100vh"
        viewBox="0 0 600 600"
        className="absolute inset-0 m-auto pointer-events-none"
      >
        <path
          ref={spiralRef}
          id="innerSpiralCloseLest"
          d="M280,300 L273.5382023982865,305.36407193146664 L268.68392620390193,313.2402236384941 L266.1612397887032,323.15034140919647 L266.55807795133603,334.4330923631771 L270.2833731772523,346.28090416443433 L277.53381922244625,357.78642332996804 L288.27226713988335,367.99603136920376 L302.21916369489793,375.96759383115443 L318.8577738595262,380.8293533628902 L337.4532152892428,381.83676841431134 L357.0846083737685,378.42415117050024 L376.6889464162895,370.24817077731973 L395.11465162395314,357.2206522721825 L411.1822361989017,339.52860171839677 L423.7490620750557,317.64000100748336 L431.7749104049074,292.2946130675594 L434.3849487685451,264.4797868182703 L430.9267287847854,235.39201527895142 L421.01805992290565,206.38574268576383 L404.58297933817784,178.91160075073134 L381.8735571638967,154.44684600693068 L353.47591937624486,134.4212391432241 L320.2996073752446,120.14192834234285 L283.55019111338373,112.72105353886192 L244.68587383467053,113.00976644068803 L205.35963239732348,121.54215954452917 L167.34918892798902,138.49222210079884 L132.47777024178566,163.64640621957892 L102.52914772208553,196.39371399073258 L79.16083407041558,235.73443541424763 L63.819523005497274,280.307811532254 L57.662879823000964,328.4380059835211 L61.49161941840924,378.1968822418587 L75.69544748974545,427.48124459376174 L100.21590259902482,474.1014486604799 L134.5284424472275,515.8776589669703 L177.64529560674595,550.7395587314445 L228.13968502147605,576.8250262010056 L284.19106177514493,592.5732001947595 L343.65001014258513,596.8074739870144 L404.12054232203826,588.8042809006901 L463.0566373926398,568.3440571397198 L517.8691351897245,535.7414684175901 L566.0385086122232,491.85283926849786 L605.2286377313668,438.0596925559885 L633.3965185202239,376.22835062228467 L648.8928716702869,308.64662348322247 L650.5488766627093,237.9396658846199 L637.7447367740258,166.96807608155123 L610.456465758288,98.7121889709343 L569.2781508142552,36.14724277723565 L515.4179548520575,-17.885364128889762 L450.66723259178724,-60.80518985060638"
          stroke="none"
          fill="none"
        />
      </svg>

      <div
        ref={containerRef}
        className="bg-[#007DC5] w-screen h-screen overflow-hidden"
      >
        <div className="absolute w-[45%] -translate-x-1/2 left-1/2 h-[40vh] top-[8%] flex justify-between">
          <div className="h-[100%] aspect-square rounded-full overflow-hidden">
            <video autoPlay muted loop className="w-auto h-full object-cover">
              <source src="/video/spiral.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="h-[100%] aspect-square rounded-full overflow-hidden">
            <video autoPlay muted loop className="w-auto h-full object-cover">
              <source src="/video/spiral.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="left-[2%] absolute bottom-[4%]">
          <p className="text-[51px] 2xl:text-[70px] leading-[58px] 2xl:mb-8 mb-4 text-white font-roboto italic font-thin">
            YOU NO BELIEVE I&apos;M THE
          </p>
          <p className="text-[60px] 2xl:text-[82px] leading-[60px] 2xl:leading-[81px] text-[#FEEE52]">
            COOLEST DESIGNER
          </p>
          <p className="text-[57px] 2xl:text-[78px] font-roboto text-white ">
            YOU&apos;RE EVER SEEN!!!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloseLest;
