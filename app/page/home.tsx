"use client";

import React from "react";
import BackgroundSpiral from "../components/BackgroundSpiral";
import SpiralPage from "../components/SpiralPage";
import CloseLest from "../components/CloseLest";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import SupperMenu from "../components/SupperMenu";
import Contact from "../components/Contact";
import useSmoothScroll from "../hook/useSmoothScroll";

const HomePage = () => {
  // useSmoothScroll();

  return (
    <div
      id="scroll-container"
      className="relative overflow-x-hidden "
    >
      {/* <div className="lenis relative will-change-transform"> */}
        <Header />
        <BackgroundSpiral />
        <HeroSection />
        <SpiralPage />
        <CloseLest />
        <Contact />
        <SupperMenu />
      {/* </div> */}
    </div>
  );
};

export default HomePage;
