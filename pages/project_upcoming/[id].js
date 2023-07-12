import Banner from "@/components/common/Banner";
import React from "react";
import Description from "@/components/project_details/upcomming/Description";
import OperationalPlan from "@/components/project_details/upcomming/OperationalPlan";
import MemberCard from "@/components/project_details/upcomming/MemberCard";
import DonationOverview from "../../components/project_details/upcomming/DonationOverview";
import FundDistribution from "../../components/project_details/upcomming/FundDistribution";
import { useRouter } from "next/router";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db, storage } from "../../firebase";

const ProjectUpcoming = () => {
  const { language } = useAuthContext();
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});
  // console.log(data);
  const fetchProjectData = async (id) => {
    try {
      const docRef = doc(db, "project_upcoming", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // Document exists, you can access its data using docSnap.data()
        const projectData = docSnap.data();
        // console.log("Gallery Data:", galleryData);
        setData(projectData);
      } else {
        console.log("No such document exists!");
      }
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  };

  useEffect(() => {
    fetchProjectData(id);
  }, [id]);
  return (
    <>
      <Banner
        title={
          language == "en" ? "Project Details" : "প্রকল্পের বিস্তারিত বিবরণ"
        }
      />
      <Description data={data} language={language} />
      <OperationalPlan
        data={data}
        language={language}
        operationImplementation={
          language == "en" ? "Operational Plan" : "কার্য পরিকল্পনা"
        }
      />
      <MemberCard data={data} language={language} />
      <FundDistribution data={data} language={language} />
      <DonationOverview data={data} language={language} />
    </>
  );
};

export default ProjectUpcoming;
