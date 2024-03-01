import React from "react";

const Hero = () => {
  return (
    <>
      <section className="relative bg-blog-hero-background bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-t  from-black to-white/20"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-start">
            <h1 className="text-3xl font-bold text-slate-200 drop-shadow-2xl sm:text-5xl">
              Stay in the Loop
            </h1>

            <p className="mt-4 max-w-md font-normal text-accent-secondary drop-shadow-2xl sm:text-xl/relaxed">
              Tired of dry programming news?
              <br />
              Spice up your learning with Windelov's daily email! Get bite-sized
              updates, coding tips, and insightful tutorials delivered straight
              to your inbox.
              <strong> All for free.</strong>
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <div className="relative">
                <div className="join">
                  <input
                    className="input join-item bg-secondary"
                    placeholder="Email"
                  />
                  <button className="btn join-item bg-primary-light hover:bg-primary-dark">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
