import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="hero min-h-screen bg-base-300 bg-hero-background">
      <div className="mx-auto lg:mx-24">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://placehold.co/450x500"
            className="hidden lg:block max-w-sm rounded-lg shadow-2xl mask mask-hexagon"
            alt="hero"
          />
          <img
            src="https://placehold.co/225x250"
            className="lg:hidden max-w-sm rounded-lg shadow-2xl mask mask-hexagon"
            alt="hero"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-6xl text-white font-semibold mb-auto lg:mb-4">
              Hi, I'm Bayu!
            </h1>
            <p className="hidden lg:block py-6 lg:mr-40 text-lg mb-16 font-medium text-accent-secondary">
              I am a Full-stack Web Developer with a primary focus on back-end
              development. I have experience designing and building robust and
              scalable web applications using ReactJS, NextJS, and ExpressJS.
              <br />I am passionate about creating intuitive and user-friendly
              web applications, and I have the ability to tackle various
              technical challenges and continuously learn in the field of web
              technology.
            </p>
            <p className="lg:hidden py-6 text-base font-light">
              I am a Full-stack Web Developer with a primary focus on back-end
              development using ReactJS, NextJS, and ExpressJS.
            </p>
            <button className="btn bg-accent text-black hover:bg-secondary hover:text-white transition-all">
              Download My CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;