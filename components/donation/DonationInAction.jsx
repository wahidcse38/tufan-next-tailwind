import React from "react";
import Button from "./../common/Button";
import Image from "next/image";
import img from "../../assets/img/donate.png";
import SectionTitleAndHeading from "./../common/SectionTitleAndHeading";

function DonationInAction({ language, projects }) {
  return (
    <div className="container">
      <div className="mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <div className="bg-brightGray grid  grid-cols-1">
            <div className="">
              {/* <ImageComponent img={img} title="Image" ratio=" aspect-square" /> */}
              <div className="relative  w-full">
                <Image
                  src={img}
                  alt="img"
                  width={500}
                  height={500}
                  className="w-full h-auto max-h-[300px]"
                />
              </div>
            </div>

            <div className="relative">
              {projects?.slice(0, 1).map((item, i) => {
                return (
                  <div className="px-3 lg:px-11 pt-5 pb-24 sm:pb-20" key={i}>
                    <h6 className="heading mb-2.5">
                      {language == "en"
                        ? item.card_title_en
                        : item.card_title_bn}
                    </h6>
                    <p className="paragraph pb-4">
                      {language == "en" ? item.card_des_en : item.card_des_bn}
                    </p>
                    <div>
                      <span className="text-venetianRed font-normal text-lg">
                        {language == "en" ? item.raised_en : item.raised_bn} of{" "}
                        {language == "en" ? item.goal_en : item.goal_bn} raised
                      </span>
                      <div className="w-full bg-charlestonGreen rounded-full h-2.5 mt-0.5">
                        <div
                          className="bg-venetianRed h-2.5 rounded-full"
                          style={{
                            width: `${(item.raised_en * 100) / item.goal_en}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="absolute bottom-0 w-full">
                <Button
                  path="/projects"
                  title={
                    language == "en"
                      ? "Browse More Projects"
                      : "আরো প্রকল্প ব্রাউজ করুন"
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <SectionTitleAndHeading
              title={
                language == "en" ? "Your Donation In Action" : "কর্মে আপনার দান"
              }
              heading={
                language == "en"
                  ? "Transparent Fund Distribution Philosophy"
                  : "স্বচ্ছ তহবিল বিতরণ দর্শন"
              }
            />
            <div className="paragraph">
              <p>
                {language == "en"
                  ? "At our organization, we believe in complete transparency in our fund distribution process. We have a strict system in place to ensure that every donation goes directly towards the cause it is intended for, with minimal overhead costs."
                  : "আমাদের সংস্থায়, আমরা আমাদের তহবিল বন্টন প্রক্রিয়ার সম্পূর্ণ স্বচ্ছতায় বিশ্বাস করি। প্রতিটি দান যে উদ্দেশ্যে করা হয়েছে তার জন্য সরাসরি ন্যূনতম ওভারহেড খরচ সহ তা নিশ্চিত করার জন্য আমাদের একটি কঠোর ব্যবস্থা রয়েছে।"}
              </p>
              <br />
              <p>
                {language == "en"
                  ? "Our team is dedicated to making a real difference in the lives of those affected by disasters and we strive to provide the utmost accountability to our donors. You can trust that your donation will have a meaningful impact and make a positive change in the community."
                  : "আমাদের দল দুর্যোগে ক্ষতিগ্রস্তদের জীবনে প্রকৃত পরিবর্তন আনতে নিবেদিত এবং আমরা আমাদের দাতাদের সর্বোচ্চ দায়বদ্ধতা প্রদানের জন্য সচেষ্ট। আপনি বিশ্বাস করতে পারেন যে আপনার দান একটি অর্থবহ প্রভাব ফেলবে এবং সম্প্রদায়ে ইতিবাচক পরিবর্তন আনবে। "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationInAction;
