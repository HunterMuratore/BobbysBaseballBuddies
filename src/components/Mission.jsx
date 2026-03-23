export default function Mission() {
  return (
    <section id="mission" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

        {/* Left — text */}
        <div>
          <p className="text-[11px] font-semibold tracking-widest uppercase text-red mb-3">Our Mission</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
            Breaking Down Barriers,<br />One Game at a Time
          </h2>
          <p className="text-base text-navy/60 leading-relaxed mb-5">
            Bobby's Baseball Buddies is a 501(c)(3) nonprofit organization dedicated to providing underprivileged youth with the resources, mentorship, and opportunities they need to experience the joys, and lifelong benefits, of baseball.
          </p>
          <p className="text-base text-navy/60 leading-relaxed mb-5">
            We believe that access to youth sports should never be determined by a family's income. Too many talented, curious, and deserving young people are kept off the field simply because of financial obstacles. We exist to change that.
          </p>

          {/* Pull quote */}
          <blockquote className="my-8 pl-6 border-l-4 border-red bg-red/5 py-5 pr-6 rounded-r-lg">
            <p className="font-serif text-xl italic text-navy leading-snug">
              "Baseball is more than a game. It teaches patience, discipline, teamwork, and resilience - lessons that last a lifetime."
            </p>
          </blockquote>

          <p className="text-base text-navy/60 leading-relaxed">
            Through targeted programs combining instruction, equipment access, and mentorship, we work to ensure every child has a genuine opportunity to step up to the plate - on the field and in life.
          </p>
        </div>

        {/* Right — founder card */}
        <div className="sticky top-24">
          <div className="bg-navy rounded-2xl p-10 text-white">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Founded in Honor of <span className="text-gold">Bobby Conti</span>
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Bobby was a lifelong baseball enthusiast who understood that the game's real value lay in the relationships, the lessons, and the character it builds in young people.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              As a devoted husband, father, grandfather, mentor, and friend, Bobby had a rare gift: the ability to make everyone around him feel seen, valued, and capable. His legacy is the foundation of everything we do.
            </p>

            {/* <ul className="mt-6 space-y-0">
              {[
                'Generosity and service to others',
                'Belief in every child\'s potential',
                'Building community through sport',
                'Leading by example, always',
              ].map(val => (
                <li key={val} className="flex items-start gap-3 py-3 border-t border-white/10 text-sm text-white/60">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-red/20 border border-red/30 flex items-center justify-center text-[10px] text-red-light flex-shrink-0">✓</span>
                  {val}
                </li>
              ))}
            </ul> */}
          </div>
        </div>

      </div>
    </section>
  )
}