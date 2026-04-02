import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";

const Products = () => {
  const topFour = data;

  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/page_banner.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tag */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#cf4e25]/20 rounded-full border border-[#cf4e25]/30 mb-4 sm:mb-6">
            <span className="text-[#cf4e25] text-xs sm:text-sm font-medium">
              Pure • Fresh • Authentic
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl uppercase sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Purity with Surety
            <span className="text-[#cf4e25] block sm:inline"><br />
              {" "}
              With Every Products
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-base text-gray-300 max-w-3xl mx-auto px-4">
            Our products are crafted to bring freshness, flavor, and trust to
            your kitchen.
          </p>
        </div>
      </section>

      <div className="w-full py-12 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold pb-2 text-[#cf4e25]">
              Royal Bhog Products
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              A curated selection of our most trusted and widely loved
              essentials
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {topFour.map((item) => (
              <div key={item.id} className="group">
                <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col h-full">
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[10px] font-semibold uppercase tracking-widest bg-[#fff3f0] text-[#cf4e25] px-2 py-1 rounded-full border border-[#cf4e25]/20">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="w-full h-60 bg-gradient-to-br from-[#fff8f6] to-[#fff3f0] flex items-center justify-center overflow-hidden p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain "
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4 gap-2">
                    {/* Title */}
                    <h2 className="text-base font-bold text-[#cf4e25]">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
