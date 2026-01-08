const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'prajapati404142@gmail.com',
    pass: 'kvqwlkxbgfxggioc' // App Password
  }
})

app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields required' })
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <prajapati404142@gmail.com>`,
      to: 'prajapati404142@gmail.com',   //  EMAIL mujhe ayega
      replyTo: email,                    //  Reply user ko jayega
      subject: subject || 'New Contact Form Message',
      html: `
        <h2>New Contact Form Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `
    })

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Email sending failed' })
  }
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})
