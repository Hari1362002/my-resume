import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="text-4xl font-bold mb-6 text-yellow-300">Contact Me</h2>
      <p className="text-lg text-gray-100 mb-6 text-center">
        📍 Coimbatore, India
      </p>
      <p className="text-lg mb-2">
        📧 Email: <a href="mailto:hp8706325@gmail.com" className="text-yellow-300 hover:underline">hp8706325@gmail.com</a>
      </p>
      <p className="text-lg mb-6">📞 Phone: 96009 31833</p>
      <a
        href="https://linkedin.com/in/hari"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-yellow-400 to-pink-400 text-black px-8 py-3 rounded-full font-bold shadow-lg hover:scale-110 transition-all"
      >
        🔗 Visit My LinkedIn
      </a>
    </section>
  );
};

export default Contact;
