'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';
import Img1 from '@/public/images/SplashImg1.png';
import Img2 from '@/public/images/SplashImg2.png';

interface SplashScreenProps {
  onLoadingComplete?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const tl = gsap.timeline({
        delay:1,
        onComplete: () => {
          setIsLoading(false);
          onLoadingComplete?.();
        },
      });

      const commonProps = {
        opacity: 1,
        duration: 3,
        ease: 'power5.out',
      };

      tl.to('.bg-top-left', {
        ...commonProps,
        x: '-55vw',
        y: '-55vh',
        opacity:1
      })
        .to('.bg-bottom-right', {
          ...commonProps,
          x: '55vw',
          y: '55vh',
          opacity:1
        }, '-=3')
        .to('.char1', {
          ...commonProps,
          x: '-45vw',
          y: '-45vh',
        }, '-=3')
        .to('.char2', {
          ...commonProps,
          x: '45vw',
          y: '45vh',
        }, '-=3')
        .to('.bar-left', {
          ...commonProps,
          x: '-60vw',
        y: '-60vh',
        }, '-=3')
        .to('.bar-right', {
          ...commonProps,
          x: '60vw',
          y: '60vh',
        }, '-=3');
    }
  }, [isLoading, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Nền tam giác */}
          <div className="bg-top-left absolute top-0 left-0 w-full h-full bg-blue-500" 
            style={{ clipPath: 'polygon(0 0, 100% 0, 52% 52%, 0 100%)' }}></div>
          <div className="bg-bottom-right absolute top-0 left-0 w-full h-full bg-blue-500"
            style={{ clipPath: 'polygon(48% 48%, 100% 0, 100% 100%, 0 100%)' }}></div>

          {/* Nhân vật trái */}
          <div className="char1 absolute top-0 left-0 w-1/2 h-1/2 flex items-start justify-start">
            <Image
              src={Img1}
              alt="Pink cartoon character"
              className="block relative top-0 left-0 w-4/5"
              priority
            />
          </div>

          {/* Nhân vật phải */}
          <div className="char2 absolute bottom-0 right-0 w-1/2 h-1/2 flex items-end justify-end ">
            <Image
              src={Img2}
              alt="Stylized magnifying glass"
              className="block relative bottom-0 right-0 w-[120%]"
              priority
            />
          </div>

          {/* Hai thanh dấu bằng */}
          <div className='transform-3d'>
<div className="bar-left absolute top-1/2 left-1/4 w-[100px] h-[22px] bg-yellow-300 rounded-[4px] -translate-y-[120%] -translate-x-[70%] -rotate-[25deg]"></div>
          <div className="bar-right absolute top-1/2 right-1/4 w-[100px] h-[22px] rounded-[4px] bg-yellow-300 translate-y-[120%] translate-x-[70%] -rotate-[25deg]"></div>
          </div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
