import React from "react";
import SectionTitleAndHeading from "../../common/SectionTitleAndHeading";
import Button from "../../common/Button";

function DonationOverview({ data, language }) {
  return (
    <div className="container">
      <div className=" bg-brightGray mt-24">
        <div className="text-center py-14 px-3 md:px-5 lg:px-16 xl:px-24">
          <SectionTitleAndHeading
            title={language == "en" ? "Make Donation" : "দান করুন"}
            heading={
              language == "en"
                ? "Every donation, no matter how small, can make a big difference in the lives of those affected"
                : "প্রতিটি দান, যতই ছোট হোক না কেন, ক্ষতিগ্রস্তদের জীবনে বড় পরিবর্তন আনতে পারে"
            }
          />
          <div className="flex justify-center items-center mt-10">
            <div className="p-5 text-center border-r-4 border-venetianRed">
              <p className="heading mb-0.5">
                {language == "en" ? "RAISED" : "উত্থাপিত"}
              </p>
              <span className="text-4xl font-normal text-venetianRed">
                {language == "en" ? data.raised_en : data.raised_bn} BDT
              </span>
            </div>
            <div className="p-5 text-center">
              <p className="heading mb-0.5">
                {language == "en" ? "GOAL" : "লক্ষ্য"}
              </p>
              <span className="text-4xl font-normal text-venetianRed">
                {language == "en" ? data.goal_en : data.goal_bn} BDT
              </span>
            </div>
          </div>
        </div>
      </div>
      <Button path="/donation" title={language == "en" ? "Donate" : "দান করুন"} />
    </div>
  );
}

export default DonationOverview;
