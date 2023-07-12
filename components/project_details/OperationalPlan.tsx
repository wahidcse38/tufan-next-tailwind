import React from "react";

import circleTopRightBorder from "@/assets/img/circleTopRightBorder.svg";
import Image from "next/image";
import donate from "@/assets/img/donate.png";
import SectionTitleAndHeading from "../common/SectionTitleAndHeading";
import PlanBar from "./../common/PlanBar";
import ImageComponent from "./../common/ImageComponent";

const OperationalPlan = () => {
  return (
    <div className="container">
      <div className="mt-24">
        <SectionTitleAndHeading
          title="Operational Plan"
          heading="By working in close collaboration with the affected communities, relief efforts can be effectively executed to support the recovery of flood-affected communities."
        />
        <div className="mt-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <PlanBar
              title="MOBILIZE RESOURCES"
              description="Mobilize volunteers, staff, and resources to deliver aid to the affected communities. This includes setting up distribution centers, warehouses, and transportation arrangements."
            />
            <PlanBar
              title="PROVIDE RELIEF"
              description="Provide emergency relief supplies, such as food, water, hygiene kits, blankets, and medical supplies to the affected communities. Ensure that the relief supplies are distributed fairly and reach the most vulnerable populations."
            />
            <PlanBar
              title="MONITOR AND EVALUATE"
              description="Continuously monitor and evaluate the relief efforts to assess their effectiveness and identify areas for improvement. Regularly communicate with the affected communities to understand their evolving needs and adjust the relief efforts accordingly."
              isLast={true}
            />
          </div>
          <div className="">
            <Image
              src={donate}
              alt="i"
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
