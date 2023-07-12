import Image from "next/image";
import React from "react";
import logo from "../../assets/img/logo.svg";
import facebook from "../../assets/img/facebook.svg";
import twitter from "../../assets/img/twitter.svg";
import Link from "next/link";
import { donate } from "../../utils/svg.js";
import { useAuthContext } from "../../context/AuthContext";

const Footer = () => {
  const { language } = useAuthContext();
  return (
    <>
      <section className="bg-venetianRed py-9 flex items-center mt-40">
        <div className=" flex justify-between px-6 container">
          <p className="text-white text-xl font-semibold">
            {language == "en"
              ? "Your support can help make a real difference in the lives of those affected by natural disasters."
              : "আপনার সমর্থন প্রাকৃতিক দুর্যোগ দ্বারা ক্ষতিগ্রস্তদের জীবনে একটি বাস্তব পরিবর্তন করতে সাহায্য করতে পারে।"}
          </p>
          <Link
            href="/contact_us"
            className="text-white font-angkor text-2xl font-normal"
          >
            {language == "en" ? "Contact Us" : "যোগাযোগ করুন"}
          </Link>
        </div>
      </section>
      <section className="bg-charlestonGreen flex items-center py-20">
        <div className=" flex flex-wrap justify-between px-6 container text-white">
          <div>
            <Image src={logo} alt="logo" />
            <p className="mt-5 text-xl ">
              Integrated Logistics
              <br />
              Services for Faster,
              <br />
              More Effective Relief
            </p>
            <p className="mt-3 text-2xl text-venetianRed">02-0000-0000</p>
            <div className="flex gap-2 mt-3">
              <Link href="/">
                <Image src={facebook} alt="facebook" />
              </Link>
              <Link href="/">
                <Image src={twitter} alt="twitter" />
              </Link>
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold">Tufan</p>
            <ul className="mt-7">
              <li className="mb-4 text-xl">
                <Link href="/about">About Us</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-bold">STAY INFORMED</p>
            <ul className="mt-7">
              <li className="mb-4 text-xl">
                <Link href="/news">News</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="/events">Events</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="/media">Media</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-bold">GET INVOLVED</p>
            <ul className="mt-7">
              <li className="mb-4 text-xl">
                <Link href="/">Report Incident</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="/">Request Service</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="/">Volunteer</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="/">Donate</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-black py-5 flex items-center">
        <div className=" flex justify-center px-6 container">
          <p className="text-white text-xl font-semibold">
            Copyright © 2023 Tufan. All Rights Reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
