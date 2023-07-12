import React from "react";

function SectionTitleAndHeading({ title, heading }) {
  return (
    <div>
      <p className="mb-6 section-title">{title}</p>
      <h3 className="section-heading mb-4">
        {heading}
      </h3>
    </div>
  );
}

export default SectionTitleAndHeading;
