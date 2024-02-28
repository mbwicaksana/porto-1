import React from "react";

const Featured = () => {
  return (
    <>
      <div className="mx-auto max-w-full bg-primary-dark bg-gradient-to-b from-black to-transparent px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="mb-6 text-start text-xl  font-bold text-slate-300 sm:text-3xl">
            Featured Posts
          </h2>
        </header>
        <section>
          <div className="card max-h-full max-w-full bg-base-100 shadow-xl lg:card-side">
            <figure>
              <img
                className="md:h-80 md:w-80"
                src="https://placehold.co/700x300"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen onu Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Featured;
