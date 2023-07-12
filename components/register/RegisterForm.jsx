import Image from "next/image";
import React from "react";

import downArrow from "../../assets/img/downArrow.svg";
import file from "../../assets/img/file.svg";

function RegisterForm() {
  return (
    <div className="bg-brightGray p-7">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="flex flex-col justify-start md:col-span-2">
            <label htmlFor="name" className="text-left heading mb-2">
              NAME
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="phone" className="text-left heading mb-2">
              PHONE NUMBER
            </label>
            <div className="relative">
              <input
                type="text"
                id="phone"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="email" className="text-left heading mb-2">
              EMAIL
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="password" className="text-left heading mb-2">
              PASSWORD
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="confirmPassword" className="text-left heading mb-2">
              CONFIRM PASSWORD
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Retype password"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-venetianRed w-full my-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="flex flex-col justify-start">
            <label htmlFor="dob" className="text-left heading mb-2">
              DATE OF BIRTH
            </label>
            <div className="relative">
              <input
                type="date"
                id="dob"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Enter your birth date"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="edu" className="text-left heading mb-2">
              EDUCATIONAL BACKGROUND
            </label>
            <div className="relative">
              <select
                id="edu"
                className="w-full h-12 px-5 appearance-none outline-none paragraph"
              >
                <option value="1">SSC</option>
                <option value="2">HSC</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
              </select>
              <Image
                src={downArrow}
                alt="down arrow"
                className="absolute right-5 top-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="cv" className="text-left heading mb-2">
              CV
            </label>
            <div className="relative">
              <input
                type="file"
                id="cv"
                className="w-full h-12 px-3 outline-none paragraph flex-auto bg-white pt-2  file:rounded-none  file:border-none file:bg-white  file:text-charlestonGreen file:me-1"
              />
              <Image
                src={file}
                alt="down arrow"
                className="absolute right-5 top-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="nid" className="text-left heading mb-2">
              NID
            </label>
            <div className="relative">
              <input
                type="file"
                id="nid"
                className="w-full h-12 px-3 outline-none paragraph flex-auto bg-white pt-2  file:rounded-none  file:border-none file:bg-white  file:text-charlestonGreen file:me-1"
              />
              <Image
                src={file}
                alt="down arrow"
                className="absolute right-5 top-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="ownZone" className="text-left heading mb-2">
              OWN ZONE
            </label>
            <div className="relative">
              <select
                id="ownZone"
                className="w-full h-12 px-5 appearance-none outline-none paragraph"
              >
                <option value="1">Select Zone</option>
                <option value="2">Select Zone</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
              </select>
              <Image
                src={downArrow}
                alt="down arrow"
                className="absolute right-5 top-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="preZone" className="text-left heading mb-2">
              PREFERRED ZONE
            </label>
            <div className="relative">
              <select
                id="preZone"
                className="w-full h-12 px-5 appearance-none outline-none paragraph"
              >
                <option value="1"> Select Zone</option>
                <option value="2">Select Zone</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
              </select>
              <Image
                src={downArrow}
                alt="down arrow"
                className="absolute right-5 top-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-center py-3 bg-venetianRed text-white font-normal font-angkor text-2xl w-full mt-16"
        >
            Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
