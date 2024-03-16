import React from "react";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form className="card-body">
            <div className="text-center">
              <h1 className="mb-5 text-4xl font-bold">Login</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <label className="label text-xs">
                <span>
                  Not a member?{" "}
                  <a href="/" className="link-hover link">
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

export default Login;
