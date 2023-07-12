import React from "react";

function FundCollectionInParentage({ value, title, description, bg, color }) {
  return (
    <div className="flex flex-col md:flex-row  xl:flex-row justify-start items-start md:items-center gap-3 md:gap-6">
      <div
        className={`w-20 h-20 flex-shrink-0 border border-charlestonGreen rounded-full flex justify-center items-center bg-${bg} text-${color} text-lg font-medium`}
      >
        {value}%
      </div>
      <div>
        <h4 className="heading">{title}</h4>
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
}

export default FundCollectionInParentage;
