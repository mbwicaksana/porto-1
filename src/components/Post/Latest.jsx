import React from "react";

const Latest = () => {
  return (
    <div className="flex flex-col">
      <div className="max-h-80 bg-slate-700">
        <h3 className="my-7 text-center text-4xl font-semibold">
          Stay in the Loop
        </h3>
        <h4 className="my-5 text-center text-sm font-semibold">
          Get the daily email from CryptoNews that makes reading the news
          actually enjoyable. Join our mailing list to stay in the loop to stay
          informed, for free.
        </h4>
        <div className="join mx-16">
          <input className="input join-item bg-secondary" placeholder="Email" />
          <button className="btn join-item bg-primary-light hover:bg-primary-dark">
            Subscribe
          </button>
        </div>
        <div>
          <label className="label cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mx-2 flex-grow text-xs">
              I've read and accept the{" "}
              <a href="/privacy-policy" className="underline">
                Privacy Policy.
              </a>
            </span>
          </label>
        </div>
      </div>
      <div className="bg-slate-600">
        <h3 className="bg-slate-500 text-3xl">Latest Stories</h3>
        <div className="bg-slate-500">sub 1</div>
        <div className="bg-slate-500">sub 2</div>
        <div className="bg-slate-500">sub 3</div>
      </div>
      <div className="bg-slate-800">3</div>
    </div>
  );
};

export default Latest;
