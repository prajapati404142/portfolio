const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ✅ Brevo SMTP Transporter (NO .env)
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: '9f9a63001@smtp-brevo.com', // Brevo login
    pass: 'NEW_BREVO_SMTP_KEY'        // 🔴 regenerate & paste here
  }
})

// ✅ Health check
app.get('/', (req, res) => {
  res.send('<h1>Server is running 🚀</h1>')
})

// ✅ Contact form API
app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    await transporter.sendMail({
      // 🔥 IMPORTANT: FROM must be Brevo login
      from: `"Portfolio Website" <9f9a63001@smtp-brevo.com>`,
      to: 'prajapati404142@gmail.com',
      replyTo: email, // HR ka email
      subject: subject || 'New Portfolio Contact',
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject || '-'}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `
    })

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email Error:', error)
    res.status(500).json({ message: 'Email sending failed' })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
