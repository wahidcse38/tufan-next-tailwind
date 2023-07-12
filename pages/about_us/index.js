import React from "react";
import ProjectBanner from "@/components/projects/ProjectBanner";
import Banner from "@/components/common/Banner";

import Story from "../../components/about_us/Story";
import Gallery from "../../components/about_us/Gallery";
import Advisors from "../../components/about_us/Advisors";
import Partners from "../../components/about_us/Partners";

function AboutUs() {
  return (
    <>
      <Banner title="About Us" />
      <Story />
      <Gallery />
      <Advisors />
      <Partners />
    </>
  );
}

export default AboutUs;
