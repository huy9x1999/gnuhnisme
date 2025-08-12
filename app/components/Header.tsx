import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";
import logoBlue from "@/public/images/logo-blue.svg";
import Link from "next/link";
interface Prop {
  check?: boolean;
}

const Header = ({ check }: Prop) => {
  return (
    <header className="z-50 w-auto extraXl:h-[95px] h-[78px] fixed left-[66px] 2xl:top-[52px] top-[32px]">
      <Link href="/" className="cursor-pointer block h-full">
        {check ? (
          <Image src={logoBlue} alt="logo" sizes="100%" className="w-full h-full" />
        ) : (
          <Image src={logo} alt="logo" sizes="100%" className="w-full h-full" />
        )}
      </Link>
    </header>
  );
};

export default Header;
