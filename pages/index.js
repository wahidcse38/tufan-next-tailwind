// import Image from "next/image";
// import { Inter } from "next/font/google";
// import Slider from "@/components/slider/Slider";
import Banner from "@/components/home/Banner";
import NewsEvents from "@/components/home/NewsEvents";
import Projects from "@/components/home/Projects";
import About from "@/components/home/About";
import Partners from "@/components/home/Partners";
import NoticeBoard from "@/components/home/NoticeBoard";
import SliderSection from "./../components/slider/SliderSection";
import { useAuthContext } from "../context/AuthContext";
import { db, storage } from "../firebase";

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
import { useEffect, useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { language } = useAuthContext();

  const [data, setData] = useState(null);
  const [noticeBoard, setNoticeBoard] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "homepageSet")),
      (snapShot) => {
        let lastDoc = snapShot.docs[snapShot.docs.length - 1];
        if (lastDoc) {
          setData({ id: lastDoc.id, ...lastDoc.data() });
        }
      },
      (error) => {
        console.log(error);
      }
    );

    const unsubscribeNoticeboard = onSnapshot(
      query(collection(db, "notice_board")),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setNoticeBoard(list);
      },
      (error) => {
        console.log(error);
      }
    );

    const unsubscribeProject = onSnapshot(
      query(collection(db, "project_completed")),
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
      unsubscribeNoticeboard();
      unsubscribeProject();
    };
  }, []);

  return (
    <>
      <NoticeBoard language={language} data={data} />
      <Banner language={language} data={data} />
      <NewsEvents language={language} />
      <SliderSection language={language} />
      <Projects language={language} />
      <About language={language} />
      <Partners language={language} />
    </>
  );
}
