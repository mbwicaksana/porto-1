import React from "react";

const ContactForm = () => {
  return (
    <>
      <div id="portfolio" className="bg-primary-light py-12 lg:py-24 px-24">
        <h3 className="text-lg font-semibold lg:text-xl lg:mb-4 text-accent text-center">
          GET IN TOUCH
        </h3>
        <h1 className="hidden lg:block text-4xl font-bold mb-16 text-white text-center">
          Let's discuss
          <br />
          about your future website
        </h1>
        {/* START OF FORM */}
        <div className="rounded-lg bg-primary-light p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form action="#" className="space-y-4">
            <div>
              <label
                htmlFor="Name"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <input
                  type="text"
                  id="Name"
                  placeholder="Name"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Name
                </span>
              </label>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="Email"
                  className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <input
                    type="email"
                    id="Email"
                    placeholder="Email"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute start-0 top-2 -translate-y-1/2 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Email
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="Phone"
                  className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <input
                    type="text"
                    id="Phone"
                    placeholder="Phone"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute start-0 top-2 -translate-y-1/2 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Phone
                  </span>
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="Phone"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <input
                  type="text"
                  id="Message"
                  placeholder="Message"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Message
                </span>
              </label>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg px-5 py-3 font-medium bg-gray-800 text-white hover:bg-gray-700 sm:w-auto transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* END OF FORM */}
      </div>
    </>
  );
};

export default ContactForm;
