import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('form-name', 'contact')
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('subject', form.subject)
      formData.append('message', form.message)

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })

      if (!response.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = `
    w-full bg-white border border-tan rounded-lg px-4 py-3
    text-sm text-navy placeholder-navy/35
    focus:outline-none focus:border-navy/40 focus:ring-2 focus:ring-navy/10
    transition-all duration-200
  `

  return (
    <section id="contact-form" className="py-24 bg-cream">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-red mb-3">Get in Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">Contact Us</h2>
          <p className="text-base text-navy/55 leading-relaxed">
            Questions about volunteering, sponsorship, equipment donations, or anything else? We'd love to hear from you.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white border border-tan rounded-2xl p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-red/10 border border-red/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-5">
              ⚾
            </div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-2">Message Received!</h3>
            <p className="text-navy/55 text-sm leading-relaxed">
              Thanks for reaching out. We'll get back to you at <strong className="text-navy/80">{form.email}</strong> as soon as possible.
            </p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-white border border-tan rounded-2xl p-8 md:p-10 flex flex-col gap-5 shadow-sm"
          >
            {/* Netlify required hidden fields */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-navy/50 mb-1.5">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-navy/50 mb-1.5">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-navy/50 mb-1.5">
                Subject
              </label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="">Select a subject</option>
                <option>Volunteering</option>
                <option>Equipment Donation</option>
                <option>Program Information</option>
                <option>Sponsorship / Partnership</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-navy/50 mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                rows={5}
                required
                className={`${inputClass} resize-none`}
              />
            </div>

            {error && (
              <p className="text-red text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-navy hover:bg-navy-mid disabled:opacity-60 disabled:cursor-not-allowed
                text-white font-semibold text-sm tracking-wide py-3.5 px-8 rounded-lg
                transition-all duration-200 hover:-translate-y-0.5 self-start flex items-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message →'
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}