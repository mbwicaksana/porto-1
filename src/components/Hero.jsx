import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-300 lg:px-32 bg-hero-background">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://placehold.co/200x280"
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
          <button className="btn btn-primary">Download My CV</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
