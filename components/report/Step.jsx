import React from "react";
import PlanBar from "../common/PlanBar";

function Step({ language }) {
  return (
    <div>
      <h3 className="section-heading">
        {language == "en"
          ? "What will be the next step?"
          : "পরবর্তী পদক্ষেপ কি হবে?"}
      </h3>
      <div className="mt-16 w-full">
        <PlanBar
          title={language == "en" ? "PROVIDE DETAILS" : "বিশদ প্রদান করুন"}
          description={
            language == "en"
              ? "The first step is to provide us with your basic information, including your name, contact details, and the details about the incident you want to report. You can also contact us by phone, email, or by visiting our office."
              : "প্রথম ধাপ হল আপনার নাম, যোগাযোগের বিশদ এবং আপনি যে ঘটনাটি রিপোর্ট করতে চান তার বিবরণ সহ আপনার প্রাথমিক তথ্য আমাদের প্রদান করা। আপনি ফোন, ইমেল বা আমাদের অফিসে গিয়েও আমাদের সাথে যোগাযোগ করতে পারেন।"
          }
        />
        <PlanBar
          title={language == "en" ? "ASSESSMENT" : "মূল্যায়ন"}
          description={
            language == "en"
              ? "Once we receive your information, our team will conduct an initial assessment of your needs and determine the appropriate level of support required. This assessment may include a visit to your location to understand the extent of the damage and the level of assistance needed."
              : "একবার আমরা আপনার তথ্য পেয়ে গেলে, আমাদের দল আপনার প্রয়োজনের প্রাথমিক মূল্যায়ন করবে এবং প্রয়োজনীয় সমর্থনের উপযুক্ত স্তর নির্ধারণ করবে। এই মূল্যায়নে ক্ষতির পরিমাণ এবং প্রয়োজনীয় সহায়তার মাত্রা বোঝার জন্য আপনার অবস্থানে যাওয়া অন্তর্ভুক্ত থাকতে পারে।"
          }
        />
        <PlanBar
          title={language == "en" ? "ASSISTANCE" : "সহায়তা"}
          description={
            language == "en"
              ? "After the assessment is complete, we will provide you with the necessary assistance, which may include emergency relief supplies, shelter, medical support, and other essential services. We will also work with you to develop a longer-term plan to support your recovery and rehabilitation."
              : "মূল্যায়ন সম্পূর্ণ হওয়ার পরে, আমরা আপনাকে প্রয়োজনীয় সহায়তা প্রদান করব, যার মধ্যে জরুরী ত্রাণ সরবরাহ, আশ্রয়, চিকিৎসা সহায়তা এবং অন্যান্য প্রয়োজনীয় পরিষেবা অন্তর্ভুক্ত থাকতে পারে। আমরা আপনার পুনরুদ্ধারের সমর্থন করার জন্য একটি দীর্ঘমেয়াদী পরিকল্পনা তৈরি করতে আপনার সাথে কাজ করব এবং পুনর্বাসন।"
          }
          isLast={true}
        />
      </div>
    </div>
  );
}

export default Step;
