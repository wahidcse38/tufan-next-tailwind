import React from "react";
import SectionTitleAndHeading from "../common/SectionTitleAndHeading";
import RegisterForm from "./RegisterForm";

function RegisterContent() {
  return (
    <div className="container">
      <div className="mt-24">
        <SectionTitleAndHeading
          title="Leave an Impact"
          heading="Empowering Communities. Creating Change."
        />
        <p className="paragraph">
          We appreciate your interest in joining our team and contributing your
          time and skills to our cause. Our volunteers are the backbone of our
          organization and we are grateful for their support. To register as a
          volunteer, please fill out the registration form. We will review your
          application and get back to you as soon as possible. Thank you for
          your dedication and commitment to making a difference in the lives of
          those in need. We look forward to working with you!
        </p>
        <div className="mt-16">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default RegisterContent;
