import React from "react";
import SectionTitleAndHeading from "../common/SectionTitleAndHeading";
import Image from "next/image";

import img from "../../assets/img/gallery1.png";
import DateTime from "./DateTime";
import Details from "./Details";
import ShareCard from "../common/ShareCard";
import Form from "./Form";

function DetailContainer() {
  return (
    <div className="container">
      <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionTitleAndHeading
            title="Upcoming Event"
            heading="Disaster Preparedness Training Program"
          />
          <div className="w-full relative my-16" style={{ aspectRatio: 1.3 }}>
            <Image src={img} alt="image" fill className="object-contain" />
          </div>
          <div className="my-16">
            <DateTime />
          </div>
          <div>
            <Details />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <Form />
          <ShareCard
            title="Share Event"
            heading="Help us reach more people and make a bigger difference in the lives of those in need."
          />
        </div>
      </div>
    </div>
  );
}

export default DetailContainer;
