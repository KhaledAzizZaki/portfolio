import React from "react";
import { BiLogoFirebase } from "react-icons/bi";
import { FaGitAlt, FaJs, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { motion } from "motion/react";
import { animate } from "motion";
import { Fade } from "react-awesome-reveal";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-34">
      <Fade direction="up" duration={1000} triggerOnce>
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
      </Fade>
      <Fade direction="left" duration={2000} triggerOnce>
        <div className="flex flex-wrap items-center justify-center gap-4 ">
          {/* 1st */}
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
          </motion.div>
          {/* 2nd */}
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMongodb className="text-7xl text-green-500" />
          </motion.div>

          {/* 3rd */}
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiExpress className="text-7xl " />
          </motion.div>
          {/* 4th */}
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>
          {/* 5th */}
          <motion.div
            variants={iconVariants(2.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BiLogoFirebase className="text-7xl text-orange-500" />
          </motion.div>
          {/* 6th */}
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaGitAlt className="text-7xl text-red-500" />
          </motion.div>
          {/* 7th */}
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaJs className="text-7xl text-yellow-400" />
          </motion.div>
          {/* 8th */}
          <motion.div
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiTailwindcss className="text-7xl text-cyan-400" />
          </motion.div>
        </div>
      </Fade>
    </div>
  );
};

export default Technologies;
