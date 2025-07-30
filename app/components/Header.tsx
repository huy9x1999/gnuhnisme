import Image from 'next/image'
import React from 'react'
import logo from "@/public/images/logo.png";

const Header = () => {
  return (
    <div><header className="z-50 2xl:w-auto w-50 fixed left-[66px] 2xl:top-[52px] top-[32px]">
          <Image src={logo} alt="logo" className="w-full" />
        </header></div>
  )
}

export default Header