import Image from "next/image";
import React from "react";
import event from "../../assets/img/donation.png";
import time from "../../assets/img/time.svg";
import navigate from "../../assets/img/navigate.svg";
import { eventsButton } from "../../utils/svg.js";

const Events = () => {
  return (
    <div>
      <Image src={event} alt="event" className="w-full" />
      <div className="py-9 px-7 flex gap-4  items-center bg-brightGray">
        <p className="bg-indianRed py-5 px-8 rounded-full text-center">
          <span className="text-3xl font-bold text-white">24</span>
          <br />
          <span className="text-base font-bold text-white">MAY</span>
        </p>
        <div className=" ">
          <p className="text-xl font-bold">
            Disaster Preparedness Training Program
          </p>
          <div className="flex gap-1 items-center">
            <Image src={time} alt="time" />
            <p className="text-indianRed ">5:00 PM to 8:00 PM</p>
          </div>
          <div className="flex gap-1 items-center">
            <Image src={navigate} alt="time" />
            <p className="text-indianRed ">Dhaka</p>
          </div>
        </div>
      </div>
      <button className="py-5 font-normal bg-venetianRed text-white w-full text-2xl flex justify-center">
        {eventsButton}
      </button>
    </div>
  );
};

export default Events;
