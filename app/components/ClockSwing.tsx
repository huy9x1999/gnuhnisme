'use client';
import Clock from '@/public/images/clock.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ClockSwing() {
  return (
    <div className="absolute 2xl:right-[12%] right-[0] top-[34%] z-20 w-[8%]">
      {/* Shadow (blur + trễ) */}
      <motion.div
        className="absolute top-0 left-0 z-0 blur-[2px]"
        style={{ transformOrigin: 'top center' }}
        animate={{ rotate: [0, 30, -30, 0] }}
        transition={{
          delay: 0.5,
          duration: 3,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        <Image src={Clock} alt="Clock" width={100} height={100} />
      </motion.div>

      {/* Clock (trước) */}
      <motion.div
        className="absolute top-0 left-0 z-10"
        style={{ transformOrigin: 'top center' }}
        animate={{ rotate: [0, 30, -30, 0] }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        <Image src={Clock} alt="Clock" width={100} height={100} />
      </motion.div>
      <div className="z-50 bg-[#007DC5] w-10 h-7 rounded-b-full absolute 2xl:right-[30%] right-[20%] -top-2" />
    </div>
  );
}
