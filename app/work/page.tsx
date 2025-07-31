import Image from "next/image";
import React from "react";
import textWork1 from "@/public/images/work-text-1.png";
import textWork2 from "@/public/images/work-text-2.svg";
import textWork3 from "@/public/images/work-text-3.png";
import textWork4 from "@/public/images/work-text-4.png";
import textWork5 from "@/public/images/work-text-5.png";
import textWork6 from "@/public/images/work-text-6.png";
import textWork7 from "@/public/images/work-text-7.png";
import Contact from "../components/Contact";
import SupperMenu from "../components/SupperMenu";
import Header from "../components/Header";

const index = () => {
  return (
    <div className="w-full z-30">
      <Header />
      <div className="bg-[#007DC5] w-full overflow-x-hidden flex justify-center items-center flex-col">
        <div className="pt-[30vh] w-[44%]">
          <Image src={textWork1} alt="404 Not Found" />
        </div>
        <div className="h-screen w-[44%] flex items-center justify-center">
          <Image src={textWork2} alt="404 Not Found" />
        </div>
        <div className="h-screen w-[44%] flex items-center justify-center">
          <Image src={textWork3} alt="404 Not Found" />
        </div>
        <div className="h-screen w-[44%] flex items-center justify-center">
          <Image src={textWork4} alt="404 Not Found" />
        </div>
        <div className="h-screen w-[44%] flex items-center justify-center">
          <Image src={textWork5} alt="404 Not Found" />
        </div>
        <div className="h-screen w-[44%] flex items-center justify-center">
          <Image
            src={textWork6}
            alt="404 Not Found "
            className="color-[yellow]"
          />
        </div>
        <div className="h-screen w-[44%] flex items-center justify-center group">
          <Image
            src={textWork7}
            alt="404 Not Found group-hover:bg-[yellow]"
           />
        </div>
      </div>
      <Contact />
      <SupperMenu />
    </div>
  );
};

export default index;
