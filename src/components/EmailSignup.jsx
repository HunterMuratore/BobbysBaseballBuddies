import { useState } from 'react'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('form-name', 'email-signup')
      formData.append('name', name)
      formData.append('email', email)

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
    w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3
    text-sm text-white placeholder-white/35
    focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/10
    transition-all duration-200
  `

  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 rounded-full px-4 py-1.5 mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[11px] font-semibold tracking-widest uppercase text-gold/90">
            Stay in the Loop
          </span>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-black text-white mb-4">
          Be Part of the Journey
        </h2>
        <p className="text-lg text-white/55 font-light leading-relaxed mb-12 max-w-lg mx-auto">
          Get updates on upcoming events, program news, and stories from the field — delivered straight to your inbox.
        </p>

        {submitted ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12">
            <div className="w-16 h-16 bg-gold/15 border border-gold/25 rounded-full flex items-center justify-center text-3xl mx-auto mb-5">
              ⚾
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              You're in, {name.split(' ')[0]}!
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Thanks for joining. We'll be in touch with updates, events, and ways to get involved.
            </p>
          </div>
        ) : (
          <form
            name="email-signup"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 text-left"
          >
            {/* Netlify required hidden fields */}
            <input type="hidden" name="form-name" value="email-signup" />
            <input type="hidden" name="bot-field" />

            <div className="flex flex-col gap-4 mb-6">
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="First and last name"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {error && (
              <p className="text-red-light text-sm mb-4">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red hover:bg-red-light disabled:opacity-60 disabled:cursor-not-allowed
                text-white font-bold text-sm tracking-wide py-3.5 rounded-lg
                transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing up...
                </>
              ) : (
                'Keep Me Updated →'
              )}
            </button>

            <p className="text-center text-xs text-white/25 mt-4">
              No spam, ever. Unsubscribe at any time.
            </p>
          </form>
        )}

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { icon: '📅', label: 'Event announcements' },
            { icon: '⚾', label: 'Program updates' },
            { icon: '❤️', label: 'Stories from the field' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-xs text-white/35 font-medium">
              <span>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}