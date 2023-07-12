import React from "react";
import AboutDetails from "./AboutDetails";
import AboutMap from "./AboutMap";
import SectionTitleAndHeading from "./../common/SectionTitleAndHeading";
import Button from "./../common/Button";

const About = () => {
  return (
    <section className="container">
      <div className="mt-24">
        <SectionTitleAndHeading
          title="About Us"
          heading="Supporting communities affected by disasters across Bangladesh."
        />
        <p className="paragraph mt-4 mb-10">
          Our organization is dedicated to providing disaster response and
          relief services to communities across Bangladesh. We believe that
          everyone deserves access to essential support and resources in times
          of crisis, and we are committed to making a positive impact in the
          lives of those affected by disasters. Together, we bring a diverse
          range of skills, expertise, and perspectives to our work, and we are
          united in our passion for helping those in need.
        </p>
        <Button path="/about_us" title="Learn More" />
      </div>

      {/* <div className="grid grid-cols-2 gap-16">
        <div className="col-span-1">
          <AboutDetails />
        </div>
        <div className="col-span-1 ">
          <AboutMap />
        </div>
      </div> */}
    </section>
  );
};

export default About;
