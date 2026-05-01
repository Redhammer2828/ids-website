const links = [
  { label: 'About',          href: '#about' },
  { label: 'Products',       href: '#products' },
  { label: 'Services',       href: '#services' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <footer className="bg-[#091F52] py-10 px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
          <div>
            <img src="/logo.png" alt="IDS" className="h-14 w-auto brightness-0 invert mb-3" />
            <p className="text-[0.82rem] text-white/40 max-w-[280px] leading-[1.6]">
              Industrial Detection Solutions Company — Manufacturing reliable gas detection systems in Saudi Arabia since 2025.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-1">
            {links.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-head text-[0.78rem] font-semibold tracking-[0.1em] uppercase text-white/40 hover:text-[#29ABE2] transition-colors block py-1"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="text-right">
            <div className="font-head text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/30 mb-1.5">Contact</div>
            <a href="tel:+966138349537" className="block text-[0.82rem] text-white/50 hover:text-[#29ABE2] transition-colors">+966 13 834 9537</a>
            <a href="mailto:info@ids.com.sa" className="block text-[0.82rem] text-white/50 hover:text-[#29ABE2] transition-colors">info@ids.com.sa</a>
            <a href="https://www.ids.com.sa" target="_blank" rel="noreferrer" className="block text-[0.82rem] text-white/50 hover:text-[#29ABE2] transition-colors">www.ids.com.sa</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[0.78rem] text-white/25">&copy; 2025 Industrial Detection Solutions Company. All rights reserved.</p>
          <p className="text-[0.72rem] text-white/20">Technology Partner: Teledyne Gas &amp; Flame Detection USA</p>
        </div>
      </div>
    </footer>
  )
}
