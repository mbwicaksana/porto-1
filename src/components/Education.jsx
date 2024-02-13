import React from "react";

const Education = () => {
  return (
    <>
      <div className="bg-beauty-blue-lighter py-12 lg:py-24 px-24">
        <h3 className="text-center text-lg font-semibold lg:font-bold lg:text-2xl lg:mb-4">
          EDUCATION & SKILL
        </h3>
        <h1 className="text-2xl lg:text-5xl font-bold text-center mb-12 lg:mb-24">
          Learn, Sharpen, Contribute
        </h1>
        {/* START OF TIMELINE EDUCATION & SKILL */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mb-4 lg:mb-20 ">
          <div className="h-max">
            <div className="border-2 border-great-golden w-max px-6 py-3 text-lg font-semibold">
              2016 - 2021
            </div>
            <div className="mt-5 mb-2 text-3xl font-bold">Internal Auditor</div>
            <div className="font-semibold mb-8 lg:mb-auto">
              Internal Auditor with a keen eye for detail and a commitment to
              accuracy. Ensuring financial integrity and operational efficiency
              through rigorous auditing and reporting.
            </div>
          </div>
          <div className="h-max">
            <div className="border-2 border-great-golden w-max px-6 py-3 text-lg font-semibold">
              2023 - Present
            </div>
            <div className="mt-5 mb-2 text-3xl font-bold">
              Web Administrator
            </div>
            <div className="font-semibold mb-8 lg:mb-auto">
              Building, maintaining, and securing high-performing websites that
              support the company's goals and objectives.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mb-12 lg:mb-20">
          <div className="h-max">
            <div className="border-2 border-great-golden w-max px-6 py-3 text-lg font-semibold">
              2013 - 2016
            </div>
            <div className="mt-5 mb-2 text-3xl font-bold">SMAN 6 Depok</div>
            <div className="font-semibold mb-8 lg:mb-auto">
              Passionate about problem-solving and exploring the complexities of
              the world through logical reasoning.
            </div>
          </div>
          <div className="h-max">
            <div className="border-2 border-great-golden w-max px-6 py-3 text-lg font-semibold">
              2021 - Present
            </div>
            <div className="mt-5 mb-2 text-3xl font-bold">
              Universitas Indraprasta PGRI
            </div>
            <div className="font-semibold mb-8 lg:mb-auto">
              Driven by a passion for innovation and problem-solving, I am
              pursuing a Bachelor's degree in Computer Science at Universitas
              Indraprasta PGRI
            </div>
          </div>
        </div>
        {/* END OF TIMELINE EDUCATION & SKILL */}
        {/* START OF SKILL PROGRESS BAR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 lg:mb-14">
          <div className="h-auto bg-main-grey">
            <div className="pl-10 py-4 font-bold">Javascript</div>
            <progress
              className="progress progress-warning min-w-full bg-transparent"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="h-auto bg-main-grey">
            <div className="pl-10 py-4 font-bold">ReactJS</div>
            <progress
              className="progress progress-warning min-w-full bg-transparent"
              value="60"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-4 lg:mb-14">
          <div className="h-auto bg-main-grey">
            <div className="pl-10 py-4 font-bold">ExpressJS</div>
            <progress
              className="progress progress-warning min-w-full bg-transparent"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="h-auto bg-main-grey">
            <div className="pl-10 py-4 font-bold">NextJS</div>
            <progress
              className="progress progress-warning min-w-full bg-transparent"
              value="50"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div className="h-auto bg-main-grey">
            <div className="pl-10 py-4 font-bold">MySQL</div>
            <progress
              className="progress progress-warning min-w-full bg-transparent"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="h-auto bg-main-grey">
            <div className="pl-10 py-4 font-bold">Wordpress</div>
            <progress
              className="progress progress-warning min-w-full bg-transparent"
              value="80"
              max="100"
            ></progress>
          </div>
        </div>
        {/* END OF SKILL PROGRESS BAR */}
      </div>
    </>
  );
};

export default Education;
