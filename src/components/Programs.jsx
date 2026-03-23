const programs = [
  {
    icon: '⚾',
    title: 'Instructional Seminars',
    description:
      'Interactive, fun, and fundamentals-first. Our clinics teach kids the skills of the game in a welcoming environment — regardless of prior experience. Every session emphasizes confidence, effort, and growth over competition.',
  },
  {
    icon: '🥊',
    title: 'Equipment Donations',
    description:
      'A glove, a bat, a proper uniform — these things matter. We supply essential gear directly to youth who need it most, ensuring no child sits out because their family can\'t afford the equipment to play.',
  },
  {
    icon: '🤝',
    title: 'Mentorship & Role Models',
    description:
      'Baseball opens the door; mentorship keeps it open. We connect youth with positive adult role models who invest in their development — on the field and off — fostering confidence, resilience, and belonging.',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-navy relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-red/70 mb-3">What We Do</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
              Three Programs.<br />One Mission.
            </h2>
          </div>
          <p className="text-base text-white/45 max-w-xs leading-relaxed font-light">
            Each initiative is designed to remove a specific barrier standing between a young person and the game.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <div
              key={p.title}
              className="group bg-white/5 border border-white/8 rounded-2xl p-8 relative overflow-hidden hover:bg-white/8 hover:border-white/15 transition-all duration-300"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              <div className="text-3xl mb-6 w-13 h-13 bg-red/15 border border-red/25 rounded-xl flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}