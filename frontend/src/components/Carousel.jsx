import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create a looped array to allow for continuous scrolling.
  // We add items to the start and end to prevent blank spaces.
  const loopedItems = [
    ...items.slice(-2), // Add last two items at the beginning
    ...items,
    ...items.slice(0, 2), // Add first two items at the end
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  // Use a temporary index for the visual transition
  const tempIndex = currentIndex + 2;

  // Handle the "snap back" effect for infinite looping
  useEffect(() => {
    // If we've scrolled past the last item in the original array
    if (currentIndex === items.length) {
      setTimeout(() => {
        // Reset the index without a visible transition
        setCurrentIndex(0);
      }, 700); // This should match the transition duration
    }
    // If we've scrolled past the first item (when moving backward)
    if (currentIndex === -1) {
      setTimeout(() => {
        setCurrentIndex(items.length - 1);
      }, 700);
    }
  }, [currentIndex, items.length]);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      {/* Carousel items container */}
      <div
        className={`flex ${currentIndex === items.length || currentIndex === -1 ? "" : "transition-transform duration-700 ease-in-out"}`}
        style={{ transform: `translateX(${-tempIndex * (100 / 3)}%)` }}
      >
        {loopedItems.map((item, index) => {
          // This is the index of the box that will appear in the center
          const centerIndex = tempIndex + 1;

          // Determine the scale for the active (center), left, and right items
          let scaleClass = "scale-75 opacity-50";
          if (index === centerIndex) {
            scaleClass = "scale-110 opacity-100 shadow-xl";
          } else {
            scaleClass = "scale-90 opacity-75";
          }

          return (
            <div
              key={index}
              className={`flex-shrink-0 w-1/3 p-4 transition-all duration-700 ease-in-out ${scaleClass}`}
            >
              <div className="bg-white rounded-xl p-6 text-center h-full flex flex-col items-center justify-center">
                <div className="text-4xl mb-4">
                  <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#10B981]">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
        <button
          onClick={handlePrev}
          className="bg-white p-3 rounded-full shadow-md text-gray-700 hover:bg-gray-200 transition-colors"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-white p-3 rounded-full shadow-md text-gray-700 hover:bg-gray-200 transition-colors"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;