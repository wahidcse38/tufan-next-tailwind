import Image from "next/image";
import React from "react";
import profile from "@/assets/img/fire.png";
import { useAuthContext } from "../../context/AuthContext";
import Modal from "../common/modal/ProfileEditModal";
import { useToggle } from "@/hooks/lib/useToggle";
import { useState, useEffect } from "react";
import Link from "next/link";

const ProfileInfo = () => {
  const [screenSize, setScreenSize] = useState(null);
  const { currentUser, userDetails } = useAuthContext();
  const [isOpen, setIsOpen] = useToggle(false);
  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);
  // console.log(currentUser);
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-3 border-venetianRed border">
        <div className="lg:col-span-1 border-r-venetianRed border-r flex flex-col justify-between ">
          <div className="flex flex-col items-center">
            <Image
              src={userDetails.image}
              alt="profile image"
              className="mt-5 border-indianRed border-8 rounded-full"
              width={100}
              height={100}
            />
            <p className=" text-44px font-normal text-charlestonGreen">
              {currentUser.displayName}
            </p>
            <p className="paragraph">{userDetails.createdAt}</p>
            <div className="flex gap-3">
              <p className="text-28px font-bold text-indianRed border-r border-r-indianRed">
                3 Projects
              </p>
              <p className="text-28px font-bold text-indianRed">40 Hours</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-indianRed w-full py-3 mt-5 text-white"
          >
            Edit Profile
          </button>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2  px-5 my-8">
          <div className="flex flex-col justify-center">
            <div>
              <p className="heading">PHONE NUMBER</p>
              <p className="paragraph">
                {userDetails.phone || "Phone Number"}{" "}
              </p>
            </div>
            <div className="mt-5">
              <p className="heading">Date OF BIRTH</p>
              <p className="paragraph">{userDetails.dob || "dd/mm/yyyy"} </p>
            </div>
            <div className="mt-5">
              <p className="heading">OWN ZONE</p>
              <p className="paragraph">{userDetails.ownZone || "Zone"} </p>
            </div>
            <div className="mt-5">
              <p className="text-2xl font-bold text-charlestonGreen">CV</p>
              <Link
                href={userDetails?.cv || "/"}
                target="_blank"
                className="paragraph border-b"
              >
                Download
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div>
              <p className="heading">EMAIL</p>
              <p className="paragraph">{userDetails.email || "Email"}</p>
            </div>
            <div className="mt-5">
              <p className="heading">EDUCATIONAL BACKGROUND</p>
              <p className="paragraph">
                {userDetails.educationalBackground || "Education"}
              </p>
            </div>
            <div className="mt-5">
              <p className="heading">PREFERRED ZONE</p>
              <p className="paragraph">{userDetails.preferredZone || "Zone"}</p>
            </div>
            <div className="mt-5">
              <p className="heading">NID</p>
              <p className="paragraph">{userDetails.nid || "NID"}</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={setIsOpen}
        screenSize={screenSize}
        title="Profile Edit"
      />
    </div>
  );
};

export default ProfileInfo;
