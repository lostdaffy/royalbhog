import React from "react";
import GetInTouch from "../components/global/GetInTouch";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/page_banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tag */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#cf4e25]/20 rounded-full border border-[#cf4e25]/30 mb-4 sm:mb-6">
            <span className="text-[#cf4e25] text-xs sm:text-sm font-medium">
              Contact Us
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl uppercase sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Get in Touch with <br />
            <span className="text-[#cf4e25]">Royal Bhog</span>
          </h1>

          {/* Description */}
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            We’re here to assist you with product inquiries, business
            partnerships, and distribution opportunities.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 sm:py-16 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Visit Us */}
            <div className="bg-white rounded-2xl shadow-md p-6 lg:p-8 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#cf4e25]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-[#cf4e25]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Visit Us
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Address 1 - </strong> Registered at Ministry of
                Corporate Affairs, New Delhi <br />
                <br />
                <strong>Address 2 - </strong> Unit - 228, Latifpur Khubbanpur,
                Bhagwanpur, Roorkee <br />
                District Haridwar, Uttarakhand - 247661
              </p>
            </div>

            {/* Call + WhatsApp */}
            <div className="bg-white rounded-2xl shadow-md p-6 lg:p-8 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#cf4e25]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-[#cf4e25]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11 11 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17v2a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Call / WhatsApp
              </h3>

              <a
                href="tel:18008919866"
                className="block text-[#cf4e25] font-medium text-sm hover:underline"
              >
                1800 891 9866
              </a>

              <a
                href="https://wa.me/918194000563"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#cf4e25] text-sm mt-2 hover:underline"
              >
                WhatsApp: 8194 000 563
              </a>
            </div>

            {/* Email Us */}
            <div className="bg-white rounded-2xl shadow-md p-6 lg:p-8 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#cf4e25]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-[#cf4e25]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Email Us
              </h3>

              <a
                href="mailto:info@royalbhog.in"
                className="block text-[#cf4e25] text-sm hover:underline"
              >
                info@royalbhog.in
              </a>

              <a
                href="mailto:royal.bhog@gmail.com"
                className="block text-[#cf4e25] text-sm mt-2 hover:underline"
              >
                royal.bhog@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <GetInTouch />
    </div>
  );
};

export default Contact;
