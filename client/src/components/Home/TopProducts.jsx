import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../data";

const TopProducts = () => {
  const topFour = data.slice(0, 8);

  return (
    <div className="min-h-screen py-12 px-4 md:px-10 lg:px-20">
      <div className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold pb-2 text-[#cf4e25]">
              Royal Bhog Products
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              A curated selection of our most trusted and widely loved
              essentials
            </p>
          </div>

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

          {/* View More Button */}
          <div className="pt-10 text-center">
            <Link
              to="/products"
              className="inline-block bg-[#cf4e25] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View More <i className="ri-arrow-right-line ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
