import React from "react";
import Image from "next/image";
import SectionTitleAndHeading from "../../common/SectionTitleAndHeading";
import PlanBar from "./../../common/PlanBar";
import donate from "@/assets/img/donate.png";

function ProjectImplementation() {
  return (
    <div className="container">
      <div className="mt-24">
        <SectionTitleAndHeading
          title="Project Implementation"
          heading="By working in close collaboration with the affected communities, relief efforts were effectively executed to support the recovery of flood-affected communities."
        />
        <div className="mt-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="">
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
          <div className="w-full relative" style={{ aspectRatio: 1.6 }}>
            <Image src={donate} alt="i" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectImplementation;
