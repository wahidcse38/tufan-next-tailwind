import Image from "next/image";
import React from "react";

function Partner({ img, title, description }) {
  return (
    <div className="flex flex-col md:flex-row justify-start items-center gap-28">
      <Image
        src={img}
        alt={title}
        width={150}
        height={100}
        className="flex-shrink-0"
      />

      <div className="">
        <h4 className="heading mb-2.5">{title}</h4>
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
}

export default Partner;
