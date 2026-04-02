import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="relative">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info (full width mobile) */}
            <div className="col-span-2 lg:col-span-1 space-y-5">
              <img
                src="/images/brand-logo.png"
                alt="Royal Bhog Logo"
                className="w-64 bg-white rounded-xl"
              />

              <p className="text-gray-400 text-sm leading-relaxed">
                Royal Bhog Agro International Private Limited is committed to
                delivering high-quality food products with purity, freshness,
                and trust across India.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-[#cf4e25]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-gray-400 hover:text-[#cf4e25]"
                  >
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-[#cf4e25]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-[#cf4e25]"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product Categories */}
            <div className="space-y-5">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
                Our Products
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>Edible Spices</li>
                <li>Flour (Atta)</li>
                <li>Edible Oils</li>
                <li>Salt</li>
                <li>Other Packaged Food Products</li>
              </ul>
            </div>

            {/* Contact Info (full width mobile) */}
            <div className="col-span-2 lg:col-span-1 space-y-5">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
                Contact Info
              </h4>

              <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
                {/* Address */}
                <p>
                  <strong>
                    Registered at Ministry of Corporate Affairs, New Delhi
                  </strong> <br />
                  228, Latifpur Khubbanpur, Bhagwanpur <br />
                  Roorkee, District Haridwar <br />
                  Uttarakhand - 247661
                </p>

                <div className="space-y-4 text-gray-400 text-sm">
                  <div className="flex gap-5 justify-between mx-5">
                    {/* Call */}
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">
                        Call Us
                      </h4>
                      <Link
                        to="tel:18008919866"
                        className="text-[#cf4e25] hover:underline"
                      >
                        1800 891 9866
                      </Link>
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">
                        WhatsApp
                      </h4>
                      <Link
                        to="https://wa.me/918194000563"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#cf4e25] hover:underline"
                      >
                        8194 000 563
                      </Link>
                    </div>
                  </div>

                  <div className="flex gap-5 justify-between mx-5">
                    {/* Email */}
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">
                        Email Us
                      </h4>
                      <a
                        href="mailto:info@royalbhog.in"
                        className="block text-[#cf4e25] hover:underline"
                      >
                        info@royalbhog.in
                      </a>
                      <a
                        href="mailto:royal.bhog@gmail.com"
                        className="block text-[#cf4e25] hover:underline"
                      >
                        royal.bhog@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>
              © 2026 Royal Bhog Agro International Private Limited. All rights
              reserved.
            </p>

            <div className="flex space-x-6 mt-3 md:mt-0">
              <Link to="/privacy" className="hover:text-[#cf4e25]">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#cf4e25]">
                Terms
              </Link>
              <Link to="/shipping" className="hover:text-[#cf4e25]">
                Shipping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
