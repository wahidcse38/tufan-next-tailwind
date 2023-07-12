import React from "react";

import SectionTitleAndHeading from "./../../common/SectionTitleAndHeading";
import AdvisorCard from "./../../common/AdvisorCard";

const MemberCard = ({ data, language }) => {
  return (
    <section className="container">
      <div className="mt-24">
        <SectionTitleAndHeading
          title={language == "en" ? "Execution Body" : "কৃতি ব্যক্তি"}
          heading={
            language == "en"
              ? "At our organization, we are proud to have a dedicated and experienced execution body that is committed to delivering relief and support to communities affected by disasters."
              : "আমাদের সংস্থায়, আমরা একটি নিবেদিত এবং অভিজ্ঞ মৃত্যুদন্ড কার্যকর করার জন্য গর্বিত যেটি দুর্যোগে ক্ষতিগ্রস্ত সম্প্রদায়ের জন্য ত্রাণ ও সহায়তা প্রদানের জন্য প্রতিশ্রুতিবদ্ধ।"
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {data?.selectedUsers?.map((item, i) => (
          <AdvisorCard key={i} advisor={item} language={language}/>
        ))}
      </div>
    </section>
  );
};

export default MemberCard;
