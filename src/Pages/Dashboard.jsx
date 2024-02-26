import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Education from "../components/Education";
import Portfolio from "../components/Portfolio";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

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
