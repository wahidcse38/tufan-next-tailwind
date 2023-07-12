import React, { useState, useEffect } from "react";
import logo from "../../assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import profile from "../../assets/img/profile.svg";
import world from "../../assets/img/world.svg";
import downArrow from "../../assets/img/downArrow.svg";
import { useAuthContext } from "../../context/AuthContext";

const Header = () => {
  const { currentUser, logout } = useAuthContext();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(null);
  const [navTitle, setNavTitle] = useState("");

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);

  const { toggleLanguage, language } = useAuthContext();

  return (
    <section className="sticky top-0 z-[1000] bg-white shadow">
      <nav className="flex items-center justify-between flex-wrap gap-3 xl:gap-6 py-3 container ">
        <div className="flex items-center flex-shrink-0 text-white">
          <Link onClick={() => setIsNavOpen(!isNavOpen)} href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        {/* responsive button start */}
        <div
          className="block lg:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
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
        <div
          className={`${
            isNavOpen
              ? "block h-auto max-h-[70vh] overflow-auto scrollbar scrollbar-w-[3px] scrollbar-track-rounded-md  scrollbar-thumb-rounded-md scrollbar-thumb-venetianRed scrollbar-track-brightGray"
              : "hidden"
          }  w-full  flex-grow lg:flex lg:items-center lg:w-auto `}
        >
          <div className="text-sm lg:flex-grow lg:space-x-2 xl:space-x-5">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-lg text-black hover:text-venetianRed relative group">
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setNavTitle("aboutUs")}
              >
                <span>About Us</span>
                <Image src={downArrow} alt="down arrow" />
              </div>
              {screenSize > 1023 ? (
                <div className="absolute pt-8 w-[150px] hidden group-hover:block z-50 ">
                  <div className="flex flex-col  gap-3 p-3 bg-white border-t border-venetianRed">
                    <Link
                      // onClick={() => setIsNavOpen(!isNavOpen)}
                      href="/about_us"
                      className="font-normal text-lg text-charlestonGreen hover:text-venetianRed"
                    >
                      About
                    </Link>
                    <Link
                      // onClick={() => setIsNavOpen(!isNavOpen)}
                      href="/gallery"
                      className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                    >
                      Gallery
                    </Link>
                    <Link
                      // onClick={() => setIsNavOpen(!isNavOpen)}
                      href="/media"
                      className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                    >
                      Media
                    </Link>
                  </div>
                </div>
              ) : (
                navTitle === "aboutUs" && (
                  <div>
                    <div className="flex flex-col gap-3 p-3 bg-white">
                      <Link
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        href="/about_us"
                        className="font-normal text-lg text-charlestonGreen hover:text-venetianRed"
                      >
                        About
                      </Link>
                      <Link
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        href="/gallery"
                        className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                      >
                        Gallery
                      </Link>
                      <Link
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        href="/media"
                        className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                      >
                        Media
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="block mt-4 lg:inline-block lg:mt-0 text-lg text-black hover:text-venetianRed  relative group">
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setNavTitle("operations")}
              >
                <span>Operations</span>
                <Image src={downArrow} alt="down arrow" />
              </div>
              {screenSize > 1023 ? (
                <div className="absolute pt-8 w-[150px] hidden group-hover:block z-50 ">
                  <div className="flex flex-col gap-3 p-3 bg-white border-t border-venetianRed">
                    <Link
                      // onClick={() => setIsNavOpen(!isNavOpen)}
                      href="/projects"
                      className="font-normal text-lg text-charlestonGreen hover:text-venetianRed"
                    >
                      Projects
                    </Link>
                    <Link
                      // onClick={() => setIsNavOpen(!isNavOpen)}
                      href="events"
                      className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                    >
                      Events
                    </Link>
                  </div>
                </div>
              ) : (
                navTitle === "operations" && (
                  <div>
                    <div className="flex flex-col gap-3 p-3 bg-white">
                      <Link
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        href="/projects"
                        className="font-normal text-lg text-charlestonGreen hover:text-venetianRed"
                      >
                        Projects
                      </Link>
                      <Link
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        href="events"
                        className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                      >
                        Events
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>

            <div
              // href="/informed"
              className="block mt-4 lg:inline-block lg:mt-0 text-lg text-black hover:text-venetianRed  relative group"
            >
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setNavTitle("stayInformed")}
              >
                <span>Stay Informed</span>
                <Image src={downArrow} alt="down arrow" />
              </div>
              {screenSize > 1023 ? (
                <div className="absolute pt-8 w-[150px] hidden group-hover:block z-50 ">
                  <div className="flex flex-col  gap-3 p-3 bg-white border-t border-venetianRed">
                    <Link
                      // onClick={() => setIsNavOpen(!isNavOpen)}
                      href="/about_us/action_plan"
                      className="font-normal text-lg text-charlestonGreen hover:text-venetianRed"
                    >
                      Action Plan
                    </Link>
                    <Link
                      // onClick={() => setIsNavOpen(!isNavOpen)}
                      href="/about_us/community"
                      className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                    >
                      Community
                    </Link>
                    <Link
                      // onClick={() => setIsNavOpen(!isNavOpen)}
                      href="/noticeboard"
                      className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                    >
                      Noticeboard
                    </Link>
                  </div>
                </div>
              ) : (
                navTitle === "stayInformed" && (
                  <div>
                    <div className="flex flex-col gap-3 p-3 bg-white">
                      <Link
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        href="/about_us/action_plan"
                        className="font-normal text-lg text-charlestonGreen hover:text-venetianRed"
                      >
                        Action Plan
                      </Link>
                      <Link
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        href="/about_us/community"
                        className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                      >
                        Community
                      </Link>
                      <Link
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        href="/noticeboard"
                        className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                      >
                        Noticeboard
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>
            <div
              // href="/involved"
              className="block mt-4 lg:inline-block lg:mt-0 text-lg text-black hover:text-venetianRed  relative group"
            >
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setNavTitle("activate")}
              >
                <span>Activate</span>
                <Image src={downArrow} alt="down arrow" />
              </div>
              {screenSize > 1023 ? (
                <div className="absolute pt-8 w-[150px] hidden group-hover:block z-50 ">
                  <div className="flex flex-col gap-3 p-3 bg-white border-t border-venetianRed">
                    <Link
                      // onClick={() => setIsNavOpen(!isNavOpen)}
                      href="/donation"
                      className="font-normal text-lg text-charlestonGreen hover:text-venetianRed"
                    >
                      Contribute
                    </Link>
                    <Link
                      // onClick={() => setIsNavOpen(!isNavOpen)}
                      href="/incident_report"
                      className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                    >
                      Incident Report
                    </Link>
                    <Link
                      // onClick={() => setIsNavOpen(!isNavOpen)}
                      href="/logistics_service"
                      className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                    >
                      Logistics Service
                    </Link>
                    <Link
                      // onClick={() => setIsNavOpen(!isNavOpen)}
                      href="/register"
                      className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                    >
                      Volunteer Registration
                    </Link>
                  </div>
                </div>
              ) : (
                navTitle === "activate" && (
                  <div>
                    <div className="flex flex-col gap-3 p-3 bg-white">
                      <Link
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        href="/donation"
                        className="font-normal text-lg text-charlestonGreen hover:text-venetianRed"
                      >
                        Contribute
                      </Link>
                      <Link
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        href="/incident_report"
                        className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                      >
                        Incident Report
                      </Link>
                      <Link
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        href="/logistics_service"
                        className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                      >
                        Logistics Service
                      </Link>
                      <Link
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        href="/register"
                        className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                      >
                        Volunteer Registration
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>
            <Link
              onClick={() => setIsNavOpen(!isNavOpen)}
              href="/contact_us"
              className="block mt-4 lg:inline-block lg:mt-0 text-lg text-black hover:text-venetianRed"
            >
              Contact Us
            </Link>
          </div>
          {currentUser ? (
            <div className="relative group">
              <div className="cursor-pointer text-sm leading-none mt-4 lg:mt-0 flex items-center gap-1">
                <Image src={profile} alt="profile" />
                <p className="text-xl">{currentUser?.displayName}</p>
              </div>
              <div className="lg:absolute lg:pt-8 w-full lg:w-[150px] hidden group-hover:block z-50">
                <div className="flex flex-col  gap-3 p-3 bg-white lg:border-t lg:border-venetianRed">
                  <Link
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    href="/profile"
                    className="font-normal text-lg text-charlestonGreen hover:text-venetianRed"
                  >
                    My Profile
                  </Link>
                  <span
                    onClick={logout}
                    className="font-normal text-lg text-charlestonGreen cursor-pointer hover:text-venetianRed"
                  >
                    Logout
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative group">
              <Link
                onClick={() => setIsNavOpen(!isNavOpen)}
                href="/login"
                className=" text-sm leading-none mt-4 lg:mt-0 flex items-center gap-1"
              >
                <Image src={profile} alt="profile" />
                <p className="text-xl">Login</p>
              </Link>
            </div>
          )}

          <div>
            <div
              // href="/"
              onClick={() => setIsNavOpen(!isNavOpen)}
              className=" text-sm  leading-none mt-4 lg:mt-0 lg:ms-3 flex items-center gap-1"
            >
              <Image src={world} alt="world" />
              <p className="text-xl cursor-pointer" onClick={toggleLanguage}>
                {language === "en" ? "English" : "বাংলা"}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
