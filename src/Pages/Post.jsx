import React from "react";
import Navbar from "../components/utils/Navbar";
import Footer from "../components/utils/Footer";
import Content from "../components/Post/Content";
import Latest from "../components/Post/Latest";
import Recommendation from "../components/Post/Recommendation";

const Post = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="bg-gray-50 lg:col-span-2">
          <Content />
        </div>
        <div className="bg-gray-50">
          <Latest />
        </div>
      </div>
      <Recommendation />
      <Footer />
    </>
  );
};

export default Post;
