import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug mb-3 sm:mb-5">
            Building Trust Through
            <span className="text-[#cf4e25]"> Quality & Innovation</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            We are committed to delivering safe, high-quality food products with
            strong distribution, modern processes, and a vision for nationwide
            growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 mb-12 sm:mb-14">
          {[
            {
              title: "High Quality Products",
              desc: "We ensure premium quality by sourcing the finest ingredients and maintaining strict quality control at every stage.",
            },
            {
              title: "Wide Product Range",
              desc: "From spices and flour to oils and packaged foods, we offer a complete range for everyday kitchen needs.",
            },
            {
              title: "Strong Distribution Network",
              desc: "Our expanding network ensures timely delivery and availability of products across multiple regions.",
            },
            {
              title: "Franchise Growth Model",
              desc: "We aim to establish franchise partners in every city to expand our reach and serve local markets effectively.",
            },
            {
              title: "Food Safety Standards",
              desc: "We follow strict safety and hygiene protocols aligned with industry and international standards.",
            },
            {
              title: "Efficient Supply Chain",
              desc: "Advanced logistics and inventory systems help us maintain consistency and meet customer demand efficiently.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-[#cf4e25] to-[#b8431f] rounded-lg flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-3xl font-bold text-slate-900 mb-3">
            Our Vision & Mission
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our vision is to become a globally recognized food brand known for
            quality, innovation, and customer satisfaction. We strive to deliver
            a diverse range of high-quality food products that meet evolving
            consumer needs while maintaining strict quality standards,
            sustainable practices, and operational excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
