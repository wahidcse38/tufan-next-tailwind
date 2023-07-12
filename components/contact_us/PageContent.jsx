import React from "react";
import SectionTitleAndHeading from "./../common/SectionTitleAndHeading";
import ContactLine from "../common/ContactLine";

import phone from "../../assets/img/phone.png";
import email from "../../assets/img/email.png";
import location from "../../assets/img/location.png";
import Form from "./Form";

function PageContent() {
  return (
    <div className="container">
      <div className="mt-24">
        <div>
          <SectionTitleAndHeading
            title="Get In Touch"
            heading="We're Here to Help You."
          />
          <p className="paragraph">
            Whether you have a question, a concern, or just want to say hello,
            we welcome your feedback and would love to hear from you. Our team
            is dedicated to providing the best possible support to our
            community, and we&apos;re committed to working with you to find the
            solutions you need. Contact us today and let us know how we can help
            you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          <div className="grid gap-5">
            <ContactLine img={phone} name="PHONE" value="02-000-000-000" />
            <ContactLine img={email} name="EMAIL" value="xyz@tufan.com" />
            <ContactLine
              img={location}
              name="ADDRESS"
              value="House XYZ, Area ABC,Dhaka, Bangladesh"
            />
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContent;
