// src/components/Footer.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-white text-lg font-semibold">
              Saurabh Kumar
            </h2>
            <p className="text-sm text-gray-500">
              MERN Stack Developer
            </p>
          </div>

          {/* Center */}
          <div className="flex gap-6">
            <a
              href="https://github.com/prajapati404142"
              target="_blank"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/saurabh-kumar-2096b116a"
              target="_blank"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:prajapati404142@gmail.com"
              className="hover:text-white transition"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Saurabh Kumar. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
