import React from "react";
import Banner from "../../components/common/Banner";
import NewsAndMedia from "../../components/media/NewsAndMedia";
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

function index() {
  // get images form firebase
  const [galleries, setGalleries] = useState([]);
  console.log(galleries);
  const { language } = useAuthContext();
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "media")),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setGalleries(list);
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
    <div>
      <Banner title={language == "en" ? "Media" : "মিডিয়া"} />
      <NewsAndMedia language={language} media={galleries}/>
    </div>
  );
}

export default index;
