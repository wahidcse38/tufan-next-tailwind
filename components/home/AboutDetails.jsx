import Image from "next/image";
import React from "react";
import about from "../../assets/img/about.png";
import { aboutDetailsButton } from "../../utils/svg.js";

const AboutDetails = () => {
  return (
    <div>
      <p className="mt-6 text-4xl ">
        Supporting communities affected by disasters across Bangladesh.
      </p>
      <p className="text-base text-charlestonGreen mt-3.5">
        Our organization is dedicated to providing disaster response and relief
        services to communities across Bangladesh. We believe that everyone
        deserves access to essential support and resources in times of crisis,
        and we are committed to making a positive impact in the lives of those
        affected by disasters. Together, we bring a diverse range of skills,
        expertise, and perspectives to our work, and we are united in our
        passion for helping those in need.
      </p>
      <Image src={about} alt="about" className="mx-auto mt-14" />
      <button className="flex justify-center py-5 mt-14 bg-venetianRed text-white w-full text-2xl ">
        {aboutDetailsButton}
      </button>
    </div>
  );
};

export default AboutDetails;
