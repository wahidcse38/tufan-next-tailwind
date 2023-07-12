import React from "react";
import SectionTitleAndHeading from "../common/SectionTitleAndHeading";
import Image from "next/image";
import bKash from "../../assets/img/bKash.png";
import ebl from "../../assets/img/EBL.png";

function Chanels({ language }) {
  return (
    <div className="container">
      <div className="mt-24">
        <SectionTitleAndHeading
          title={language == "en" ? "Donation Channels" : "দান চ্যানেল"}
          heading={
            language == "en"
              ? "You can use any of our donation channels to make your donation"
              : "আপনি আপনার দান করার জন্য আমাদের দান চ্যানেলগুলির যেকোনো একটি ব্যবহার করতে পারেন"
          }
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-5 lg:gap-8">
            <Image
              src={bKash}
              alt="bKash"
              width={150}
              height={100}
              className=""
            />
            <div>
              <h3 className="text-2xl font-bold text-charlestonGreen capitalize">
                BKash Account Details
              </h3>
              <p className="paragraph">01844600834</p>
              <span className="paragraph">Tufan Ltd.</span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-5 lg:gap-8">
            <Image src={ebl} alt="ebl" width={150} height={100} className="" />
            <div>
              <h3 className="text-2xl font-bold text-charlestonGreen capitalize">
                Bank Account Details
              </h3>
              <p className="paragraph">0130013400014</p>
              <span className="paragraph">Tufan Ltd.</span>
              <p className="paragraph">EBL - Gulshan North Branch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chanels;
