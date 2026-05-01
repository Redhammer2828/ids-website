import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About',          href: '#about' },
  { label: 'Products',       href: '#products' },
  { label: 'Services',       href: '#services' },
  { label: 'Factory',        href: '#factory' },
  { label: 'Certifications', href: '#certifications' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-12 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-[0_2px_24px_rgba(13,59,142,0.1)] py-2.5'
            : 'bg-white border-b border-[#D6E8F7] py-3.5'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <img src="/logo.png" alt="IDS — Industrial Detection Solutions" className="h-12 w-auto" />
        </a>

        <ul className="hidden md:flex list-none gap-8">
          {links.map(l => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className="font-head font-semibold text-[0.85rem] tracking-[0.08em] uppercase text-[#475569] hover:text-[#0D3B8E] transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo('#contact')}
          className="hidden md:inline-block font-head font-bold text-[0.82rem] tracking-[0.1em] uppercase bg-[#0D3B8E] text-white px-5 py-2.5 rounded hover:bg-[#1A4FA8] hover:-translate-y-px transition-all shadow-sm"
        >
          Contact Us
        </button>

        <button className="md:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu className="text-[#0D3B8E]" size={24} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-[999] flex flex-col px-8 pt-6 gap-0"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex justify-between items-center mb-8">
              <img src="/logo.png" alt="IDS" className="h-14 w-auto" />
              <button onClick={() => setMobileOpen(false)}><X size={28} className="text-[#0D3B8E]" /></button>
            </div>
            {[...links, { label: 'Contact', href: '#contact' }].map((l, i) => (
              <motion.button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-head text-[1.5rem] font-bold tracking-wide uppercase text-[#0D3B8E] hover:text-[#29ABE2] text-left transition-colors border-b border-[#E3F4FC] py-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
