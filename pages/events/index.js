import React, { useState } from "react";
import EventBanner from "../../components/event/EventBanner";
import UpcomingEvents from "../../components/event/UpcomingEvents";

function EventPage() {
  const [state, sateState] = useState("upcoming");
  return (
    <>
      <EventBanner state={state} sateState={sateState} />
      <UpcomingEvents />
    </>
  );
}

export default EventPage;
