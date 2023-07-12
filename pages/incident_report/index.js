import React from "react";
import Banner from "./../../components/common/Banner";
import StepContainer from "../../components/report/StepContainer";
import Mission from "../../components/report/Mission";
import { useAuthContext } from "../../context/AuthContext";

function IncidentReport() {
  const { language } = useAuthContext();
  return (
    <>
      <Banner title={language == "en" ? "Incident Report" : "ঘটনা রিপোর্ট"} />
      <StepContainer language={language}/>
      <Mission language={language}/>
    </>
  );
}

export default IncidentReport;
