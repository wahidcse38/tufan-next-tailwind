import React, { useEffect, useState } from "react";

import SectionTitleAndHeading from "../common/SectionTitleAndHeading";
import DonateCard from "../common/DonateCard";

import img from "../../assets/img/donate.png";
import { useAuthContext } from "../../context/AuthContext";
import { db, storage } from "../../firebase";
import {
  updateDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
  onSnapshot,
  query,
} from "firebase/firestore";

const UpcomingProjects = () => {
  // get images form firebase
  const [projects, setProjects] = useState([]);

  // console.log(projects);
  const { language } = useAuthContext();
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "project_upcoming")),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setProjects(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="container ">
      <div className="mt-24">
        <SectionTitleAndHeading
          title={language == "en" ? "Upcoming Projects" : "আসন্ন প্রকল্প"}
          heading={
            language == "en"
              ? "Our upcoming projects aim to make a positive impact on the communities we serve."
              : "আমাদের আসন্ন প্রকল্পগুলির লক্ষ্য আমরা যে সম্প্রদায়গুলিকে পরিবেশন করি তাদের উপর ইতিবাচক প্রভাব ফেলতে।"
          }
        />
        <div className="mt-16 flex flex-col gap-8">
          {projects.map((item, i) => {
            return (
              <DonateCard
                key={i}
                donate={item}
                language={language}
                // img={item.imageSrc}
                // name={
                //   language == "en" ? item.card_title_en : item.card_title_bn
                // }
                // description={
                //   language == "en" ? item.card_des_en : item.card_des_bn
                // }
                // id={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjects;
