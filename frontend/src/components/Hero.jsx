// src/components/Hero.jsx
import React from "react";
import {
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";

export default function Hero({ onNavigate }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Availability Badge */}
          <div className="inline-flex items-center px-4 py-1 mb-6 text-sm rounded-full bg-green-500/10 text-green-400">
             Open to MERN Stack Opportunities
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Saurabh Kumar
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl text-gray-300 mb-4">
            MERN Stack Developer
          </h2>

          {/* Description */}
          <p className="text-gray-400 mb-6 max-w-xl">
            I build scalable, secure, and high-performance web applications
            using <strong>MongoDB, Express.js, React, and Node.js</strong>.
            Passionate about clean UI, optimized APIs, and real-world projects.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "JavaScript",
              "REST APIs",
              "JWT Auth",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-gray-800 rounded-full border border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate("projects")}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center gap-2 hover:opacity-90 transition"
            >
              View Projects <ChevronRight size={18} />
            </button>

            <button
              onClick={() => onNavigate("contact")}
              className="px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-800 transition"
            >
              Hire Me
            </button>

            <a
              href="/resume/Saurabh_Kumar_Resume.pdf"
              target="_blank"
              download
              className="px-6 py-3 rounded-lg border border-gray-700 flex items-center gap-2 hover:bg-gray-800 transition"
            >
              <Download size={18} /> Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/prajapati404142"
              target="_blank"
              className="w-11 h-11 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <Github size={18} />
            </a>
            <a
               href="https://www.linkedin.com/in/saurabh-kumar-2096b116a"
               target="_blank"
              className="w-11 h-11 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:prajapati404142@gmail.com"
              aria-label="Email"
              className="w-11 h-11 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE + STATS */}
        <div className="flex flex-col items-center lg:items-end gap-8">

          {/* Profile Image */}
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
            <img
              src="/images/mypic.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stats
          <div className="flex gap-6 text-center">
            <div>
              <h3 className="text-2xl font-bold text-white">10+</h3>
              <p className="text-sm text-gray-400">Projects</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">1+</h3>
              <p className="text-sm text-gray-400">Years Learning</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">100%</h3>
              <p className="text-sm text-gray-400">Dedication</p>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
