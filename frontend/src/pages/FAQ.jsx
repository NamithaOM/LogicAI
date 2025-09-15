import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How does the free trial work?",
      answer:
        "Our free trial gives you full access to all GroChat GPT features for 14 days. No credit card required. At the end of the trial, you can choose a plan that suits your needs or cancel without any charges.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can easily upgrade or downgrade your subscription plan at any time from your account settings.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees to start using GroChat GPT.",
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer:
        "Yes, we provide custom enterprise solutions tailored to your business needs. Please contact our sales team for more information.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer 24/7 email and chat support for all our paid plans. We also have an extensive knowledge base and community forum.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen p-8 font-sans"> {/* Changed bg-[#1C1C1E] to bg-white and text-white to text-gray-800 */}
      <div className="text-center max-w-2xl mx-auto mb-8 mt-2">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 "> {/* Changed gradient colors */}
           Frequently Asked Questions
          </span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg"> {/* Changed text-gray-400 to text-gray-600 */}
          Find answers to common questions about GroChat GPT. If you can't find
          what you're looking for, feel free to contact our support team.
        </p>
      </div>

      <div className="space-y-4 mx-auto w-full max-w-3xl">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-xl border border-gray-200 cursor-pointer transition-colors duration-200 hover:bg-gray-50" // Changed bg-[#2D2D30] to bg-white, border color, and hover color
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg sm:text-xl font-medium text-gray-800"> {/* Changed text-white to text-gray-800 */}
                {item.question}
              </h3>
              <FaChevronDown
                className={`text-gray-500 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`} // Changed text-gray-400 to text-gray-500
              />
            </div>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-gray-600 text-sm sm:text-base"> {/* Changed text-gray-400 to text-gray-600 */}
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;