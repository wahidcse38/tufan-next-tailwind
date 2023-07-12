import React from "react";
import SectionTitleAndHeading from "../common/SectionTitleAndHeading";
import Button from "../common/Button";

function DonationOverview() {
  return (
    <div className="container">
      <div className=" bg-brightGray mt-24">
        <div className="text-center py-14 px-3 md:px-5 lg:px-16 xl:px-24">
          <SectionTitleAndHeading
            title="Make Donation"
            heading="Every donation, no matter how small, can make a big difference in the lives of those affected"
          />
          <div className="flex justify-center items-center mt-10">
            <div className="p-5 text-center border-r-4 border-venetianRed">
              <p className="heading mb-0.5">RAISED</p>
              <span className="text-4xl font-normal text-venetianRed">
                40,500 BDT
              </span>
            </div>
            <div className="p-5 text-center">
              <p className="heading mb-0.5">GOAL</p>
              <span className="text-4xl font-normal text-venetianRed">
                60,000 BDT
              </span>
            </div>
          </div>
        </div>
      </div>
      <Button path="#" title="Donate" />
    </div>
  );
}

export default DonationOverview;
