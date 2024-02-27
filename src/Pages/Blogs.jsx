import React from "react";
import Navbar from "../components/utils/Navbar";
import Hero from "../components/Blogs/Hero";
import Featured from "../components/Blogs/Featured";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
    </>
  );
};

export default Dashboard;
