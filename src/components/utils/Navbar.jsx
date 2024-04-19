import React, { useEffect, useState } from "react";
import axios from "axios";
import checkLoginStatus from "../../libs/checkLoginStatus";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    checkLoginStatus(setIsLoggedIn); // Call on component mount to check initial state
  }, []); // Empty dependency array to run only once

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
      <div className="navbar sticky top-0 z-30 h-14 bg-secondary text-gray-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <div className="sr-only">Hamburger Menu</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* MOBILE NAVBAR */}
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-secondary p-2 text-xl shadow"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
              <li>
                <a href="/#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                {isLoggedIn ? (
                  <button onClick={logout} className="ml-20">
                    Logout
                  </button>
                ) : (
                  <a href="/login" className="ml-20">
                    Login / Register
                  </a>
                )}
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z" />
              <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018" />
            </svg>
          </a>
        </div>
        {/* DESKTOP NAVBAR */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
            <li>
              {isLoggedIn ? (
                <button onClick={logout} className="ml-20">
                  Logout
                </button>
              ) : (
                <a href="/login" className="ml-20">
                  Login / Register
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
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
    </>
  );
};

export default Navbar;
