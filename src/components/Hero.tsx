import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { fadeUp, EASE } from '../lib/motion'

const stats = [
  { val: '699 m²', lbl: 'Manufacturing Facility' },
  { val: '4',      lbl: 'Certified Products' },
  { val: 'IECEx',  lbl: 'Internationally Certified' },
  { val: 'KSA',    lbl: 'Made in Saudi Arabia' },
]

export default function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section id="hero" className="min-h-screen pt-20 relative flex items-center overflow-hidden bg-gradient-to-br from-[#F0F7FF] via-white to-[#E3F4FC]">

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(41,171,226,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(41,171,226,0.12) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#29ABE2]/15 to-[#0D3B8E]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-[#0D3B8E]/10 to-[#29ABE2]/8 blur-3xl pointer-events-none" />

      {/* Floating dots */}
      <div className="absolute top-32 right-[12%] w-3 h-3 rounded-full bg-[#29ABE2] dot-1 opacity-60" />
      <div className="absolute top-56 right-[22%] w-2 h-2 rounded-full bg-[#0D3B8E] dot-2 opacity-40" />
      <div className="absolute bottom-40 right-[8%] w-4 h-4 rounded-full bg-[#29ABE2]/50 dot-3" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-12 py-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left content */}
        <div>
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 bg-[#E3F4FC] border border-[#A8C7E8] text-[#0D3B8E] font-head text-[0.75rem] font-bold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#29ABE2] rounded-full animate-blink" />
            Technology Partner: Teledyne GFD USA
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} className="font-display text-[#0D3B8E] leading-[0.92] mb-5" style={{ fontSize: 'clamp(3.4rem, 7vw, 6.2rem)' }}>
            Industrial<br />
            <span className="text-[#29ABE2]">Detection</span><br />
            Solutions
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="font-head font-semibold text-[#1A4FA8] tracking-[0.06em] uppercase mb-4" style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)' }}>
            Advanced Gas Detection — Made in Saudi Arabia
          </motion.p>

          <motion.p {...fadeUp(0.4)} className="text-[#475569] leading-[1.75] mb-8 max-w-[500px]">
            In partnership with Teledyne Gas &amp; Flame Detection, IDS manufactures world-class
            certified gas detection systems supporting oil &amp; gas, petrochemicals, utilities, and
            critical industries across Saudi Arabia. Proudly supporting Saudi Vision 2030 &amp; IKTVA.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex gap-3 flex-wrap mb-10">
            <button
              onClick={() => scrollTo('#products')}
              className="inline-flex items-center gap-2 bg-[#0D3B8E] text-white font-head font-bold text-[0.88rem] tracking-[0.08em] uppercase px-7 py-3.5 rounded hover:bg-[#1A4FA8] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(13,59,142,0.3)] transition-all duration-200"
            >
              Explore Products <ArrowRight size={15} />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 bg-white text-[#0D3B8E] font-head font-bold text-[0.88rem] tracking-[0.08em] uppercase px-7 py-3.5 rounded border-2 border-[#0D3B8E] hover:bg-[#F0F7FF] hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Us
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-3">
            {['IECEx Certified', 'Saudi Aramco Approved', 'SABIC Approved', 'SEC Approved', 'CSA C/US'].map(b => (
              <div key={b} className="inline-flex items-center gap-1.5 bg-white border border-[#D6E8F7] text-[#0D3B8E] font-head text-[0.72rem] font-bold tracking-wide uppercase px-3 py-1.5 rounded-full shadow-sm">
                <ShieldCheck size={11} className="text-[#29ABE2]" />
                {b}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — logo + stats card */}
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(13,59,142,0.12)] p-10 flex flex-col items-center gap-4 border border-[#D6E8F7] w-full max-w-[360px]"
          >
            <img src="/logo.png" alt="IDS" className="w-56 h-auto" />
            <div className="text-center">
              <div className="font-head text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#29ABE2] mb-1">Est. 2025 · Dammam, KSA</div>
              <div className="text-[0.85rem] text-[#64748B] font-body">MODON-2, Industrial City 2</div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-3 w-full max-w-[360px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          >
            {stats.map(s => (
              <div key={s.lbl} className="bg-white border border-[#D6E8F7] rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="font-display text-[1.6rem] text-[#0D3B8E] leading-none mb-0.5">{s.val}</div>
                <div className="font-head text-[0.68rem] font-semibold tracking-[0.1em] uppercase text-[#64748B]">{s.lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-head text-[0.62rem] tracking-[0.2em] uppercase text-[#94A3B8]">Scroll</span>
        <div className="w-px h-10 animate-scroll-pulse bg-gradient-to-b from-[#29ABE2] to-transparent" />
      </div>
    </section>
  )
}
