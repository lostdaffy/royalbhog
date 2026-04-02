import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-amber-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full py-20">
          {/* Left Content */}
          <div className="text-white space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-gray-800 text-[1.8rem] uppercase sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold leading-tight">
                Wide Range of Royal <br /> Bhog with Purity & Surety
              </h1>

              <p className="text-base sm:text-lg lg:text-lg text-gray-600 leading-relaxed max-w-lg">
                <span className="font-bold text-[#cf4e25]">
                  Royal Bhog Agro International Private Limited
                </span>{" "}
                is a dynamic and versatile company engaged in the manufacturing,
                processing, importing, exporting, and distribution of a wide
                range of food products.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="bg-[#cf4e25] text-white px-6 sm:px-8 py-3 sm:py-3 rounded-full text-base sm:text-base font-semibold hover:bg-[#cf4d25ad] transform hover:scale-105 transition-all duration-300 text-center"
              >
                Explore Collection
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/images/heroimg.png"
                className="w-full h-auto max-w-full object-cover"
                alt="Nautical Brass Treasures"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
