import React from "react";
import SectionTitleAndHeading from "./../common/SectionTitleAndHeading";
import EventCard from "./EventCard";

function UpcomingEvents() {
  return (
    <div className="container ">
      <div className="mt-24">
        <SectionTitleAndHeading
          title="Upcoming Events"
          heading="Our upcoming events aim to make a positive impact on the communities we serve."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
