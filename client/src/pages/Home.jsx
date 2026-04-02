import React from "react";
import Hero from "../components/Home/Hero.jsx";
import About from "../components/Home/About";
import Navbar from "../components/global/Navbar.jsx";
import Footer from "../components/global/Footer.jsx";
import TopProducts from "../components/Home/TopProducts.jsx";
import WhyChooseUs from "../components/Home/WhyChooseUs.jsx";
import GetInTouch from "../components/global/GetInTouch.jsx";
import ContactBusiness from "../components/Home/ContactBusiness.jsx";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TopProducts />
      <ContactBusiness />
      <About />
      <WhyChooseUs />
      <GetInTouch />
    </div>
  );
};

export default Home;
