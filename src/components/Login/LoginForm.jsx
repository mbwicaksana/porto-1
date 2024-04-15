import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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

  return (
    <div className="hero min-h-screen bg-base-200">
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
    </div>
  );
};

export default LoginForm;
