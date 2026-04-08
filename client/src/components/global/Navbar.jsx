import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BusinessModal from "../global/BusinessModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false); // ✅ modal state
  const location = useLocation();

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/products", label: "Our Products" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full font-sans text-white shadow-lg relative z-50">
      {/* Top Bar */}
      <div className="bg-[#cf4e25] px-4 sm:px-8 lg:px-20 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="flex flex-row lg:flex-row lg:justify-between gap-2 text-xs sm:text-sm text-white">
            <div className="flex items-center gap-1">
              <span>
                <i className="ri-mail-fill"></i> info@royalbhog.in
              </span>
            </div>
            |
            <div className="flex items-center gap-1">
              <span>
                <i className="ri-whatsapp-line"></i> 81940 00563
              </span>
            </div>
            |
            <div className="flex items-center gap-1 font-medium">
              <span>Contact Us :</span>
              <span>
                <i className="ri-phone-fill"></i> 1800 891 9866
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white px-4 sm:px-8 lg:px-20 py-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl sm:text-3xl font-bold">
              <Link to="/home">
                <img
                  src="/images/brand-logo.png"
                  className="w-50 h-auto"
                  alt="Company Logo"
                />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-300 hover:text-[#cf4e25] ${
                    isActive(link.path)
                      ? "text-[#cf4e25] border-b-2 border-[#cf4e25]"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center bg-[#cf4e25] text-white px-5 py-2.5 rounded-full font-semibold shadow-md hover:bg-[#b8431f] transition"
              >
                <i className="ri-user-add-fill mr-1"> </i>Register to Start Business
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
            >
              <span
                className={`w-6 h-0.5 bg-[#cf4e25] transition ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-[#cf4e25] transition ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-[#cf4e25] transition ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 text-sm font-medium rounded-md ${
                  isActive(link.path)
                    ? "text-[#cf4e25] bg-gray-50 border-l-4 border-[#cf4e25]"
                    : "text-gray-700 hover:text-[#cf4e25] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Button */}
            <div className="pt-4 border-t">
              <button
                onClick={() => {
                  setOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full bg-[#cf4e25] text-white px-5 py-3 rounded-full font-semibold hover:bg-[#b8431f] transition"
              >
                <i className="ri-user-add-fill"></i> Register to Start Business
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <BusinessModal isOpen={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Navbar;
