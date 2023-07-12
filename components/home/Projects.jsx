import Image from "next/image";
import React from "react";
import fireTank from "../../assets/img/fireTank.png";
import boat from "../../assets/img/boat.png";
import project from "../../assets/img/project.png";
import donateImage from "../../assets/img/donate.png";
import { projectsHeadline, browseProjects } from "../../utils/svg.js";
import { donate } from "../../utils/svg.js";
import SectionTitleAndHeading from "../common/SectionTitleAndHeading";
import Button from "../common/Button";

const Projects = () => {
  return (
    <section className="container ">
      <div className="mt-24">
        <SectionTitleAndHeading
          title="Our Projects"
          heading="Some of the most impactful projects undertaken in disaster response and logistics services"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-16">
          <div className="bg-brightGray grid  grid-cols-1">
            <div className="relative  w-full" style={{ aspectRatio: 1.7 }}>
              <Image
                src={donateImage}
                alt="img"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative">
              <div className="px-3 lg:px-11 pt-5 pb-24 sm:pb-20">
                <h6 className="heading mb-2.5">SUNAMGANJ FLOOD </h6>
                <p className="paragraph pb-4">
                  In the aftermath of the flood, many people are left stranded
                  without access to basic necessities such as food, clean water,
                  and medical care.
                </p>
                <div>
                  <span className="text-venetianRed font-normal text-lg">
                    40,500 of 60,000 raised
                  </span>
                  <div className="w-full bg-charlestonGreen rounded-full h-2.5 mt-0.5">
                    <div
                      className="bg-venetianRed h-2.5 rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 w-full ">
                <Button path="/projects" title="Browse More Projects" />
              </div>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="relative group h-full">
              <div className="w-full relative" style={{ aspectRatio: 2.1 }}>
                <Image
                  src={project}
                  alt="boat"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center items-center opacity-0 bg-indianRed  group-hover:opacity-90 absolute top-0 left-0 h-full w-full"></div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                <div className="flex-row text-center">
                  <h1 className="text-white text-2xl font-bold">
                    SUNAMGANJ FLOOD
                  </h1>
                  <p className="text-lg text-white font-normal text-center px-16 mt-5">
                    We responded quickly to the flood, providing emergency
                    relief supplies such as food, shelter, and medical care to
                    those affected.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group  h-full">
              <div className="w-full relative" style={{ aspectRatio: 2.1 }}>
                <Image
                  src={project}
                  alt="boat"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex justify-center items-center opacity-0 bg-indianRed  group-hover:opacity-90 absolute top-0 left-0 h-full w-full"></div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                <div className="flex-row text-center">
                  <h1 className="text-white text-2xl font-bold">
                    SUNAMGANJ FLOOD
                  </h1>
                  <p className="text-lg text-white font-normal text-center px-16 mt-5">
                    We responded quickly to the flood, providing emergency
                    relief supplies such as food, shelter, and medical care to
                    those affected.
                  </p>
                </div>
              </div>
            </div>
            <Button path="/projects" title="Browse Projects" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
