import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = ({ page, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "Chat", path: "chat" },
    { name: "Contact", path: "contact" },
    { name: "FAQ", path: "faq" },
  ];

  const primaryTextGradient =
    "bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#10B981]";
  const secondaryColor = "text-gray-600 hover:text-gray-900";
  const navBgColor = "backdrop-blur-sm bg-white/80";
  const borderColor = "border-gray-200";

  return (
    <nav className={`sticky top-0 z-50 border-b ${borderColor} ${navBgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <button onClick={() => setPage("home")} className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
            <span className={`text-2xl font-bold ${primaryTextGradient}`}>
              LogicAI
            </span>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => setPage(link.path)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    page === link.path ? primaryTextGradient : secondaryColor
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="bg-white md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  setPage(link.path);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  page === link.path ? primaryTextGradient : "text-gray-700"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
