import React from "react";
import Image from "next/image";

// import img from "../../assets/img/Component 1.png";
import img from "../../../assets/img/Component.png";
import FundCollectionInParentage from "../../common/FundCollectionInParcentage";
import SectionTitleAndHeading from "../../common/SectionTitleAndHeading";

function FundDistribution({ data, language }) {
  return (
    <div className="container">
      <div className="mt-24">
        <SectionTitleAndHeading
          title={language == "en" ? "Fund Distribution" : "তহবিল বিতরণ"}
          heading={
            language == "en"
              ? "Our transparent fund distribution process ensures that your donated funds are distributed equitably and effectively to support those in need."
              : "আমাদের স্বচ্ছ তহবিল বিতরণ প্রক্রিয়া নিশ্চিত করে যে আপনার দান করা তহবিলগুলি প্রয়োজনে তাদের সহায়তা করার জন্য ন্যায়সঙ্গত এবং কার্যকরভাবে বিতরণ করা হয়েছে।"
          }
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center mt-24">
          <Image
            src={img}
            alt="img"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // className="w-full h-auto max-h-[400px]"
            // className="h-auto"
          />
          <div className="flex flex-col gap-7">
            <FundCollectionInParentage
              value={language == "en" ? 35 : "৩৫"}
              title={
                language == "en"
                  ? "Direct relief to disaster victims"
                  : "দুর্যোগে ক্ষতিগ্রস্তদের জন্য সরাসরি ত্রাণ"
              }
              description={
                language == "en"
                  ? "This portion of the funds will be allocated directly to aid disaster victims."
                  : "তহবিলের এই অংশটি সরাসরি দুর্যোগে ক্ষতিগ্রস্তদের সহায়তার জন্য বরাদ্দ করা হবে।"
              }
              bg="white"
              color="charlestonGreen"
            />
            <FundCollectionInParentage
              value={language == "en" ? 30 : "৩০"}
              title={language == "en" ? "Overhead costs" : "ওভারহেড খরচ"}
              description={
                language == "en"
                  ? "These funds will be used to cover the costs of operating and managing the relief efforts."
                  : "এই তহবিলগুলি ত্রাণ প্রচেষ্টা পরিচালনা এবং পরিচালনার খরচ কভার করতে ব্যবহার করা হবে।"
              }
              bg="brightGray"
              color="charlestonGreen"
            />
            <FundCollectionInParentage
              value={language == "en" ? 25 : "২৫"}
              title={
                language == "en"
                  ? "Community rebuilding"
                  : "সম্প্রদায় পুনর্গঠন"
              }
              description={
                language == "en"
                  ? "Mobilize volunteers, staff, and resources to deliver aid to the affected communities."
                  : "ক্ষতিগ্রস্ত সম্প্রদায়গুলিতে সহায়তা প্রদানের জন্য স্বেচ্ছাসেবক, কর্মী এবং সংস্থানগুলিকে একত্রিত করুন।"
              }
              bg="indianRed"
              color="white"
            />
            <FundCollectionInParentage
              value={language == "en" ? 10 : "১০"}
              title={
                language == "en"
                  ? "disaster risk reduction and preparedness"
                  : "দুর্যোগ ঝুঁকি হ্রাস এবং প্রস্তুতি"
              }
              description={
                language == "en"
                  ? "Mobilize volunteers, staff, and resources to deliver aid to the affected communities."
                  : "ক্ষতিগ্রস্ত সম্প্রদায়গুলিতে সহায়তা প্রদানের জন্য স্বেচ্ছাসেবক, কর্মী এবং সংস্থানগুলিকে একত্রিত করুন।"
              }
              bg="venetianRed"
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundDistribution;
