import { events } from '../data/events.js';

const typeColors = {
  Clinic: 'bg-grass/15 text-grass border-grass/25',
  Donation: 'bg-gold/15 text-gold border-gold/25',
  Fundraiser: 'bg-red/15 text-red border-red/25',
}

export default function Events() {
  return (
  <section id="events" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-14">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-red mb-3">Mark Your Calendar</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy">Upcoming Events</h2>
      </div>

      <div className="flex flex-col gap-5">
        {events.map(event => (
          <div
            key={event.id}
            className="flex flex-col md:flex-row gap-6 items-start border border-tan rounded-2xl p-6 md:p-8 hover:border-navy/20 hover:shadow-sm transition-all duration-200 bg-white group"
          >
            {/* Date block */}
            <div className="flex-shrink-0 w-16 text-center bg-navy rounded-xl py-3">
              <div className="text-[10px] font-bold tracking-widest uppercase text-gold">{event.date.month}</div>
              <div className="font-serif text-3xl font-black text-white leading-none mt-0.5">{event.date.day}</div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-serif text-xl font-bold text-navy group-hover:text-red transition-colors">{event.title}</h3>
                <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${typeColors[event.type]}`}>
                  {event.type}
                </span>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-1 mb-3 text-xs text-navy/50 font-medium">
                <span>📍 {event.location}</span>
                <span>🕐 {event.time}</span>
              </div>
              <p className="text-sm text-navy/60 leading-relaxed mb-5">{event.description}</p>

              {event.rsvp && (
                <a
                  href={event.rsvp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-mid text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  RSVP & Donate →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
}