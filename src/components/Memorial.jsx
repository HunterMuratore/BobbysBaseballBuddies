import bobbySons from '../assets/images/BobbySons.jpg'

export default function Memorial() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-red mb-3">
            In Loving Memory
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy">
            Bobby Conti
          </h2>
        </div>

        <div className="relative">
          {/* Decorative gold accent line above */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-px bg-gold" />

          {/* Photo container */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={bobbySons}
              alt="Bobby Conti with his two sons"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}