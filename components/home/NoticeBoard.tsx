import React from "react";

const NoticeBoard = ({ language, data }) => {
  return (
    <section className="bg-venetianRed h-12 flex items-center">
      <div className=" flex justify-end p-6 container">
        <p className="hidden md:block text-white font-semibold">
          {language == "en" ? data?.notice_en : data?.notice_bn}
        </p>
        {/* <marquee className="block md:hidden text-white font-semibold">
          Bangabazar Fire: Livelihoods burnt to ashes before Eid &gt;&gt;
        </marquee> */}
      </div>
    </section>
  );
};

export default NoticeBoard;
