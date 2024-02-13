import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Service from "./Service";
import Education from "./Education";
import Portfolio from "./Portfolio";
import NewsLetter from "./NewsLetter";
import Contact from "./Contact";
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
      <Contact />
      <Footer />
    </>
  );
};

export default Dashboard;
