import React from "react";

const ContactForm = () => {
  return (
    <>
      <div id="portfolio" className="bg-primary-light px-24 py-12 lg:py-24">
        <h3 className="text-center text-lg font-semibold text-accent lg:mb-4 lg:text-xl">
          GET IN TOUCH
        </h3>
        <h1 className="mb-16 hidden text-center text-4xl font-bold text-white lg:block">
          Let's discuss
          <br />
          about your future website
        </h1>
        {/* START OF FORM */}
        <div className="mx-auto rounded-lg bg-primary-light p-8 shadow-lg md:w-5/6 lg:col-span-3 lg:p-12">
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
                htmlFor="Message"
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
                className="inline-block w-full rounded-lg bg-gray-800 px-5 py-3 font-medium text-white transition-all hover:bg-gray-700 sm:w-auto"
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
