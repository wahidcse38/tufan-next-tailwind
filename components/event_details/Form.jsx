import React from "react";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function Form() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState();
  const { signup, login, currentUser } = useAuthContext();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password || !fullName) {
      toast.error("Please fill out all fields");
      return;
    }
    try {
      setLoading(true);
      await signup(email, password, fullName);
      setLoading(false);
      setFullName("");
      setEmail("");
      setPassword("");
      router.push("/profile");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Failed to create an account!");
    }
  };
  return (
    <div className="bg-brightGray p-8 md:p-16 lg:p-8 xl:p-16">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-7">
          <div className="flex flex-col justify-start">
            <label htmlFor="name" className="text-left heading mb-2">
              NAME
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Enter your full name"
                name="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-center py-3 bg-venetianRed text-white font-normal font-angkor text-2xl w-full mt-7"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Form;
