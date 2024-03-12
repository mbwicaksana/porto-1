import React from "react";
import Navbar from "../components/utils/Navbar";
import Footer from "../components/utils/Footer";
import Content from "../components/Post/Content";
import Latest from "../components/Post/Latest";
import Recommendation from "../components/Post/Recommendation";
import SquareAds from "../components/utils/SquareAds";
import Title from "../components/Post/Title";

const Post = () => {
  return (
    <>
      <Navbar />
      {/* START OF HEADER */}
      <div className="grid grid-cols-1 gap-4 bg-primary-dark bg-gradient-to-t from-primary-light to-transparent lg:grid-cols-[1fr_164px] lg:gap-8 ">
        <div>
          <Title />
        </div>
        <div className="mr-4 rounded-lg lg:mt-28">
          <SquareAds />
        </div>
      </div>
      {/* END OF HEADER */}
      {/* START OF MAIN CONTENT */}
      <div className="grid grid-cols-1 gap-4 bg-primary-light bg-gradient-to-t from-primary-dark  to-transparent lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <Content />
        </div>
        <div>
          <Latest />
        </div>
      </div>
      {/* END OF MAIN CONTENT */}
      <Recommendation />
      <Footer />
    </>
  );
};

export default Post;
