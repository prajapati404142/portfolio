const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ✅ Brevo SMTP Transporter
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: '9f9a63001@smtp-brevo.com', // Brevo SMTP Login
    pass: 'bskCe0OxdLIILDX'           // Brevo SMTP Key
  }
})

// ✅ Health Check
app.get('/', (req, res) => {
  res.send('Server is running 🚀')
})

// ✅ Contact Form API
app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    await transporter.sendMail({
      from: '"Portfolio Contact" <prajapati404142@gmail.com>', // ✅ VERIFIED SENDER
      to: 'prajapati404142@gmail.com',                          // 📩 tumhe milega
      replyTo: email,                                          // ↩️ HR ko reply jayega
      subject: subject || 'New Portfolio Message',
      html: `
        <h2>New Portfolio Contact</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject || '-'}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `
    })

    res.status(200).json({ message: 'Email sent successfully ✅' })
  } catch (error) {
    console.error('Email Error:', error)
    res.status(500).json({ message: 'Email sending failed ❌' })
  }
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})
