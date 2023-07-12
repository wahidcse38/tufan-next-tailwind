import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  name: "",
  phone: "",
  email: "",
  typeOfTransport: "",
  products: "",
  collectFrom: "",
  deliverTo: "",
};

function Form() {
  const [requestService, setRequestService] = useState(initialState);
  const [isLoading, setIsLoading] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, typeOfTransport, products, collectFrom, deliverTo } = requestService;

    if (!name || !email || !phone || !typeOfTransport || !products || !collectFrom || !deliverTo) {
      toast.error("Please fill out all fields");
      return;
    }

    try {
      setIsLoading(true);
      const id = new Date().getTime().toString();
      await setDoc(doc(db, "logisticsService", id), {
        timeStamp: serverTimestamp(),
        date: new Date().toLocaleDateString("en-GB"),
        name,
        email,
        phone,
        typeOfTransport,
        products,
        collectFrom,
        deliverTo,
      });
      setIsLoading(false);
      setRequestService(initialState);
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
    setRequestService({ ...requestService, [name]: value });
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
                value={requestService.name}
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
                  type="text"
                  id="phone"
                  className="w-full h-12 px-5 outline-none paragraph"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={requestService.phone}
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
                  value={requestService.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="location" className="text-left heading mb-2">
              TYPE OF TRANSPORT
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2.5">
              <div className="flex items-start gap-2">
                <input
                  type="radio"
                  id="regular"
                  name="typeOfTransport"
                  value="regular"
                  className="accent-venetianRed w-5 h-5 mt-1"
                  onChange={handleChange}
                />
                <label htmlFor="regular" className="paragraph">
                  Regular - Ambulance, Truck <br />
                  (Inside Dhaka)
                </label>
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="radio"
                  id="integrated"
                  name="typeOfTransport"
                  value="integrated"
                  className="accent-venetianRed w-5 h-5 mt-1"
                  onChange={handleChange}
                />
                <label htmlFor="integrated" className="paragraph">
                  Integrated - Boat <br />
                  (Between Sub-Districts)
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="products" className="text-left heading mb-2">
              PRODUCTS
            </label>
            <div className="relative">
              <input
                type="text"
                id="products"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Product List"
                name="products"
                value={requestService.products}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="collectFrom" className="text-left heading mb-2">
              COLLECT FROM
            </label>
            <div className="relative">
              <input
                type="text"
                id="collectFrom"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Address"
                name="collectFrom"
                value={requestService.collectFrom}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="deliveryTo" className="text-left heading mb-2">
              DELIVER TO
            </label>
            <div className="relative">
              <input
                type="text"
                id="deliveryTo"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Address"
                name="deliverTo"
                value={requestService.deliverTo}
                onChange={handleChange}
              />
            </div>
          </div>
          <p className="paragraph">
            Before requesting, please ensure that you have provided accurate and
            complete information, including your contact details and the type of
            assistance you require.
          </p>
        </div>
        <button
          type="submit"
          className="flex justify-center py-3 bg-venetianRed text-white font-normal font-angkor text-2xl w-full mt-24"
        >
          Request Service
        </button>
      </form>
    </div>
  );
}

export default Form;
