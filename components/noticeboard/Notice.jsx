import Image from "next/image";
import React from "react";

import img from "../../assets/img/notice.png";
import Button from "./../common/Button";

function Notice({ notice, language }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center p-10 bg-brightGray">
        <div
          className="w-1/2 md:w-full xl:w-1/3 relative mx-auto"
          style={{ aspectRatio: 1 }}
        >
          <Image src={img} alt="Image" fill className="object-contain" />
        </div>
        <div className="">
          <h3 className="text-2xl text-charlestonGreen font-bold capitalize mb-2">
            {language == "en" ? notice.title_en : notice.title_bn}
          </h3>
          <span className="text-2xl text-venetianRed font-normal ">
            {language == "en" ? notice.position_en : notice.position_bn}
          </span>
          <p className="paragraph mt-5">
            {language == "en" ? notice.short_des_en : notice.short_des_bn}
          </p>
        </div>
      </div>
      <Button
        path={`/noticeboard/${notice.id}`}
        title={language == "en" ? "Read More" : "আরো পড়ুন"}
      />
    </div>
  );
}

export default Notice;
