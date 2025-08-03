import React from "react";

import textPing from "@/public/images/text-ping.svg";
import CharPing2 from "@/public/images/char-ping.svg";
import BoxUp from "@/public/images/box-up.svg";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="relative bg-[#007DC5] w-full h-screen">
      <div className="w-[60%] absolute left-0 bottom-0">
        <div className="relative">
          <Image className="w-full" alt="" src={CharPing2} />
          <div className="absolute top-[16%] left-[10%] w-[56%]">
            <Image className="" alt="" src={BoxUp} />
          </div>
        </div>
      </div>

      <div className="absolute w-[25%] top-[12%] right-[5%]">
        <Image className="block w-full h-auto" src={textPing} alt="" />
      </div>
    </div>
  );
};

export default Contact;
