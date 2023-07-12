import React from "react";
import Banner from "@/components/common/Banner";
import DisasterAction from "../../components/about_us/action_plan/DisasterAction";
import ActionGallery from "../../components/about_us/action_plan/ActionGallery";

function ActionPlanPage() {
  return (
    <div>
      <Banner title="Action Plan" />
      <DisasterAction />
      <ActionGallery />
    </div>
  );
}

export default ActionPlanPage;
