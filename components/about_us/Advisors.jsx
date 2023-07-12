import React from "react";
import SectionTitleAndHeading from "../common/SectionTitleAndHeading";
import AdvisorCard from "../common/AdvisorCard";

function Advisors() {
  return (
    <div className="container ">
      <div className="mt-24">
        <SectionTitleAndHeading
          title="Board of Advisors"
          heading="Leaders providing strategic oversight and valuable guidance to help us achieve our mission and goals."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          <AdvisorCard name="MR FIRSTNAME LASTNAME" role="Role" />
          <AdvisorCard name="MR FIRSTNAME LASTNAME" role="Role" />
          <AdvisorCard name="MR FIRSTNAME LASTNAME" role="Role" />
        </div>
      </div>
    </div>
  );
}

export default Advisors;
