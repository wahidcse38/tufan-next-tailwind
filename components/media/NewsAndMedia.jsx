import React from "react";
import SectionTitleAndHeading from "../common/SectionTitleAndHeading";
import NwesCard from "./NwesCard";

function NewsAndMedia({ language, media }) {
  return (
    <div className="container">
      <div className="mt-24">
        <SectionTitleAndHeading
          title={language == "en" ? "News & Media" : "সংবাদ ও মিডিয়া"}
          heading={
            language == "en"
              ? "Find the latest news and updates, as well as our efforts to support communities in need."
              : "সর্বশেষ খবর এবং আপডেট খুঁজুন, সেইসাথে প্রয়োজন সম্প্রদায়কে সহায়তা করার জন্য আমাদের প্রচেষ্টা।"
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-5">
          {media?.map((item, i) => {
            return <NwesCard key={i} language={language} media={item}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default NewsAndMedia;
