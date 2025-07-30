'use client';
import Clock from '@/public/images/clock.png';
import Shadow from '@/public/images/clock-shadow.png';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function ClockSwing() {
  const clockRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Quả chính
    gsap.timeline({ repeat: -1, yoyo: true })
      .to(clockRef.current, {
        rotate: 30,
        transformOrigin: 'top center',
        duration: 1.5,
        ease: 'power1.inOut',
      })
      .to(clockRef.current, {
        rotate: -30,
        transformOrigin: 'top center',
        duration: 1.5,
        ease: 'power1.inOut',
      });

    // Shadow chạy sau 0.5s
    gsap.timeline({ repeat: -1, yoyo: true, delay: 0.5 })
      .to(shadowRef.current, {
        rotate: 30,
        transformOrigin: 'top center',
        duration: 1.5,
        ease: 'power2.inOut',
      })
      .to(shadowRef.current, {
        rotate: -30,
        transformOrigin: 'top center',
        duration: 1.5,
        ease: 'power2.inOut',
      });
  }, []);

  return (
    <div className="bg-[#F49AC1] absolute 2xl:right-[4%] right-[0] top-[34%] z-20 w-[8%]">
      
      {/* Shadow (blur + trễ) */}
      <div
        ref={shadowRef}
        className="absolute top-0 left-0 z-0 blur-[2px] "
      >
        <Image src={Clock} alt="Clock" width={100} height={100} />
      </div>

      {/* Clock (trước) */}
      <div
        ref={clockRef}
        className="absolute top-0 left-0 z-10"
      >
        <Image src={Clock} alt="Clock" width={100} height={100} />
      </div>
      <div className='z-50 bg-[#007DC5] w-10 h-7 rounded-b-full absolute 2xl:right-[27%] right-[20%] -top-2' />
    </div>
  );
}
