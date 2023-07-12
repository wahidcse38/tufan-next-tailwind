import React from "react";
import Banner from "@/components/common/Banner";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState();
  const { signup, login, currentUser } = useAuthContext();
  // console.log(currentUser);

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  const handleLoginClick = () => { 
    setIsRegistering(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isRegistering) {
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
    } else {
      if (!email || !password) {
        toast.error("Please fill out all fields");
        return;
      }
      try {
        setLoading(true);
        await login(email, password);
        setLoading(false);
        setEmail("");
        setPassword("");
        router.push("/profile");
      } catch (err) {
        console.log(err);
        setLoading(false);
        toast.error("Failed to log in!");
      }
    }
  };

  return (
    <>
      <Banner title="Volunteer Login" />
      <section className="text-center container">
        <p className="heading44400">Welcome, Volunteers!</p>
        <p className="paragraph mt-3">
          Thank you for being a valuable part of our disaster response team.
          Login to access your personal volunteer profile and stay connected
          with our ongoing efforts. Let&apos;s continue working together to
          bring hope, support, and resilience to communities in need.
        </p>
        {isRegistering ? (
          <form
            className="sm:w-2/3 w-11/12 flex flex-col justify-center mx-auto bg-brightGray p-10 rounded mt-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col text-start">
              <label htmlFor="name" className="heading mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Write full name"
                name="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-start mt-5">
              <label htmlFor="email" className="heading mb-1">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-start mt-5">
              <label htmlFor="password" className="heading mb-1 ">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="angkorText text-white bg-venetianRed mt-9 py-2"
            >
              Register
            </button>
          </form>
        ) : (
          <form
            className="sm:w-2/3 w-11/12 flex flex-col justify-center mx-auto bg-brightGray p-10 rounded mt-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col text-start">
              <label htmlFor="email" className="heading mb-1">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full h-12 px-5 outline-none paragraph "
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-start mt-5">
              <label htmlFor="password" className="heading mb-1">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full h-12 px-5 outline-none paragraph"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className=" text-end text-lg text-venetianRed mt-2">
              Forget Password
            </button>

            <button
              type="submit"
              className="angkorText text-white bg-venetianRed mt-9 py-2"
            >
              Login
            </button>
          </form>
        )}

        {isRegistering ? (
          <>
            <p className="angkorText mt-10">Already have an account?</p>
            <button
              className="angkorText bg-venetianRed text-white px-10 py-2 rounded mt-6"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <p className="angkorText mt-10">
              New to our Volunteer Program? Join Us Today!
            </p>
            <p className="paragraph mt-3">
              Join our dedicated team of volunteers and be a part of our mission
              to provide essential support during times of disaster and crisis.
              Register now and embark on a rewarding volunteer journey with
              Tufan. Together, we can create a brighter future for all.
            </p>
            <button
              className="angkorText bg-venetianRed text-white px-10 py-2 rounded mt-6"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </>
        )}
      </section>
    </>
  );
};

export default Login;
