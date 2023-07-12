import React from "react";
import Link from "next/link";
import Button from "../common/Button";
import SectionTitleAndHeading from "../common/SectionTitleAndHeading";

function Story() {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-28 justify-between items-start mt-24">
        <div className="w-full lg:w-3/5">
          <SectionTitleAndHeading
            title="Our Story"
            heading="Our story is one of resilience, hope, and compassion."
          />
          <div>
            <p className="paragraph">
              Our organization was founded with a simple yet powerful mission:
              to support disaster-affected communities and help people in need.
              Since our inception, we have been dedicated to providing vital aid
              and support to those impacted by disasters, including natural
              disasters, humanitarian crises, and conflict situations.
              <br />
              <br />
              Through our work, we have witnessed firsthand the resilience and
              strength of communities affected by disasters, and we have been
              inspired by their determination to rebuild and recover. Our
              organization is committed to supporting these communities on their
              journey to recovery, providing long-term support and solutions
              that enable them to rebuild their lives and regain their dignity.
              <br />
              <br />
              We are grateful to our donors, volunteers, and partners, whose
              generosity and commitment have made our work possible. We invite
              you to join us on our journey and be a part of our story.
              Together, we can make a difference and help build a more resilient
              and compassionate world.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col gap-5 lg:mt-14">
          <Button path="/about_us/action_plan" title="Action Plan" />
          <Button path="/about_us/community" title="Community" />
          <Button path="#" title=" Volunteer" />
        </div>
      </div>
    </div>
  );
}

export default Story;
