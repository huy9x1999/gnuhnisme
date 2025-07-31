import React from 'react'

import TextHome from '@/public/images/text-home.png'
import TextWorks from '@/public/images/text-works.png'
import TextContent from '@/public/images/text-contact.png'
import Image from 'next/image'
import Link from 'next/link'

const SupperMenu = () => {
  return (
    <div className="font-bold text-2xl text-[#007DC5] 2xl:px-9 px-6 2xl:gap-10 gap-6 fixed bottom-6 right-6 rounded-[12px] bg-[#FEEE52] 2xl:min-h-16 min-h-12 flex items-center justify-between">
          <Link href="/work" className="cursor-pointer 2xl:scale-0 scale-[0.7]"><Image src={TextWorks} alt="" className=""/></Link>
          <Link href="/home" className="cursor-pointer 2xl:scale-0 scale-[0.7]"><Image src={TextHome} alt="" className=""/></Link>
          <Link href="/contact" className="cursor-pointer 2xl:scale-0 scale-[0.7]"><Image src={TextContent} alt="" className=""/></Link>
        </div>
  )
}

export default SupperMenu