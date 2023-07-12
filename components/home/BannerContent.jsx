import React from "react";
import Image from "next/image";
import incident from "../../assets/img/incident.svg";
import logistics from "../../assets/img/logistics.svg";
import volunteer from "../../assets/img/volunteer.svg";
import Button from "../common/Button";

const BannerContent = ({ language }) => {
  return (
    <div className="container">
      <div>
        <div className="relative">
          {/* black area content start */}
          <div className="bg-charlestonGreen flex flex-col items-center">
            <div className="pt-20 text-center font-normal text-2xl font-angkor text-white">
              {language == "en"
                ? "Streamlining Disaster Response Efforts:"
                : "বিপর্যয় মোকাবিলার প্রচেষ্টাকে স্ট্রিমলাইন করা:"}
            </div>
            <p className="pb-44 px-16 mt-6 text-white text-4xl  text-center">
              {language == "en"
                ? "Integrated Logistics Services for Faster, More Effective Relief"
                : "দ্রুত, আরও কার্যকরী ত্রাণের জন্য সমন্বিত লজিস্টিক পরিষেবা"}
            </p>
          </div>
          {/* black area content end */}
          {/* icon start */}
          <div className="absolute w-full flex justify-around text-white top-[75%] z-50">
            <Image src={incident} alt="incident" />
            <Image src={logistics} alt="incident" />
            <Image src={volunteer} alt="incident" />
          </div>
          {/* icon end */}
        </div>
        {/* card start */}
        <div className="flex justify-between gap-5">
          <div className="text-center bg-brightGray flex flex-col justify-between">
            <p className="pt-32 text-2xl font-bold px-11">
              {language == "en" ? "INCIDENT REPORT" : "ঘটনা রিপোর্ট"}
            </p>
            <p className="text-lg pb-8 mt-5 px-11">
              {language == "en"
                ? "To report an incident, please provide us with as much information as possible. Your timely report can help us respond more effectively and efficiently to the needs of disaster-affected communities."
                : "একটি ঘটনার রিপোর্ট করতে, অনুগ্রহ করে আমাদের যতটা সম্ভব তথ্য প্রদান করুন। আপনার সময়মত রিপোর্ট আমাদেরকে দুর্যোগ-আক্রান্ত সম্প্রদায়ের প্রয়োজনে আরও কার্যকরী এবং দক্ষতার সাথে সাড়া দিতে সাহায্য করতে পারে।"}
            </p>
            <Button
              path="/incident_report"
              title={language == "en" ? "Report" : "প্রতিবেদন"}
            />
          </div>
          <div className="text-center bg-brightGray flex flex-col justify-between">
            <p className="pt-32 text-2xl font-bold px-11">
              {language == "en" ? "LOGISTICS SERVICE" : "লজিস্টিক সার্ভিস"}
            </p>
            <p className="text-lg pb-8 mt-5 px-11">
              {language == "en"
                ? "We understand the critical role that logistics plays in ensuring the timely delivery of aid and resources to affected communities, and we are committed to delivering innovative and effective solutions."
                : "আমরা বুঝতে পারি যে লজিস্টিকগুলি ক্ষতিগ্রস্থ সম্প্রদায়গুলিতে সময়মত সহায়তা এবং সংস্থান সরবরাহ নিশ্চিত করার ক্ষেত্রে গুরুত্বপূর্ণ ভূমিকা পালন করে এবং আমরা উদ্ভাবনী এবং কার্যকর সমাধান সরবরাহ করতে প্রতিশ্রুতিবদ্ধ।"}
            </p>
            <Button
              path="/logistics_service"
              title={language == "en" ? "Request Service" : "অনুরোধ পরিষেবা"}
            />
          </div>
          <div className="text-center bg-brightGray flex flex-col justify-between">
            <p className="pt-32 text-2xl font-bold px-11">
              {language == "en"
                ? "VOLUNTEER REGISTRATION"
                : "স্বেচ্ছাসেবক নিবন্ধন"}
            </p>
            <p className="text-lg pb-8 mt-5 px-11">
              {language == "en"
                ? "As a volunteer, you will have the opportunity to work alongside our dedicated team to provide support to communities affected by disasters and make a real difference in their lives."
                : "একজন স্বেচ্ছাসেবক হিসাবে, আপনি আমাদের ডেডিকেটেড টিমের সাথে কাজ করার সুযোগ পাবেন দুর্যোগে ক্ষতিগ্রস্ত সম্প্রদায়গুলিকে সহায়তা প্রদান করতে এবং তাদের জীবনে একটি বাস্তব পরিবর্তন আনতে।"}
            </p>
            <Button
              path="/login"
              title={language == "en" ? "Register" : "নিবন্ধন"}
            />
          </div>
        </div>
        {/* card end */}
      </div>
    </div>
  );
};

export default BannerContent;
