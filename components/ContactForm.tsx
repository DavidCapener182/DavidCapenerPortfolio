'use client'

import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import Button from './Button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button as ShadcnButton } from './ui/button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration - these will need to be set up
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS not configured. Please set environment variables.')
        setSubmitStatus('error')
        setIsSubmitting(false)
        return
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-navy font-semibold">
          Name
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your name"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-navy font-semibold">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your.email@example.com"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-navy font-semibold">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Your message..."
          className="w-full resize-none"
        />
      </div>

      <ShadcnButton
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red hover:bg-red-700 text-white font-semibold text-lg py-6"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </ShadcnButton>

      {submitStatus === 'success' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          Sorry, there was an error sending your message. Please try again or contact directly via email.
        </div>
      )}
    </form>
  )
}

