import React from "react";
import {
  Lightbulb,
  MessageSquare,
  Rocket,
  Brain,
  Code,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="h-6 w-6 text-[#10B981]" />,
    title: "Ideation & Brainstorming",
    description:
      "Turn a single idea into a detailed plan, brainstorm solutions, or generate a list of creative concepts in seconds.",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-[#10B981]" />,
    title: "Instant Answers",
    description:
      "Get concise and accurate answers to your questions without sifting through search results. Perfect for quick facts.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-[#10B981]" />,
    title: "Productivity Automation",
    description:
      "Automate repetitive tasks, draft emails, and summarize long documents to free up your time for what matters.",
  },
  {
    icon: <Brain className="h-6 w-6 text-[#10B981]" />,
    title: "Enhanced Learning",
    description:
      "Ask complex questions and receive simplified explanations, analogies, and detailed breakdowns of any topic.",
  },
  {
    icon: <Code className="h-6 w-6 text-[#10B981]" />,
    title: "Code & Debugging Assistant",
    description:
      "Get help with coding syntax, debug errors, or generate code snippets for a wide range of programming languages.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-[#10B981]" />,
    title: "Summarization & Analysis",
    description:
      "Condense articles, reports, or research papers into key takeaways, or analyze large texts for sentiment and keywords.",
  },
];

const FeaturesSection = () => {
  const primaryGradient = "bg-gradient-to-r from-[#2563EB] to-[#10B981]";
  const primaryTextGradient =
    "bg-clip-text text-transparent " + primaryGradient;

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${primaryTextGradient}`}
          >
            Powerful Features to Boost Your Workflow
          </h2>
          <p className="text-gray-600">
            Our suite of tools helps you streamline operations and achieve goals
            more efficiently.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300
             hover:bg-[#97e8f6] hover:border-[#10B981] hover:text-white" // Updated hover styles
            >
              <div className="bg-[#EBF5FF] w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
