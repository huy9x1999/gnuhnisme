import { useLayoutEffect, useState } from "react";

export  function ScrollChangeHeader() {
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 100); // Nếu cuộn quá 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const stickyClass = scrolled
    ? "2xl:mt-[10px] -mt-[45px] min-h-[74px] text-[36px] leading-[38px]"
    : "text-[112px] 2xl:pt-[265px] font-bold pt-[120px] leading-[128px]";
  return { stickyClass, scrolled };
}


export function getClassHeadOfMyWorksText (check:{check:boolean}){
  return check.check
    ? "2xl:-mt-[20px] -mt-[45px] min-h-[74px] text-[36px] leading-[38px]"
    : "text-[112px] 2xl:pt-[150px] font-bold pt-[70px] leading-[128px]";
}