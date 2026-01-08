// src/App.jsx
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
// import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { stats, experiences, education, skills, projects, testimonials } from './data'

export default function App(){
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(()=>{
    const onScroll = ()=> {
      const sections = ['home','about','experience','skills','projects','education','testimonials','contact']
      const current = sections.find(s => {
        const el = document.getElementById(s)
        if(!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 200 && rect.bottom >= 200
      })
      if(current) setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  const navigate = (id)=>{
    const el = document.getElementById(id)
    el?.scrollIntoView({behavior:'smooth', block:'start'})
  }

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar activeSection={active} onNavigate={(id)=>{navigate(id); setMenuOpen(false)}} isOpen={menuOpen} setIsOpen={setMenuOpen}/>
      <main className="pt-20">
        <Hero onNavigate={(id)=>navigate(id)} />
        <Stats stats={stats} />
        <About />
        <Experience experiences={experiences} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Education education={education} />
        {/* <Testimonials testimonials={testimonials} /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}