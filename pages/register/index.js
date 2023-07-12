import React from "react";
import Banner from "../../components/common/Banner";
import RegisterContent from "../../components/register/RegisterContent";
import ViewGallery from "../../components/register/ViewGallery";

function Register() {
  return (
    <>
      <Banner title="Volunteer Registration" />
      <RegisterContent />
      <ViewGallery />
    </>
  );
}

export default Register;
