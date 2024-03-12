import React from "react";

const Latest = () => {
  return (
    <div className="mx-5 flex flex-col">
      <div>
        <h3 className="mb-10 py-2 text-3xl font-medium">Latest Stories</h3>
        <div className="card rounded-none border-2 border-accent bg-primary-light opacity-90 shadow-xl lg:card-side lg:max-h-full">
          <img
            className="md:hidden"
            src="https://placehold.co/900x400"
            alt="Album"
          />
          <img
            className="hidden md:block"
            src="https://placehold.co/150x150"
            alt="Album"
          />

          <div className="card-body">
            <a
              href="/"
              className="card-title text-xs text-accent-secondary sm:text-sm"
            >
              Another World-Famous Meme Capitalizes on the NFT Hype
            </a>
            <p className="text-xxs font-light text-accent">
              CRISTOPHER - JUNE 24, 2021
            </p>
          </div>
        </div>
        <div className="card my-5 rounded-none border-2 border-accent bg-primary-light opacity-90 shadow-xl lg:card-side lg:max-h-full">
          <img
            className="md:hidden"
            src="https://placehold.co/900x400"
            alt="Album"
          />
          <img
            className="hidden md:block"
            src="https://placehold.co/150x150"
            alt="Album"
          />

          <div className="card-body">
            <a
              href="/"
              className="card-title text-xs text-accent-secondary sm:text-sm"
            >
              Another World-Famous Meme Capitalizes on the NFT Hype
            </a>
            <p className="text-xxs font-light text-accent">
              CRISTOPHER - JUNE 24, 2021
            </p>
          </div>
        </div>
        <div className="card my-5 rounded-none border-2 border-accent bg-primary-light opacity-90 shadow-xl lg:card-side lg:max-h-full">
          <img
            className="md:hidden"
            src="https://placehold.co/900x400"
            alt="Album"
          />
          <img
            className="hidden md:block"
            src="https://placehold.co/150x150"
            alt="Album"
          />

          <div className="card-body">
            <a
              href="/"
              className="card-title text-xs text-accent-secondary sm:text-sm"
            >
              Another World-Famous Meme Capitalizes on the NFT Hype
            </a>
            <p className="text-xxs font-light text-accent">
              CRISTOPHER - JUNE 24, 2021
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://placehold.co/400x400"
          alt="Album"
          className="mx-auto my-5"
        />
      </div>
    </div>
  );
};

export default Latest;
