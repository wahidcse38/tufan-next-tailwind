import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Form() {
  const [contact, setContact] = useState(initialState);
  const [isLoading, setIsLoading] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = contact;

    if (!name || !email || !phone || !message) {
      toast.error("Please fill out all fields");
      return;
    }

    try {
      setIsLoading(true);
      const id = new Date().getTime().toString();
      await setDoc(doc(db, "contact", id), {
        timeStamp: serverTimestamp(),
        date: new Date().toLocaleDateString("en-GB"),
        name,
        email,
        phone,
        message,
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
    //
    <div className="bg-brightGray p-7">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-7">
          <div className="flex flex-col justify-start md:col-span-2 lg:col-span-1 xl:col-span-2">
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
                value={contact.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="phone" className="text-left heading mb-2">
              PHONE NUMBER*
            </label>
            <div className="relative">
              <input
                type="text"
                id="phone"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Enter your phone number"
                name="phone"
                value={contact.phone}
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
                type="text"
                id="email"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Enter your email"
                name="email"
                value={contact.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start md:col-span-2 lg:col-span-1 xl:col-span-2">
            <label htmlFor="message" className="text-left heading mb-2">
              MESSAGE
            </label>
            <div className="relative">
              <textarea
                id="message"
                className="w-full px-5 outline-none paragraph"
                placeholder="write your message here"
                rows={3}
                name="message"
                value={contact.message}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-center py-3 bg-venetianRed text-white font-normal font-angkor text-2xl w-full mt-16"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Form;
