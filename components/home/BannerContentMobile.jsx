import React from "react";
import {
  bannerHeadlineMobile,
  incidentButton,
  requestButton,
  volunteerButton,
} from "../../utils/svg.js";
import incident from "../../assets/img/incident.svg";
import logistics from "../../assets/img/logistics.svg";
import volunteer from "../../assets/img/volunteer.svg";
import Image from "next/image";
import Button from "./../common/Button";

const BannerContentMobile = () => {
  return (
    <div className="container px-6">
      <div>
        <div className="relative">
          {/* black area content start */}
          <div className="bg-charlestonGreen flex flex-col items-center">
            <div className="pt-20 text-center font-normal text-2xl font-angkor text-white">
              Streamlining Disaster Response Efforts:
            </div>
            <p className="pb-44 px-5 mt-6 text-white text-4xl text-center">
              Integrated Logistics Services for Faster, More Effective Relief
            </p>
          </div>
          {/* black area content end */}
          {/* icon start */}
          <div className="absolute w-full flex justify-around text-white top-[75%] z-50">
            <Image src={incident} alt="incident" />
          </div>
          {/* icon end */}
        </div>
        {/* card start */}
        <div className="flex justify-between gap-5">
          <div className="text-center bg-brightGray flex flex-col justify-between">
            <p className="pt-32 text-2xl font-bold px-11">INCIDENT REPORT</p>
            <p className="text-lg pb-8 mt-5 px-11">
              To report an incident, please provide us with as much information
              as possible. Your timely report can help us respond more
              effectively and efficiently to the needs of disaster-affected
              communities.
            </p>
            <Button path="/incident_report" title="Report" />
          </div>
        </div>
        {/* card end */}
      </div>

      {/* card 2 start */}
      <div className="mt-24 relative">
        <div className=" text-center bg-brightGray flex flex-col justify-between ">
          <p className="pt-32 text-2xl font-bold px-11">LOGISTICS SERVICE</p>
          <p className="text-lg pb-8 mt-5 px-11">
            We understand the critical role that logistics plays in ensuring the
            timely delivery of aid and resources to affected communities, and we
            are committed to delivering innovative and effective solutions.
          </p>
          <Button path="/logistics_service" title="Request Service" />
        </div>
        <Image
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={logistics}
          alt="logistics"
        />
      </div>
      {/* card 2 end */}
      {/* card 3 start */}
      <div className="mt-24 relative">
        <div className=" text-center bg-brightGray flex flex-col justify-between ">
          <p className="pt-32 text-2xl font-bold px-11">
            VOLUNTEER REGISTRATION
          </p>
          <p className="text-lg pb-8 mt-5 px-11">
            As a volunteer, you will have the opportunity to work alongside our
            dedicated team to provide support to communities affected by
            disasters and make a real difference in their lives.
          </p>
          <Button path="/login" title="Register" />
        </div>
        <Image
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={volunteer}
          alt="volunteer"
        />
      </div>
      {/* card 3 end */}
    </div>
  );
};

export default BannerContentMobile;
