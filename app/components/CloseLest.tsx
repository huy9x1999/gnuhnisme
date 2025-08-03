import Image from 'next/image'
import React from 'react'
import dobSpiral from "@/public/images/dob-spiral-cir.svg";
import textBlue from "@/public/images/text-blue.svg";

const CloseLest = () => {
  
  // const containerRef = useRef(null);
  // const imageRef = useRef(null);
  // const textRef = useRef(null);
  // useLayoutEffect(() => {
  //   // Your layout effect code here
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: "top top",
  //         end: "+=100%", // Adjust as needed
  //         scrub: true,
  //         pin: true,
  //         pinSpacing: false,
  //         markers: true,
  //       },
  //     });

  //     tl.to(
  //       imageRef.current,
  //       {
  //         x: -100,
  //         opacity: 0,
  //         duration: 4,
  //         ease: "power2.out",
  //       },
  //       "-=3"
  //     )
  //   }, containerRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div className='bg-[#007DC5] w-screen h-screen relative'>
      <Image src={dobSpiral} alt='' className='absolute w-[45%] -translate-x-1/2 left-1/2 h-auto top-[8%]'  />
      <div className='left-[2%] w-1/2 absolute bottom-[4%] '>
        <Image src={textBlue} alt='' className='w-full'  />
      </div>
    </div>
  )
}

export default CloseLest