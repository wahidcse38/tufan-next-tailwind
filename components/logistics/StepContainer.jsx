import React from "react";
import Step from "./Step";
import Form from "./Form";

function StepContainer({language}) {
  return (
    <div className="container">
      <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <Step language={language}/>
        </div>
        <div className="lg:col-span-7">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default StepContainer;
