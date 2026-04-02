import React, { useState } from "react";
import BusinessModal from "../global/BusinessModal";

const ContactBusiness = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[#cf4e25] py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Contact Us for <br />
          <span className="text-white/90">Business Opportunities</span>
        </h2>

        {/* Button */}
        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center bg-white text-[#cf4e25] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Register to Start Business
          </button>
        </div>
      </div>

      {/* Modal */}
      <BusinessModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default ContactBusiness;
