import React from "react";

const Service = () => {
  return (
    <>
      <div id="services" className="bg-primary-dark py-28">
        <h3 className="text-lg font-semibold lg:font-bold lg:text-2xl text-center mb-4 text-accent">
          SERVICES
        </h3>
        <h1 className="text-xl lg:text-5xl font-bold text-center mb-24 lg:mb-40 text-white">
          Creating Seamless User Experiences <br />
          Across All Platforms.
        </h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="card mx-auto w-96 shadow-none border border-2 border-gray-100/20 rounded-xl mb-28 lg:mb-auto">
            <div className="mx-auto mt-8 bg-react-logo bg-cover w-32 h-32">
              <span className="sr-only">Logo</span>
            </div>
            <div className="card-body items-center text-center  mb-4">
              <h2 className="card-title mb-3 font-semibold lg:font-bold text-accent">
                LANDING PAGE
              </h2>
              <p className="font-light lg:font-medium text-accent-secondary">
                Increase your chances of attracting and converting visitors with
                landing pages specifically designed to achieve your goals.
              </p>
            </div>
          </div>
          <div className="card mx-auto w-96 shadow-none border border-2 border-gray-100/20 rounded-xl mb-28 lg:mb-auto">
            <div className="mx-auto bg-next-logo bg-cover w-48 h-40">
              <span className="sr-only">Logo</span>
            </div>
            <div className="card-body items-center text-center mb-4">
              <h2 className="card-title mb-3 font-semibold lg:font-bold text-accent">
                PERSONAL BLOGS
              </h2>
              <p className="font-light lg:font-medium text-accent-secondary">
                Create a beautiful, informative, and interactive personal blog
                with an easy-to-use Admin system for blog posts.
              </p>
            </div>
          </div>
          <div className="card mx-auto w-96 shadow-none border border-2 border-gray-100/20 rounded-xl">
            <div className="mx-auto bg-express-logo bg-cover w-48 h-40">
              <span className="sr-only">Logo</span>
            </div>
            <div className="card-body items-center text-center mb-4">
              <h2 className="card-title mb-3 font-semibold lg:font-bold text-accent">
                E-COMMERCE
              </h2>
              <p className="font-light lg:font-medium text-accent-secondary">
                Boost your business with a custom full-stack E-Commerce platform
                built with NextJS or ReactJS + ExpressJS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
