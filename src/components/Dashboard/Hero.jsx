import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero min-h-screen bg-primary-light bg-gradient-to-t from-primary-dark to-transparent"
    >
      <div className="mx-auto lg:mx-24">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://placehold.co/450x500"
            className="mask mask-hexagon hidden max-w-sm rounded-lg shadow-2xl lg:block"
            alt="hero"
          />
          <img
            src="https://placehold.co/225x250"
            className="mask mask-hexagon max-w-sm rounded-lg shadow-2xl lg:hidden"
            alt="hero"
          />
          <div className="text-center lg:text-left">
            <h1 className="mb-auto text-3xl font-semibold text-white lg:mb-4 lg:text-6xl">
              Hi, I'm Bayu!
            </h1>
            <p className="mb-5 hidden py-6 text-lg font-medium text-accent-secondary lg:mr-40 lg:block">
              I am a Full-stack Web Developer with a primary focus on back-end
              development. I have experience designing and building robust and
              scalable web applications using ReactJS, NextJS, and ExpressJS.
              <br />I am passionate about creating intuitive and user-friendly
              web applications, and I have the ability to tackle various
              technical challenges and continuously learn in the field of web
              technology.
            </p>
            <p className="py-6 text-base font-light lg:hidden">
              I am a Full-stack Web Developer with a primary focus on back-end
              development using ReactJS, NextJS, and ExpressJS.
            </p>
            <button className="btn bg-accent text-black transition-all hover:bg-secondary hover:text-white">
              Download My CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
