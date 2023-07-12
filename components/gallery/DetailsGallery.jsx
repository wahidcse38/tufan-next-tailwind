import React from "react";
import SectionTitleAndHeading from "../common/SectionTitleAndHeading";
import GalleryPicture from "./GalleryPicture";
import { useAuthContext } from "../../context/AuthContext";

function DetailsGallery({ data }) {
  const { language } = useAuthContext();
  return (
    <div className="container">
      <div className="mt-24 ">
        <SectionTitleAndHeading
          title={
            language == "en"
              ? "A collection of photos and videos"
              : "ফটো এবং ভিডিওর একটি সংগ্রহ"
          }
          heading={
            language == "en"
              ? "Telling the stories of the people we have helped and the difference we have made in their lives."
              : "আমরা যাদের সাহায্য করেছি এবং তাদের জীবনে আমরা যে পরিবর্তন করেছি তাদের গল্প।"
          }
        />
        <p className="paragraph">
          {language == "en"
            ? "We believe in transparency and sharing our work with you, our supporters, so that you can see the impact of your donations and contributions. Browse through our gallery and witness the transformational changes we have brought about in the lives of those we serve."
            : "আমরা স্বচ্ছতায় বিশ্বাস করি এবং আমাদের কাজ আপনার, আমাদের সমর্থকদের সাথে শেয়ার করি, যাতে আপনি আপনার অনুদান এবং অবদানের প্রভাব দেখতে পারেন। আমাদের গ্যালারির মাধ্যমে ব্রাউজ করুন এবং আমরা যাদের সেবা করি তাদের জীবনে আমরা যে রূপান্তরমূলক পরিবর্তন এনেছি তা দেখুন।"}
        </p>
        <GalleryPicture data={data} />
      </div>
    </div>
  );
}

export default DetailsGallery;
