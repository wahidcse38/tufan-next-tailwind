import React from "react";

import SectionTitleAndHeading from "../common/SectionTitleAndHeading.jsx";
import CompletedDonateCard from "../common/CompletedDonateCard.jsx";

import Img from "../../assets/img/donate.png";
import { useState } from "react";
import { useEffect } from "react";
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

const CompletedProjects = () => {
  const [projects, setProjects] = useState([]);

  // console.log(projects);
  const { language } = useAuthContext();
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "project_completed ")),
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
          title={language == "en" ? "Completed Projects" : "সমাপ্ত প্রকল্প"}
          heading={
            language == "en"
              ? "Our completed projects showcase our commitment to making a meaningful difference in the lives of the communities we have served."
              : "আমাদের সমাপ্ত প্রকল্পগুলি আমরা যে সম্প্রদায়গুলিকে পরিবেশন করেছি তাদের জীবনে একটি অর্থবহ পরিবর্তন করার জন্য আমাদের প্রতিশ্রুতি প্রদর্শন করে৷"
          }
        />
        <div className="mt-16 flex flex-col gap-8">
          {projects.map((item, i) => {
            return (
              <CompletedDonateCard
                key={i}
                img={item.imageSrc}
                name={
                  language == "en" ? item.card_title_en : item.card_title_bn
                }
                description={
                  language == "en" ? item.card_des_en : item.card_des_bn
                }
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;
