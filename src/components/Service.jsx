import React from "react";

const Service = () => {
  return (
    <>
      <div id="services" className="bg-beauty-blue py-28">
        <h3 className="text-lg font-semibold lg:font-bold lg:text-2xl text-center mb-4">
          SERVICES
        </h3>
        <h1 className="text-xl lg:text-5xl font-bold text-center mb-24 lg:mb-40">
          Creating Seamless User Experiences <br />
          Across All Platforms.
        </h1>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="card mx-auto w-96 shadow-none border border-gray-100/20 rounded-xl mb-28 lg:mb-auto">
            <figure className="px-10 pt-10 -translate-y-20">
              <img
                src="https://placehold.co/90x90"
                alt="ReactJS"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center -mt-24 mb-4">
              <h2 className="card-title my-3 font-semibold lg:font-bold">
                LANDING PAGE
              </h2>
              <p className="font-light lg:font-medium">
                Increase your chances of attracting and converting visitors with
                landing pages specifically designed to achieve your goals.
              </p>
            </div>
          </div>
          <div className="card mx-auto w-96 shadow-none border border-gray-100/20 rounded-xl mb-28 lg:mb-auto">
            <figure className="px-10 pt-10 -translate-y-20">
              <img
                src="https://placehold.co/90x90"
                alt="ReactJS"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center -mt-24 mb-4">
              <h2 className="card-title my-3 font-semibold lg:font-bold">
                PERSONAL BLOGS
              </h2>
              <p className="font-light lg:font-medium">
                Create a beautiful, informative, and interactive personal blog
                with an easy-to-use Admin system for blog posts.
              </p>
            </div>
          </div>
          <div className="card mx-auto w-96 shadow-none border border-gray-100/20 rounded-xl">
            <figure className="px-10 pt-10 -translate-y-20">
              <img
                src="https://placehold.co/90x90"
                alt="ReactJS"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center -mt-24 mb-4">
              <h2 className="card-title my-3 font-semibold lg:font-bold">
                E-COMMERCE
              </h2>
              <p className="font-light lg:font-medium">
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
