import React from "react";
import SectionTitleAndHeading from "../../common/SectionTitleAndHeading";
import PlanBar from "../../common/PlanBar";

function DisasterAction() {
  return (
    <div className="container">
      <div className="mt-24">
        <div>
          <SectionTitleAndHeading
            title="Effective Disaster Response"
            heading="We are dedicated to ensuring timely disaster response efforts."
          />
          <p className="text-base lg:text-base text-charlestonGreen font-normal">
            Our action plan is designed to provide a clear roadmap for effective
            coordination and execution during times of crisis. By following this
            plan, we can maximize our impact and bring relief to those affected
            by disasters.
          </p>
        </div>
        <div className="mt-16 w-full lg:w-3/4">
          <PlanBar
            title="Preparedness and Risk Assessment"
            description="Develop comprehensive preparedness strategies, including early warning systems, evacuation plans, and stockpiling of essential supplies. "
          />
          <PlanBar
            title="Rapid Response and Emergency Relief"
            description="Activate emergency response teams and deploy them to affected areas with necessary resources and equipment and provide emergency relief supplies."
          />
          <PlanBar
            title="Logistics and Resource Management"
            description="Collaborate with partner organizations, government agencies, and local businesses to ensure efficient resource mobilization."
            isLast={true}
          />
        </div>
      </div>
    </div>
  );
}

export default DisasterAction;
