import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/page_banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#000000]/65"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#cf4e25]/20 rounded-full border border-[#cf4e25]/30 mb-4 sm:mb-6">
            <span className="text-[#cf4e25] text-xs sm:text-sm font-medium">
              About Us
            </span>
          </div>
          <h1 className="text-2xl uppercase sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Royal Bhog Agro <br />{" "}
            <span className="text-[#cf4e25]">
              International Private Limited
            </span>
          </h1>

          <p className="text-base sm:text-base text-gray-300 max-w-3xl mx-auto px-4">
            Our products are crafted to bring freshness, flavor, and trust to
            your kitchen.
          </p>
        </div>
      </section>

      {/* Section 1: Hero About Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Bringing Purity &
                  <span className="text-[#cf4e25]"> Quality</span> to Every
                  Kitchen
                </h1>

                <p className="text-base text-gray-700 leading-relaxed">
                  Royal Bhog Agro International Private Limited is dedicated to
                  delivering high-quality food products that combine purity,
                  freshness, and trust. From essential kitchen staples to a wide
                  range of packaged foods, we ensure every product meets the
                  highest standards of quality and taste.
                </p>

                <p className="text-base text-gray-600 leading-relaxed">
                  With a vision to expand across cities through our franchise
                  network, we aim to make reliable and affordable food products
                  accessible to every household. Our commitment to innovation,
                  quality control, and customer satisfaction drives everything
                  we do.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE - 4 IMAGES */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-[#cf4e25]/5 rounded-2xl shadow-md flex items-center justify-center p-3 h-40 sm:h-48 hover:shadow-lg transition duration-300">
                  <img
                    src="/images/haldi.jpeg"
                    alt="Turmeric"
                    className="max-h-full object-contain"
                  />
                </div>

                <div className="bg-[#cf4e25]/5 rounded-2xl shadow-md flex items-center justify-center p-3 h-40 sm:h-48 hover:shadow-lg transition duration-300">
                  <img
                    src="/images/mirch.jpeg"
                    alt="Wheat Flour"
                    className="max-h-full object-contain"
                  />
                </div>
                <div className="bg-[#cf4e25]/5 rounded-2xl shadow-md flex items-center justify-center p-3 h-40 sm:h-48 hover:shadow-lg transition duration-300">
                  <img
                    src="/images/oil.jpeg"
                    alt="Mustard Oil"
                    className="max-h-full object-contain"
                  />
                </div>
                <div className="bg-[#cf4e25]/5 rounded-2xl shadow-md flex items-center justify-center p-3 h-40 sm:h-48 hover:shadow-lg transition duration-300">
                  <img
                    src="/images/dhaniya.jpeg"
                    alt="Coriander"
                    className="max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Floating Tag */}
              <div className="absolute -bottom-5 left-5 bg-white px-4 py-2 rounded-xl shadow-md">
                <span className="text-[#cf4e25] text-sm font-semibold">
                  100% Pure Products
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Heritage & Craftsmanship */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - Images Grid */}
            <div className="relative">
              <img src="/images/about-img.png" className="w-full object-contain rounded-lg" alt="" />
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Where Quality Meets
                  <span className="text-[#cf4e25]"> Everyday Nutrition</span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  At Royal Bhog Agro International Private Limited, we are
                  committed to delivering high-quality food products that
                  combine purity, taste, and nutrition. Our carefully selected
                  ingredients and modern processing techniques ensure freshness
                  in every product.
                </p>
              </div>

              {/* Points */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#cf4e25] rounded-full flex items-center justify-center mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Premium Quality Ingredients
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Carefully sourced to ensure purity, taste, and
                      consistency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#cf4e25] rounded-full flex items-center justify-center mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Advanced Processing
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Modern manufacturing methods to maintain hygiene and
                      freshness.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#cf4e25] rounded-full flex items-center justify-center mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Wide Product Range
                    </h3>
                    <p className="text-gray-600 text-sm">
                      From spices and flour to oils and daily essentials.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#cf4e25] rounded-full flex items-center justify-center mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Strong Distribution Network
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Expanding across cities through our franchise model.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Mission & Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#cf4e25]/5 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-slate-900/5 to-transparent rounded-full translate-y-32 -translate-x-32"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Committed to Quality,
              <span className="text-[#cf4e25]"> Trust & Growth</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our mission is to deliver high-quality food products that combine
              purity, nutrition, and taste
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#cf4e25] to-[#b8431f] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Quality First
              </h3>
              <p className="text-gray-600">
                We follow strict quality control processes to ensure purity,
                freshness, and consistency in every product.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#cf4e25] to-[#b8431f] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Food Safety Standards
              </h3>
              <p className="text-gray-600">
                Our products adhere to strict hygiene and safety standards to
                ensure customer well-being.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#cf4e25] to-[#b8431f] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                We prioritize customer needs by delivering reliable products and
                excellent service.
              </p>
            </div>

            {/* Card 4 */}
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#cf4e25] to-[#b8431f] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Continuous Innovation
              </h3>
              <p className="text-gray-600">
                We constantly improve our processes and product range to meet
                modern consumer needs.
              </p>
            </div>

            {/* Card 5 */}
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#cf4e25] to-[#b8431f] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Strong Distribution
              </h3>
              <p className="text-gray-600">
                Our expanding network ensures availability across multiple
                cities and regions.
              </p>
            </div>

            {/* Card 6 */}
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#cf4e25] to-[#b8431f] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Franchise Growth Vision
              </h3>
              <p className="text-gray-600">
                We aim to expand nationwide through franchise partnerships,
                reaching every market efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
