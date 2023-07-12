import React from "react";
import SectionTitleAndHeading from "../common/SectionTitleAndHeading";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import downArrow from "../../assets/img/downArrow.svg";

const initialState = {
  projectId: "",
  donationChannel: "",
  donationAmount: "",
  accountNumber: "",
  referenceId: "",
};

function Reference({ language, projects }) {
  const [donation, setDonation] = useState(initialState);
  const [isLoading, setIsLoading] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      projectId,
      donationChannel,
      donationAmount,
      accountNumber,
      referenceId,
    } = donation;

    if (
      !projectId ||
      !donationChannel ||
      !donationAmount ||
      !accountNumber ||
      !referenceId
    ) {
      toast.error("Please fill out all fields");
      return;
    }

    try {
      setIsLoading(true);
      const id = new Date().getTime().toString();
      await setDoc(doc(db, "donation", id), {
        timeStamp: serverTimestamp(),
        date: new Date().toLocaleDateString("en-GB"),
        projectId,
        donationChannel,
        donationAmount,
        accountNumber,
        referenceId,
      });
      setIsLoading(false);
      setDonation(initialState);
      toast.success("Successfully Submitted!");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      toast.error("Failed to Submit!");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDonation({ ...donation, [name]: value });
  };
  return (
    <div className="container">
      <div className=" bg-brightGray mt-24">
        <div className="text-center py-14 px-3 md:px-5 lg:px-16 xl:px-24">
          <SectionTitleAndHeading
            title={language == "en" ? "Donation Reference" : "দানের রেফারেন্স"}
            heading={
              language == "en"
                ? "After you have made the donation, please submit the following details for reference"
                : "আপনি দান করার পরে, অনুগ্রহ করে রেফারেন্সের জন্য নিম্নলিখিত বিবরণ জমা দিন"
            }
          />
          <div className="mt-16">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-8 lg:gap-10">
                <div className="flex flex-col justify-start">
                  <label
                    htmlFor="selectedProduct"
                    className="text-left heading mb-2"
                  >
                    SELECTED PROJECT
                  </label>
                  <div className="relative">
                    <select
                      id="selectedProduct"
                      className="w-full h-12 px-5 appearance-none outline-none paragraph"
                      onChange={handleChange}
                      name="projectId"
                    >
                      <option value="">Select Project</option>

                      {projects?.map((item, i) => {
                        return (
                          <option value={item.card_title_en} key={i}>
                            {item.card_title_en}
                          </option>
                        );
                      })}
                    </select>
                    <Image
                      src={downArrow}
                      alt="down arrow"
                      className="absolute right-5 top-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                  <div className="flex flex-col justify-start">
                    <label
                      htmlFor="donationChannel"
                      className="text-left heading mb-2"
                    >
                      DONATION CHANNEL
                    </label>
                    <div className="relative">
                      <select
                        id="donationChannel"
                        className=" w-full h-12 px-5 appearance-none outline-none paragraph"
                        onChange={handleChange}
                        name="donationChannel"
                      >
                        <option value="">Select Donation Channel</option>
                        <option value="bkash">bKash</option>
                        <option value="ebl">EBL</option>
                      </select>
                      <Image
                        src={downArrow}
                        alt="down arrow"
                        className="absolute right-5 top-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-start">
                    <label
                      htmlFor="donationAmount"
                      className="text-left heading mb-2"
                    >
                      DONATION AMOUNT
                    </label>
                    <input
                      type="number"
                      id="donationAmount"
                      className="w-full h-12 px-5 appearance-none outline-none paragraph"
                      placeholder="Enter your amount"
                      name="donationAmount"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col justify-start">
                    <label
                      htmlFor="accountNumber"
                      className="text-left heading mb-2"
                    >
                      ACCOUNT NUMBER
                    </label>
                    <input
                      type="text"
                      id="accountNumber"
                      className="w-full h-12 px-5 outline-none paragraph"
                      placeholder="Enter your account number"
                      name="accountNumber"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col justify-start">
                    <label
                      htmlFor="referenceId"
                      className="text-left heading mb-2"
                    >
                      REFERENCE ID
                    </label>
                    <input
                      type="text"
                      id="referenceId"
                      className="w-full h-12 px-5 outline-none paragraph"
                      placeholder="Enter your reference ID"
                      name="referenceId"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <p className="paragraph mt-16 mb-3">
                {language == "en"
                  ? "Before submitting, please ensure that you have provided accurate and complete information, including your contact details, and reference ID"
                  : "জমা দেওয়ার আগে, দয়া করে নিশ্চিত করুন যে আপনি আপনার যোগাযোগের বিশদ বিবরণ এবং রেফারেন্স আইডি সহ সঠিক এবং সম্পূর্ণ তথ্য প্রদান করেছেন"}
              </p>
              <button
                type="submit"
                className="flex justify-center py-3 bg-venetianRed text-white font-normal font-angkor text-2xl w-full"
              >
                {language == "en" ? "Submit" : "জমা দিন"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reference;
