import React from "react";
import Navbar from "../components/utils/Navbar";
import Hero from "../components/Dashboard/Hero";
import Service from "../components/Dashboard/Service";
import Education from "../components/Dashboard/Education";
import Portfolio from "../components/Dashboard/Portfolio";
import NewsLetter from "../components/Dashboard/NewsLetter";
import Footer from "../components/utils/Footer";

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
