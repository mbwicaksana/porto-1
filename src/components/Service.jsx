import React from "react";

const Service = () => {
  return (
    <>
      <div className="bg-beauty-blue">
        <h1 className="text-5xl font-bold text-center py-10 mb-28">
          My Service
        </h1>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="card mx-auto w-96 shadow-none border border-gray-100/20 rounded-xl mb-28 lg:mb-auto">
            <figure className="px-10 pt-10 -translate-y-28">
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card mx-auto w-96 shadow-none border border-gray-100/20 rounded-xl mb-28 lg:mb-auto">
            <figure className="px-10 pt-10 -translate-y-28">
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card mx-auto w-96 shadow-none border border-gray-100/20 rounded-xl mb-28 lg:mb-auto">
            <figure className="px-10 pt-10 -translate-y-28">
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
