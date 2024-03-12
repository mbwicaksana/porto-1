import React from "react";

const Recommendation = () => {
  return (
    <>
      <div className="bg-primary-dark bg-gradient-to-t from-primary-light  to-transparent">
        <div className="mx-5 pt-5 text-start text-xl font-bold text-slate-200  sm:text-3xl">
          You Might Also Like
        </div>
        <div className="mx-5 grid grid-cols-1 gap-4 py-5 lg:grid-cols-3 lg:gap-8">
          <div className="card border border-accent-secondary bg-primary-dark shadow-xl">
            <img
              src="https://placehold.co/500x400"
              alt="Shoes"
              className="rounded-t-xl object-cover"
            />

            <div className="card-body">
              <a
                href="/"
                className="card-title mt-5 text-base text-accent-secondary sm:text-xl"
              >
                UFC Takes the Fight to NFTs, Plans Its Own Cryptoasset
              </a>
              <p className="mt-5 text-xxs font-light text-accent sm:text-xs">
                CRISTOPHER - JUNE 24, 2021
              </p>
            </div>
          </div>
          <div className="card border border-accent-secondary bg-primary-dark shadow-xl">
            <img
              src="https://placehold.co/500x400"
              alt="Shoes"
              className="rounded-t-xl object-cover"
            />

            <div className="card-body">
              <a
                href="/"
                className="card-title mt-5 text-base text-accent-secondary sm:text-xl"
              >
                UFC Takes the Fight to NFTs, Plans Its Own Cryptoasset
              </a>
              <p className="mt-5 text-xxs font-light text-accent sm:text-xs">
                CRISTOPHER - JUNE 24, 2021
              </p>
            </div>
          </div>
          <div className="card border border-accent-secondary bg-primary-dark shadow-xl">
            <img
              src="https://placehold.co/500x400"
              alt="Shoes"
              className="rounded-t-xl object-cover"
            />

            <div className="card-body">
              <a
                href="/"
                className="card-title mt-5 text-base text-accent-secondary sm:text-xl"
              >
                UFC Takes the Fight to NFTs, Plans Its Own Cryptoasset
              </a>
              <p className="mt56 text-xxs font-light text-accent sm:text-xs">
                CRISTOPHER - JUNE 24, 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommendation;
