import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CollapsibleSection from "./components/CollapsibleSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600 text-white min-h-screen">
      <Navbar />
      <Hero />
      <div className="max-w-5xl mx-auto mt-10 space-y-6 px-4">
        <CollapsibleSection title="About Me">
          <About />
        </CollapsibleSection>
        <CollapsibleSection title="Skills">
          <Skills />
        </CollapsibleSection>
        <CollapsibleSection title="Projects">
          <Projects />
        </CollapsibleSection>
        <CollapsibleSection title="Contact">
          <Contact />
        </CollapsibleSection>
      </div>
      <Footer />
    </div>
  );
}

export default App;
