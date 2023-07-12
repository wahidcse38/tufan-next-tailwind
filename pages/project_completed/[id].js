import React from "react";
import Banner from "./../../components/common/Banner";
import ProjectDestination from "../../components/project_details/completed/ProjectDestination";
import ProjectImplementation from "../../components/project_details/completed/ProjectImplementation";
import Description from "@/components/project_details/upcomming/Description";
import OperationalPlan from "@/components/project_details/upcomming/OperationalPlan";
import MemberCard from "@/components/project_details/upcomming/MemberCard";
import ResultAndImpact from "../../components/project_details/completed/ResultAndImpact";
import { useState } from "react";
import { useEffect } from "react";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";

function ProjectCompleted() {
  const { language } = useAuthContext();
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});
  // console.log(data);
  const fetchProjectData = async (id) => {
    try {
      const docRef = doc(db, "project_completed ", id);
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
      {/* <ProjectDestination />
      <ProjectImplementation />
      <MemberCard /> */}
      <Description data={data} language={language} />
      <OperationalPlan
        data={data}
        language={language}
        operationImplementation={
          language == "en" ? "Project Implementation" : "প্রকল্প বাস্তবায়ন"
        }
      />
      <MemberCard data={data} language={language} />
      <ResultAndImpact data={data} language={language} />
    </>
  );
}

export default ProjectCompleted;
