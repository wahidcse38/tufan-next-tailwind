import React from "react";
import SectionTitleAndHeading from "../../common/SectionTitleAndHeading";

const Description = ({ data, language }) => {
  return (
    <div className="container ">
      <div className="mt-24">
        <SectionTitleAndHeading
          title={language == "en" ? data.card_title_en : data.card_title_bn}
          heading={
            language == "en" ? data.details_title_en : data.details_title_bn
          }
        />
        <p className="paragraph">
          {language == "en" ? data.details_des_en : data.details_des_bn}
        </p>
      </div>
    </div>
  );
};

export default Description;
