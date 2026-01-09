const express = require('express')
const cors = require('cors')
const SibApiV3Sdk = require('sib-api-v3-sdk')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ✅ Brevo API Configuration
const client = SibApiV3Sdk.ApiClient.instance
client.authentications['api-key'].apiKey =
  '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'

const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi()

// ✅ Health Check
app.get('/', (req, res) => {
  res.send('Server is running 🚀')
})

// ✅ Contact Form API (API based email)
app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    await tranEmailApi.sendTransacEmail({
      sender: {
        email: 'prajapati404142@gmail.com', // ✅ VERIFIED sender
        name: 'Portfolio Contact'
      },
      to: [
        { email: 'prajapati404142@gmail.com' } // 📩 tumhe mail milega
      ],
      replyTo: {
        email: email,
        name: name
      },
      subject: subject || 'New Portfolio Message',
      htmlContent: `
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
    console.error('Email API Error:', error)
    res.status(500).json({ message: 'Email sending failed ❌' })
  }
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})
