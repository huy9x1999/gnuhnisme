import React from "react";
import Contact from "../components/Contact";
import Image from "next/image";
import avatar from "@/public/images/avatar.png";

const About = () => {
  return (
    <div className="bg-[#007DC5] min-h-screen relative">
      <div className="2xl:mx-[224px] mx-[100px] pt-[30vh]">
        <div className="flex gap-[60px] items-end">
          <div className="flex-shrink-0 2xl:w-[492px] 2xl:h-[672px] w-[300px] h-[410px]">
            <Image
              src={avatar}
              alt=""
              sizes="100%"
              className="w-full h-full object-fill"
            />
          </div>
          <div className="grow text-white">
            <h3 className=" text-[#FEEE52] 2xl:text-[60px] text-[46px]">
              HI, I&apos;M HONG NHUNG
            </h3>
            <p className="font-roboto text-[30px] leading-[32px]">
              I am a designer with a passion for creating impactful packaging
              and publication designs. Looking towards the future, I envision a
              stable career where I can leverage my dedication and creativity to
              shape visual experiences that resonate deeply.
            </p>
          </div>
        </div>
        <div className="mt-[100px] 2xl:mx-[200px] mx-100px 2xl:pl-[90px] pl-[60px] text-white">
          <p className="font-roboto text-[21px] leading-[28px]">
            I aspire to make a meaningful impact in the design industry by
            crafting captivating visual stories that not only stand out but also
            add value to brands and products. If you&apos;re interested in
            working together, please don&apos;t hesitate to reach out.
          </p>
          <div className="flex 2xl:gap-20 gap-[60px] mt-[50px]">
            <div className="flex-1">
              <h4 className="text-[#FEEE52] text-[36px]">EDUCATION</h4>
              <div className="text-[21px] font-light text-white font-roboto mt-[26px]">
                <p>Graphic Design and Digital</p>
                <p className="font-medium">University of Greenwich</p>
                <p>(Hanoi campus)</p>
                <p className="italic font-extralight">2021 - 2025</p>
                <p>Beginner Hand Drawing Course</p>
                <p className="font-medium">Art Workout Academy</p>
                <p className="italic font-extralight">2025</p>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-[#FEEE52]  text-[36px]">TECHNIQUE SKILL</h4>
              <div className="text-[21px] font-light text-white font-roboto mt-[26px]">
                <p>Design thinking</p>
                <p>Illustrator</p>
                <p>Photoshop</p>
                <p>InDesign</p>
                <p>Figma</p>
              </div>
            </div>
          </div>
          <div className="flex 2xl:gap-20 gap-[60px] mt-[50px]">
            <div className="flex-1">
              <h4 className="text-[#FEEE52]  text-[36px]">EXPERIENCE</h4>
              <div className="text-[21px] font-light text-white font-roboto mt-[26px]">
                <h5 className="font-semibold">VCCORP</h5>
                <p>
                  Design slides, pop-up stores, standees, and other products for
                  the event.
                </p>
                <p className="italic font-extralight">2024</p>
              </div>
              <div className="text-[21px] font-light text-white font-roboto mt-[43px]">
                <h5 className="font-semibold">Wave Exhibition</h5>
                <p>
                  Participated in the exhibition as the project designer for the
                  adolescent-focused &quot;ME AND YOU&quot; project.
                </p>
                <p className="italic font-extralight">2024</p>
              </div>
              <div className="text-[21px] font-light text-white font-roboto mt-[43px]">
                <h5 className="font-semibold">49 Collective Exhibition</h5>
                <p>
                  Participated in the exhibition as the designer of the project
                  &quot;Auralis Academy&quot; for children.
                </p>
                <p className="italic font-extralight">2025</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-[110px]">
                <h4 className="text-[#FEEE52]  text-[36px] ">INTERESTED IN</h4>
                <div className="text-[21px] font-light text-white font-roboto mt-[26px]">
                  <p>Branding & identity</p>
                  <p>UIUX</p>
                  <p>Packaging</p>
                  <p>Publication</p>
                </div>
              </div>
              <div className="mb-[110px]">
                <h4 className="text-[#FEEE52]  text-[36px] ">LANGUAGE</h4>
                <div className="text-[21px] font-light text-white font-roboto mt-[26px]">
                  <p>Vietnamese (Native)</p>
                  <p>English</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right mt-[150px]">
            <p className="2xl:text-[112px] text-[#FEEE52]  text-[80px] 2xl:leading-[120px] leading-[84px]">LET&apos;S WORK TOGETHER!</p>
            <p className="font-roboto text-white text-[32px]">Contact me via the information below  </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default About;
