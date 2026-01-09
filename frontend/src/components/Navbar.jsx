// src/components/Navbar.jsx
import React from 'react'
import { Download, Menu, X } from 'lucide-react'

export default function Navbar({ activeSection, onNavigate, isOpen, setIsOpen }) {
    const items = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact']
    return (
        <nav className={`fixed w-full z-50 top-0 transition-all`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-xl font-bold">Dev<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Folio</span></div>
                <div className="hidden lg:flex gap-2">
                    {items.map(i => (
                        <button key={i} onClick={() => onNavigate(i)} className={`px-3 py-2 rounded ${activeSection === i ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}>
                            {i.charAt(0).toUpperCase() + i.slice(1)}
                        </button>
                    ))}
                    
                    <a
                        href="/resume/Saurabh_Kumar_resume.pdf"
                        target="_blank"
                        download
                       className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center gap-2"
                    >
                        <Download size={18} /> Resume
                    </a>

                </div>
                <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
            </div>
            {isOpen && (
                <div className="lg:hidden bg-gray-900/80 px-4 py-4">
                    {items.map(i => <button key={i} onClick={() => { onNavigate(i); setIsOpen(false) }} className="block w-full text-left px-3 py-2">{i}</button>)}
                </div>
            )}
        </nav>
    )
}
