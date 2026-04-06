import React, { useEffect, useState } from "react";

const BusinessModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // lock scroll
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "auto"; // restore scroll
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        e.target.reset();
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 z-10 max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-800 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Register to Start Business
        </h2>

        <p className="text-sm text-gray-500 mb-5">
          Fill the details and our team will contact you shortly.
        </p>

        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
            Submitted successfully! We'll contact you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#cf4e25] focus:outline-none"
          />

          {/* Phone + WhatsApp */}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#cf4e25] focus:outline-none"
            />

            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp Number"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#cf4e25] focus:outline-none"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#cf4e25] focus:outline-none"
          />

          {/* State - Full Width */}
          <select
            name="state"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-500 focus:ring-2 focus:ring-[#cf4e25] focus:outline-none"
          >
            <option value="" disabled selected hidden>
              Select State
            </option>

            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>

            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">
              Dadra and Nagar Haveli and Daman and Diu
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
          </select>

          {/* City + PIN */}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#cf4e25] focus:outline-none"
            />

            <input
              type="text"
              name="pincode"
              placeholder="PIN Code"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#cf4e25] focus:outline-none"
            />
          </div>

          {/* Investment Field */}
          <select
            name="investment"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-500 focus:ring-2 focus:ring-[#cf4e25] focus:outline-none"
          >
            <option value="" disabled selected hidden>
              Expected Investment Range
            </option>

            <option value="Below 1 Lakh">Below ₹1 Lakh</option>
            <option value="1-3 Lakh">₹1 – ₹3 Lakh</option>
            <option value="3-5 Lakh">₹3 – ₹5 Lakh</option>
            <option value="5-10 Lakh">₹5 – ₹10 Lakh</option>
            <option value="10+ Lakh">Above ₹10 Lakh</option>
          </select>

          {/* Business Details */}
          <textarea
            name="message"
            placeholder="Tell us about your business / experience (optional)"
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#cf4e25] focus:outline-none"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#cf4e25] text-white py-3 rounded-lg font-semibold hover:bg-[#b8431f] transition"
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessModal;
