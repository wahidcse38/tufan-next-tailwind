import React from "react";
import Banner from "@/components/common/Banner";
import OurCommunity from "../../components/about_us/community/OurCommunity";
import Features from "../../components/about_us/community/Features";
import CommunityGallery from "../../components/about_us/community/CommunityGallery";

function CommunityPage() {
  return (
    <div>
      <Banner title="Community" />
      <OurCommunity />
      <Features />
      <CommunityGallery />
    </div>
  );
}

export default CommunityPage;
