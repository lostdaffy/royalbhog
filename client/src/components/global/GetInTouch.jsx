import React, { useState } from "react";

const GetInTouch = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        e.target.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form.");
    }

    setLoading(false);
  };

  return (
    <section
      id="getintouch"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-100 relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23cf4e25' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Let’s Connect for <br />
                <span className="text-[#cf4e25]"> Quality Food Solutions</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base">
                Whether you are a distributor, retailer, or customer, we’re here
                to assist you with product inquiries, partnerships, and business
                opportunities.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 text-gray-700">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#cf4e25]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-map-pin-line text-2xl text-[#cf4e25]"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Visit Us</h3>
                  <p className="text-gray-800 text-sm">
                    <strong>Address 1 - </strong> Registered at Ministry of
                    Corporate Affairs, New Delhi <br />
                    <br />
                    <strong>Address 2 - </strong> Unit - 228, Latifpur
                    Khubbanpur, Bhagwanpur, Roorkee <br />
                    District Haridwar, Uttarakhand - 247661
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#cf4e25]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-phone-line text-2xl text-[#cf4e25]"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <a href="tel:18008919866" className="text-[#cf4e25] text-sm">
                    1800 891 9866
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#cf4e25]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-whatsapp-line text-2xl text-[#cf4e25]"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">WhatsApp</h3>
                  <a
                    href="https://wa.me/918194000563"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#cf4e25] text-sm"
                  >
                    8194 000 563
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#cf4e25]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-mail-line text-2xl text-[#cf4e25]"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="text-sm">
                    <a
                      href="mailto:info@royalbhog.in"
                      className="text-[#cf4e25]"
                    >
                      info@royalbhog.in
                    </a>
                    <br />
                    <a
                      href="mailto:royal.bhog@gmail.com"
                      className="text-[#cf4e25]"
                    >
                      royal.bhog@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md border border-gray-200">
            <div className="my-8">
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                Start Your Business with Us
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />

              {/* Name */}
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white focus:ring-1 focus:ring-[#cf4e25] focus:border-[#cf4e25] outline-none"
                />
              </div>

              {/* Phone + WhatsApp */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#cf4e25] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-600 mb-1 block">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#cf4e25] outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#cf4e25] outline-none"
                />
              </div>

              {/* State */}
              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  State *
                </label>
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
              </div>

              {/* City + PIN */}
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#cf4e25] outline-none"
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="PIN"
                  required
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#cf4e25] outline-none"
                />
              </div>

              {/* Investment */}
              <select
                name="investment"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-1 focus:ring-[#cf4e25] outline-none"
              >
                <option value="">Investment Range</option>
                <option>Below ₹1L</option>
                <option>₹1–3L</option>
                <option>₹3–5L</option>
                <option>₹5–10L</option>
                <option>₹10L+</option>
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
                className="w-full bg-[#cf4e25] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#b8431f] transition"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
