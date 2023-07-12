import Image from "next/image";
import React from "react";
import banner from "../../assets/img/banner.png";

import BannerContent from "./BannerContent";
import BannerContentMobile from "./BannerContentMobile";

const Banner = ({ language, data }) => {
  return (
    <section className="">
      <div className="w-full relative" style={{ aspectRatio: 2.215 }}>
        <Image
          src={data?.imageSrc}
          alt="banner"
          fill
          className="object-contain"
        />
      </div>
      <div className="-mt-[10%] hidden lg:block">
        <BannerContent language={language}/>
      </div>
      <div className="-mt-[10%] lg:hidden block">
        <BannerContentMobile />
      </div>
    </section>
  );
};

export default Banner;
