import React from "react";
import SectionTitleAndHeading from "./../common/SectionTitleAndHeading";
import Notice from "./Notice";

function NewsAndUpdates({ language, noticeboard }) {
  return (
    <div className="container">
      <div className="mt-24">
        <SectionTitleAndHeading
          title={
            language == "en"
              ? "Latest News and Updates"
              : "সর্বশেষ খবর এবং আপডেট"
          }
          heading={
            language == "en"
              ? "Stay informed about the latest developments in disaster response and relief efforts"
              : "দুর্যোগ প্রতিক্রিয়া এবং ত্রাণ প্রচেষ্টার সর্বশেষ উন্নয়ন সম্পর্কে অবগত থাকুন"
          }
        />
        <div className="mt-16 grid gap-8">
          {noticeboard.map((item, i) => {
            return <Notice key={i} notice={item} language={language}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default NewsAndUpdates;
