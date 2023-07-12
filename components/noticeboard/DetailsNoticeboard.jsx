import Image from "next/image";
import React from "react";

import img from "../../assets/img/fire_img.png";
import SectionTitleAndHeading from "./../common/SectionTitleAndHeading";
import ShareCard from "../common/ShareCard";

function DetailsNoticeboard({ data, language }) {
  return (
    <div className="container">
      <div className="mt-24 flex flex-col lg:flex-row justify-between items-start gap-16 xl:gap-32">
        <div className="">
          <div>
            <h3 className="section-heading mb-4">
              {language == "en" ? data.title_en : data.title_bn}
            </h3>
            <span className="">
              {" "}
              {language == "en" ? data.position_en : data.position_bn}
            </span>
          </div>
          <div className="mt-12">
            <div
              className="paragraph"
              dangerouslySetInnerHTML={{
                __html:
                  language == "en" ? data.description_en : data.description_bn,
              }}
            />
          </div>
        </div>
        <ShareCard
          title={language == "en" ? "Share Story" : "গল্প শেয়ার করুন"}
          heading={
            language == "en"
              ? "Help us reach more people and make a bigger difference in the lives of those in need."
              : "আমাদের আরও লোকেদের কাছে পৌঁছাতে এবং যাদের প্রয়োজন তাদের জীবনে একটি বড় পরিবর্তন করতে সহায়তা করুন।"
          }
        />
      </div>
    </div>
  );
}

export default DetailsNoticeboard;
