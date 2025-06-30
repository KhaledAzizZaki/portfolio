import React from "react";
import aboutImg from "../assets/about.jpg";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <Fade direction="left" duration={2000} triggerOnce>
            <div className="flex items-center justify-center">
              <img
                className="rounded-2xl max-w-[550px] max-h-[550px]"
                src={aboutImg}
                alt=""
              />
            </div>
          </Fade>
        </div>
        <div className="w-full lg:w-1/2">
          <Fade direction="right" duration={2000} triggerOnce>
            <div className="w-full justify-center  lg:justify-start">
              <p className="my-2 max-w-xl py-6">
                Hey, I’m Khaled Aziz Zaki — a curious mind with a love for
                building and a constant drive to grow. My journey into web
                development started with a desire to turn ideas into real,
                interactive experiences, and that passion continues to fuel me
                every day.
                <br />
                <br />
                What drives me most is solving problems with creativity, whether
                it’s streamlining a user experience or bringing structure to
                complex logic. I enjoy working collaboratively, learning from
                others, and always pushing for better solutions.
                <br />
                <br />
                Outside of work, you’ll usually find me on the football field,
                exploring new games, or planning my next travel adventure. I
                believe those moments away from the screen are just as important
                — they keep me inspired and ready to tackle the next challenge.
                <br />
                <br />
                Thanks for stopping by — I’d love to connect and create
                something meaningful together.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
