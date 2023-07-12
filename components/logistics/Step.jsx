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
              ? "The first step is to provide us with your logistics needs. You can provide details such as the type of goods to be transported, the destination, and the kind of transport you are needed."
              : "প্রথম পদক্ষেপটি হল আমাদের আপনার সরবরাহের প্রয়োজনীয়তাগুলি সরবরাহ করা। আপনি বিশদ বিবরণ প্রদান করতে পারেন যেমন পণ্য পরিবহনের ধরন, গন্তব্য এবং আপনার কী ধরনের পরিবহন প্রয়োজন।"
          }
        />
        <PlanBar
          title={language == "en" ? "ASSESSMENT" : "মূল্যায়ন"}
          description={
            language == "en"
              ? "We will assess your logistics needs based on the information provided and suggest the best possible solution. Our team will provide you with a cost estimate, transportation options, and expected delivery time."
              : "আমরা প্রদত্ত তথ্যের উপর ভিত্তি করে আপনার লজিস্টিক চাহিদাগুলি মূল্যায়ন করব এবং সর্বোত্তম সম্ভাব্য সমাধানের পরামর্শ দেব৷ আমাদের দল আপনাকে একটি খরচ অনুমান, পরিবহন বিকল্প এবং প্রত্যাশিত প্রসবের সময় প্রদান করবে।"
          }
        />
        <PlanBar
          title={language == "en" ? "Service agreement" : "সেবা চুক্তি"}
          description={
            language == "en"
              ? "Once you approve the cost estimate and transportation plan, we will enter into a service agreement with you. Our team will then initiate the logistics service and ensure the safe and timely delivery of your goods."
              : "আপনি একবার খরচের অনুমান এবং পরিবহন পরিকল্পনা অনুমোদন করলে, আমরা আপনার সাথে একটি পরিষেবা চুক্তিতে প্রবেশ করব। আমাদের দল তারপর লজিস্টিক পরিষেবা শুরু করবে এবং আপনার পণ্যগুলির নিরাপদ এবং সময়মত ডেলিভারি নিশ্চিত করবে।"
          }
          isLast={true}
        />
      </div>
    </div>
  );
}

export default Step;
