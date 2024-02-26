import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="mx-auto h-128 max-w-full bg-cover bg-fixed bg-center bg-no-repeat bg-main-parralax">
        <div className="mx-auto min-h-screen bg-black/80 pt-16">
          <h3 className="text-center font-bold text-2xl lg:text-3xl pt-28 pb-0 lg:pb-10 text-accent">
            SUBSCRIBE MY NEWSLETTER
          </h3>
          {/* START OF LG-FORM */}
          <div className="hidden lg:block relative w-2/5 mx-auto border-2 border-accent">
            <label htmlFor="Search" className="sr-only">
              Search
            </label>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full py-2.5 px-4 pe-10 shadow-sm font-medium text-lg h-20 bg-[#131313]"
            />

            <span className="absolute inset-y-0 end-16 grid w-10 place-content-center">
              <button
                type="submit"
                className="text-black transition-all font-medium hover:text-white bg-accent hover:bg-secondary w-36 py-5"
              >
                <span className="sr-only">Search</span>Notify Now
              </button>
            </span>
          </div>
          {/* END OF LG-FORM */}
          {/* START OF MOBILE-FORM */}
          <div className="mx-auto px-6 lg:hidden">
            <div className="mx-auto max-w-lg">
              <div className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <div className="relative">
                    <input
                      type="email"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter email"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke-width="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="block w-full rounded-lg px-5 py-3 text-sm font-medium text-black font-medium hover:text-white bg-accent hover:bg-secondary"
                >
                  Notify Now
                </button>
              </div>
            </div>
          </div>
          {/* END OF MOBILE FORM */}
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
