import Image from "next/image";
import React from "react";
import relif from "../../assets/img/relife.png";
import Button from "../common/Button";
import SectionTitleAndHeading from "./../common/SectionTitleAndHeading";
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
import { useState } from "react";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
function SimpleGallery() {
  // get images form firebase
  const [galleries, setGalleries] = useState([]);
  // console.log(galleries);
  const { language } = useAuthContext();
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "gallery")),
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
    <div className="container">
      <div className="mt-24 ">
        <SectionTitleAndHeading
          title={
            language == "en" ? "Capturing our Work" : "আমাদের কাজ ক্যাপচার করুন"
          }
          heading={
            language == "en"
              ? "Showcasing the impactful work we have been doing in various communities."
              : "বিভিন্ন সম্প্রদায়ে আমরা যে প্রভাবশালী কাজ করছি তা প্রদর্শন করতেছি।"
          }
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 auto-cols-fr auto-rows-fr gap-5">
          {galleries.map((item, i) => {
            return (
              <div className="" key={i}>
                <div className="w-full relative" style={{ aspectRatio: 1.3 }}>
                  <Image
                    src={item.imageSrc}
                    alt="relief"
                    fill
                    className="object-contain"
                  />
                </div>
                <Button
                  path={`/gallery/${item.id}`}
                  title={language == "en" ? item.title_en : item.title_bn}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SimpleGallery;
