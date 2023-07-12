import React from "react";

import img from "../../../assets/gallery/img1.png";
import ImageComponent from "../../common/ImageComponent";

function CommunityGallery() {
  return (
    <div className="container mt-32">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <ImageComponent img={img} title="Image Name" ratio="aspect-square" />
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ImageComponent img={img} title="Image Name" ratio="aspect-square" />
          <ImageComponent img={img} title="Image Name" ratio="aspect-square" />
          <ImageComponent img={img} title="Image Name" ratio="aspect-square" />
          <ImageComponent img={img} title="Image Name" ratio="aspect-square" />
        </div>
      </div>
    </div>
  );
}

export default CommunityGallery;
