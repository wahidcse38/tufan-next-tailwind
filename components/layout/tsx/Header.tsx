import React from "react";
import logo from "@/assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import profile from "@/assets/img/profile.svg";
import world from "@/assets/img/world.svg";
import downArrow from "@/assets/img/downArrow.svg";
const Header = () => {
  return (
    <section className=" h-28 flex items-center">
      <nav className="flex items-center justify-between flex-wrap  p-6 container">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Image src={logo} alt="logo" />
          {/* <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Tailwind CSS
          </span> */}
        </div>

        {/* responsive button start */}
        <div className="block lg:hidden">
          <button className="flex items-center px-2 py-1   text-venetianRed border-venetianRed border-2">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {/* responsive button end */}

        <div className="hidden  w-full  flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-lg text-black hover:text-venetianRed mr-4"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block mt-4 lg:inline-block lg:mt-0 text-lg text-black hover:text-venetianRed mr-4"
            >
              Projects
            </Link>
            <Link
              href="/informed"
              className="block mt-4 lg:inline-block lg:mt-0 text-lg text-black hover:text-venetianRed mr-4"
            >
              <div className="flex items-center gap-1">
                <span>Stay Informed</span>
                <Image src={downArrow} alt="down arrow" />
              </div>
            </Link>
            <Link
              href="/involved"
              className="block mt-4 lg:inline-block lg:mt-0 text-lg text-black hover:text-venetianRed mr-4"
            >
              <div className="flex items-center gap-1">
                <span>Get Involved</span>
                <Image src={downArrow} alt="down arrow" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-lg text-black hover:text-venetianRed mr-4"
            >
              Contact Us
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className=" text-sm px-4 py-2 leading-none mt-4 lg:mt-0 flex items-center gap-1"
            >
              <Image src={profile} alt="profile" />
              <p className="text-xl">Login</p>
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className=" text-sm px-4 py-2 leading-none mt-4 lg:mt-0 flex items-center gap-1"
            >
              <Image src={world} alt="world" />
              <p className="text-xl">Bangla</p>
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
