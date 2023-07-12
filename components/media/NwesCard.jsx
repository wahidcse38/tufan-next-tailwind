import Image from "next/image";
import React from "react";
import img from "../../assets/img/news.png";
import Button from "./../common/Button";

function NwesCard({ language, media }) {
  return (
    <div>
      <div className="bg-brightGray">
        <div className="w-full relative" style={{ aspectRatio: 2.14 }}>
          <Image src={img} alt="image" fill className="object-contain" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl text-charlestonGreen font-bold capitalize mb-2">
            {language == "en" ? media.title_en : media.title_bn}
          </h3>
          <span className="text-2xl text-venetianRed font-normal ">
            {language == "en" ? media.position_en : media.position_bn}
          </span>
          <p className="paragraph mt-5">
            {language == "en" ? media.short_des_en : media.short_des_bn}
          </p>
        </div>
      </div>
      <Button
        path={`/media/${media.id}`}
        title={language == "en" ? "Read More" : "আরো পড়ুন"}
      />
    </div>
  );
}

export default NwesCard;
