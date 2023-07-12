import React from "react";

import Image from "next/image";
import donate from "@/assets/img/donate.png";
import SectionTitleAndHeading from "./../../common/SectionTitleAndHeading";
import PlanBar from "./../../common/PlanBar";

const OperationalPlan = ({ data, language, operationImplementation }) => {
  return (
    <div className="container">
      <div className="mt-24">
        <SectionTitleAndHeading
          title={operationImplementation}
          heading={language == "en" ? data.pi_title_en : data.pi_title_bn}
        />
        <div className="mt-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            {data?.inputList?.map((item, i) => {
              const isLast = i === data.inputList.length - 1;
              return (
                <PlanBar
                  key={i}
                  title={
                    language === "en" ? item.pip_title_en : item.pip_title_bn
                  }
                  description={
                    language === "en" ? item.pip_des_en : item.pip_des_bn
                  }
                  isLast={isLast}
                />
              );
            })}
          </div>
          <div className="">
            <Image
              src={data.imageSrc}
              alt="donate image"
              width={600}
              height={600}
              className="w-full h-auto max-h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationalPlan;
