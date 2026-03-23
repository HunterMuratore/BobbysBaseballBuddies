// Replace the placeholder array below with your real photo imports or URLs.
// e.g. import photo1 from '../assets/gallery/photo1.jpg'
// then: { src: photo1, alt: 'Kids at batting practice' }

const photos = [
  { src: 'https://placehold.co/600x400/0d1f3c/d4a017?text=Photo+1', alt: 'Batting practice' },
  { src: 'https://placehold.co/600x400/1a3060/ffffff?text=Photo+2', alt: 'Team huddle' },
  { src: 'https://placehold.co/600x400/c1272d/ffffff?text=Photo+3', alt: 'Equipment donation' },
  { src: 'https://placehold.co/600x400/2d6a3f/ffffff?text=Photo+4', alt: 'Mentorship session' },
  { src: 'https://placehold.co/600x400/0d1f3c/d4a017?text=Photo+5', alt: 'Game day' },
  { src: 'https://placehold.co/600x400/1a3060/ffffff?text=Photo+6', alt: 'Seminar' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-red mb-3">In the Field</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy">The Game in Action</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl aspect-video bg-navy/10 group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}