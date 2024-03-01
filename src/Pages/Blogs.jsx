import React from "react";
import Navbar from "../components/utils/Navbar";
import Hero from "../components/Blogs/Hero";
import Featured from "../components/Blogs/Featured";
import Footer from "../components/utils/Footer";
import RectangleAds from "../components/utils/RectangleAds";
import Latest from "../components/Blogs/Latest";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <RectangleAds />
      <Latest />
      <Footer />
    </>
  );
};

export default Dashboard;
