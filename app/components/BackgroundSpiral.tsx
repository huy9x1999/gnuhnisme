
"use client";
import Image from "next/image";
// import bg from "@/public/images/spiral_clean_reverse.gif"; // Đặt ảnh nền trong thư mục public
// import bg from '@/public/video/spiral.mp4'

export default function BackgroundSpiral() {
  return (
    <div className="pointer-events-non fixed w-full h-screen">
      {/* <video autoPlay muted loop className="w-full h-full object-fill"><source src='/video/spiral.mp4' type="video/mp4"/></video> */}
      {/* <Image
        src={bg} // Đặt ảnh trong thư mục public
        alt="Rotating"
        className="w-full h-full object-cover"
      /> */}
    </div>
  );
}
