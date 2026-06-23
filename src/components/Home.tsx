import React from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import Hero from "./Hero";
import Stars from "./Stars";
import About from "./About";
import Navbar from "./Navbar";
import Header from "./Header";
import Background from "./Background";
import NearestEvent from "./NearestEvent";

const Home: React.FC = () => {

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Background/>
      <div className="relative z-10">
        <Navbar />
        <Header />
        <Hero />
        <NearestEvent />
        <Stars />
        <Cards />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Home;