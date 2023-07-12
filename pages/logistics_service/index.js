import React from "react";
import Banner from "./../../components/common/Banner";
import Mission from "./../../components/logistics/Mission";
import StepContainer from "./../../components/logistics/StepContainer";
import { useAuthContext } from "../../context/AuthContext";

function LogisticsServicePage() {
  const { language } = useAuthContext();
  return (
    <>
      <Banner
        title={language == "en" ? "Logistics Service" : "লজিস্টিক সার্ভিস"}
      />
      <StepContainer language={language} />
      <Mission language={language} />
    </>
  );
}

export default LogisticsServicePage;
