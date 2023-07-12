import React from "react";
import Button from "../../common/Button";
import Feature from "./Feature";

function Features() {
  return (
    <div className="container mt-16 flex flex-col gap-16">
      <Feature
        heading="Volunteer Opportunities"
        description="Explore a variety of volunteer opportunities tailored to your skills, interests, and availability. Make a difference on the ground by actively participating in disaster response and relief efforts."
        buttonTitle="Volunteer"
      />
      <Feature
        heading="Inspiring Stories"
        description="Discover inspiring stories of resilience, courage, and hope from individuals and communities who have overcome adversity. Be inspired by their journeys and learn from their experiences."
        buttonTitle="View Projects"
      />
      <Feature
        heading="Events and Workshops"
        description="Stay informed about upcoming events, workshops, and training programs related to disaster response and community building. Expand your knowledge, acquire new skills, and stay updated."
        buttonTitle="View Events"
      />
    </div>
  );
}

export default Features;
