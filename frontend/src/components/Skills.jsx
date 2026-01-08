// src/components/Skills.jsx
import React from "react";

export default function Skills() {
    const skills = {
  "MERN Stack": {
    percentage: 85,
    items: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Authentication",
      "REST APIs",
      "Mongoose",
    ],
  },

  "Frontend Development": {
    percentage: 80,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React Hooks",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },

  "Backend Development": {
    percentage: 78,
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "API Development",
      "Authentication & Authorization",
    ],
  },

  "Programming Languages": {
    percentage: 75,
    items: [
      "Core Java",
      "Java (OOPs)",
      "C Language",
      "JavaScript",
    ],
  },

  "Tools & Concepts": {
    percentage: 70,
    items: [
      "Git & GitHub",
      "Postman",
      "VS Code",
      "MVC Architecture",
    ],
  },
};

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-gray-950 to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Technologies and tools I use to build modern web applications
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([cat, data], i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/40 transition"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">
                  {cat}
                </h3>
                <span className="text-blue-400 font-bold">
                  {data.percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-3 mb-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all"
                  style={{ width: `${data.percentage}%` }}
                />
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {data.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
