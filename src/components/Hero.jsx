import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="text-center mt-16">
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m <span className="text-yellow-400">Hari Prasath E</span>
      </motion.h1>

      <motion.p
        className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        MCA Student & Frontend Developer from Coimbatore. Passionate about building 
        modern, responsive, and user-friendly web applications using React.js and JavaScript.
      </motion.p>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.1 }}
        className="mt-10 inline-block bg-gradient-to-r from-pink-400 to-yellow-400 text-black px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-yellow-400/70 transition-all"
      >
        💻 Hire Me
      </motion.a>
    </section>
  );
};

export default Hero;
