import React from "react";
import Button from "../../common/Button";

function Feature({ heading, description, buttonTitle }) {
  return (
    <div className="w-full lg:w-3/4">
      <h6 className="heading mb-2.5">{heading}</h6>
      <p className="paragraph">{description}</p>
      <div className="mt-7 w-full md:w-2/5">
        <Button path="#" title={buttonTitle} />
      </div>
    </div>
  );
}

export default Feature;
