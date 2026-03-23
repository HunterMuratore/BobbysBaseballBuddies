const amounts = [25, 50, 100, 250]

export default function Donate() {
  return (
    <section id="donate" className="py-20 bg-red relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-black text-white mb-4">
          Help Us Honor Bobby's Legacy
        </h2>
        <p className="text-lg text-white/75 font-light leading-relaxed mb-10">
          Your contribution goes directly toward giving a child the equipment, instruction, and mentorship they need to thrive.
        </p>

        {/* Amount buttons — placeholder, wire up to payment provider later */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {amounts.map(amt => (
            <button
              key={amt}
              className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-lg px-8 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              ${amt}
            </button>
          ))}
          <button className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-lg px-8 py-3 rounded-lg transition-all duration-200">
            Other
          </button>
        </div>

        <a
          href="https://www.bobbysbaseballbuddies.com"
          className="inline-flex items-center gap-2 bg-white text-red font-bold text-base px-10 py-4 rounded-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
        >
          Donate Now →
        </a>

        <p className="mt-5 text-xs text-white/45">
          Bobby's Baseball Buddies is a registered 501(c)(3) · EIN: 87-1709286 · All donations are fully tax-deductible
        </p>
      </div>
    </section>
  )
}