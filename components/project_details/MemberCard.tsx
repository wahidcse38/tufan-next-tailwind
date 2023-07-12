import React from "react";

import SectionTitleAndHeading from "../common/SectionTitleAndHeading";

import AdvisorCard from "../common/AdvisorCard";

const MemberCard = () => {
  return (
    <section className="container">
      <div className="mt-24">
        <SectionTitleAndHeading
          title="Execution Body"
          heading="At our organization, we are proud to have a dedicated and experienced execution body that is committed to delivering relief and support to communities affected by disasters."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <AdvisorCard name="MR FIRSTNAME LASTNAME" role="Role" />
        <AdvisorCard name="MR FIRSTNAME LASTNAME" role="Role" />
        <AdvisorCard name="MR FIRSTNAME LASTNAME" role="Role" />
      </div>
    </section>
  );
};

export default MemberCard;
