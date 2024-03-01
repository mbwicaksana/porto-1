import React from "react";

const Latest = () => {
  return (
    <>
      <section className="bg-primary-dark bg-gradient-to-t from-primary-light to-transparent ">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-slate-200  sm:text-3xl">
              Latest Posts
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <a href="/" className="flex items-start gap-4">
              <div>
                <div className="text-sm font-medium">ReactJS</div>

                <p className="mt-1 text-lg font-semibold text-gray-300">
                  Exploring the Power and Potential of ReactJS
                </p>
              </div>
            </a>

            <a href="/" className="flex items-start gap-4">
              <div>
                <div className="text-sm font-medium">Vanilla Javascript</div>

                <p className="mt-1 text-lg font-semibold text-gray-300">
                  Unleashing the Versatility of Vanilla Javascript
                </p>
              </div>
            </a>

            <a href="/" className="flex items-start gap-4">
              <div>
                <div className="text-sm font-medium">NextJS</div>

                <p className="mt-1 text-lg font-semibold text-gray-300">
                  Leveraging NextJS for Efficient Web Development
                </p>
              </div>
            </a>

            <a href="/" className="flex items-start gap-4">
              <div>
                <div className="text-sm font-medium">NextJS</div>

                <p className="mt-1 text-lg font-semibold text-gray-300">
                  NextJS: Optimizing Performance for Your Applications
                </p>
              </div>
            </a>

            <a href="/" className="flex items-start gap-4">
              <div>
                <div className="text-sm font-medium">MySQL</div>

                <p className="mt-1 text-lg font-semibold text-gray-300">
                  Mastering MySQL for Robust Data Management
                </p>
              </div>
            </a>

            <a href="/" className="flex items-start gap-4">
              <div>
                <div className="text-sm font-medium">ExpressJS</div>

                <p className="mt-1 text-lg font-semibold text-gray-300">
                  Building Dynamic APIs with ExpressJS
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Latest;
