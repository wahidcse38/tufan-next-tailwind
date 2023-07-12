import React from "react";
import Banner from "../../components/common/Banner";
import DetailsNoticeboard from "../../components/noticeboard/DetailsNoticeboard";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db, storage } from "../../firebase";

function DetailNews() {
  const { language } = useAuthContext();
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});
  const fetchGalleryData = async (id) => {
    try {
      const docRef = doc(db, "media", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // Document exists, you can access its data using docSnap.data()
        const galleryData = docSnap.data();
        // console.log("Gallery Data:", galleryData);
        setData(galleryData);
      } else {
        console.log("No such document exists!");
      }
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  };

  useEffect(() => {
    fetchGalleryData(id);
  }, [id]);
  return (
    <>
      <Banner title={language == "en" ? "News" : "খবর"} />
      <DetailsNoticeboard data={data} language={language} />
    </>
  );
}

export default DetailNews;
