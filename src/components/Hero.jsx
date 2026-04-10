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
      <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-white/5 rotate-45 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-32 flex flex-col items-center text-center">

        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.02] mb-8">
          <span className="block">Every Child</span>
          <span className="block">Deserves a</span>
          <span className="block text-red mt-2">Chance to Play.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-8 max-w-xl">
          Bobby's Baseball Buddies removes the financial and social barriers that keep kids on the sidelines by providing equipment, instruction, and mentorship to underserved youth through the game Bobby loved.
        </p>

        <div className="w-12 h-px bg-red/50 mx-auto mb-8" />

        <p className="text-sm font-semibold tracking-widest uppercase text-gold/80 mb-12">
          All donations go directly toward program funding.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="#donate"
            className="inline-flex items-center gap-2 bg-red hover:bg-red-light text-white font-semibold px-10 py-4 rounded transition-all duration-200 hover:-translate-y-0.5"
          >
            Make a Donation →
          </a>

          <a
            href="#mission"
            className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white/80 hover:text-white font-medium px-10 py-4 rounded transition-all duration-200"
          >
            Our Mission
          </a>

        </div>

        {/* 501c3 badge */}
        <div className="inline-flex items-center gap-2 bg-red/20 border border-red/40 rounded-full px-4 py-1.5 mt-10">
          <span className="w-1.5 h-1.5 rounded-full bg-red-light animate-pulse" />
          <span className="text-[11px] font-semibold tracking-widest uppercase text-red-light/90">
            501(c)(3) Nonprofit · EIN 87-1709286
          </span>
        </div>

      </div>
    </section>
  )
}