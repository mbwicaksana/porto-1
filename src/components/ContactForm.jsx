import React from "react";

const ContactForm = () => {
  return (
    <>
      <div id="portfolio" className="bg-primary-dark py-12 lg:py-24 px-24">
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
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-lg bg-primary-light p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg bg-primary-light p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded-lg bg-primary-light p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>

              <textarea
                className="w-full rounded-lg bg-primary-light p-3 text-sm"
                placeholder="Message"
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Send Enquiry
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
