import Image from "next/image";
import React from "react";

function AdvisorCard({ advisor, language }) {
  return (
    <div className="relative mt-24">
      <div className="w-40 h-40 bg-indianRed rounded-full flex justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          className="w-32 h-32 bg-white rounded-full"
          src={advisor?.image}
          alt={advisor?.username}
          width={100}
          height={100}
        />
      </div>
      <div className="bg-brightGray h-56 w-auto flex flex-col justify-center items-center pt-16">
        <h4 className="heading mb-2.5 text-center">{advisor?.username}</h4>
        <p className="paragraph text-center">{advisor?.role}</p>
      </div>
    </div>
  );
}

export default AdvisorCard;
