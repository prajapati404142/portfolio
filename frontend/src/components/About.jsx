// src/components/About.jsx
import React from "react";
import { Phone, Mail, MapPin, User } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-950 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-center">
          About Me
        </h2>
        <p className="text-center text-gray-400 mb-12">
          A brief introduction about myself and my journey
        </p>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <User size={22} className="text-blue-400" />
              Saurabh Kumar — MERN Stack Developer
            </h3>

            <p className="text-gray-300 mb-4 leading-relaxed">
              I am a passionate <strong>MERN Stack Developer</strong> and a BCA
              student with a strong interest in building modern, scalable, and
              user-friendly web applications. I enjoy working with{" "}
              <strong>React.js</strong> for front-end development and{" "}
              <strong>Node.js & Express.js</strong> for creating secure and
              efficient back-end APIs.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              As a fresher, I focus on writing clean code, learning best
              practices, and building real-world projects that strengthen my
              understanding of full-stack development. I am continuously
              improving my skills in <strong>MongoDB</strong>, authentication,
              and RESTful services, and I am eager to start my professional
              career in the tech industry.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400" />
                <span>+91 7355289413</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <span>prajapati404142@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-400" />
                <span>Prayagraj, India</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-4">
            {[
              {
                title: "Problem Solver",
                desc: "I enjoy breaking down complex problems into simple and efficient solutions.",
              },
              {
                title: "Clean Code Advocate",
                desc: "I follow clean coding practices to write readable and maintainable code.",
              },
              {
                title: "Continuous Learner",
                desc: "Always eager to learn new technologies and improve my development skills.",
              },
              {
                title: "Team Player",
                desc: "Comfortable working independently as well as collaborating in a team.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500/40 transition"
              >
                <h4 className="text-lg font-semibold mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
