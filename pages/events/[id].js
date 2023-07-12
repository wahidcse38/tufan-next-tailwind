import React from "react";
import Banner from "../../components/common/Banner";
import DetailContainer from "../../components/event_details/DetailContainer";
import Sponsors from "../../components/event_details/Sponsors";

function EventDetails() {
  return (
    <>
      <Banner title="Event Details" />
      <DetailContainer />
      <Sponsors />
    </>
  );
}

export default EventDetails;
