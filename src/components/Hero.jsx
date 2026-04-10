export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy flex items-center pt-16 overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-grass/10 rounded-full blur-3xl" />
      </div>

      {/* Rotating diamond graphic */}
      <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-white/5 rotate-45 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20 items-center">

        {/* Left — headline */}
        <div>

          <h1 className="font-serif text-5xl md:text-6xl font-black text-white leading-[1.05] mb-6">
            Every Child Deserves a{' '}
            <span className="text-gold block mt-1">Chance to Play.</span>
          </h1>

          <p className="text-lg text-white/60 font-light leading-relaxed mb-10 max-w-lg">
            Bobby's Baseball Buddies removes the financial and social barriers that keep kids on the sidelines - providing equipment, instruction, and mentorship to underserved youth through the game Bobby loved.
          </p>

          <div className="inline-flex items-center gap-2 bg-red/20 border border-red/40 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-red-light animate-pulse" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-red-light/90">
              501(c)(3) Nonprofit · EIN 87-1709286
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#donate" className="inline-flex items-center gap-2 bg-red hover:bg-red-light text-white font-semibold px-8 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5">
              Make a Donation →
            </a>
            <a href="#story" className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white/80 hover:text-white font-medium px-8 py-3.5 rounded transition-all duration-200">
              Our Story
            </a>
          </div>
        </div>

        {/* Right — stats card */}
        <div className="hidden md:block bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-7 mb-7">
            {[
              { num: '3+', label: 'Core Programs' },
              { num: '100%', label: 'Tax Deductible' },
              { num: '501(c)(3)', label: 'Registered Nonprofit' },
              { num: '∞', label: 'Kids to Reach' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="font-serif text-4xl font-black text-white leading-none mb-1">{num}</div>
                <div className="text-[11px] font-semibold tracking-widest uppercase text-white/40">{label}</div>
              </div>
            ))}
          </div>
          <hr className="border-white/10 mb-7" />
          <p className="text-xs text-white/40 leading-relaxed">
            Registered 501(c)(3) · <strong className="text-white/60 font-medium">EIN: 87-1709286</strong><br />
            All donations go directly toward program funding.
          </p>
        </div>
      </div>
    </section>
  )
}