'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Image from 'next/image';
import anh1 from '@/public/images/anh1.svg';
import anh2 from '@/public/images/anh2.svg';
import anh3 from '@/public/images/anh3.svg';
import anh4 from '@/public/images/anh4.svg';

gsap.registerPlugin(MotionPathPlugin);

function getSpiralPath(
  cx: number,
  cy: number,
  startRadius: number,
  turns: number,
  growth: number,
  ellipseX = 1,
  ellipseY = 1
) {
  let d = '';
  for (let t = 0; t <= Math.PI * 2 * turns; t += 0.1) {
    const r = startRadius + growth * t;
    const x = cx + ellipseX * r * Math.cos(t);
    const y = cy + ellipseY * r * Math.sin(t);
    d += (t === 0 ? 'M' : ' L') + x + ',' + y;
  }
  return d;
}

const imageAssets = [anh1, anh2, anh3, anh4];
const imageMotion = [
  { start: 0.0, end: 0.38 },
  { start: 0.2, end: 0.8 },
  { start: 0.5, end: 0.9 },
  { start: 0.7, end: 1.68 },
];

export default function SpiralText() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  const [showText, setShowText] = useState(false);
  const innerText = "!DNILB T'NOD";
  const outerText = 'LARIPS GNINNIPS EHT TA KOOL';

  // Show text after delay
  useEffect(() => {
    const id = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(id);
  }, []);

  // Animate text along spiral
  useEffect(() => {
    if (!showText) return;

    const animateChars = (
      selector: string,
      pathId: string,
      delayStep: number
    ) => {
      const chars = (
        selector === 'inner' 
          ? innerRef.current 
          : outerRef.current
      )?.querySelectorAll<HTMLElement>('.char');
      chars?.forEach((char, i) => {
        gsap.to(char, {
          duration: 6,
          ease: 'none',
          motionPath: { path: `#${pathId}`, align: `#${pathId}`, autoRotate: true, start: 0, end: 1 },
          opacity: 0,
          delay: i * delayStep,
        });
      });
    };

    animateChars('inner', 'innerSpiral', 0.06);
    animateChars('outer', 'outerSpiral', 0.06);
  }, [showText]);

  // Animate images along outer spiral
  useEffect(() => {
    if (!showText) return;

    const container = imagesRef.current;
    if (!container) return;
    const imgs = container.querySelectorAll<HTMLDivElement>('.spiral-img');

    // Lấy kích thước SVG để tính offset responsive
    const svg = document.querySelector('svg');
    const svgRect = svg?.getBoundingClientRect();
    const svgWidth = svgRect?.width || 600;
    const svgHeight = svgRect?.height || 600;

    imgs.forEach((img, i) => {
      const { start, end } = imageMotion[i];
      let motionPath: any = {
        path: '#outerSpiral',
        align: '#outerSpiral',
        autoRotate: true,
        start,
        end,
      };
      // Ảnh 1 lệch trái 30% width, ảnh 3 và 4 lệch xuống 10% height SVG
      if (i === 0) motionPath.offsetX = -0.2 * svgWidth;
      if (i === 1 || i === 2) motionPath.offsetY = 0.2 * svgHeight;
      gsap.fromTo(
        img,
        { scale: 0.2, opacity: 0 },
        {
          duration: 3,
          ease: 'power2.out',
          scale: 1,
          opacity: 1,
          motionPath,
          delay: (i * 0.2),
        }
      );
    });
  }, [showText]);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* SVG Paths */}
      <svg
        width="70vw"
        height="70vh"
        viewBox="0 0 600 600"
        className="absolute inset-0 m-auto transform rotate-23"
      >
        <path
          id="innerSpiral"
          d={getSpiralPath(300, 300, 20, 2, 38, 1.2, 0.7)}
          stroke="none"
          fill="none"
          strokeWidth={2}
        />
        <path
          id="outerSpiral"
          d={getSpiralPath(300, 300, 120, 2, 38, -1.2, 0.7)}
          stroke="none"
          fill="none"
          strokeWidth={2}
        />
      </svg>

      {/* Inner text */}
      <div
        ref={innerRef}
        className={`absolute inset-0 m-auto transform ${showText ? 'opacity-100' : 'opacity-0'}`}
      >
        {innerText.split('').map((c, i) => (
          <span
            key={i}
            className="char absolute text-[28px] font-bold text-yellow-500"
          >
            {c}
          </span>
        ))}
      </div>

      {/* Outer text */}
      <div
        ref={outerRef}
        className={`absolute inset-0 m-auto transform ${showText ? 'opacity-100' : 'opacity-0'}`}
      >
        {outerText.split('').map((c, i) => (
          <span
            key={i}
            className="char absolute text-[32px] font-bold text-white"
          >
            {c}
          </span>
        ))}
      </div>

      {/* Images */}
      <div ref={imagesRef} className="absolute inset-0 m-auto w-0 h-0 pointer-events-none">
        {imageAssets.map((asset, i) => (
          <div key={i} className="spiral-img opacity-0 absolute top-0 left-0 w-[18vw] h-[18vw]">
            <Image src={asset} alt=""  />
          </div>
        ))}
      </div>
    </div>
  );
}
