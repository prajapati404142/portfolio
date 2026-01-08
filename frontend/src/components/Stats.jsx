// src/components/Stats.jsx
import React from 'react'
export default function Stats({ stats }) {

    const mern = [{name:'MongoDB', char : 'M'},{ name:'Express', char : 'E'},{ name:'React', char : 'R'},{ name:'Node', char : 'N'}];
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 py-12 px-4">
      {mern.map((s,i)=>(
        <div key={i} className="text-center p-6 bg-gray-900/40 rounded-xl border border-gray-800">
          {/* <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">{s.number}</div>
          <div className="text-gray-400 text-sm mt-2">{s.label}</div> */}
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">{s.char}</h1>
          <font className="text-gray-400 text-sm mt-2">{s.name}</font>
        </div>
      ))}
    </div>
  )
}