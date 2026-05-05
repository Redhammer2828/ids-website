import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react'
import { EASE } from '../lib/motion'
import ParticleField from './ParticleField'
import MagneticButton from './MagneticButton'

const BADGES = [
  'IECEx Certified',
  'Saudi Aramco Approved',
  'SABIC Approved',
  'SEC Approved',
  'CSA C/US',
]

const SENSORS = [
  { label: 'H₂S',  value: '0.0', unit: 'ppm', status: 'SAFE',   color: '#059669' },
  { label: 'LEL',  value: '0.0', unit: '%',   status: 'CLEAR',  color: '#0284C7' },
  { label: 'CO₂',  value: '0.0', unit: '%',   status: 'NORMAL', color: '#7C3AED' },
]

export default function Hero() {
  const [cardReady, setCardReady] = useState(false)

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  useEffect(() => {
    const t = setTimeout(() => setCardReady(true), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen pt-20 relative flex items-center overflow-hidden bg-white"
    >

      {/* ── BACKGROUND CANVAS ── */}

      {/* Soft gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0F8FF] via-white to-[#E8F4FD]" />

      {/* Particle constellation network */}
      <ParticleField />

      {/* Dot grid — very subtle */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(13,59,142,0.07) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
      }} />

      {/* Large decorative circles — pure outlines */}
      <div className="absolute -top-24 -right-24 w-[580px] h-[580px] rounded-full border-[2px] border-[#29ABE2]/14 pointer-events-none" />
      <div className="absolute -top-4 right-[72px]  w-[430px] h-[430px] rounded-full border border-[#0D3B8E]/06 pointer-events-none" />
      <div className="absolute -bottom-36 -left-36 w-[440px] h-[440px] rounded-full border-[2px] border-[#29ABE2]/10 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[8%] w-[220px] h-[220px] rounded-full border border-[#0D3B8E]/05 pointer-events-none" />

      {/* Diagonal slash lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute h-full w-px top-0"
          style={{ left: '38%', background: 'linear-gradient(to bottom, transparent, rgba(41,171,226,0.09) 30%, rgba(41,171,226,0.09) 70%, transparent)', transform: 'rotate(18deg)', transformOrigin: 'top center' }} />
        <div className="absolute h-full w-px top-0"
          style={{ left: '40%', background: 'linear-gradient(to bottom, transparent, rgba(13,59,142,0.05) 30%, rgba(13,59,142,0.05) 70%, transparent)', transform: 'rotate(18deg)', transformOrigin: 'top center' }} />
      </div>

      {/* Large faint watermark number */}
      <div
        className="absolute right-[4%] bottom-[8%] font-display leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(12rem, 22vw, 20rem)', color: 'rgba(13,59,142,0.028)' }}
      >
        IDS
      </div>

      {/* Floating particles */}
      <span className="absolute top-[22%] right-[48%] w-2   h-2   rounded-full bg-[#29ABE2]/30 dot-1" />
      <span className="absolute top-[46%] left-[5%]  w-1.5 h-1.5 rounded-full bg-[#0D3B8E]/18 dot-2" />
      <span className="absolute top-[66%] left-[12%] w-1   h-1   rounded-full bg-[#29ABE2]/22 dot-3" />
      <span className="absolute top-[17%] left-[22%] w-1   h-1   rounded-full bg-[#0D3B8E]/14 dot-1" />
      <span className="absolute top-[76%] right-[53%] w-1.5 h-1.5 rounded-full bg-[#29ABE2]/18 dot-2" />
      <span className="absolute top-[35%] left-[32%] w-1   h-1   rounded-full bg-[#0D3B8E]/10 dot-3" />

      {/* ── MAIN GRID ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 lg:px-12 py-12 w-full grid grid-cols-1 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_530px] gap-14 xl:gap-20 items-center">

        {/* ════════ LEFT: COPY ════════ */}
        <div className="flex flex-col pb-20 lg:pb-0">

          {/* Live partner badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2.5 self-start mb-9 px-4 py-2 rounded-full bg-[#E3F4FC] border border-[#A8D5EE]"
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-55" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-head text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[#0D3B8E]">
              Technology Partner · Teledyne GFD USA
            </span>
          </motion.div>

          {/* Headline — line clip reveal */}
          <h1
            className="font-display leading-[0.88] mb-8"
            style={{ fontSize: 'clamp(4rem, 8vw, 7.5rem)' }}
          >
            {[
              { text: 'Industrial', blue: false, bar: false },
              { text: 'Detection',  blue: true,  bar: true  },
              { text: 'Solutions',  blue: false, bar: false },
            ].map((line, i) => (
              <div key={line.text} style={{ overflow: 'hidden', display: 'block' }}>
                <motion.span
                  initial={{ y: '108%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.35 + i * 0.18, duration: 0.92, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'block' }}
                >
                  <span style={{ color: line.blue ? '#29ABE2' : '#0D3B8E' }}>
                    {line.text}
                  </span>
                  {line.bar && (
                    <motion.span
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: 0.92, duration: 0.55, ease: EASE }}
                      className="block h-[6px] rounded-full mt-1 origin-left"
                      style={{ width: '120px', background: 'linear-gradient(to right, #29ABE2, #0D3B8E55)' }}
                    />
                  )}
                </motion.span>
              </div>
            ))}
          </h1>

          {/* Tagline with rule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.02, duration: 0.55, ease: EASE }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[#29ABE2] flex-shrink-0" />
            <span className="font-head text-[0.8rem] font-bold tracking-[0.2em] uppercase text-[#1A4FA8]">
              Advanced Gas Detection — Made in Saudi Arabia
            </span>
          </motion.div>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: EASE }}
            className="text-[#475569] leading-[1.85] mb-10 max-w-[520px] text-[0.96rem]"
          >
            In partnership with Teledyne Gas &amp; Flame Detection, IDS manufactures
            world-class certified gas detection systems for oil &amp; gas,
            petrochemicals, utilities, and critical industries across Saudi Arabia.
            Proudly supporting Saudi Vision 2030 &amp; IKTVA.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5, ease: EASE }}
            className="flex gap-3 flex-wrap mb-10"
          >
            <MagneticButton strength={0.3}>
              <button
                onClick={() => scrollTo('#products')}
                className="btn-light-primary inline-flex items-center gap-2.5 bg-[#0D3B8E] text-white font-head font-bold text-[0.88rem] tracking-[0.1em] uppercase px-7 py-3.5 rounded-xl hover:bg-[#29ABE2] hover:-translate-y-0.5 transition-all duration-200 group/btn"
              >
                Explore Products
                <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 bg-white text-[#0D3B8E] font-head font-bold text-[0.88rem] tracking-[0.1em] uppercase px-7 py-3.5 rounded-xl border-2 border-[#0D3B8E]/20 hover:border-[#29ABE2] hover:text-[#29ABE2] hover:-translate-y-0.5 transition-all duration-200"
              >
                Contact Us
              </button>
            </MagneticButton>
          </motion.div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2">
            {BADGES.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + i * 0.07, duration: 0.4, ease: EASE }}
                className="inline-flex items-center gap-1.5 bg-white border border-[#D6E8F7] text-[#0D3B8E] font-head text-[0.68rem] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full shadow-sm hover:border-[#29ABE2] hover:shadow-[0_4px_14px_rgba(41,171,226,0.18)] transition-all duration-200 cursor-default"
              >
                <ShieldCheck size={10} className="text-[#29ABE2] flex-shrink-0" />
                {b}
              </motion.div>
            ))}
          </div>

        </div>

        {/* ════════ RIGHT: CREATIVE CARD VISUAL ════════ */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.95, ease: EASE }}
          className="relative hidden lg:block"
        >

          {/* ── Back card (stacked depth effect) ── */}
          <div
            className="absolute inset-0 rounded-3xl border border-[#C8DFFB]"
            style={{
              transform: 'rotate(3.5deg) translateY(6px)',
              background: 'rgba(224,240,255,0.5)',
              boxShadow: '0 8px 32px rgba(13,59,142,0.06)',
            }}
          />
          {/* Second back card */}
          <div
            className="absolute inset-0 rounded-3xl border border-[#D6E8F7]"
            style={{
              transform: 'rotate(-1.8deg) translateY(3px)',
              background: 'rgba(240,248,255,0.7)',
              boxShadow: '0 4px 18px rgba(13,59,142,0.04)',
            }}
          />

          {/* ── Main card ── */}
          <div
            className="relative bg-white rounded-3xl overflow-hidden"
            style={{
              boxShadow: '0 24px 80px rgba(13,59,142,0.12), 0 6px 24px rgba(41,171,226,0.08), 0 0 0 1px rgba(41,171,226,0.10)',
            }}
          >
            {/* Top gradient bar */}
            <div className="h-[3px]" style={{
              background: 'linear-gradient(to right, #0D3B8E, #29ABE2 40%, #0D3B8E 100%)',
            }} />

            {/* Status header */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-[#F8FBFF] border-b border-[#EAF3FC]">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  {cardReady && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-50" />
                  )}
                  <span className={`relative inline-flex rounded-full h-2 w-2 transition-colors duration-500 ${cardReady ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                </span>
                <span className="font-head text-[0.63rem] font-bold tracking-[0.2em] uppercase text-[#64748B]">
                  {cardReady ? 'Detection Network Active' : 'Initializing...'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity size={10} className="text-[#29ABE2]" />
                <span className="font-head text-[0.6rem] font-bold tracking-wide text-[#29ABE2]">
                  5 Sensors Online
                </span>
              </div>
            </div>

            {/* ── Product stage ── */}
            <div
              className="relative flex items-center justify-center overflow-hidden"
              style={{
                minHeight: '280px',
                background: 'radial-gradient(ellipse at 50% 50%, #EBF5FF 0%, #F5FAFF 50%, white 100%)',
              }}
            >
              {/* Stage decorative grid */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(41,171,226,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(41,171,226,0.06) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }} />

              {/* Radial glow behind product */}
              <div className="absolute w-[220px] h-[220px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(41,171,226,0.12) 0%, transparent 70%)' }} />

              {/* Concentric rings */}
              <div className="absolute w-[230px] h-[230px] rounded-full border border-[#29ABE2]/18 animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[175px] h-[175px] rounded-full border border-[#0D3B8E]/08" />
              <div className="absolute w-[120px] h-[120px] rounded-full border border-[#29ABE2]/14 animate-[spin_25s_linear_infinite_reverse]" />

              {/* Compass ticks */}
              <div className="absolute w-[230px] h-[230px] rounded-full pointer-events-none" style={{
                background: 'conic-gradient(from 0deg, transparent 89.3deg, rgba(41,171,226,0.45) 90deg, transparent 90.7deg, transparent 179.3deg, rgba(41,171,226,0.45) 180deg, transparent 180.7deg, transparent 269.3deg, rgba(41,171,226,0.45) 270deg, transparent 270.7deg)',
              }} />

              {/* Scan sweep line */}
              <div className="hero-stage-scan absolute inset-x-0 h-[1.5px] pointer-events-none z-20"
                style={{ background: 'linear-gradient(to right, transparent, rgba(41,171,226,0.55), transparent)' }} />

              {/* Product image */}
              <motion.img
                src="/products/FPLEL.png"
                alt="IDS FP-LEL Sensor"
                className="relative z-10 object-contain"
                style={{
                  height: '196px',
                  filter: 'drop-shadow(0 16px 40px rgba(13,59,142,0.18)) drop-shadow(0 4px 12px rgba(41,171,226,0.14))',
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              />

              {/* Floating badge: Range (top-left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.75, x: -8 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.45, ease: EASE }}
                className="absolute top-5 left-5 bg-white rounded-xl border border-[#D6E8F7] px-3 py-2.5 shadow-[0_4px_14px_rgba(13,59,142,0.09)]"
              >
                <div className="font-head text-[0.52rem] font-bold tracking-[0.18em] uppercase text-[#94A3B8] mb-0.5">Range</div>
                <div className="font-head text-[0.88rem] font-bold text-[#0D3B8E]">0–100% LEL</div>
              </motion.div>

              {/* Floating badge: Cert (top-right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.75, x: 8 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.65, duration: 0.45, ease: EASE }}
                className="absolute top-5 right-5 flex items-center gap-1.5 bg-white rounded-xl border border-[#D6E8F7] px-3 py-2.5 shadow-[0_4px_14px_rgba(13,59,142,0.09)]"
              >
                <ShieldCheck size={12} className="text-emerald-500 flex-shrink-0" />
                <div>
                  <div className="font-head text-[0.52rem] font-bold tracking-[0.18em] uppercase text-[#94A3B8] leading-none mb-0.5">Cert.</div>
                  <div className="font-head text-[0.78rem] font-bold text-emerald-600 leading-none">IECEx</div>
                </div>
              </motion.div>

              {/* Floating badge: Model label (bottom-center) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.4, ease: EASE }}
                className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#0D3B8E] text-white rounded-xl px-4 py-2 shadow-[0_8px_24px_rgba(13,59,142,0.28)]"
              >
                <div className="font-display text-[1.25rem] leading-none tracking-wider text-center">FP-LEL</div>
                <div className="font-head text-[0.52rem] tracking-[0.14em] uppercase text-white/55 text-center mt-0.5">
                  Catalytic Bead Sensor
                </div>
              </motion.div>
            </div>

            {/* ── Sensor readings grid ── */}
            <div className="grid grid-cols-3 gap-3 px-5 pt-5 pb-4">
              {SENSORS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: cardReady ? 1 : 0, y: cardReady ? 0 : 10 }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: EASE }}
                  className="bg-[#F8FBFF] border border-[#EAF3FC] rounded-xl p-3 text-center hover:border-[#C8DFFB] hover:shadow-sm transition-all duration-200"
                >
                  <div
                    className="font-head text-[0.54rem] font-bold tracking-[0.2em] uppercase mb-1.5"
                    style={{ color: s.color + 'AA' }}
                  >
                    {s.label}
                  </div>
                  <div className="font-display text-[1.5rem] text-[#0D3B8E] leading-none">
                    {s.value}
                    <span className="font-head text-[0.58rem] text-[#94A3B8] ml-0.5">{s.unit}</span>
                  </div>
                  <div
                    className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-full font-head text-[0.5rem] font-bold tracking-[0.12em] uppercase"
                    style={{ color: s.color, background: s.color + '14', border: `1px solid ${s.color}30` }}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    {s.status}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── Card footer ── */}
            <div className="border-t border-[#EAF3FC] bg-[#F8FBFF] px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-5">
                {[
                  { val: '699m²', lbl: 'Facility' },
                  { val: 'KSA',   lbl: 'Origin' },
                  { val: '2025',  lbl: 'Est.' },
                ].map((s, i) => (
                  <div key={s.lbl} className="flex items-center gap-2">
                    {i > 0 && <div className="w-px h-4 bg-[#D6E8F7]" />}
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-[1.1rem] text-[#0D3B8E] leading-none">{s.val}</span>
                      <span className="font-head text-[0.52rem] font-bold tracking-[0.12em] uppercase text-[#94A3B8]">{s.lbl}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* EQ bars */}
              <div className="flex items-end gap-[3px] h-[14px]">
                {[4, 7, 11, 14, 11, 7, 4].map((h, i) => (
                  <div
                    key={i}
                    className="w-[3px] rounded-sm hero-eq-bar"
                    style={{
                      height: `${h}px`,
                      background: `rgba(41,171,226,${0.28 + (h / 14) * 0.42})`,
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="h-[2px]" style={{
              background: 'linear-gradient(to right, #0D3B8E22, #29ABE2 40%, #29ABE2 60%, #0D3B8E22)',
            }} />
          </div>

          {/* Below card: logo + partner strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.85, duration: 0.5, ease: EASE }}
            className="flex items-center gap-4 mt-5 px-1"
          >
            <img src="/logo.png" alt="IDS" className="h-10 w-auto" />
            <div className="w-px h-8 bg-[#D6E8F7]" />
            <div>
              <div className="font-head text-[0.58rem] font-bold tracking-[0.15em] uppercase text-[#94A3B8] mb-0.5">
                In Partnership With
              </div>
              <div className="font-head text-[0.84rem] font-bold text-[#0D3B8E]">
                Teledyne GFD · USA
              </div>
            </div>
            <div className="ml-auto">
              <div className="font-head text-[0.58rem] font-bold tracking-[0.14em] uppercase text-[#94A3B8] mb-0.5">
                Location
              </div>
              <div className="font-head text-[0.8rem] font-bold text-[#475569]">
                Dammam, MODON-2
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* ── BOTTOM STATS STRIP ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#EAF3FC] bg-white/85"
        style={{ backdropFilter: 'blur(10px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.5, ease: EASE }}
          className="max-w-[1280px] mx-auto px-8 lg:px-12 py-3 flex items-center overflow-x-auto"
        >
          {[
            { val: '699 m²', lbl: 'Manufacturing Facility' },
            { val: '5',      lbl: 'Certified Products' },
            { val: 'IECEx',  lbl: 'International Cert.' },
            { val: 'IKTVA',  lbl: 'Vision 2030 Aligned' },
            { val: 'KSA',    lbl: 'Made in Saudi Arabia' },
          ].map((s, i) => (
            <div key={s.lbl} className="flex items-center flex-shrink-0">
              {i > 0 && <div className="w-px h-5 bg-[#D6E8F7] mx-6" />}
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[1.4rem] text-[#0D3B8E] leading-none">{s.val}</span>
                <span className="font-head text-[0.57rem] font-bold tracking-[0.14em] uppercase text-[#94A3B8]">
                  {s.lbl}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-[52px] left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 z-20">
        <span className="font-head text-[0.55rem] tracking-[0.28em] uppercase text-[#94A3B8]">Scroll</span>
        <div className="w-px h-8 animate-scroll-pulse bg-gradient-to-b from-[#29ABE2]/60 to-transparent" />
      </div>

    </section>
  )
}
