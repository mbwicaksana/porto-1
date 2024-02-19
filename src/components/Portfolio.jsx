import React from "react";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="bg-primary-dark py-12 lg:py-24 px-24">
        <h3 className="text-lg font-semibold lg:font-bold lg:text-2xl lg:mb-4">
          MY RECENT PORTFOLIO
        </h3>
        <h1 className="hidden lg:block text-5xl font-bold mb-16">
          A portfolio of website
          <br />
          that showcases my skills and dedication.
        </h1>
        <section>
          <div className="mx-auto max-w-screen-xl">
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
              <li>
                <div className="group relative block">
                  <img
                    src="https://placehold.co/350x350"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-gradient-to-t from-zinc-900 ">
                    <h3 className="text-xl font-medium text-white">
                      Rajalaptop
                    </h3>

                    <h3 className="text-lg font-light text-white">
                      — Wordpress
                    </h3>
                  </div>
                </div>
              </li>

              <li>
                <div className="group relative block">
                  <img
                    src="https://placehold.co/350x350"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-gradient-to-t from-zinc-900 ">
                    <h3 className="text-xl font-medium text-white">Kliky</h3>

                    <h3 className="text-lg font-light text-white">
                      — Wordpress
                    </h3>
                  </div>
                </div>
              </li>

              <li className="md:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 ">
                <div className="group relative block">
                  <img
                    src="https://placehold.co/724x724"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-gradient-to-t from-zinc-900 ">
                    <h3 className="text-xl font-medium text-white">Windelov</h3>

                    <h3 className="text-lg font-light text-white">
                      — ReactJS, ExpressJS
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
