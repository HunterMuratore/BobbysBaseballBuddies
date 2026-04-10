import bobbyPhoto from '../assets/images/BobbyS_Logo.png'

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
          <div className="bg-navy rounded-2xl overflow-hidden text-white">
            <div className="p-10">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Founded in Honor of <span className="text-gold">Bobby Conti</span>
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Bobby was a lifelong baseball enthusiast who understood that the game's real value lay in the relationships, the lessons, and the character it builds in young people.
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                As a devoted husband, father, grandfather, mentor, and friend, Bobby had a rare gift: the ability to make everyone around him feel seen, valued, and capable. His legacy is the foundation of everything we do.
              </p>
            </div>

            {/* Photo */}
            <div className="px-10 pb-10">
              <img
                src={bobbyPhoto}
                alt="Bobby Conti with his sons"
                className="w-full rounded-xl object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}