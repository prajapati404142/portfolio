// src/components/Contact.jsx
import React, { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  // input change handler
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value,})
  }

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill all required fields')
      return
    }

    try {
        setLoading(true)
        const res = await fetch('https://portfolio-q8nc.onrender.com/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        console.log("before data")
      const data = await res.json()
      console.log("after data")
      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      setSent(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900/50 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Get In Touch</h2>

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
          {sent ? (
            <div className="text-center text-green-400 text-lg">
              ✅ Thanks! Your message has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="p-3 bg-gray-950 border border-gray-800 rounded"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="p-3 bg-gray-950 border border-gray-800 rounded"
                />
              </div>

              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="mt-4 p-3 w-full bg-gray-950 border border-gray-800 rounded"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                className="mt-4 p-3 w-full bg-gray-950 border border-gray-800 rounded"
              />

              {error && (
                <p className="mt-3 text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send />}
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
