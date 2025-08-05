'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Img1 from '@/public/images/SplashImg1.png';
import Img2 from '@/public/images/SplashImg2.png';

interface SplashScreenProps {
  onLoadingComplete?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const commonTransition = {
    duration: 3,
    ease: [0.22, 1, 0.36, 1], // power3.out
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          exit={{ opacity: 0 }}
        >
          {/* Nền tam giác */}
          <motion.div
            className="bg-top-left absolute top-0 left-0 w-full h-full bg-[#007DC5]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 52% 52%, 0 100%)' }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: '-55vw', y: '-55vh' }}
            transition={commonTransition}
          />
          <motion.div
            className="bg-bottom-right absolute top-0 left-0 w-full h-full bg-[#007DC5]"
            style={{ clipPath: 'polygon(48% 48%, 100% 0, 100% 100%, 0 100%)' }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: '55vw', y: '55vh' }}
            transition={commonTransition}
          />

          {/* Nhân vật trái */}
          <motion.div
            className="char1 absolute top-0 left-0 w-1/2 h-1/2 flex items-start justify-start"
            initial={{ x: 0, y: 0 }}
            animate={{ x: '-45vw', y: '-45vh' }}
            transition={commonTransition}
          >
            <Image
              src={Img1}
              alt="Pink cartoon character"
              className="block relative top-0 left-0 w-4/5"
              priority
            />
          </motion.div>

          {/* Nhân vật phải */}
          <motion.div
            className="char2 absolute bottom-0 right-0 w-1/2 h-1/2 flex items-end justify-end"
            initial={{ x: 0, y: 0 }}
            animate={{ x: '45vw', y: '45vh' }}
            transition={commonTransition}
          >
            <Image
              src={Img2}
              alt="Stylized magnifying glass"
              className="block relative bottom-0 right-0 w-[120%]"
              priority
            />
          </motion.div>

          {/* Hai thanh dấu bằng */}
          <div className="transform-3d">
            <motion.div
              className="bar-left absolute top-1/2 left-1/4 w-[100px] h-[22px] bg-[#FEEE52] rounded-[4px] -translate-y-[120%] -translate-x-[70%] -rotate-[25deg]"
              initial={{ x: 0, y: 0 }}
              animate={{ x: '-60vw', y: '-60vh' }}
              transition={commonTransition}
            />
            <motion.div
              className="bar-right absolute top-1/2 right-1/4 w-[100px] h-[22px] rounded-[4px] bg-[#FEEE52] translate-y-[120%] translate-x-[70%] -rotate-[25deg]"
              initial={{ x: 0, y: 0 }}
              animate={{ x: '60vw', y: '60vh' }}
              transition={commonTransition}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
