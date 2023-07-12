import Image from "next/image";
import React from "react";
import map from "../../assets/img/map.svg";
const AboutMap = () => {
  return (
    <div>
      <Image src={map} alt="map" />
    </div>
  );
};

export default AboutMap;
