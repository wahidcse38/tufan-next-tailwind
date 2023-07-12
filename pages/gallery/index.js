import React from "react";
import Banner from "./../../components/common/Banner";
import SimpleGallery from "../../components/gallery/SimpleGallery";
import { useAuthContext } from "../../context/AuthContext";

function Gallery() {
  const { language } = useAuthContext();
  return (
    <>
      <Banner title={language == "en" ? "Gallery" : "গ্যালারি"} />
      <SimpleGallery />
    </>
  );
}

export default Gallery;
