import React from "react";
import SectionTitleAndHeading from "../common/SectionTitleAndHeading";
import Slider from "./Slider";
import Link from "next/link";

function SliderSection() {
  return (
    <div className="bg-venetianRed mt-24">
      <div className="container py-16">
        <div className="text-center text-white font-normal mb-16">
          <p className="text-2xl font-angkor mb-6 ">Our Events</p>
          <h3 className="text-4xl lg:px-16 xl:px-24 mx-auto">
            Stay updated and mark your calendars to make a difference in the
            lives of those in need.
          </h3>
        </div>
        <div className="mb-6">
          <Slider />
        </div>
        <div>
          <Link href="/events">
            <button className="flex justify-center py-3 border border-white rounded bg-venetianRed text-white font-normal font-angkor text-2xl w-full line-clamp-1">
              View All Events
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SliderSection;
