import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#2563EB] to-[#10B981] bg-clip-text text-transparent">
                LogicAI{" "}
              </span>
            </a>
            <p className="text-gray-600 mb-4">
              Your AI-powered assistant to chat, explore, and get work done
              faster with a modern UI.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-[#2563EB] transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#2563EB] transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#2563EB] transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#2563EB] transition-colors"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-600 hover:text-[#10B981]">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="text-gray-600 hover:text-[#10B981]"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-gray-600 hover:text-[#10B981]"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="/docs" className="text-gray-600 hover:text-[#10B981]">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-600 hover:text-[#10B981]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 hover:text-[#10B981]">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-[#10B981]"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-600 hover:text-[#10B981]"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-600 hover:text-[#10B981]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-[#10B981]">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="text-gray-600 hover:text-[#10B981]"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/gdpr" className="text-gray-600 hover:text-[#10B981]">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} LogicAI GPT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
