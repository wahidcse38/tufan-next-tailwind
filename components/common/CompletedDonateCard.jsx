import Image from "next/image";
import React from "react";

import Button from "../common/Button";
import { useAuthContext } from "../../context/AuthContext";

function CompletedDonateCard({ img, name, description, id }) {
  const { language } = useAuthContext();
  return (
    <section className="">
      <div className="bg-brightGray grid  grid-cols-1 lg:grid-cols-3 ">
        <div className="lg:col-span-1">
          {/* <ImageComponent img={img} title="Image" ratio=" aspect-square" /> */}
          <div
            className="relative h-auto max-h-[400px] xl:max-h-[350px] w-full"
            style={{ aspectRatio: 0.8 }}
          >
            <Image src={img} alt="img" fill />
          </div>
        </div>

        <div className=" lg:col-span-2 relative">
          <div className="px-3 lg:px-11 pt-11 pb-20 lg:pb-0">
            <h6 className="heading mb-2.5">{name}</h6>
            <p className="paragraph pb-4">{description}</p>
          </div>

          <div className="absolute bottom-0 w-full">
            <Button
              path={`/project_completed/${id}`}
              title={
                language == "en"
                  ? "View Project Details"
                  : "প্রকল্পের বিবরণ দেখুন"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompletedDonateCard;

//  <section className="container p-6 mt-24">
//    <div className="lg:flex mt-7">
//      <div
//        className="h-60 lg:h-auto lg:w-2/5 bg-cover"
//        style={{ backgroundImage: "url(/donate.png)" }}
//        title="donate"
//      ></div>
//      <div className="bg-brightGray flex flex-col justify-between ">
//        <div className="bg-brightGray py-5 px-6">
//          <p className="uppercase text-2xl font-bold">Sunamganj Flood</p>
//          <p className="text-lg mt-2">
//            In the aftermath of the flood, many people are left stranded without
//            access to basic necessities such as food, clean water, and medical
//            care.
//          </p>
//          <p className="mt-2 text-venetianRed text-lg">
//            40,500 of 60,000 raised
//          </p>
//          <div className="">
//            <div className="bg-black relative h-3 w-full rounded-2xl">
//              <div className="bg-red-500 absolute top-0 left-0 flex h-full w-[75%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
//                75%
//              </div>
//            </div>
//          </div>
//        </div>
//        <div>
//          <button className="flex justify-center py-5 bg-venetianRed text-white w-full  text-2xl ">
//            {donate}
//          </button>
//        </div>
//      </div>
//    </div>
//  </section>;
