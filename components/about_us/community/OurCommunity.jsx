import React from "react";
import SectionTitleAndHeading from "../../common/SectionTitleAndHeading";

function OurCommunity() {
  return (
    <div className="container">
      <div className="mt-24">
        <div>
          <SectionTitleAndHeading
            title="Join Our Community"
            heading="We believe in the power of community."
          />
          <p className="paragraph">
            We understand that in times of disaster and crisis, coming together
            as a unified force can make a significant difference in the lives of
            those affected. We are dedicated to fostering a strong and resilient
            network of individuals, organizations, and volunteers who share a
            common goal: to support and uplift those in need.
          </p>
          <br />
          <p className="paragraph">
            Here, you&apos;ll find a vibrant community where like-minded
            individuals come together to make a positive impact. Whether
            you&apos;re a volunteer looking to contribute your time and skills,
            an organization seeking partnerships, or an individual seeking
            support, our aim is to serve as a hub of connection and
            collaboration.
          </p>
          <br />
          <p className="paragraph">
            Join our community today and become a part of a compassionate
            network committed to making a difference. Together, we can build a
            more resilient and prepared society, ensuring that no one is left
            behind in times of crisis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurCommunity;
