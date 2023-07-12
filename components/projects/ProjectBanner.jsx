import { completed } from "@/utils/svg";
import React from "react";
import { useAuthContext } from "../../context/AuthContext";

const ProjectBanner = ({ state, sateState }) => {
  const { language } = useAuthContext();
  return (
    <section className="h-[423px]">
      <div className="relative bg-venetianRed h-64">
        <div className="container absolute top-[25%] right-1/2 translate-x-1/2">
          <div className="h-80 bg-black flex justify-center items-center">
            <p className="text-white font-angkor text-44px font-normal text-center">
              {language == "en" ? "Projects" : "প্রকল্প"}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-around">
            <button
              onClick={() => sateState("upcoming")}
              className={`flex justify-center py-3 ${
                state === "upcoming" ? "bg-venetianRed" : "bg-indianRed"
              }  text-white font-normal font-angkor text-2xl w-full`}
            >
              {language == "en" ? "Upcoming" : "আসন্ন"}
            </button>
            <button
              onClick={() => sateState("completed")}
              className={`flex justify-center py-3 ${
                state === "completed" ? "bg-venetianRed" : "bg-indianRed"
              } text-white font-normal font-angkor text-2xl w-full`}
            >
              {language == "en" ? "Completed" : "সম্পন্ন"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBanner;
