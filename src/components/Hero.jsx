import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/khaledAzizZaki.jpg";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <Fade direction="left" cascade triggerOnce>
              <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                KHALED AZIZ ZAKI
              </h1>

              <span className="bg-gradient-to-r from-lime-300  to-green-500 bg-clip-text text-4xl tracking-tight text-transparent">
                Full Stack Developer
              </span>

              <p className="my-2 max-w-xl py6 font-light tracking-tighter">
                {HERO_CONTENT}
              </p>

              <div className="space-x-5 mt-10">
                <a
                  href="#contact"
                  className="px-[1px] py-[1px] bg-gradient-to-r from-lime-300 to-green-500 rounded-lg inline-block"
                >
                  <span className="block px-6 py-2 rounded-lg bg-neutral-950 text-white text-sm">
                    Contact Me
                  </span>
                </a>

                <a
                  href="https://drive.google.com/file/d/1zzz84d4kU7VYDwAuqggZn4hcKb9RrFLA/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-[1px] rounded-lg bg-gradient-to-r from-lime-300 to-green-500"
                >
                  <span className="block rounded-lg px-6 py-2 text-sm font-medium border border-transparent text-black">
                    Resume
                  </span>
                </a>
              </div>
            </Fade>
          </div>
        </div>
        <div className="w-full lg:w-1/2 pt-10  lg:p-8">
          <Fade direction="right" delay={2000} duration={1300} triggerOnce>
            <div className="flex justify-center">
              <img
                src={profilePic}
                alt="Khaled Aziz Zaki"
                className="rounded-2xl max-w-[550px] max-h-[550px]"
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hero;
