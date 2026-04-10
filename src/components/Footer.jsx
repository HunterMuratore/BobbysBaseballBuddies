const links = {
  Organization: [
    { label: 'Our Mission', href: '#mission' },
    // { label: "Bobby's Story", href: '#story' },
    { label: 'Programs', href: '#programs' },
    { label: 'Events', href: '#events' },
    // { label: 'Gallery', href: '#gallery' },
  ],
  // 'Get Involved': [
  //   { label: 'Donate', href: '#donate' },
  //   { label: 'Volunteer', href: '#contact' },
  //   { label: 'Events', href: '#events' },
  //   { label: 'Contact Us', href: '#contact' },
  // ],
}

export default function Footer() {
  return (
    <footer className="bg-navy border-t-[3px] border-red pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">

          {/* Brand */}
          <div className="max-w-xs">
            <h3 className="font-serif text-xl font-bold text-white mb-3">
              Bobby's <span className="text-gold">Baseball</span> Buddies
            </h3>
            <p className="text-sm text-white/40 leading-relaxed mb-2">
              A 501(c)(3) nonprofit dedicated to providing underprivileged youth with the resources and mentorship to experience baseball.
            </p>
            <p className="text-xs text-white/25">EIN: 87-1709286</p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/35 mb-5">{heading}</h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25">© {new Date().getFullYear()} Bobby's Baseball Buddies. All Rights Reserved.</p>
          <p className="text-xs text-white/20">501(c)(3) · EIN 87-1709286 · All donations tax-deductible</p>
        </div>
      </div>
    </footer>
  )
}