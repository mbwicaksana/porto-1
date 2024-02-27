import React from "react";

const Education = () => {
  return (
    <>
      <div className="bg-primary-light py-12 lg:py-24 px-12 lg:px-24">
        <h3 className="text-center text-lg font-semibold lg:font-bold lg:text-2xl mb-4 text-accent">
          EDUCATION & SKILL
        </h3>
        <h1 className="text-xl lg:text-5xl font-bold text-center mb-12 lg:mb-24 text-white">
          Learn, Sharpen, Contribute
        </h1>
        {/* START OF TIMELINE EDUCATION & SKILL */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mb-4 lg:mb-20 ">
          <div className="h-max">
            <div className="border-2 border-accent text-accent w-max px-6 py-3 text-lg font-semibold">
              2016 - 2021
            </div>
            <div className="mt-5 mb-2 text-3xl font-medium lg:font-bold text-white">
              Internal Auditor
            </div>
            <div className="font-light lg:font-semibold mb-8 lg:mb-auto text-accent-secondary">
              Internal Auditor with a keen eye for detail and a commitment to
              accuracy. Ensuring financial integrity and operational efficiency
              through rigorous auditing and reporting.
            </div>
          </div>
          <div className="h-max">
            <div className="border-2 border-accent text-accent w-max px-6 py-3 text-lg font-semibold">
              2023 - Present
            </div>
            <div className="mt-5 mb-2 text-3xl font-medium lg:font-bold text-white">
              Web Administrator
            </div>
            <div className="font-light lg:font-semibold mb-8 lg:mb-auto text-accent-secondary">
              Building, maintaining, and securing high-performing websites that
              support the company's goals and objectives.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mb-12 lg:mb-20">
          <div className="h-max">
            <div className="border-2 border-accent text-accent w-max px-6 py-3 text-lg font-semibold">
              2013 - 2016
            </div>
            <div className="mt-5 mb-2 text-3xl font-medium lg:font-bold text-white">
              SMAN 6 Depok
            </div>
            <div className="font-light lg:font-semibold mb-8 lg:mb-auto text-accent-secondary">
              Passionate about problem-solving and exploring the complexities of
              the world through logical reasoning.
            </div>
          </div>
          <div className="h-max">
            <div className="border-2 border-accent text-accent w-max px-6 py-3 text-lg font-semibold">
              2021 - Present
            </div>
            <div className="mt-5 mb-2 text-3xl font-medium lg:font-bold text-white">
              Universitas Indraprasta PGRI
            </div>
            <div className="font-light lg:font-semibold mb-8 lg:mb-auto text-accent-secondary">
              Driven by a passion for innovation and problem-solving, I am
              pursuing a Bachelor's degree in Computer Science at Universitas
              Indraprasta PGRI
            </div>
          </div>
        </div>
        {/* END OF TIMELINE EDUCATION & SKILL */}
        {/* START OF SKILL PROGRESS BAR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-4 lg:mb-14">
          <div className="h-auto bg-primary-dark">
            <div className="pl-10 py-4 font- text-accent">Javascript</div>
            <div>
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="block rounded-full bg-transparent mt-3 w-full"
              >
                <span className="block h-2 rounded-full bg-accent w-5/6"></span>
              </span>
            </div>
          </div>
          <div className="h-auto bg-primary-dark">
            <div className="pl-10 py-4 font- text-accent">ReactJS</div>
            <div>
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="block rounded-full bg-transparent mt-3 w-full"
              >
                <span className="block h-2 rounded-full bg-accent w-5/6"></span>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-4 lg:mb-14">
          <div className="h-auto bg-primary-dark">
            <div className="pl-10 py-4 font- text-accent">ExpressJS</div>
            <div>
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="block rounded-full bg-transparent mt-3 w-full"
              >
                <span className="block h-2 rounded-full bg-accent w-4/6"></span>
              </span>
            </div>
          </div>
          <div className="h-auto bg-primary-dark">
            <div className="pl-10 py-4 font- text-accent">NextJS</div>
            <div>
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="block rounded-full bg-transparent mt-3 w-full"
              >
                <span className="block h-2 rounded-full bg-accent w-3/6"></span>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div className="h-auto bg-primary-dark">
            <div className="pl-10 py-4 font- text-accent">MySQL</div>
            <div>
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="block rounded-full bg-transparent mt-3 w-full"
              >
                <span className="block h-2 rounded-full bg-accent w-5/6"></span>
              </span>
            </div>
          </div>
          <div className="h-auto bg-primary-dark">
            <div className="pl-10 py-4 font- text-accent">Wordpress</div>
            <div>
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="block rounded-full bg-transparent mt-3 w-full"
              >
                <span className="block h-2 rounded-full bg-accent w-5/6"></span>
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