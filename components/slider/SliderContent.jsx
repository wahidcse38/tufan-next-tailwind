import Image from "next/image";
import React from "react";

import slider1 from "../../assets/img/slider1.png";
import Link from "next/link";

function SliderContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full relative" style={{ aspectRatio: 1.74 }}>
        <Image src={slider1} alt="Slider1" fill className="object-none" />
      </div>
      <div className="bg-brightGray p-5 md:p-10 lg:p-5 xl:p-10">
        <div className="flex justify-start items-center gap-3 ">
          <div className="w-14 h-14 rounded-full bg-indianRed text-white font-bold flex flex-col flex-shrink-0 justify-center items-center">
            <p className="text-lg mb-0.5">24</p>
            <p className="text-sm -mt-2.5 uppercase">May</p>
          </div>
          <div className="">
            <h3 className="text-lg font-bold text-charlestonGreen capitalize line-clamp-1">
              Disaster Preparedness Training Program
            </h3>
            <div className="flex justify-start items-center gap-1">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49227 1.41666C4.58227 1.41666 1.41602 4.59 1.41602 8.5C1.41602 12.41 4.58227 15.5833 8.49227 15.5833C12.4093 15.5833 15.5827 12.41 15.5827 8.5C15.5827 4.59 12.4093 1.41666 8.49227 1.41666ZM10.8298 11.8362L7.79102 8.79041V4.95833H9.20768V8.20958L11.8356 10.8375L10.8298 11.8362Z"
                  fill="#CB5858"
                />
              </svg>
              <span className="text-base font-normal text-venetianRed">
                5:00 PM - 8:00 PM
              </span>
            </div>
            <div className="flex justify-start items-center gap-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0007 10C10.459 10 10.8515 9.83666 11.1782 9.51C11.5048 9.18333 11.6679 8.79111 11.6673 8.33333C11.6673 7.875 11.504 7.4825 11.1773 7.15583C10.8507 6.82916 10.4584 6.66611 10.0007 6.66666C9.54232 6.66666 9.14982 6.83 8.82315 7.15666C8.49648 7.48333 8.33343 7.87555 8.33398 8.33333C8.33398 8.79166 8.49732 9.18416 8.82398 9.51083C9.15065 9.8375 9.54287 10.0006 10.0007 10ZM10.0007 18.0208C9.88954 18.0208 9.77843 18 9.66732 17.9583C9.55621 17.9167 9.45898 17.8611 9.37565 17.7917C7.34787 16 5.83398 14.3367 4.83398 12.8017C3.83398 11.2667 3.33398 9.83278 3.33398 8.5C3.33398 6.41666 4.00426 4.75694 5.34482 3.52083C6.68537 2.28472 8.23732 1.66666 10.0007 1.66666C11.7645 1.66666 13.3168 2.28472 14.6573 3.52083C15.9979 4.75694 16.6679 6.41666 16.6673 8.5C16.6673 9.83333 16.1673 11.2675 15.1673 12.8025C14.1673 14.3375 12.6534 16.0006 10.6257 17.7917C10.5423 17.8611 10.4451 17.9167 10.334 17.9583C10.2229 18 10.1118 18.0208 10.0007 18.0208Z"
                  fill="#CB5858"
                />
              </svg>
              <span className="text-base font-normal text-venetianRed">
                Dhaka
              </span>
            </div>
          </div>
        </div>
        <div className="py-5 text-base tracking-wide font-normal text-charlestonGreen">
          <p className="text-left">
            Experience the beauty of haor with a cozy spot to relax and embrace
            the magic under the moonlit night. With live performances,
            delectable culinary delights, and a community of like-minded
            individuals, this festival promises to be an unforgettable
            celebration of unity and creativity.
          </p>
          <h6 className=" mt-1">
            Don&apos;t miss this extraordinary experience -{" "}
            <Link href="#" className="font-bold">
              REGISTER NOW!
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default SliderContent;
