import React from "react";
import Banner from "@/components/common/Banner";
import ProfileInfo from "../../components/profile/ProfileInfo";
import ProfileProjects from "../../components/profile/ProfileProjects";
import ProfileEvents from "../../components/profile/ProfileEvents";
import withAuth from "../../hooks/lib/route";

const Profile = () => {
  return (
    <>
      <Banner title="My Profile" />
      <ProfileInfo />
      <ProfileProjects />
      <ProfileEvents />
    </>
  );
};

export default withAuth(Profile);
