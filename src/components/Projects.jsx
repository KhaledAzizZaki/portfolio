import React from "react";
import { PROJECTS } from "../constants";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <Fade direction="down" duration={1000} triggerOnce>
        <h1 className="my-20 text-center text-4xl">Projects</h1>
      </Fade>
      <div>
        {PROJECTS.map((data, index) => (
          <div
            key={index}
            className="mb-10 flex flex-wrap lg:justify-center lg:gap-10"
          >
            <div className="max-w-full lg:w-1/4">
              <Fade direction="left" duration={1000} triggerOnce>
                <img
                  src={data.image}
                  alt={data.title}
                  // width={150}
                  // height={150}
                  className="mb-6 rounded-2xl w-[550px]"
                />
              </Fade>
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <Fade direction="right" duration={1000} triggerOnce>
                <h6 className="mb-2 font-semibold">{data.title}</h6>
                <p className="mb-4 text-neutral-400">{data.description}</p>
                <div className="flex flex-wrap gap-3">
                  {data.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5 pt-5">
                  <a
                    href={data.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-green-600 hover:underline"
                  >
                    <FiExternalLink /> Live
                  </a>
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-green-600 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
