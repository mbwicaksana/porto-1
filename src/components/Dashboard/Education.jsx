import React from "react";

const Education = () => {
  return (
    <>
      <div className="bg-primary-light bg-gradient-to-b from-primary-dark to-transparent px-12 py-12 lg:px-24 lg:py-24">
        <h3 className="mb-4 text-center text-lg font-semibold text-accent lg:text-2xl lg:font-bold">
          EDUCATION & SKILL
        </h3>
        <h1 className="mb-12 text-center text-xl font-bold text-white lg:mb-24 lg:text-5xl">
          Learn, Sharpen, Contribute
        </h1>
        {/* START OF TIMELINE EDUCATION & SKILL */}
        <div className="mb-4 grid grid-cols-1 gap-4 lg:mb-20 lg:grid-cols-2 lg:gap-8 ">
          <div className="h-max">
            <div className="w-max border-2 border-accent px-6 py-3 text-lg font-semibold text-accent">
              2016 - 2021
            </div>
            <div className="mb-2 mt-5 text-3xl font-medium text-white lg:font-bold">
              Internal Auditor
            </div>
            <div className="mb-8 font-light text-accent-secondary lg:mb-auto lg:font-semibold">
              Internal Auditor with a keen eye for detail and a commitment to
              accuracy. Ensuring financial integrity and operational efficiency
              through rigorous auditing and reporting.
            </div>
          </div>
          <div className="h-max">
            <div className="w-max border-2 border-accent px-6 py-3 text-lg font-semibold text-accent">
              2023 - Present
            </div>
            <div className="mb-2 mt-5 text-3xl font-medium text-white lg:font-bold">
              Web Administrator
            </div>
            <div className="mb-8 font-light text-accent-secondary lg:mb-auto lg:font-semibold">
              Building, maintaining, and securing high-performing websites that
              support the company's goals and objectives.
            </div>
          </div>
        </div>
        <div className="mb-12 grid grid-cols-1 gap-4 lg:mb-20 lg:grid-cols-2 lg:gap-8">
          <div className="h-max">
            <div className="w-max border-2 border-accent px-6 py-3 text-lg font-semibold text-accent">
              2013 - 2016
            </div>
            <div className="mb-2 mt-5 text-3xl font-medium text-white lg:font-bold">
              SMAN 6 Depok
            </div>
            <div className="mb-8 font-light text-accent-secondary lg:mb-auto lg:font-semibold">
              Passionate about problem-solving and exploring the complexities of
              the world through logical reasoning.
            </div>
          </div>
          <div className="h-max">
            <div className="w-max border-2 border-accent px-6 py-3 text-lg font-semibold text-accent">
              2021 - Present
            </div>
            <div className="mb-2 mt-5 text-3xl font-medium text-white lg:font-bold">
              Universitas Indraprasta PGRI
            </div>
            <div className="mb-8 font-light text-accent-secondary lg:mb-auto lg:font-semibold">
              Driven by a passion for innovation and problem-solving, I am
              pursuing a Bachelor's degree in Computer Science at Universitas
              Indraprasta PGRI
            </div>
          </div>
        </div>
        {/* END OF TIMELINE EDUCATION & SKILL */}
        {/* START OF SKILL PROGRESS BAR */}
        <div className="mb-4 grid grid-cols-1 gap-4 lg:mb-14 lg:grid-cols-2 lg:gap-8">
          <div className="h-auto bg-primary-dark">
            <div className="font- py-4 pl-10 text-accent">Javascript</div>
            <div>
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="mt-3 block w-full rounded-full bg-transparent"
              >
                <span className="block h-2 w-5/6 rounded-full bg-accent"></span>
              </span>
            </div>
          </div>
          <div className="h-auto bg-primary-dark">
            <div className="font- py-4 pl-10 text-accent">ReactJS</div>
            <div>
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="mt-3 block w-full rounded-full bg-transparent"
              >
                <span className="block h-2 w-5/6 rounded-full bg-accent"></span>
              </span>
            </div>
          </div>
        </div>
        <div className="mb-4 grid grid-cols-1 gap-4 lg:mb-14 lg:grid-cols-2 lg:gap-8">
          <div className="h-auto bg-primary-dark">
            <div className="font- py-4 pl-10 text-accent">ExpressJS</div>
            <div>
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="mt-3 block w-full rounded-full bg-transparent"
              >
                <span className="block h-2 w-4/6 rounded-full bg-accent"></span>
              </span>
            </div>
          </div>
          <div className="h-auto bg-primary-dark">
            <div className="font- py-4 pl-10 text-accent">NextJS</div>
            <div>
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="mt-3 block w-full rounded-full bg-transparent"
              >
                <span className="block h-2 w-3/6 rounded-full bg-accent"></span>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="h-auto bg-primary-dark">
            <div className="font- py-4 pl-10 text-accent">MySQL</div>
            <div>
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="mt-3 block w-full rounded-full bg-transparent"
              >
                <span className="block h-2 w-5/6 rounded-full bg-accent"></span>
              </span>
            </div>
          </div>
          <div className="h-auto bg-primary-dark">
            <div className="font- py-4 pl-10 text-accent">Wordpress</div>
            <div>
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="mt-3 block w-full rounded-full bg-transparent"
              >
                <span className="block h-2 w-5/6 rounded-full bg-accent"></span>
              </span>
            </div>
          </div>
        </div>
        {/* END OF SKILL PROGRESS BAR */}
      </div>
    </>
  );
};

export default Education;
