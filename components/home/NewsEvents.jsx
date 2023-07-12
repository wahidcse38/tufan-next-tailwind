import React from "react";
import Image from "next/image";
import News from "./News";
import Events from "./Events";
import { newsEventsHeadline } from "../../utils/svg.js";
import SectionTitleAndHeading from "../common/SectionTitleAndHeading";
import Button from "../common/Button";
import map from "../../assets/img/new_map.png";
import fire from "../../assets/img/fire_icon.png";
import cyclone from "../../assets/img/cyclone_icon.png";
import flood from "../../assets/img/flood_icon.png";
import ContactLine from "../common/ContactLine";

const NewsEvents = () => {
  return (
    <div className="container">
      <div className="mt-24">
        <SectionTitleAndHeading
          title="Latest News and Updates"
          heading="Stay informed about the latest developments in disaster response and relief efforts"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          <div className="w-full relative" style={{ aspectRatio: 0.74 }}>
            <Image src={map} alt="map" fill className="object-contain" />
          </div>
          <div className="grid gap-5">
            <ContactLine
              img={fire}
              name="Bongobazar Fire - Dhaka"
              value="April 4, 2023 - 1:16 PM"
            />
            <ContactLine
              img={cyclone}
              name="Tropical Cyclone Mocha moved over the Bay of Bengal "
              value="April 4, 2023 - 1:16 PM"
            />
            <ContactLine
              img={flood}
              name="Sunamganj Flood destroys 100 homes"
              value="April 4, 2023 - 1:16 PM"
            />
            <Button path={"/noticeboard"} title="View Noticeboard" />
          </div>
        </div>
      </div>
    </div>
    // <section className="container p-6 mt-24">
    //   {newsEventsHeadline}

    //   <p className="mt-6 text-4xl w-4/6">
    //     Stay informed about the latest developments in disaster response and
    //     relief efforts
    //   </p>
    //   <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-14">
    //     <div className="md:col-span-2 ">
    //       <News />
    //     </div>

    //     <div className="md:col-span-1 ">
    //       <Events />
    //     </div>
    //   </div>
    // </section>
  );
};

export default NewsEvents;
