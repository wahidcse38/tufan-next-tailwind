import React, { useContext, useEffect, useState } from "react";
import "../firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [allUsers, setAllUsers] = useState();
  const [userDetails, setUserDetails] = useState({});
  const [language, setLanguage] = useState();
  // console.log(userDetails);
  useEffect(() => {
    localStorage.setItem("language", "en");
    setLanguage(localStorage.getItem("language"));
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // const getAllUsers = async () => {
    //   try {
    //     const users = await getDocs(collection(db, "users"));
    //     setAllUsers(users.docs.map((item) => item.data()));
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getAllUsers();

    return unsubscribe;
  }, []);

  useEffect(() => {
    const getUserDetails = async () => {
      const querySnapshot = await getDoc(doc(db, "users", currentUser.uid));
      setUserDetails(querySnapshot.data());
    };
    currentUser && getUserDetails();
  }, [currentUser]);

  // sign up function
  async function signup(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    //update profile
    await updateProfile(auth.currentUser, { displayName: username });
    const user = auth.currentUser;

    await setDoc(doc(db, "users", user.uid), {
      userId: user.uid,
      email,
      username,
      role: "volunteer",
      phone: "",
      dob: "",
      ownZone: "",
      preferredZone: "",
      image: "",
      cv: "",
      educationalBackground: "",
      nid: "",
      createdAt: new Date().toLocaleDateString("en-GB"),
    });

    setCurrentUser({ ...user });
  }

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  //Edit profile
  async function userProfileUpdate(
    username,
    phone,
    dob,
    ownZone,
    preferredZone,
    image,
    cv,
    educationalBackground,
    nid,
    updatedAt
  ) {
    const auth = getAuth();
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    await updateDoc(doc(db, "users", currentUser.uid), {
      username,
      phone,
      dob,
      ownZone,
      preferredZone,
      image,
      cv,
      educationalBackground,
      nid,
      updatedAt,
    });
  }

   const toggleLanguage = () => {
     const newLanguage = language === "en" ? "bn" : "en";
     setLanguage(newLanguage);
     localStorage.setItem("language", newLanguage);
   };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        login,
        logout,
        userProfileUpdate,
        toggleLanguage,
        language,
        userDetails,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook for reducing line of codes
export const useAuthContext = () => {
  return useContext(AuthContext);
};
