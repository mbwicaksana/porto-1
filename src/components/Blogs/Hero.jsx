import React from "react";

const Hero = () => {
  return (
    <>
      <section className="relative bg-blog-hero-background bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r  from-white/75 to-white/15"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-start">
            <h1 className="text-3xl font-bold sm:text-5xl text-primary-dark">
              Stay in the Loop
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-700">
              Get the daily email from CryptoNews that makes reading the news
              actually enjoyable. Join our mailing list to stay in the loop to
              stay informed, for free.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <div className="relative">
                <label htmlFor="Search" className="sr-only">
                  Search
                </label>

                <input
                  type="text"
                  id="Search"
                  placeholder="Search for..."
                  className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button
                    type="button"
                    className="text-gray-600 hover:text-gray-700"
                  >
                    <span className="sr-only">Search</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
