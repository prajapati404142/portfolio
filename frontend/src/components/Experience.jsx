// src/components/Experience.jsx
import React from "react";
import { Calendar, BookOpen } from "lucide-react";

export default function Experience() {
    const experiences = [
  {
    title: "MERN Stack Trainee",
    company: "BCA Academic Training",
    period: "2025 – Present",
    description:
      "Learning and implementing full-stack web development using MongoDB, Express.js, React.js, and Node.js. Built real-world projects including authentication systems, CRUD applications, and responsive dashboards.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Java & Programming Fundamentals",
    company: "BCA Academic Training",
    period: "2024 – 2025",
    description:
      "Strong foundation in Core Java, Object-Oriented Programming, C language, DBMS, and data structures through academic coursework and hands-on practice.",
    skills: [
      "Core Java",
      "OOPs",
      "C Language",
      "DBMS",
      "Problem Solving",
    ],
  },
];

  return (
    <section id="experience" className="py-24 px-6 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Training & Learning Experience
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Hands-on learning, self projects, and technical training
        </p>

        <div className="max-w-4xl mx-auto space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-gray-800">

              {/* Timeline Dot */}
              <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-gray-950" />

              {/* Card */}
              <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/40 transition">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-400 gap-2 text-sm">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                </div>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
