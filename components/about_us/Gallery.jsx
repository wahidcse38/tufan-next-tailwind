import React from "react";
import Image from "next/image";

//Iamge
import img1 from "../../assets/gallery/img1.png";

//Components
import ImageComponent from "../common/ImageComponent";

function Gallery() {
  return (
    <div className="container">
      <div className="flex flex-col gap-3 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <ImageComponent img={img1} title="Image name" ratio="aspect-video" />
          <ImageComponent img={img1} title="Image name" ratio="aspect-video" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <ImageComponent img={img1} title="Image name" ratio="aspect-video" />
          <ImageComponent img={img1} title="Image name" ratio="aspect-video" />
          <ImageComponent img={img1} title="Image name" ratio="aspect-video" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
