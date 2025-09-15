import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

const App = () => {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "chat":
        return <Chat />;
      case "contact":
        return <Contact />;
      case "faq":
        return <FAQ />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Navbar page={page} setPage={setPage} />
      <main className="flex-1 flex flex-col">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
