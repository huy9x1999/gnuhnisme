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
    <header className="z-50 2xl:w-auto w-50 fixed left-[66px] 2xl:top-[52px] top-[32px]">
      <Link href="/" className="cursor-pointer">
        {check ? (
          <Image src={logoBlue} alt="logo" className="w-full" />
        ) : (
          <Image src={logo} alt="logo" className="w-full" />
        )}
      </Link>
    </header>
  );
};

export default Header;
