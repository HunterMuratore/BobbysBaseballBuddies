import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // TODO: wire up to EmailJS, Formspree, or your backend
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  const inputClass = "w-full bg-white border border-tan rounded-lg px-4 py-3 text-sm text-navy placeholder-navy/35 focus:outline-none focus:border-navy/40 focus:ring-2 focus:ring-navy/10 transition-all"

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-red mb-3">Get in Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">Contact Us</h2>
          <p className="text-base text-navy/55 leading-relaxed">
            Questions about our programs, volunteering, or how to get involved? We'd love to hear from you.
          </p>
        </div>

        {submitted ? (
          <div className="bg-grass/10 border border-grass/25 rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">⚾</div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-2">Message Received!</h3>
            <p className="text-navy/60">Thanks for reaching out. We'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-tan rounded-2xl p-8 md:p-10 flex flex-col gap-5 shadow-sm">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold tracking-wide uppercase text-navy/50 mb-1.5">Name</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wide uppercase text-navy/50 mb-1.5">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wide uppercase text-navy/50 mb-1.5">Subject</label>
              <select name="subject" value={form.subject} onChange={handleChange} required className={inputClass}>
                <option value="">Select a subject</option>
                <option>Volunteering</option>
                <option>Equipment Donation</option>
                <option>Program Information</option>
                <option>Sponsorship / Partnership</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wide uppercase text-navy/50 mb-1.5">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us how we can help..." rows={5} required className={`${inputClass} resize-none`} />
            </div>
            <button type="submit" className="bg-navy hover:bg-navy-mid text-white font-semibold text-sm tracking-wide py-3.5 px-8 rounded-lg transition-colors duration-200 self-start">
              Send Message →
            </button>
          </form>
        )}
      </div>
    </section>
  )
}