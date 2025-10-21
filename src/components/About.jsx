import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 p-10 rounded-3xl shadow-2xl max-w-2xl backdrop-blur-md border border-white/20"
      >
        <h2 className="text-4xl font-bold mb-6 text-yellow-300 text-center">
          About Me
        </h2>
        <p className="text-gray-100 text-lg text-center">
          I’m a Master of Computer Applications (MCA) student at Bharathiar University, Coimbatore.
          I specialize in front-end development using React.js, JavaScript, HTML5, and CSS3. 
          My goal is to create impactful, interactive, and visually stunning user interfaces 
          that deliver seamless experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
