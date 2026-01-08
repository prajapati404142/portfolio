// src/components/Projects.jsx
import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects({ projects }) {
    return (
        <section id="projects" className="py-20 px-6">
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

        </section>
    )
}