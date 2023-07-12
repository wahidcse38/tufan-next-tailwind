import Image from "next/image";
import React from "react";

import image from "../../assets/img/gallery1.png";

function GalleryPicture({ data }) {
  return (
    <div className="mt-16">
      <div className="grid gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            className="w-full relative shrink-0"
            style={{ aspectRatio: 1.3 }}
          >
            <Image src={image} alt="image" fill className="object-contain" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full relative " style={{ aspectRatio: 1.3 }}>
              <Image src={image} alt="image" fill className="object-contain" />
            </div>
            <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
              <Image src={image} alt="image" fill className="object-contain" />
            </div>
            <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
              <Image src={image} alt="image" fill className="object-contain" />
            </div>
            <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
              <Image src={image} alt="image" fill className="object-contain" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="md:col-span-1 grid gap-5">
            <div className="w-full relative " style={{ aspectRatio: 1.3 }}>
              <Image src={image} alt="image" fill className="object-contain" />
            </div>
            <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
              <Image src={image} alt="image" fill className="object-contain" />
            </div>
          </div>
          <div className=" md:col-span-2">
            <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
              <Image src={image} alt="image" fill className="object-contain" />
            </div>
          </div>
          <div className="md:col-span-1 grid gap-5">
            <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
              <Image src={image} alt="image" fill className="object-contain" />
            </div>
            <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
              <Image src={image} alt="image" fill className="object-contain" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
            <Image src={image} alt="image" fill className="object-contain" />
          </div>
          <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
            <Image src={image} alt="image" fill className="object-contain" />
          </div>
          <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
            <Image src={image} alt="image" fill className="object-contain" />
          </div>
          <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
            <Image src={image} alt="image" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPicture;
