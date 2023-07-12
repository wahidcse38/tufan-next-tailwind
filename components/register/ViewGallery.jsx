import Image from "next/image";
import React from "react";
import Button from "./../common/Button";

import relife from "../../assets/img/relife.png";

function ViewGallery() {
  return (
    <div className="container">
      <div className=" mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <video controls className="w-full h-full">
              <source src="" type="video/mp4"></source>
            </video>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
              <Image
                src={relife}
                alt="relife"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
              <Image
                src={relife}
                alt="relife"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
              <Image
                src={relife}
                alt="relife"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
              <Image
                src={relife}
                alt="relife"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Button path="#" title="View Gallery" />
        </div>
      </div>
    </div>
  );
}

export default ViewGallery;
