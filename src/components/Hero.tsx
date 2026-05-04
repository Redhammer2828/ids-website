import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Activity, Zap } from 'lucide-react'
import { EASE } from '../lib/motion'

const BADGES = [
  'IECEx Certified',
  'Saudi Aramco Approved',
  'SABIC Approved',
  'SEC Approved',
  'CSA C/US',
]

const SENSORS = [
  { label: 'H₂S', value: '0.0', unit: 'ppm', status: 'SAFE',   color: '#10B981' },
  { label: 'LEL', value: '0.0', unit: '%',   status: 'CLEAR',  color: '#29ABE2' },
  { label: 'CO₂', value: '0.0', unit: '%',   status: 'NORMAL', color: '#A78BFA' },
]

const HEADLINE = [
  { text: 'Industrial', accent: false },
  { text: 'Detection',  accent: true  },
  { text: 'Solutions',  accent: false },
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
      className="min-h-screen pt-20 relative flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #030C1A 0%, #050F1F 45%, #071526 100%)' }}
    >

      {/* ── BACKGROUND LAYERS ── */}

      {/* Blueprint grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:
          'linear-gradient(rgba(41,171,226,0.055) 1px, transparent 1px),' +
          'linear-gradient(90deg, rgba(41,171,226,0.055) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }} />

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(41,171,226,0.018) 100px, rgba(41,171,226,0.018) 101px)',
      }} />

      {/* Primary glow orb — right */}
      <div
        className="absolute -right-48 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(13,59,142,0.55) 0%, rgba(41,171,226,0.10) 45%, transparent 70%)' }}
      />
      {/* Bottom-left glow */}
      <div
        className="absolute -bottom-48 -left-24 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(41,171,226,0.07) 0%, transparent 65%)' }}
      />
      {/* Top-left accent */}
      <div
        className="absolute -top-24 -left-24 w-[360px] h-[360px] rounded-full pointer-events-none opacity-55"
        style={{ background: 'radial-gradient(circle, rgba(13,59,142,0.5) 0%, transparent 70%)' }}
      />

      {/* Horizontal scan lines */}
      <div className="absolute top-[30%] left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(41,171,226,0.07) 30%, rgba(41,171,226,0.07) 70%, transparent)' }} />
      <div className="absolute top-[68%] left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(13,59,142,0.10) 20%, rgba(13,59,142,0.10) 80%, transparent)' }} />

      {/* Floating particles */}
      <span className="absolute top-[20%] left-[7%]   w-1.5 h-1.5 rounded-full bg-[#29ABE2]/65 dot-1" />
      <span className="absolute top-[38%] left-[13%]  w-1   h-1   rounded-full bg-[#29ABE2]/40 dot-2" />
      <span className="absolute top-[62%] left-[4%]   w-2   h-2   rounded-full bg-[#29ABE2]/20 dot-3" />
      <span className="absolute top-[26%] left-[44%]  w-1   h-1   rounded-full bg-white/14     dot-2" />
      <span className="absolute top-[74%] left-[29%]  w-1.5 h-1.5 rounded-full bg-[#29ABE2]/28 dot-1" />
      <span className="absolute top-[14%] right-[36%] w-1   h-1   rounded-full bg-white/10     dot-3" />

      {/* ── MAIN GRID ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 lg:px-12 py-12 w-full grid grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_500px] gap-12 xl:gap-20 items-center">

        {/* ════════ LEFT: COPY ════════ */}
        <div className="flex flex-col pb-16 lg:pb-0">

          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2.5 self-start mb-9 px-4 py-2 rounded-full border border-[#29ABE2]/25 bg-[#29ABE2]/08"
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-55" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-head text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[#29ABE2]/90">
              Technology Partner · Teledyne GFD USA
            </span>
          </motion.div>

          {/* Headline — clip-reveal per line */}
          <h1
            className="font-display leading-[0.88] mb-8"
            style={{ fontSize: 'clamp(3.8rem, 7.5vw, 7.2rem)' }}
          >
            {HEADLINE.map((line, i) => (
              <div key={line.text} style={{ overflow: 'hidden', display: 'block' }}>
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.38 + i * 0.18, duration: 0.88, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'block',
                    color: line.accent ? '#29ABE2' : '#FFFFFF',
                    textShadow: line.accent
                      ? '0 0 90px rgba(41,171,226,0.55), 0 0 30px rgba(41,171,226,0.3)'
                      : 'none',
                  }}
                >
                  {line.text}
                </motion.span>
              </div>
            ))}
          </h1>

          {/* Sub tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.55, ease: EASE }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[#29ABE2]/50 flex-shrink-0" />
            <span className="font-head text-[0.8rem] font-bold tracking-[0.2em] uppercase text-[#29ABE2]/75">
              Advanced Gas Detection — Made in Saudi Arabia
            </span>
          </motion.div>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: EASE }}
            className="leading-[1.85] mb-10 max-w-[520px] text-[0.96rem]"
            style={{ color: '#3A5472' }}
          >
            In partnership with Teledyne Gas &amp; Flame Detection, IDS manufactures
            world-class certified gas detection systems for oil &amp; gas,
            petrochemicals, utilities, and critical industries across Saudi Arabia.
            Proudly supporting Saudi Vision 2030 &amp; IKTVA.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5, ease: EASE }}
            className="flex gap-3 flex-wrap mb-10"
          >
            <button
              onClick={() => scrollTo('#products')}
              className="btn-hero-glow inline-flex items-center gap-2.5 bg-[#29ABE2] text-[#030C1A] font-head font-bold text-[0.88rem] tracking-[0.1em] uppercase px-7 py-3.5 rounded-xl hover:-translate-y-0.5 hover:bg-white transition-all duration-200 group/btn"
            >
              Explore Products <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 border border-white/14 font-head font-bold text-[0.88rem] tracking-[0.1em] uppercase px-7 py-3.5 rounded-xl hover:border-[#29ABE2]/40 hover:bg-[#29ABE2]/08 transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Contact Us
            </button>
          </motion.div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2">
            {BADGES.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + i * 0.07, duration: 0.4, ease: EASE }}
                className="inline-flex items-center gap-1.5 border border-white/[0.07] bg-white/[0.025] font-head text-[0.68rem] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full hover:border-[#29ABE2]/35 hover:bg-[#29ABE2]/06 transition-all duration-200 cursor-default"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                <ShieldCheck size={10} className="text-[#29ABE2]/55 flex-shrink-0" />
                {b}
              </motion.div>
            ))}
          </div>

        </div>

        {/* ════════ RIGHT: LIVE MONITOR VISUAL ════════ */}
        <motion.div
          initial={{ opacity: 0, x: 44, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
          className="relative hidden lg:block"
          style={{ height: '560px' }}
        >

          {/* Corner brackets */}
          {[
            'top-0 left-0 border-t-2 border-l-2 rounded-tl',
            'top-0 right-0 border-t-2 border-r-2 rounded-tr',
            'bottom-0 left-0 border-b-2 border-l-2 rounded-bl',
            'bottom-0 right-0 border-b-2 border-r-2 rounded-br',
          ].map((cls) => (
            <div key={cls} className={`absolute w-6 h-6 border-[#29ABE2]/45 z-30 pointer-events-none ${cls}`} />
          ))}

          {/* Decorative rings */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[295px] h-[295px] pointer-events-none">
            <div className="absolute inset-0 rounded-full border border-[#29ABE2]/07 animate-[spin_38s_linear_infinite]" />
            <div className="absolute inset-[22px] rounded-full border border-[#29ABE2]/05" />
            <div className="absolute inset-[48px] rounded-full border border-[#29ABE2]/09 animate-[spin_24s_linear_infinite_reverse]" />
            <div className="absolute inset-[74px] rounded-full border border-white/04" />
            {/* Compass ticks */}
            <div className="absolute inset-0 rounded-full" style={{
              background: 'conic-gradient(from 0deg, transparent 89.2deg, rgba(41,171,226,0.4) 90deg, transparent 90.8deg, transparent 179.2deg, rgba(41,171,226,0.4) 180deg, transparent 180.8deg, transparent 269.2deg, rgba(41,171,226,0.4) 270deg, transparent 270.8deg)',
            }} />
          </div>

          {/* Floating product image */}
          <motion.img
            src="/products/FPLEL.png"
            alt="IDS FP-LEL Sensor"
            className="absolute top-0 left-1/2 -translate-x-1/2 z-20 object-contain w-auto"
            style={{
              height: '252px',
              filter: 'drop-shadow(0 24px 64px rgba(41,171,226,0.48)) drop-shadow(0 8px 22px rgba(0,0,0,0.75))',
            }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          {/* Flagship label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.45, ease: EASE }}
            className="absolute top-[58px] right-3 z-30 px-3 py-2 rounded-xl border border-[#29ABE2]/28"
            style={{ background: 'rgba(13,59,142,0.80)', backdropFilter: 'blur(8px)' }}
          >
            <div className="font-head text-[0.52rem] font-bold tracking-[0.2em] uppercase mb-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Flagship
            </div>
            <div className="font-display text-[1.05rem] text-[#29ABE2] leading-none">FP-LEL</div>
          </motion.div>

          {/* ── MONITOR CARD ── */}
          <div
            className="absolute left-0 right-0 bottom-0 z-10 rounded-2xl overflow-hidden"
            style={{
              top: '198px',
              background: 'linear-gradient(165deg, rgba(7,21,44,0.98) 0%, rgba(4,12,28,0.99) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(41,171,226,0.16)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)',
            }}
          >
            {/* Top accent line */}
            <div className="h-[1.5px]" style={{
              background: 'linear-gradient(to right, transparent, rgba(41,171,226,0.65) 30%, rgba(41,171,226,0.65) 70%, transparent)',
            }} />

            {/* Status bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.05]">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  {cardReady && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                  )}
                  <span className={`relative inline-flex rounded-full h-2 w-2 transition-colors duration-500 ${cardReady ? 'bg-emerald-400' : 'bg-white/20'}`} />
                </span>
                <span className="font-head text-[0.63rem] font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {cardReady ? 'Detection Network Active' : 'Initializing System...'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity size={10} className="text-[#29ABE2]/50" />
                <span className="font-head text-[0.6rem] font-bold tracking-wide text-[#29ABE2]/50">5 Online</span>
              </div>
            </div>

            {/* Spacer — image overlap clearance */}
            <div style={{ height: '56px' }} />

            {/* Sensor readings */}
            <div className="grid grid-cols-3 gap-2.5 px-5">
              {SENSORS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: cardReady ? 1 : 0, y: cardReady ? 0 : 10 }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: EASE }}
                  className="rounded-xl p-3.5 text-center"
                  style={{
                    background: 'rgba(255,255,255,0.024)',
                    border: '1px solid rgba(255,255,255,0.055)',
                  }}
                >
                  <div
                    className="font-head text-[0.55rem] font-bold tracking-[0.2em] uppercase mb-2"
                    style={{ color: s.color + '88' }}
                  >
                    {s.label}
                  </div>
                  <div className="font-display text-[1.55rem] text-white leading-none">
                    {s.value}
                    <span className="font-head text-[0.6rem] ml-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>
                      {s.unit}
                    </span>
                  </div>
                  <div
                    className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full font-head text-[0.5rem] font-bold tracking-[0.12em] uppercase"
                    style={{
                      color: s.color,
                      border: `1px solid ${s.color}38`,
                      background: s.color + '12',
                    }}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    {s.status}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="mx-5 mt-4 mb-0 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-3.5">
              <div className="flex items-center gap-2">
                <Zap size={10} className="text-[#29ABE2]/42" />
                <span className="font-head text-[0.58rem] font-bold tracking-[0.15em] uppercase" style={{ color: 'rgba(255,255,255,0.22)' }}>
                  Dammam · KSA · Est. 2025
                </span>
              </div>
              {/* EQ bars */}
              <div className="flex items-end gap-[3px] h-[14px]">
                {[4, 7, 11, 14, 11, 7, 4].map((h, i) => (
                  <div
                    key={i}
                    className="w-[3px] rounded-sm hero-eq-bar"
                    style={{
                      height: `${h}px`,
                      background: `rgba(41,171,226,${0.28 + (h / 14) * 0.38})`,
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom scanning accent */}
            <div className="relative h-[2px] overflow-hidden">
              <div className="absolute inset-0" style={{ background: 'rgba(41,171,226,0.12)' }} />
              <div
                className="hero-scan-line absolute top-0 bottom-0 w-1/3"
                style={{ background: 'linear-gradient(to right, transparent, rgba(41,171,226,0.8), transparent)' }}
              />
            </div>
          </div>

          {/* Faint IDS watermark */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display pointer-events-none select-none z-0"
            style={{ fontSize: '5rem', color: 'rgba(255,255,255,0.016)' }}
          >
            IDS
          </div>

        </motion.div>
      </div>

      {/* ── STATS STRIP ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.05]"
        style={{ background: 'rgba(3,12,26,0.75)', backdropFilter: 'blur(10px)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.5, ease: EASE }}
          className="max-w-[1280px] mx-auto px-8 lg:px-12 py-3 flex items-center gap-0 overflow-x-auto"
        >
          {[
            { val: '699 m²', lbl: 'Manufacturing Facility' },
            { val: '5',      lbl: 'Certified Products' },
            { val: 'IECEx',  lbl: 'International Cert.' },
            { val: 'IKTVA',  lbl: 'Vision 2030 Aligned' },
            { val: 'KSA',    lbl: 'Made in Saudi Arabia' },
          ].map((s, i) => (
            <div key={s.lbl} className="flex items-center flex-shrink-0">
              {i > 0 && <div className="w-px h-6 bg-white/[0.06] mx-6" />}
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[1.45rem] text-white leading-none">{s.val}</span>
                <span className="font-head text-[0.58rem] font-bold tracking-[0.14em] uppercase" style={{ color: 'rgba(255,255,255,0.22)' }}>
                  {s.lbl}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-[52px] left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 z-20">
        <span className="font-head text-[0.55rem] tracking-[0.28em] uppercase" style={{ color: 'rgba(255,255,255,0.16)' }}>
          Scroll
        </span>
        <div className="w-px h-8 animate-scroll-pulse bg-gradient-to-b from-[#29ABE2]/40 to-transparent" />
      </div>

    </section>
  )
}
