const traits = [
  { icon: '❤️', title: 'Devoted & Selfless', desc: 'A devoted husband, father, and grandfather who always put the needs of others before his own.' },
  { icon: '👥', title: 'A Mentor to Many', desc: 'Bobby had an innate ability to make every person feel seen, valued, and capable of more.' },
  { icon: '⚾', title: 'Passionate About Baseball', desc: 'To Bobby, the game was a vehicle for friendship, growth, and the shaping of young lives.' },
  { icon: '🌟', title: 'Leading by Example', desc: 'His generosity and unwavering support left a lasting imprint on everyone who knew him.' },
]

export default function Story() {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <div>
          <p className="text-[11px] font-semibold tracking-widest uppercase text-red mb-3">Bobby's Story</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
            A Vision Born from<br />a Life Well Lived
          </h2>
          <p className="text-base text-navy/60 leading-relaxed mb-5">
            Bobby Conti was the kind of person who made the world feel a little more right. His passion for baseball was never about statistics or standings. It was about what the game did to a young person's character when they were given the chance to play it.
          </p>

          <div className="relative my-8 bg-cream rounded-xl p-8">
            <span className="absolute top-3 left-6 font-serif text-7xl leading-none text-tan select-none">"</span>
            <p className="font-serif text-xl italic text-navy leading-snug relative">
              His legacy lives on in the belief that every child deserves the chance to play, learn, and grow through the game he loved so much.
            </p>
          </div>

          <p className="text-base text-navy/60 leading-relaxed mb-4">
            Bobby's Baseball Buddies was founded in his memory to carry that belief forward. Through your support, we can honor his spirit and ensure the next generation of young people receives what Bobby always gave: a genuine opportunity to discover what they're capable of.
          </p>
          <p className="text-base text-navy/60 leading-relaxed">
            All donations are fully tax-deductible and directed entirely toward program funding - the equipment, instruction, and mentorship that give kids the tools to succeed both on and off the field.
          </p>
        </div>

        {/* Right */}
        <div className="bg-navy rounded-2xl p-10 flex flex-col gap-6">
          {traits.map(t => (
            <div key={t.title} className="flex gap-5 items-start">
              <div className="w-11 h-11 bg-red/15 border border-red/25 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                {t.icon}
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">{t.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}