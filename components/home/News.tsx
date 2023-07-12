import Image from "next/image";
import React from "react";
import image from "@/assets/img/fire.png";
import { newsButton } from "../../utils/svg.js";

const News = () => {
  const categories = [
    "Bongo Bazar Fire Burns Over Tk 1,000 Core Investments Into Ashes",
    "Bongo Bazar Fire Burns Over Tk 1,000 Core Investments Into Ashes",
    "Bongo Bazar Fire Burns Over Tk 1,000 Core Investments Into Ashes",
  ];
  return (
    <div>
      {categories.map((item, i) => {
        return (
          <div
            key={i}
            className="mb-2.5 py-5 px-7 flex gap-3 items-center bg-brightGray rounded"
          >
            <Image
              src={image}
              alt="news"
              className=" border-8 border-indianRed rounded-full"
            />
            <div>
              <p className="text-2xl font-bold line-clamp-2">{item}</p>
              <p className="text-venetianRed text-lg">
                April 4, 2023 - 1:16 PM
              </p>
            </div>
          </div>
        );
      })}
      <button className="py-5 font-normal bg-venetianRed text-white w-full text-2xl flex justify-center">
        {newsButton}
      </button>
    </div>
  );
};

export default News;
