import React from "react";
import SectionTitleAndHeading from "../../common/SectionTitleAndHeading";

import relife from "../../../assets/img/relife.png";
import Image from "next/image";
import Button from "./../../common/Button";

function ResultAndImpact({ data, language }) {
  // console.log(data.gallerySelect && JSON.parse(data.gallerySelect));
  return (
    <div className="container">
      <div className="mt-24">
        <SectionTitleAndHeading
          title={language == "en" ? "Result and Impact" : "ফলাফল এবং প্রভাব"}
          heading={
            language == "en" ? data.result_title_en : data.result_title_bn
          }
        />
        <p className="paragraph">
          {language == "en" ? data.result_des_en : data.result_des_bn}
        </p>
        <div className="text-center mt-16">
          <p className="text-xl font-bold text-charlestonGreen w-1/2 mx-auto relative pt-1.5">
            <span className="text-6xl absolute -left-10 top-0 text-venetianRed">
              &ldquo;
            </span>
            {language == "en" ? data.thanks_note_en : data.thanks_note_bn}
          </p>
          <p className="text-lg font-normal text-venetianRed pt-5">
            - {language == "en" ? data.thanks_from_en : data.thanks_from_bn}
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full relative">
              {/* <video controls className="w-full h-full">
                <source src="" type="video/mp4"></source>
              </video> */}
              <Image
                src={
                  data.gallerySelect && JSON.parse(data.gallerySelect).imageSrc
                }
                alt="gallery image"
                fill
                className="object-contain"
                style={{ aspectRatio: 1.285 }}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              {data.gallerySelect &&
                JSON.parse(data.gallerySelect)?.images.map((item, i) => {
                  return (
                    <div
                      className="w-full relative"
                      style={{ aspectRatio: 1.3 }}
                      key={i}
                    >
                      <Image
                        src={item}
                        alt="relife"
                        fill
                        className="object-contain"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="mt-5">
            <Button
              path={`/gallery/${
                data.gallerySelect && JSON.parse(data.gallerySelect).id
              }`}
              title={language == "en" ? "View Gallery" : "গ্যালারি দেখুন"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultAndImpact;
