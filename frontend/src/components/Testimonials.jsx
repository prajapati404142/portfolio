// // src/components/Testimonials.jsx
// import React from 'react'
// import { Star } from 'lucide-react'

// export default function Testimonials({ testimonials }) {
//   return (
//     <section id="testimonials" className="py-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-8">Client Testimonials</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((t,i)=>(
//             <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
//               <div className="flex gap-2 mb-4">{[...Array(t.rating)].map((_,j)=><Star key={j} size={16} className="text-yellow-400"/>)}</div>
//               <p className="text-gray-300 italic mb-4">"{t.text}"</p>
//               <div className="flex items-center gap-4">
//                 <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover"/>
//                 <div><div className="font-semibold">{t.name}</div><div className="text-sm text-gray-400">{t.role}</div></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }