import React from "react";

function PlanBar({ title, description, isLast = false }) {
  return (
    <div
      className={`${
        isLast ? "" : "border-l-2 border-indianRed  pb-10"
      } relative`}
    >
      <div className="w-7 h-7 border-2 border-indianRed bg-white rounded-full flex justify-center items-center absolute top-[-15px] left-[-15px]">
        {" "}
        <div className="bg-indianRed w-4 h-4 rounded-full"></div>
      </div>
      <div className="ps-6 relative top-[-15px]">
        <h6 className="heading mb-2.5">{title}</h6>
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
}

export default PlanBar;
