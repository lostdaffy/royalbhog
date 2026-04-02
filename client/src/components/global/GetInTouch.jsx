import React from "react";

const GetInTouch = () => {
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
                    <strong>Address 2 - </strong> 228, Latifpur Khubbanpur,
                    Bhagwanpur, Roorkee <br />
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
            <div className="mt-5 mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
                Start Your Business with Us
              </h2>
            </div>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              {/* 🔑 Put your Web3Forms key here */}
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cf4e25]"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cf4e25]"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cf4e25]"
              />

              <textarea
                name="message"
                required
                rows="5"
                placeholder="Tell us about your business requirement..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cf4e25]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#cf4e25] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b8431f] transition"
              >
                Send Inquiry
              </button>

              <p className="text-sm text-gray-500 text-center">
                Our team will contact you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
