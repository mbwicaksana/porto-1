import React from "react";
import Navbar from "../components/utils/Navbar";
import Hero from "../components/Blogs/Hero";
import Featured from "../components/Blogs/Featured";
import Footer from "../components/utils/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Footer />
    </>
  );
};

export default Dashboard;
