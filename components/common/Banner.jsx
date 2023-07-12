import React from "react";

const Banner = ({ title }) => {
  return (
    <section className="h-[423px]">
      <div className="relative bg-venetianRed h-64">
        <div className="container absolute top-[25%] right-1/2 translate-x-1/2">
          <div className="h-80 bg-black flex justify-center items-center">
            <p className="text-white font-angkor text-44px font-normal text-center">
              {title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
