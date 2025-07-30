import React from 'react'

import textPing from "@/public/images/text-ping.svg";
import CharPing1 from "@/public/images/char-ping-1.svg";
import CharPing2 from "@/public/images/char-ping-2.svg";
import Image from 'next/image';

const Contact = () => {
  return (
    <div className='relative bg-[#007DC5] w-screen h-screen'>
            {/* <Image className='' alt=''  src={CharPing1} /> */}
            <Image className='absolute left-0 w-full h-full object-cover' alt='' src={CharPing2} />
            <div className='absolute w-[25%] top-[12%] right-[5%]'>
                <Image className='block w-full h-auto' src={textPing} alt='' />
            </div>
    </div>
  )
}

export default Contact