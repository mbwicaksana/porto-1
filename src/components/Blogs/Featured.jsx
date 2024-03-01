import React from "react";

const Featured = () => {
  return (
    <>
      <div className="mx-auto max-w-full bg-primary-light bg-gradient-to-b from-black to-transparent px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="mb-10 text-center">
          <a
            href="/"
            className="mb-6 text-start text-xl font-bold text-slate-200  sm:text-3xl"
          >
            Featured Posts
          </a>
        </header>
        <section>
          <div class="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="card rounded-none border-2 border-accent bg-primary-dark opacity-90 shadow-xl lg:card-side lg:max-h-full">
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
                  className="card-title text-base text-accent-secondary sm:text-xl"
                >
                  Another World-Famous Meme Capitalizes on the NFT Hype
                </a>
                <p className="text-xxs font-light text-accent sm:text-xs">
                  CRISTOPHER - JUNE 24, 2021
                </p>
              </div>
            </div>

            <div className="card rounded-none border-2 border-accent bg-primary-dark opacity-90 shadow-xl lg:card-side lg:max-h-full">
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
                  className="card-title text-base text-accent-secondary sm:text-xl"
                >
                  UK Crypto Tax Guide, Michael Jordan & NFTs + More News
                </a>
                <p className="text-xxs font-light text-accent sm:text-xs">
                  CRISTOPHER - JUNE 24, 2021
                </p>
              </div>
            </div>
          </div>
          <div class="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div class="rounded-lg">
              <div className="bgg-primary-dark card rounded-none border-2 border-accent opacity-90 shadow-xl lg:card-side lg:max-h-full">
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
                    className="card-title text-base text-accent-secondary sm:text-xl"
                  >
                    South Korean Local Stablecoins Set for Another Boost
                  </a>
                  <p className="text-xxs font-light text-accent sm:text-xs">
                    CRISTOPHER - JUNE 24, 2021
                  </p>
                </div>
              </div>
            </div>
            <div class="rounded-lg">
              <div className="card rounded-none border-2 border-accent bg-primary-dark opacity-90 shadow-xl lg:card-side lg:max-h-full">
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
                    className="card-title text-base text-accent-secondary sm:text-xl"
                  >
                    UFC Takes the Fight to NFTs, Plans Its Own Cryptoasset
                  </a>
                  <p className="text-xxs font-light text-accent sm:text-xs">
                    CRISTOPHER - JUNE 24, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Featured;
