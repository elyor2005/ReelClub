import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutClub from "./components/AboutClub";
import Offerings from "./components/Offerings";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      <Navbar />
      <main className="bg-black ">
        <HeroSection className="mt-25" />
        <AboutClub />
        <Offerings />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
