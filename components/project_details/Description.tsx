import React from "react";

import SectionTitleAndHeading from "../common/SectionTitleAndHeading";

const Description = () => {
  return (
    <div className="container ">
      <div className="mt-24">
        <SectionTitleAndHeading
          title="Sunamganj Flood"
          heading="In the aftermath of the flood, many people are left stranded without access to basic necessities such as food, and clean water."
        />
        <p className="paragraph">
          The flood was triggered by heavy monsoon rains that caused the Surma
          and Kushiara rivers to overflow their banks, leading to widespread
          flooding in the region. The floodwaters submerged entire villages,
          destroying homes and displacing thousands of people. Many families
          lost their belongings and livelihoods, with crops and livestock
          destroyed in the deluge.
        </p>
      </div>
    </div>
  );
};

export default Description;
