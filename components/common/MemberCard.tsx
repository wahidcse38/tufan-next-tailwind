import Image from "next/image";
import React from "react";
import profile from "@/assets/img/profile.svg";

const MemberCard = ({ title }) => {
  return (
    <section className="container p-6 mt-20">
      <p>{title}</p>
      <p className="text-4xl mt-6">
        At our organization, we are proud to have a dedicated and experienced
        execution body that is committed to delivering relief and support to
        communities affected by disasters.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-40">
        <div className="bg-brightGray w-full text-center relative mb-24">
          <p className="text-2xl font-bold mt-28">MR FIRSTNAME LASTNAME</p>
          <p className="text-lg mb-10">Role</p>
          <div className="absolute -top-[50%] right-1/2 translate-x-1/2">
            <Image
              src={profile}
              className="w-44 h-44 border-[18px] border-indianRed rounded-full"
              alt="profile"
            />
          </div>
        </div>
        <div className="bg-brightGray w-full text-center relative mb-24">
          <p className="text-2xl font-bold mt-28">MR FIRSTNAME LASTNAME</p>
          <p className="text-lg mb-10">Role</p>
          <div className="absolute -top-[50%] right-1/2 translate-x-1/2">
            <Image
              src={profile}
              className="w-44 h-44 border-[18px] border-indianRed rounded-full"
              alt="profile"
            />
          </div>
        </div>
        <div className="bg-brightGray w-full text-center relative mb-24">
          <p className="text-2xl font-bold mt-28">MR FIRSTNAME LASTNAME</p>
          <p className="text-lg mb-10">Role</p>
          <div className="absolute -top-[50%] right-1/2 translate-x-1/2">
            <Image
              src={profile}
              className="w-44 h-44 border-[18px] border-indianRed rounded-full"
              alt="profile"
            />
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default MemberCard;
