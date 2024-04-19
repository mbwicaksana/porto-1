import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import checkLoginStatus from "../../libs/checkLoginStatus";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await axios.post(
        "http://localhost:5000/login",
        formData,
      );
      console.log(response);

      if (response.data.role !== "admin") {
        navigate("/blogs");
      } else {
        navigate("/panel");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        console.error("Error logging in:", error);
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
    <div className="hero min-h-screen bg-base-200">
      {!isLoggedIn ? (
        <div className="hero-content flex-col">
          <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="text-center">
                <h1 className="mb-5 text-4xl font-bold">Login</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="/" className="link-hover link label-text-alt">
                    Forgot password?
                  </a>
                </label>
              </div>
              {errorMessage && (
                <p className="mt-2 text-xs text-red-500">{errorMessage}</p>
              )}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <label className="label text-xs">
                  <span>
                    Not a member?{" "}
                    <a href="/register" className="link-hover link">
                      Signup now!
                    </a>
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <button onClick={logout} className="btn btn-primary">
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
    </div>
  );
};

export default LoginForm;
