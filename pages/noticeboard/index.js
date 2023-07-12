import React from 'react'

import Banner from '../../components/common/Banner'
import NewsAndUpdates from '../../components/noticeboard/NewsAndUpdates'
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
import { useState } from 'react';
import { useEffect } from 'react';

function NoticeboardPage() {
  // get images form firebase
  const [galleries, setGalleries] = useState([]);
  const { language } = useAuthContext();
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "notice_board")),
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
    <>
      <Banner title={language == "en" ? "Noticeboard" : "নোটিসবোর্ড"} />
      <NewsAndUpdates language={language} noticeboard={galleries}/>
    </>
  );
}

export default NoticeboardPage
