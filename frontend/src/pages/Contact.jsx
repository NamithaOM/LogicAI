import React from "react";

const Contact = () => {
  const primaryTextGradient =
    "bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#10B981]";

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="flex flex-col lg:flex-row lg:space-x-12 items-center lg:items-start max-w-4xl w-full">
        {/* Left Side: Contact Details */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:pr-8 flex flex-col justify-center items-center lg:items-start"> {/* Added flex properties to better align content */}
          <h2 className={`text-4xl font-bold mb-4 ${primaryTextGradient}`}>
            Contact Us
          </h2>
          <p className="text-gray-700 text-md mb-8">
            Keep in touch with us
          </p>
          <div className="space-y-4 text-gray-600 text-lg">
            <p>
              <strong>Email:</strong> contact@grochatgpt.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p>
              <strong>Address:</strong> 123 AI Avenue, Logic City, LA 12345
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:w-1/2 w-full">
          <form className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Send Button */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-8 text-lg font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg bg-gradient-to-r from-[#2563EB] to-[#10B981]"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;