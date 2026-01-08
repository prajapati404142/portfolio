// src/components/Education.jsx
import React from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";

export default function Education() {

    const education = [
  {
    type: "degree",
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Computer Applications",
    institution: "Maa Gayatri Degree College, ASU",
    year: "2022 – 2025",
    grade: "Passing Out Year",
  },
  {
    type: "school",
    degree: "Intermediate (12th)",
    field: "Science Stream",
    institution: "UP Board",
    year: "2018",
    grade: "64%",
  },
  {
    type: "school",
    degree: "High School (10th)",
    field: "General Studies",
    institution: "UP Board",
    year: "2016",
    grade: "81.33%",
  },
  {
    type: "certificate",
    degree: "CCC Certificate",
    field: "Computer Concepts",
    institution: "NIELIT",
    year: "2020",
    grade: "Qualified",
  },
];

  return (
    <section
      id="education"
      className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-950 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Education
        </h2>
        <p className="text-center text-gray-400 mb-12">
          My academic background and certifications
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {education.map((e, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/40 transition"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400 mb-4">
                {e.type === "degree" && <GraduationCap />}
                {e.type === "school" && <BookOpen />}
                {e.type === "certificate" && <Award />}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-1">
                {e.degree}
              </h3>
              <p className="text-blue-400 mb-1">
                {e.field}
              </p>
              <p className="text-gray-400 mb-4">
                {e.institution}
              </p>

              {/* Footer */}
              <div className="flex justify-between text-sm text-gray-500">
                <span>{e.year}</span>
                <span>{e.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
