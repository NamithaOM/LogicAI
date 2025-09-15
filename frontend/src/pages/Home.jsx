import React from "react";
import Carousel from "../components/Carousel";
import FeaturesSection from "../components/FeaturesSection";
import heroImage from "../assets/hero1.png";

const Home = ({ setPage }) => {
  const primaryGradient = "bg-gradient-to-r from-[#2563EB] to-[#10B981]";
  const primaryTextGradient =
    "bg-clip-text text-transparent " + primaryGradient;

  const carouselItems = [
    {
      title: "Master New Skills",
      description:
        "Dive deep into any topic, understand complex concepts, and retain information with personalized learning paths.",
      icon: "📚",
    },
    {
      title: "Ignite Your Imagination",
      description:
        "From brainstorming blog posts to drafting creative stories, our AI companion helps you overcome writer's block and generate fresh ideas.",
      icon: "✍️",
    },
    {
      title: "Streamline Your Workflow",
      description:
        "Automate repetitive tasks, summarize lengthy documents, and get quick answers to boost your productivity and save valuable time.",
      icon: "⚡",
    },
    {
      title: "Simplify Your Day",
      description:
        "Manage your schedule, set reminders, and organize your tasks with an intelligent assistant that keeps you on track.",
      icon: "🗓️",
    },
    {
      title: "Get Personalized Advice",
      description:
        "Receive tailored suggestions and insights on a wide range of topics, from travel planning to professional growth.",
      icon: "🧭",
    },
    {
      title: "Explore New Perspectives",
      description:
        "Engage in conversations that challenge your thinking and provide new angles on complex problems or creative pursuits.",
      icon: "🤔",
    },
    {
      title: "24/7 Availability",
      description:
        "Our AI assistant is always here for you, providing instant support and information whenever you need it, day or night.",
      icon: "⏰",
    },
    {
      title: "Find Quick Answers",
      description:
        "Access a vast knowledge base instantly to get reliable information without sifting through countless search results.",
      icon: "🔍",
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto">
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1
            className={`text-5xl md:text-6xl font-extrabold ${primaryTextGradient} mb-4`}
          >
            Smarter Conversations. <br /> Smarter Learning.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
            Your personal AI companion for{" "}
            <span className="font-semibold">
              learning, creativity, and productivity.
            </span>
            Ask questions, get answers, and accelerate your growth.
          </p>
          <button
            onClick={() => setPage("chat")}
            className={`py-3 px-8 text-lg font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg ${primaryGradient}`}
          >
            Chat with LogicAI
          </button>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="AI Assistant Illustration"
            className="w-full max-w-md lg:max-w-lg drop-shadow-xl"
          />
        </div>
      </div>

      {/* Carousel + Features */}
      <div className="mt-20 w-full">
        <Carousel items={carouselItems} />
        <FeaturesSection />
      </div>
    </div>
  );
};

export default Home;
