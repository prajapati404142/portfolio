// src/components/ProjectCard.jsx
import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
    
  return (
    <div className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
      <div className="relative h-56 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-blue-600 rounded text-sm">{project.category}</span></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex gap-2 mb-4">{project.tech.slice(0,4).map((t,idx)=><span key={idx} className="px-2 py-1 bg-gray-800 rounded text-xs">{t}</span>)}</div>
        <div className="flex gap-3">
          <a href={project.github} className="flex-1 py-2 bg-gray-800 rounded flex items-center justify-center gap-2"><Github size={14}/>Code</a>
          <a href={project.live} className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center gap-2"><ExternalLink size={14}/>Live</a>
        </div>
      </div>
    </div>
  )
}