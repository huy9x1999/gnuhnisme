import React from 'react'

import TextHome from '@/public/images/text-home.png'
import TextWorks from '@/public/images/text-works.png'
import TextContent from '@/public/images/text-contact.png'
import Image from 'next/image'
import Link from 'next/link'

const SupperMenu = () => {
  return (
    <div className="font-bold text-2xl text-[#007DC5]  fixed bottom-6 right-6 rounded-[12px] bg-[#FEEE52]  min-h-12 flex items-center justify-between">
          <Link href="/work" className="cursor-pointer grow px-5  bg-[#FEEE52] text-[20px] tracking-[1px]">WORK</Link>
          <Link href="/" className="cursor-pointer grow px-5 bg-[#FEEE52] text-[20px] tracking-[1px]">HOME</Link>
          <Link href="/" className="cursor-pointer grow px-5 bg-[#FEEE52] text-[20px] tracking-[1px]">CONTACT</Link>
        </div>
  )
}

export default SupperMenu