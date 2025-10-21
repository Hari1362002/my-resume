import React from "react";

const skills = [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "MySQL",
  "Power BI",
  "Google Sheets",
  "Figma (UI/UX)",
  "Canva",
  "DaVinci Resolve"
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="text-4xl font-bold mb-8 text-yellow-300">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((s) => (
          <div
            key={s}
            className="p-6 rounded-2xl text-center font-semibold bg-gradient-to-br from-purple-400 to-pink-500 text-black shadow-lg hover:scale-105 transition-transform"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
