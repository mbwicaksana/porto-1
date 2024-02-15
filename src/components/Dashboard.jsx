import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Service from "./Service";
import Education from "./Education";
import Portfolio from "./Portfolio";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Education />
      <Portfolio />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Dashboard;
