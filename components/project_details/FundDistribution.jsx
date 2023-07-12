import React from "react";
import SectionTitleAndHeading from "./../common/SectionTitleAndHeading";
import Image from "next/image";

import img from "../../assets/img/Component.png";
import FundCollectionInParentage from "./../common/FundCollectionInParcentage";

function FundDistribution() {
  return (
    <div className="container">
      <div className="mt-24">
        <SectionTitleAndHeading
          title="Fund Distribution"
          heading="Our transparent fund distribution process ensures that your donated funds are distributed equitably and effectively to support those in need."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center mt-24">
          <Image
            src={img}
            alt="img"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // className="w-full h-auto max-h-[400px]"
            // className="h-auto"
          />
          <div className="flex flex-col gap-7">
            <FundCollectionInParentage
              value={35}
              title="Direct relief to disaster victims"
              description="This portion of the funds will be allocated directly to aid disaster victims."
              bg="white"
              color="charlestonGreen"
            />
            <FundCollectionInParentage
              value={35}
              title="Overhead costs"
              description="These funds will be used to cover the costs of operating and managing the relief efforts."
              bg="brightGray"
              color="charlestonGreen"
            />
            <FundCollectionInParentage
              value={35}
              title="Community rebuilding"
              description="Mobilize volunteers, staff, and resources to deliver aid to the affected communities."
              bg="indianRed"
              color="white"
            />
            <FundCollectionInParentage
              value={35}
              title="disaster risk reduction and preparedness"
              description="Mobilize volunteers, staff, and resources to deliver aid to the affected communities."
              bg="venetianRed"
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundDistribution;
