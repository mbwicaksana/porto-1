import React from "react";

const Featured = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-primary-dark bg-gradient-to-b from-black to-transparent">
        <header className="text-center">
          <h2 className="text-xl font-bold text-slate-300  sm:text-3xl mb-6 text-start">
            Featured Posts
          </h2>
        </header>

        <div className="grid grid-rows-3 grid-flow-col gap-6">
          <div className=" border border-accent-light  col-span-2 bg-primary-dark flex">
            <div className="flex-none">
              <img src="https://placehold.co/200x160" alt="..." />
            </div>
            <div className="flex-auto my-8 mx-6 w-32">
              <div>NFTS</div>
              <div className="">
                Another World-Famous Meme Capitalizes on the NFT Hype
              </div>
              <div>Cristopher - June 24, 2021</div>
            </div>
          </div>
          <div className=" border border-accent-light  col-span-2 bg-primary-dark flex">
            <div className="flex-none">
              <img src="https://placehold.co/200x160" alt="..." />
            </div>
            <div className="flex-auto my-8 mx-6 w-32">
              <div>NFTS</div>
              <div className="">
                Another World-Famous Meme Capitalizes on the NFT Hype
              </div>
              <div>Cristopher - June 24, 2021</div>
            </div>
          </div>
          <div className=" border border-accent-light  col-span-2 bg-primary-dark flex">
            <div className="flex-none">
              <img src="https://placehold.co/200x160" alt="..." />
            </div>
            <div className="flex-auto my-8 mx-6 w-32">
              <div>NFTS</div>
              <div className="">
                Another World-Famous Meme Capitalizes on the NFT Hype
              </div>
              <div>Cristopher - June 24, 2021</div>
            </div>
          </div>
          <div className="rounded-lg row-span-3 col-span-3  bg-slate-600">
            4
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
