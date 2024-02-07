import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 lg:px-32">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="hero"
        />
        <div>
          <h1 className="text-5xl font-bold">Hi, I'm Bayu</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            culpa maiores, deserunt porro, dolor recusandae rem eligendi
            expedita delectus sunt et nesciunt! Labore, eius earum ullam facilis
            accusamus veniam accusantium ea. Magnam adipisci fugit quibusdam!
            Dolore deserunt, consectetur quia consequuntur debitis voluptatem
            impedit possimus sunt ut adipisci minima vitae quibusdam.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
