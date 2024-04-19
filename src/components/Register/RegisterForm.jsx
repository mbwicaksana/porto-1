import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import checkLoginStatus from "../../libs/checkLoginStatus";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status\
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkLoginStatus(setIsLoggedIn); // Call on component mount to check initial state
  }, []); // Empty dependency array to run only once

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", formData);
      navigate("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        console.error("Error signing up:", error);
      }
    }
  };

  const logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      setIsLoggedIn(false);
      setPopup(true);
    } catch (error) {
      console.error(error);
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      <section className="bg-slate-400">
        {!isLoggedIn ? (
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Sign Up
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Create your Account
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6">
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="Name"
                    name="name"
                    className="mt-1 min-h-10 w-full rounded-md border-gray-900 bg-white text-sm text-gray-700 shadow-sm"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 min-h-10 w-full rounded-md border-gray-900 bg-white text-sm text-gray-700 shadow-sm"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Password{" "}
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 min-h-10 w-full rounded-md border-gray-900 bg-white text-sm text-gray-700 shadow-sm"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password Confirmation
                  </label>

                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="mt-1 min-h-10 w-full rounded-md border-gray-900 bg-white text-sm text-gray-700 shadow-sm"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6">
                  <p className="max-w-fit text-sm text-gray-500">
                    {errorMessage}
                  </p>
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our{" "}
                    <a
                      href="/terms-condition"
                      className="text-gray-700 underline"
                    >
                      terms and conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy-policy"
                      className="text-gray-700 underline"
                    >
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?{" "}
                    <a href="/login" className="text-gray-700 underline">
                      Log in
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        ) : (
          <button
            onClick={logout}
            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          >
            Logout
          </button>
        )}
        {popup && (
          // It used z50 so the popup always shown on the top of all pages
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div
              role="alert"
              className=" rounded-xl border border-gray-100 bg-white p-4"
            >
              <div className="flex items-start gap-4">
                <span className="text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0 stroke-info"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>

                <div className="flex-1">
                  <strong className="block font-medium text-gray-900">
                    {" "}
                    Blast it all! Logged out!{" "}
                  </strong>

                  <p className="mt-1 text-sm text-gray-700">
                    Use the Force to find your way back!
                  </p>
                </div>

                <button
                  className="text-gray-500 transition hover:text-gray-600"
                  onClick={() => setPopup(false)}
                >
                  <span className="sr-only">Dismiss popup</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default RegisterForm;
