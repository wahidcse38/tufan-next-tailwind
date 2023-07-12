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
                ? "Providing logistics services to the communities affected by disasters."
                : "দুর্যোগ দ্বারা ক্ষতিগ্রস্ত সম্প্রদায়গুলিতে সরবরাহ পরিষেবা প্রদান করা।"
            }
          />
          <p className="paragraph">
            {language == "en"
              ? "Our dedicated logistics team ensures timely delivery of relief materials to the disaster-affected areas, using the most efficient and cost-effective methods. We understand the urgency of disaster relief and work around the clock to make sure that no one is left behind. With our logistics service, we aim to bridge the gap between those in need and those willing to help, bringing hope and support to the communities in crisis."
              : "আমাদের ডেডিকেটেড লজিস্টিক টিম দুর্যোগ-আক্রান্ত এলাকায় ত্রাণ সামগ্রীর সময়মত ডেলিভারি নিশ্চিত করে, সবচেয়ে দক্ষ এবং সাশ্রয়ী পদ্ধতি ব্যবহার করে। আমরা দুর্যোগ ত্রাণের জরুরিতা বুঝতে পারি এবং কেউ যাতে পিছিয়ে না থাকে তা নিশ্চিত করার জন্য চব্বিশ ঘন্টা কাজ করি। আমাদের লজিস্টিক পরিষেবার সাহায্যে, আমরা যারা প্রয়োজনে এবং যারা সাহায্য করতে ইচ্ছুক তাদের মধ্যে ব্যবধান দূর করার লক্ষ্য রাখি, সংকটে থাকা সম্প্রদায়ের জন্য আশা ও সমর্থন নিয়ে আসে।"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
