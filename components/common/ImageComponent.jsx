import React from "react";
import Image from "next/image";

function ImageComponent({ img, title, ratio }) {
  return (
    <div className={`w-full relative ${ratio}`}>
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover object-center w-full h-auto rounded"
      />
    </div>
  );
}

export default ImageComponent;
