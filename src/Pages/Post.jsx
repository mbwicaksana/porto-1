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
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_164px] lg:gap-8">
        <div className="rounded-lg">
          <Title />
        </div>
        <div className="mr-4 mt-28 rounded-lg">
          <SquareAds />
        </div>
      </div>
      {/* END OF HEADER */}
      {/* START OF MAIN CONTENT */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <Content />
        </div>
        <div className="bg-gray-50">
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
