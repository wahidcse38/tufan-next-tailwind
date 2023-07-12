import Image from "next/image";
import React from "react";

function ContactLine({ img, name, value }) {
  return (
    <div className="bg-brightGray p-7 flex justify-start items-center gap-5">
      <div className="flex-shrink-0">
        <Image
          src={img}
          alt={name}
          width={80}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="">
        <h3 className="heading">{name}</h3>
        <p className="paragraph">{value}</p>
      </div>
    </div>
  );
}

export default ContactLine;
