import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-amber-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-y-6 items-center w-full py-20">
          {/* Left Content */}
          <div className="text-white space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-gray-800 uppercase text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                Wide Range of <br /> Royal Bhog with <br /> Purity & Surety
              </h2>

              <p className="text-base sm:text-lg lg:text-lg text-gray-600 leading-relaxed max-w-lg">
                <span className="font-bold text-[#cf4e25]">
                  Royal Bhog Agro International Private Limited -
                </span>
                <br />
                is a dynamic and versatile company engaged in the manufacturing,
                processing, importing, exporting, and distribution of a wide
                range of food products.
              </p>
            </div>

            <div className="flex flex-row sm:flex-row gap-4">
              {/* Primary Button */}
              <Link
                to="/products"
                className="bg-[#cf4e25] text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-[#b8431f] transform hover:scale-105 transition-all duration-300 text-center shadow-md"
              >
                <i className="ri-arrow-right-long-line"></i> Explore Products
              </Link>

              {/* Secondary Button */}
              <Link
                to="/about"
                className="border border-[#cf4e25] text-[#cf4e25] px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-[#cf4e25] hover:text-white transition-all duration-300 text-center"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/images/hero-img.png"
                alt="Royal Bhog Products"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
