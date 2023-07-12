import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "react-modal";
import { useAuthContext } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const ProfileEditModal = ({
  isOpen,
  onClose,
  children,
  screenSize,
  title,
  crossButtonShow = true,
}) => {
  const [isLoading, setIsLoading] = useState();
  const { currentUser, userProfileUpdate, userDetails } = useAuthContext();
  // const [userDetails, setUserDetails] = useState({});

  const [userData, setUserData] = useState({
    name: currentUser?.displayName || "",
    email: currentUser?.email || "",
    phone: "",
    dob: "",
    ownZone: "",
    preferredZone: "",
    cv: "",
    educationalBackground: "",
    nid: "",
  });
  // useEffect(() => {
  //   const getUserDetails = async () => {
  //     const querySnapshot = await getDoc(doc(db, "users", currentUser.uid));
  //     setUserDetails(querySnapshot.data());
  //   };
  //   getUserDetails();
  // }, []);

  useEffect(() => {
    setUserData((oldState) => {
      return {
        ...oldState,
        phone: userDetails?.phone,
        dob: userDetails?.dob,
        ownZone: userDetails?.ownZone,
        preferredZone: userDetails?.preferredZone,
        image: userDetails?.image,
        cv: userDetails?.cv,
        educationalBackground: userDetails?.educationalBackground,
        nid: userDetails?.nid,
      };
    });
  }, [userDetails]);

  // For Image Start
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + url?.name.trim().replace(/\s/g, "");
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, url);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUrl(downloadURL);
          });
        }
      );
    };

    url && uploadFile();
  }, [url]);
  // For Image End
  // For CV Start
  const [cvProgress, setCvProgress] = useState(0);
  const [cvUrl, setCvUrl] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  useEffect(() => {
    const uploadFile = () => {
      const name =
        new Date().getTime() + originalUrl?.name.trim().replace(/\s/g, "");
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, originalUrl);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setCvProgress(progress);
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setCvUrl(downloadURL);
          });
        }
      );
    };

    originalUrl && uploadFile();
  }, [originalUrl]);
  // For CV End

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose()
    const {
      name,
      phone,
      dob,
      ownZone,
      preferredZone,
      educationalBackground,
      nid,
    } = userData;
    const image = imageUrl || userData.image;
    const cv = cvUrl || userData.cv;
    const updatedAt = new Date().toLocaleDateString("en-GB");

    if (
      !name ||
      !dob ||
      !phone ||
      !ownZone ||
      !preferredZone ||
      !cv ||
      !educationalBackground ||
      !nid
    ) {
      toast.error("please fill out all fields");
      return;
    }
    // dispatch(updateUser(userData));
    try {
      setIsLoading(true);
      await userProfileUpdate(
        name,
        phone,
        dob,
        ownZone,
        preferredZone,
        image,
        cv,
        educationalBackground,
        nid,
        updatedAt
      );
      toast.success("Profile updated successfully!");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      toast.error("Failed to update profile!");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => crossButtonShow && onClose(false)}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: "9999",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          border: "0",
          background: "transparent",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "0",
          outline: "none",
          padding: "0",
          width: "90%",

          height: "90%",
          margin: "auto",
        },
      }}
    >
      <div className="bg-white rounded-md px-5">
        <div className="flex items-center justify-between py-5 border-b">
          <div className="font-semibold text-lg text-black">{title}</div>
          {crossButtonShow && (
            <svg
              className="hover:cursor-pointer fill-venetianRed hover:fill-charlestonGreen border border-charlestonGreen rounded-full p-1 hover:border-richElectricBlue"
              width="25px"
              height="25px"
              onClick={() => onClose(false)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          )}
        </div>
        <div className="">
          <form
            className="sm:w-2/3 w-11/12 flex flex-col justify-center mx-auto bg-brightGray p-10 rounded mt-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col text-start">
              <label htmlFor="name" className="text-lg font-bold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-white p-2"
                placeholder="Write full name"
                value={userData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-start">
              <label htmlFor="phone" className="text-lg font-bold mt-2">
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="bg-white p-2"
                placeholder="Write phone number"
                value={userData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-start">
              <label htmlFor="dob" className="text-lg font-bold mt-2">
                Date Of Birth
              </label>
              <input
                type="text"
                id="dob"
                className="bg-white p-2"
                placeholder="DD/MM/YYYY"
                name="dob"
                value={userData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-start">
              <label htmlFor="ownZone" className="text-lg font-bold mt-2">
                Own Zone
              </label>
              <input
                type="text"
                id="ownZone"
                className="bg-white p-2"
                placeholder="Write Own Zone"
                name="ownZone"
                value={userData.ownZone}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-start">
              <label htmlFor="preferredZone" className="text-lg font-bold mt-2">
                Preferred Zone
              </label>
              <input
                type="text"
                id="preferredZone"
                className="bg-white p-2"
                placeholder="Write Preferred Zone"
                name="preferredZone"
                value={userData.preferredZone}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-start">
              <label
                htmlFor="educationalBackground"
                className="text-lg font-bold mt-2"
              >
                Educational Background
              </label>
              <input
                type="text"
                id="educationalBackground"
                className="bg-white p-2"
                placeholder="Write Educational Background"
                name="educationalBackground"
                value={userData.educationalBackground}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-start">
              <label htmlFor="nid" className="text-lg font-bold mt-2">
                NID
              </label>
              <input
                type="number"
                id="nid"
                className="bg-white p-2"
                placeholder="Write NID Number"
                name="nid"
                value={userData.nid}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-start">
              <label htmlFor="cv" className="text-lg font-bold mt-2">
                Upload CV
              </label>
              <input
                id="cv"
                type="file"
                name="cv"
                className="bg-white p-2"
                onChange={(event) => {
                  setOriginalUrl(event.target.files[0]);
                }}
              />
            </div>
            <div className="flex flex-col text-start">
              <label htmlFor="image" className="text-lg font-bold mt-2">
                Image (210X210)
              </label>
              <input
                id="image"
                type="file"
                name="image"
                className="bg-white p-2"
                onChange={(event) => {
                  setUrl(event.target.files[0]);
                }}
              />
            </div>
            <button
              type="submit"
              className="angkorText text-white bg-venetianRed mt-9 py-2"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ProfileEditModal;
