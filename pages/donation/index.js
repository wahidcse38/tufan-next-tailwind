import React from "react";
import Banner from "../../components/common/Banner";
import DonationInAction from "../../components/donation/DonationInAction";
import Chanels from "../../components/donation/Chanels";
import Reference from "../../components/donation/Reference";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
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

function DonationPage() {
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
    <>
      <Banner title={language == "en" ? "Make Donation" : "দান করুন"} />
      <DonationInAction language={language} projects={projects} />
      <Chanels language={language} />
      <Reference language={language} projects={projects} />
    </>
  );
}

export default DonationPage;
