import Image from "next/image";
import React from "react";

import img from "../../assets/img/donate.png";
import { donate } from "@/assets/img/donate.png";
import SectionTitleAndHeading from "./../common/SectionTitleAndHeading";

function Mission({ language }) {
  return (
    <div className="container">
      <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="w-full relative" style={{ aspectRatio: 1.6 }}>
          <Image src={img} alt="donate" fill className="object-contain" />
        </div>
        <div className="">
          <SectionTitleAndHeading
            title={language == "en" ? "Our Mission" : "আমাদের লক্ষ্য"}
            heading={
              language == "en"
                ? "Supporting communities affected by disasters across Bangladesh."
                : "বাংলাদেশ জুড়ে দুর্যোগে ক্ষতিগ্রস্ত সম্প্রদায়কে সহায়তা করা।"
            }
          />
          <p className="paragraph">
            {language == "en"
              ? "We understand that reporting an incident or disaster can be a difficult and stressful process, and we are committed to providing compassionate and supportive care to all those in need. If you have any questions or concerns about the incident report process, please do not hesitate to contact us."
              : "আমরা বুঝি যে একটি ঘটনা বা বিপর্যয় রিপোর্ট করা একটি কঠিন এবং চাপের প্রক্রিয়া হতে পারে, এবং আমরা যারা প্রয়োজন তাদের জন্য সহানুভূতিশীল এবং সহায়ক যত্ন প্রদানের জন্য প্রতিশ্রুতিবদ্ধ। ঘটনা রিপোর্ট প্রক্রিয়া সম্পর্কে আপনার কোন প্রশ্ন বা উদ্বেগ থাকলে, অনুগ্রহ করে দ্বিধা করবেন না আমাদের সাথে যোগাযোগ করতে।"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
