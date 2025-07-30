'use client';
import Image from 'next/image'
import bg from '@/public/images/spiral_clean_reverse.gif'; // Đặt ảnh nền trong thư mục public

export default function BackgroundSpiral() {
   return (
    <div className=" fixed w-screen h-screen">
        <Image
          src={bg} // Đặt ảnh trong thư mục public
          alt="Rotating"
          className="w-full h-full object-cover"
      />
    </div>
  );
}
