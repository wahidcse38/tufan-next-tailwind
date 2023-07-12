import Image from "next/image";
import React from "react";
import fireTank from "../../assets/img/fireTank.png";
import boat from "../../assets/img/boat.png";
import { projectsHeadline, browseProjects } from "../../utils/svg.js";

const Projects = () => {
  return (
    <section className="container p-6 mt-24">
      {projectsHeadline}

      <p className="mt-6 text-4xl w-4/6">
        Some of the most impactful projects undertaken in disaster response and
        logistics services
      </p>
      <div className="grid grid-cols-2 gap-2 mt-14">
        <div className="col-span-1">
          <Image src={fireTank} alt="projects" className="w-full h-full" />
        </div>
        <div className="col-span-1 grid grid-cols-2 gap-2 gap-y-2">
          <div className="grid gap-2">
            <Image src={boat} alt="projects" className="w-full h-full" />
            <Image src={boat} alt="projects" className="w-full h-full" />
          </div>
          <div className=" grid gap-2">
            <Image src={boat} alt="projects" className="w-full h-full" />
            <Image src={boat} alt="projects" className="w-full h-full" />
          </div>
        </div>
      </div>
      <button className="flex justify-center py-5 bg-venetianRed text-white w-full mt-1 text-2xl ">
        {browseProjects}
      </button>
    </section>
  );
};

export default Projects;
