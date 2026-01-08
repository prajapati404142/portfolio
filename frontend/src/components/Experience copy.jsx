// src/components/Experience.jsx
import React from 'react'
import { Calendar } from 'lucide-react'

export default function Experience({ experiences }) {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp,i)=>(
            <div key={i} className="relative pl-8 border-l-2 border-gray-800">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-gray-950"></div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-400 gap-2"><Calendar size={16}/>{exp.period}</div>
                </div>
                <p className="text-gray-400 mt-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">{exp.skills.map((s,idx)=><span key={idx} className="px-2 py-1 bg-gray-800 rounded">{s}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}