'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData) {
  const name = formData.get('userName')
  const email = formData.get('userEmail')
  const phone = formData.get('userPhone')
  const message = formData.get('userMessage')

  try {
    const data = await resend.emails.send({
      // 1. MUST use this specific address for testing
      from: 'Acme <onboarding@resend.dev>', 
      
      // 2. MUST be the email you used to sign up for Resend
      to: ['shahidul1920shakil@gmail.com'], 
      
      subject: `New Lead: ${name}`,
      reply_to: email, 
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    })

    return { success: true, data }
  } catch (error) {
    return { success: false, error: error.message }
  }
}