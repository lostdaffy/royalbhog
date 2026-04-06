import React from "react";

const About = () => {
  const images = [
    { src: "/images/dhaniya.jpeg", label: "Dhaniya" },
    { src: "/images/haldi.jpeg", label: "Haldi" },
    { src: "/images/oil.jpeg", label: "Oil" },
    { src: "/images/mirch.jpeg", label: "Mirch" },
  ];

  return (
    <section className="relative bg-[#faf7f2] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT - IMAGE GRID */}
          <div className="relative">
            <div className="relative">
              <img
                src="/images/about-img.png"
                className="w-full object-contain rounded-2xl"
                alt=""
              />
            </div>
          </div>

          {/* RIGHT - TEXT */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#cf4e25] text-white text-xs tracking-widest px-5 py-2">
              <span className="w-5 h-[1px] bg-white/60"></span>
              ABOUT US
            </div>

            <div className="w-14 h-[3px] bg-[#cf4e25] rounded"></div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              We Are Delivering <br />
              <span className="text-[#cf4e25] italic">Trusted Products</span>
            </h2>

            <p className="text-sm font-semibold text-[#cf4e25] tracking-widest uppercase">
              Royal Bhog Agro International Pvt. Ltd.
            </p>

            <button className="inline-flex items-center gap-2 bg-[#cf4e25] text-white px-6 py-3 rounded hover:bg-[#b8431f] transition">
              Know More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
