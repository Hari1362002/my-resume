import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Automated Bill Letter Generator",
      desc: "Developed for MCA Department using HTML5, CSS3, JavaScript, and SQL. Helped reduce manual billing errors and streamline workflows.",
      tech: "HTML5, CSS3, JavaScript, SQL",
    },
    {
      title: "Smart Subscription & Payment Management System (Internship)",
      desc: "Built a full-stack web app using React.js, Node.js, and Razorpay for online payment automation during internship at DigiSquare.",
      tech: "React.js, Node.js, MySQL, Razorpay",
    },
  ];

  return (
    <section id="projects">
      <h2 className="text-4xl font-bold mb-6 text-yellow-300">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white/20 p-6 rounded-2xl shadow-lg border border-white/20 hover:scale-105 transition-transform backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">{p.title}</h3>
            <p className="text-gray-100 mb-2">{p.desc}</p>
            <p className="text-sm text-gray-300">Technologies: {p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
