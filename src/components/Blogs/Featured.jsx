import React from "react";

const Featured = () => {
  return (
    <>
      <div className="mx-auto max-w-full bg-primary-dark bg-gradient-to-b from-black to-transparent px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="mb-6 text-start text-xl font-bold text-slate-300  sm:text-3xl">
            Featured Posts
          </h2>
        </header>
        <section>
          <div className="grid grid-cols-1 gap-16  sm:gap-96 lg:grid-cols-2 lg:gap-8">
            <div className="h-32 rounded-lg">
              <div className="card min-h-full max-w-full bg-base-100 shadow-xl lg:card-side">
                <figure>
                  {/* Desktop */}
                  <img
                    className="hidden md:block md:h-48 md:w-80"
                    src="https://placehold.co/198x192"
                    alt="Album"
                  />
                  {/* Mobile */}
                  <img
                    className="hidden sm:block md:hidden"
                    src="https://placehold.co/700x300"
                    alt="Album"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="text-xs">BLOCKCHAIN</h3>
                  <h1 className="text-lg">
                    Lawyer Warns Russian Blockchain Exodus Has Already Begun
                  </h1>
                  <h2 className="text-xxs">JOHN - JUNE 09, 2024</h2>
                </div>
              </div>
            </div>
            <div className="h-32 rounded-lg sm:mb-96">
              <div className="card min-h-full max-w-full bg-base-100 shadow-xl lg:card-side">
                <figure>
                  {/* Desktop */}
                  <img
                    className="hidden md:block md:h-48 md:w-80"
                    src="https://placehold.co/198x192"
                    alt="Album"
                  />
                  {/* Mobile */}
                  <img
                    className="hidden sm:block md:hidden"
                    src="https://placehold.co/700x300"
                    alt="Album"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="text-xs">BLOCKCHAIN</h3>
                  <h1 className="text-lg">
                    Lawyer Warns Russian Blockchain Exodus Has Already Begun
                  </h1>
                  <h2 className="text-xxs">JOHN - JUNE 09, 2024</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-16 sm:gap-96 lg:grid-cols-2 lg:gap-8">
            <div className="h-32 rounded-lg">
              <div className="card min-h-full max-w-full bg-base-100 shadow-xl lg:card-side">
                <figure>
                  {/* Desktop */}
                  <img
                    className="hidden md:block md:h-48 md:w-80"
                    src="https://placehold.co/198x192"
                    alt="Album"
                  />
                  {/* Mobile */}
                  <img
                    className="hidden sm:block md:hidden"
                    src="https://placehold.co/700x300"
                    alt="Album"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="text-xs">BLOCKCHAIN</h3>
                  <h1 className="text-lg">
                    Lawyer Warns Russian Blockchain Exodus Has Already Begun
                  </h1>
                  <h2 className="text-xxs">JOHN - JUNE 09, 2024</h2>
                </div>
              </div>
            </div>
            <div className="h-32 rounded-lg sm:mb-96">
              <div className="card min-h-full max-w-full bg-base-100 shadow-xl lg:card-side">
                <figure>
                  {/* Desktop */}
                  <img
                    className="hidden md:block md:h-48 md:w-80"
                    src="https://placehold.co/198x192"
                    alt="Album"
                  />
                  {/* Mobile */}
                  <img
                    className="hidden sm:block md:hidden"
                    src="https://placehold.co/700x300"
                    alt="Album"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="text-xs">BLOCKCHAIN</h3>
                  <h1 className="text-lg">
                    Lawyer Warns Russian Blockchain Exodus Has Already Begun
                  </h1>
                  <h2 className="text-xxs">JOHN - JUNE 09, 2024</h2>
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
