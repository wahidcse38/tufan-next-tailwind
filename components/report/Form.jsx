import Image from "next/image";
import React from "react";
import downArrow from "../../assets/img/downArrow.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const cities = [
  { id: 1, title: "Barisal (বরিশাল)" },
  { id: 2, title: "Chittagong (চট্টগ্রাম)" },
  { id: 3, title: "Dhaka (ঢাকা)" },
  { id: 4, title: "Khulna (খুলনা)" },
  { id: 5, title: "Rajshahi (রাজশাহী)" },
  { id: 6, title: "Rangpur (রংপুর)" },
  { id: 7, title: "Sylhet (সিলেট)" },
];

const options = {
  Barisal: [
    "Barguna",
    "Barisal",
    "Bhola",
    "Jhalokati",
    "Patuakhali",
    "Pirojpur",
  ],
  Chittagong: [
    "Bandarban",
    "Brahmanbaria",
    "Chandpur",
    "Chittagong",
    "Comilla",
    "Cox's Bazar",
    "Feni",
    "Khagrachhari",
    "Lakshmipur",
    "Noakhali",
    "Rangamati",
  ],
  Dhaka: [
    "Dhaka",
    "Faridpur",
    "Gazipur",
    "Gopalganj",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Munshiganj",
    "Narayanganj",
    "Narsingdi",
    "Rajbari",
    "Shariatpur",
    "Tangail",
  ],
  Khulna: [
    "Bagerhat",
    "Chuadanga",
    "Jessore",
    "Jhenaidah",
    "Khulna",
    "Kushtia",
    "Magura",
    "Meherpur",
    "Narail",
    "Satkhira",
  ],
  Mymensingh: ["Jamalpur", "Mymensingh", "Netrakona", "Sherpur"],
  Rajshahi: [
    "Bogra",
    "Chapainawabganj",
    "Joypurhat",
    "Naogaon",
    "Natore",
    "Pabna",
    "Rajshahi",
    "Sirajganj",
  ],
  Rangpur: [
    "Dinajpur",
    "Gaibandha",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Panchagarh",
    "Rangpur",
    "Thakurgaon",
  ],
  Sylhet: ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"],
};

const initialState = {
  name: "",
  phone: "",
  email: "",

  subDistrict: "",
  union: "",
  address: "",
  incidentType: "",
  description: "",
};

function Form({language}) {
  const [contact, setContact] = useState(initialState);
  const [isLoading, setIsLoading] = useState();

  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const handleOptionChange = (event) => {
    const option = event.target.value;
    setDivision(option);
    setDistrict("");
  };

  const handleSubOptionChange = (event) => {
    const subOption = event.target.value;
    setDistrict(subOption);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      phone,
      email,
      subDistrict,
      union,
      address,
      incidentType,
      description,
    } = contact;

    if (
      !name ||
      !phone ||
      !email ||
      !subDistrict ||
      !union ||
      !address ||
      !incidentType ||
      !description ||
      !division ||
      !district
    ) {
      toast.error("Please fill out all fields");
      return;
    }

    try {
      setIsLoading(true);
      const id = new Date().getTime().toString();
      await setDoc(doc(db, "incidentReport", id), {
        timeStamp: serverTimestamp(),
        date: new Date().toLocaleDateString("en-GB"),
        name,
        phone,
        email,
        subDistrict,
        union,
        address,
        incidentType,
        description,
        division,
        district,
      });
      setIsLoading(false);
      setContact(initialState);
      toast.success("Successfully Submitted!");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      toast.error("Failed to Submit!");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };
  return (
    <div className="bg-brightGray p-8 md:p-16 lg:p-8 xl:p-16">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-7">
          <div className="flex flex-col justify-start">
            <label htmlFor="name" className="text-left heading mb-2">
              NAME*
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Enter your name"
                name="name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-7">
            <div className="flex flex-col justify-start">
              <label htmlFor="phone" className="text-left heading mb-2">
                PHONE NUMBER*
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="phone"
                  className="w-full h-12 px-5 outline-none paragraph"
                  placeholder="Enter your phone number"
                  name="phone"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <label htmlFor="email" className="text-left heading mb-2">
                EMAIL
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full h-12 px-5 outline-none paragraph"
                  placeholder="Enter your email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label className="text-left heading mb-2">LOCATION</label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2.5">
              <div className="relative">
                <select
                  className=" w-full h-12 px-5 appearance-none outline-none paragraph"
                  value={division}
                  onChange={handleOptionChange}
                >
                  <option value="">Select Division</option>
                  {Object.keys(options).map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <Image
                  src={downArrow}
                  alt="down arrow"
                  className="absolute right-5 top-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>
              <div className="relative">
                <select
                  className=" w-full h-12 px-5 appearance-none outline-none paragraph"
                  value={district}
                  onChange={handleSubOptionChange}
                >
                  <option value="">Select District</option>
                  {options[division]?.map((subOption) => (
                    <option key={subOption} value={subOption}>
                      {subOption}
                    </option>
                  ))}
                </select>
                <Image
                  src={downArrow}
                  alt="down arrow"
                  className="absolute right-5 top-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-12 px-5 outline-none paragraph"
                  placeholder="Write Sub-District"
                  name="subDistrict"
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-12 px-5 outline-none paragraph"
                  placeholder="Write Union"
                  name="union"
                  onChange={handleChange}
                />
              </div>
              <div className="relative md:col-span-2 lg:col-span-1 xl:col-span-2">
                <input
                  type="text"
                  className="w-full h-12 px-5 outline-none paragraph"
                  placeholder="Enter your address"
                  name="address"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="incidentPartner" className="text-left heading mb-2">
              INCIDENT PATTERN
            </label>
            <div className="grid grid-cols-1 gap-2.5">
              <div className="relative">
                <select
                  name="incidentType"
                  onChange={handleChange}
                  className=" w-full h-12 px-5 appearance-none outline-none paragraph"
                >
                  <option value="">Select type</option>
                  <option value="social">Social</option>
                  <option value="natural">Natural</option>
                </select>
                <Image
                  src={downArrow}
                  alt="down arrow"
                  className="absolute right-5 top-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>
              <div>
                <textarea
                  name="description"
                  onChange={handleChange}
                  rows="3"
                  placeholder="Description"
                  className="w-full px-5 outline-none paragraph"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-center py-3 bg-venetianRed text-white font-normal font-angkor text-2xl w-full mt-24"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
