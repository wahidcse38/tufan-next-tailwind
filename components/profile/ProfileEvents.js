import React from "react";
import SectionTitleAndHeading from "../common/SectionTitleAndHeading";

const ProfileEvents = () => {
  return (
    <div className="container">
      <div className="mt-24">
        <SectionTitleAndHeading
          title="Upcoming Events"
          heading="You have not registered to any upcoming events recently."
        />
      </div>
    </div>
  );
};

export default ProfileEvents;
