import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="mx-auto h-128 max-w-full bg-cover bg-fixed bg-center bg-no-repeat bg-main-parralax">
        <div className="mx-auto min-h-screen bg-black/80">
          <h3 className="text-center font-bold text-3xl pt-28 pb-10">
            SUBSCRIBE MY NEWSLETTER
          </h3>
          <div class="grid grid-cols-2 border-4 border-great-golden">
            <input
              type="text"
              placeholder="Type here"
              className="input input-lg w-full min-h-full"
            />
            <div class="h-32 rounded-lg bg-gray-200"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
