import { useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useMotionTemplate, useScroll, useMotionValueEvent } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { stagger, slideUp, EASE } from '../lib/motion'
import { Download, ShieldCheck, ArrowRight } from 'lucide-react'

/* ── 3D Tilt Stage ── */
function TiltStage({ src, alt, color }: { src: string; alt: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const cfg = { stiffness: 220, damping: 24, mass: 0.6 }
  const sx = useSpring(mx, cfg)
  const sy = useSpring(my, cfg)

  const rotateX = useTransform(sy, [-0.5, 0.5], [16, -16])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-16, 16])

  /* Rings lag behind the image — creates depth parallax */
  const ringX = useTransform(sx, [-0.5, 0.5], [12, -12])
  const ringY = useTransform(sy, [-0.5, 0.5], [12, -12])

  /* Holographic glare — follows cursor */
  const gx    = useTransform(sx, [-0.5, 0.5], [10, 90])
  const gy    = useTransform(sy, [-0.5, 0.5], [10, 90])
  const glare = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.26) 0%, transparent 56%)`
  /* Glare fades when mouse is at center */
  const glareOp = useTransform(sx, [-0.5, 0, 0.5], [0.9, 0.08, 0.9])

  /* Dynamic drop shadow shifts with rotation */
  const sdx       = useTransform(sx, [-0.5, 0.5], ['-28px', '28px'])
  const sdy       = useTransform(sy, [-0.5, 0.5], ['-28px', '28px'])
  const imgFilter = useMotionTemplate`drop-shadow(${sdx} ${sdy} 44px ${color}80) drop-shadow(0px 14px 28px rgba(0,0,0,0.6))`

  /* Ground glow disc shifts with horizontal tilt */
  const glowX  = useTransform(sx, [-0.5, 0.5], [-20, 20])
  const glowOp = useTransform(sx, [-0.5, 0, 0.5], [0.38, 0.16, 0.38])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex items-center justify-center w-full h-full"
      style={{ perspective: '900px', cursor: 'pointer' }}
    >
      {/* Rings — parallax (lag = appear deeper in Z) */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="absolute w-[280px] h-[280px] rounded-full border border-white/[0.05] animate-[spin_40s_linear_infinite]" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-white/[0.07]" />
        <div className="absolute w-[130px] h-[130px] rounded-full border border-white/[0.06] animate-[spin_25s_linear_infinite_reverse]" />
        <div className="absolute w-[280px] h-[280px] rounded-full pointer-events-none" style={{
          background: 'conic-gradient(from 0deg, transparent 89.3deg, rgba(41,171,226,0.4) 90deg, transparent 90.7deg, transparent 179.3deg, rgba(41,171,226,0.4) 180deg, transparent 180.7deg, transparent 269.3deg, rgba(41,171,226,0.4) 270deg, transparent 270.7deg)',
        }} />
      </motion.div>

      {/* 3D rotating layer — image + glare */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', position: 'relative', zIndex: 10 }}
        whileHover={{ scale: 1.06 }}
        transition={{ scale: { duration: 0.35, ease: 'easeOut' } }}
      >
        {/* Holographic glare overlay */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{ background: glare, opacity: glareOp }}
        />

        {/* Product image with dynamic shadow */}
        <AnimatePresence mode="wait">
          <motion.img
            key={src}
            src={src}
            alt={alt}
            initial={{ opacity: 0, scale: 0.82, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: -12 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative z-10 h-[260px] lg:h-[310px] w-auto object-contain"
            style={{ filter: imgFilter }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Ground glow disc */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-36 h-5 rounded-full blur-2xl pointer-events-none z-0"
        style={{ backgroundColor: color, x: glowX, opacity: glowOp }}
      />

      {/* Scan line */}
      <div
        className="animate-scan absolute inset-x-0 h-[2px] pointer-events-none z-30"
        style={{ backgroundImage: `linear-gradient(to right, transparent, ${color}70, transparent)` }}
      />
    </div>
  )
}

const products = [
  {
    tag: 'Catalytic Bead',
    model: 'FP-LEL',
    sub: 'Combustible Gas Sensor',
    range: '0–100% LEL',
    warranty: '2-Year Warranty',
    cert: 'IECEx DEK 24.0040X',
    desc: 'Non-intrusive Smart sensor detecting combustible gases using catalytic bead technology. Poison-resistant with gold-plated connections, electropolished 316SS housing, and dual-layer surge protection.',
    feats: ['LED Display', 'Auto Zero/Auto Span', '4-20mA & HART', 'Modular Design', 'NEMA 4X / IP66'],
    apps: ['Oil & Gas', 'Offshore Platforms', 'Refineries', 'LNG/CNG Plants'],
    color: '#29ABE2',
    accentDark: '#0D3B8E',
    pdf: '/GF30611A-EN_FP-LEL_IDS_3.pdf',
    image: '/products/FPLEL.png',
  },
  {
    tag: 'NDIR Optical',
    model: 'IR-LEL',
    sub: 'Combustible Gas Sensor',
    range: '0–100% LEL',
    warranty: '5-Year Warranty',
    cert: 'IECEx DEK 24.0040X',
    desc: 'NDIR optical sensor — no risk of sensor poisoning, no high-concentration saturation, and no O₂ required. Detects methane, ethane, propane, butane, pentane, hexane, ethylene and more.',
    feats: ['NDIR Optical', 'No O₂ Required', 'Full Text Display', 'Modbus RS-485', 'NEMA 4X / IP66'],
    apps: ['Oil & Gas', 'FPSOs', 'Petrochemical', 'Waste Water'],
    color: '#29ABE2',
    accentDark: '#0D3B8E',
    pdf: '/GF30612A-EN_IR-LEL_IDS 2.pdf',
    image: '/products/IRLEL.png',
  },
  {
    tag: 'Electrochemical',
    model: 'DM-TOX',
    sub: 'Toxic Gas Sensor (H₂S)',
    range: '0–100 ppm',
    warranty: '2-Year Warranty',
    cert: 'IECEx DEK 24.0039X',
    desc: 'Smart sensor for H₂S detection using electrochemical technology. Intrinsically safe, with automatic gas type recognition and plug-in field replaceable cell.',
    feats: ['H₂S Detection', 'Auto Gas Recognition', '4-20mA & HART', 'Intrinsically Safe', 'NEMA 4X / IP66'],
    apps: ['Chemical Plants', 'Refineries', 'Steel Mills', 'Utilities'],
    color: '#F59E0B',
    accentDark: '#92400E',
    pdf: '/GF30592A-EN_DM-TOX_IDS_4.pdf',
    image: '/products/DMDOX.png',
  },
  {
    tag: 'Photo-Ionization',
    model: 'PI-VOC',
    sub: 'VOC Gas Sensor',
    range: '0–10 ppm to 0–1,000 ppm',
    warranty: '2-Year Warranty',
    cert: 'IECEx DEK 24.0039X',
    desc: 'Photo-ionization detector (PID) converted from lab-grade to rugged industrial. Monitors a wide range of VOC gases in harsh environments with long sensor life.',
    feats: ['PID Technology', 'Auto Zero/Auto Span', '4-20mA & HART', 'Wide VOC Range', 'NEMA 4X / IP66'],
    apps: ['Pharmaceutical', 'Chemical Plants', 'Refineries', 'Marine & Offshore'],
    color: '#10B981',
    accentDark: '#064E3B',
    pdf: '/GF30613A-EN_PI-VOC_IDS.pdf',
    image: '/products/PIVOC.png',
  },
  {
    tag: 'Process Analyzer',
    model: 'Model 1000',
    sub: 'H₂S / CO₂ Gas Analyzer',
    range: '0–500 ppm / 0–15%',
    warranty: '2-Year Warranty',
    cert: 'Non-Hazardous Area',
    desc: 'Continuous, accurate, real-time measurement of H₂S and CO₂ concentrations in process gas streams. Features 3-electrode electrochemical and NDIR optical sensing with microprocessor-based signal conditioning and onboard sample conditioning system.',
    feats: ['4-20mA & RS-485', 'Modbus RTU', '3 Alarm Relays', 'Field Replaceable Sensor', 'Local Digital Display'],
    apps: ['Gas Well Testing', 'Gas Treatment Plants', 'Custody Transfer', 'Gas Transmission'],
    color: '#A78BFA',
    accentDark: '#4C1D95',
    pdf: '/Products/docs/fixedgas-model1000-co2-process-analyzer-usermanual-english.pdf',
    image: '/products/model1000.png',
  },
]

const controllers = [
  {
    model: 'Model X40',
    sub: 'Integrated Alarm & Control System',
    desc: 'Low-power alarm and control system monitoring 8–32 gas detection channels. Available in X40-8 and X40-32 with 4-20mA and Modbus RS-485 inputs.',
    feats: ['Backlit LCD', 'SmartWireless', 'Data Logging', 'NEMA 4X / 7'],
  },
  {
    model: 'RAM',
    sub: 'Remote / Alarm Module',
    desc: 'Remote Control/Alarm Relay Module providing extended monitoring and alarm relay capability for distributed installations.',
    feats: ['Remote Monitoring', 'Alarm Relay', 'Field Configurable'],
  },
  {
    model: 'HART Bridge',
    sub: 'Digital Communication Interface',
    desc: 'Bi-directional HART interface for DM-TOX, FP-LEL, IR-LEL sensors and HART-enabled host systems via Bell 202 FSK.',
    feats: ['Two-way Comms', 'Bell 202 FSK', 'Modbus Interface', 'Remote Config'],
  },
]

const industries = [
  'Oil & Gas', 'Petrochemical', 'Refineries', 'Fertilizers', 'Food & Beverage',
  'Steel & Mining', 'Pulp & Paper', 'Utilities', 'Offshore Platforms', 'Wastewater Treatment',
  'Pharmaceutical', 'Chemical Plants', 'Marine', 'LNG/CNG Plants',
]

export default function Products() {
  const [active, setActive] = useState(0)
  const { ref: ctrlRef, visible: ctrlVisible } = useScrollReveal()
  const p = products[active]

  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const numProducts = products.length
    let newIndex = Math.floor(latest * numProducts)
    if (latest === 1) newIndex = numProducts - 1
    if (newIndex >= numProducts) newIndex = numProducts - 1
    if (newIndex < 0) newIndex = 0
    
    if (newIndex !== active) {
      setActive(newIndex)
    }
  })

  const scrollToProduct = (index: number) => {
    if (containerRef.current) {
      const top = containerRef.current.getBoundingClientRect().top + window.scrollY
      const y = top + (index * window.innerHeight)
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section id="products" className="relative" style={{ background: 'linear-gradient(160deg, #0B2354 0%, #091C47 40%, #071640 100%)' }}>

      {/* Sticky background elements */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(41,171,226,0.13) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(13,59,142,0.55) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(41,171,226,0.12) 0%, transparent 70%)' }} />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 font-display leading-none select-none"
            style={{ fontSize: 'clamp(14rem, 22vw, 22rem)', color: 'rgba(255,255,255,0.018)' }}
          >
            {String(active + 1).padStart(2, '0')}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll-Jacked Container */}
      <div ref={containerRef} className="relative mt-[-100vh]" style={{ height: `${products.length * 100}vh` }}>
        <div className="sticky top-0 min-h-screen w-full flex flex-col justify-center px-6 lg:px-12 py-10 z-10">
          <div className="w-full max-w-[1300px] mx-auto relative">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-head text-[0.7rem] font-bold tracking-[0.28em] uppercase text-[#29ABE2] flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#29ABE2]" />
              Product Range
            </div>
            <h2 className="font-display leading-none text-white" style={{ fontSize: 'clamp(3.2rem, 6.5vw, 5.8rem)' }}>
              Our <span style={{ color: p.color, transition: 'color 0.4s ease' }}>Products</span>
            </h2>
          </div>
          <div className="flex items-center gap-8 lg:pb-2">
            <div className="text-center">
              <div className="font-display text-[2.4rem] text-white leading-none">5</div>
              <div className="font-head text-[0.62rem] font-bold tracking-[0.15em] uppercase text-[#29ABE2]/60">Certified Products</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="font-display text-[2.4rem] text-white leading-none">IECEx</div>
              <div className="font-head text-[0.62rem] font-bold tracking-[0.15em] uppercase text-[#29ABE2]/60">International Cert.</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="font-display text-[2.4rem] text-white leading-none">KSA</div>
              <div className="font-head text-[0.62rem] font-bold tracking-[0.15em] uppercase text-[#29ABE2]/60">Made in Saudi Arabia</div>
            </div>
          </div>
        </div>

        {/* ── Showcase: 3-col layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[196px_1fr_1fr] gap-5 mb-20 items-start">

          {/* ── Col 1: Product selector tabs ── */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-1 lg:pb-0 -mx-1 px-1">
            {products.map((prod, i) => (
              <button
                key={prod.model}
                onClick={() => scrollToProduct(i)}
                className={`relative flex-shrink-0 lg:flex-shrink-0 text-left px-4 py-3.5 rounded-xl border outline-none transition-all duration-300 cursor-pointer ${
                  active === i
                    ? 'border-white/20 shadow-[0_0_24px_rgba(41,171,226,0.10)]'
                    : 'bg-white/[0.025] border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10'
                }`}
                style={active === i ? { backgroundColor: prod.color + '12', borderColor: prod.color + '40' } : {}}
              >
                {active === i && (
                  <motion.div
                    layoutId="tab-bar"
                    className="absolute left-0 top-2.5 bottom-2.5 w-[3px] rounded-r-full"
                    style={{ backgroundColor: prod.color }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <div
                  className="font-display text-[0.95rem] leading-none mb-0.5 transition-all duration-300"
                  style={{ color: active === i ? prod.color : 'rgba(255,255,255,0.20)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className={`font-display text-[1.25rem] leading-tight transition-colors duration-300 ${active === i ? 'text-white' : 'text-white/35'}`}>
                  {prod.model}
                </div>
                <div className={`font-head text-[0.62rem] font-medium tracking-wide truncate transition-colors duration-300 ${active === i ? 'text-white/50' : 'text-white/18'}`}>
                  {prod.tag}
                </div>
              </button>
            ))}

            {/* Progress indicator */}
            <div className="hidden lg:flex flex-col gap-1 mt-3 px-4">
              <div className="font-head text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white/45 mb-1">
                {active + 1} / {products.length}
              </div>
              <div className="h-0.5 bg-white/10 rounded-full overflow-hidden w-full">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: p.color }}
                  animate={{ width: `${((active + 1) / products.length) * 100}%` }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
              </div>
            </div>
          </div>

          {/* ── Col 2: Image spotlight ── */}
          <div className="relative bg-[#071A3A] border border-white/[0.08] rounded-2xl overflow-hidden flex flex-col items-center justify-center min-h-[440px] lg:min-h-[520px]">

            {/* Circuit grid */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(41,171,226,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(41,171,226,0.04) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }} />

            {/* Color glow behind product */}
            <AnimatePresence mode="wait">
              <motion.div
                key={p.model + '-glow'}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.22, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="absolute w-72 h-72 rounded-full blur-[90px] pointer-events-none"
                style={{ backgroundColor: p.color }}
              />
            </AnimatePresence>

            {/* 3D tilt stage — rings + image + glare + shadow */}
            <TiltStage src={p.image} alt={p.model} color={p.color} />

            {/* Range badge — top-left */}
            <AnimatePresence mode="wait">
              <motion.div
                key={p.model + '-range'}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="absolute top-5 left-5 z-20 backdrop-blur-sm rounded-xl px-4 py-2.5 border"
                style={{ backgroundColor: 'rgba(5,14,29,0.88)', borderColor: p.color + '35' }}
              >
                <div className="font-head text-[0.55rem] font-bold tracking-[0.2em] uppercase mb-0.5" style={{ color: p.color + 'AA' }}>
                  Detection Range
                </div>
                <div className="font-head text-[0.9rem] font-bold text-white">{p.range}</div>
              </motion.div>
            </AnimatePresence>

            {/* Cert badge — bottom-right */}
            <AnimatePresence mode="wait">
              <motion.div
                key={p.model + '-cert'}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="absolute bottom-5 right-5 z-20 flex items-center gap-2 backdrop-blur-sm rounded-xl px-3.5 py-2.5 border border-emerald-500/25"
                style={{ backgroundColor: 'rgba(5,14,29,0.88)' }}
              >
                <ShieldCheck size={13} className="text-emerald-400 flex-shrink-0" />
                <span className="font-head text-[0.65rem] font-bold text-emerald-400 leading-tight">{p.cert}</span>
              </motion.div>
            </AnimatePresence>

            {/* Tag watermark */}
            <div className="absolute top-5 right-5 z-10 font-head text-[0.58rem] font-bold tracking-[0.22em] uppercase text-white/12">
              IDS · {p.tag}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 inset-x-0 h-[2px]" style={{
              background: `linear-gradient(to right, transparent, ${p.color}60, transparent)`
            }} />
          </div>

          {/* ── Col 3: Details panel ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={p.model + '-panel'}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.42, ease: EASE }}
              className="flex flex-col gap-0 py-1"
            >
              {/* Tag pill */}
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full border mb-5 transition-all duration-400"
                style={{ borderColor: p.color + '50', backgroundColor: p.color + '14' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: p.color }} />
                <span className="font-head text-[0.65rem] font-bold tracking-[0.2em] uppercase" style={{ color: p.color }}>
                  {p.tag}
                </span>
              </div>

              {/* Model name */}
              <div className="font-display leading-none text-white mb-2" style={{ fontSize: 'clamp(3rem, 4.5vw, 4.2rem)' }}>
                {p.model}
              </div>
              <div className="font-head text-[0.95rem] font-semibold mb-6 tracking-[0.04em]" style={{ color: p.color + 'CC' }}>
                {p.sub}
              </div>

              {/* Description */}
              <p className="text-[0.875rem] text-[#C2D8EE] leading-[1.8] mb-7 pl-4 border-l-2" style={{ borderColor: p.color + '35' }}>
                {p.desc}
              </p>

              {/* Features */}
              <div className="mb-7">
                <div className="font-head text-[0.6rem] font-bold tracking-[0.22em] uppercase text-white/50 mb-4">
                  Key Features
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {p.feats.map((f, fi) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: fi * 0.06 + 0.08, duration: 0.32 }}
                      className="flex items-center gap-3 group/feat"
                    >
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 border transition-all duration-200 group-hover/feat:scale-110"
                        style={{ backgroundColor: p.color + '18', borderColor: p.color + '35' }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                      </div>
                      <span className="font-head text-[0.84rem] font-semibold text-white/90 group-hover/feat:text-white transition-colors duration-200">
                        {f}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <div className="font-head text-[0.6rem] font-bold tracking-[0.22em] uppercase text-white/50 mb-3">
                  Applications
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.apps.map((app, ai) => (
                    <motion.span
                      key={app}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: ai * 0.05 + 0.2, duration: 0.28 }}
                      className="font-head text-[0.7rem] font-semibold tracking-wide px-3.5 py-1.5 rounded-full border border-white/[0.14] bg-white/[0.07] text-white/65 hover:text-white/90 hover:border-white/25 transition-all duration-200 cursor-default"
                    >
                      {app}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-5 border-t border-white/[0.07]">
                <div className="flex items-center gap-5">
                  <div>
                    <div className="font-head text-[0.58rem] font-bold tracking-[0.15em] uppercase text-white/45 mb-0.5">Warranty</div>
                    <div className="font-head text-[0.85rem] font-bold text-emerald-400">{p.warranty}</div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div>
                    <div className="font-head text-[0.58rem] font-bold tracking-[0.15em] uppercase text-white/45 mb-0.5">Technology</div>
                    <div className="font-head text-[0.85rem] font-bold text-white/85">{p.tag}</div>
                  </div>
                </div>
                <a
                  href={p.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-head text-[0.78rem] font-bold tracking-[0.1em] uppercase transition-all duration-300 hover:-translate-y-0.5 group/dl"
                  style={{
                    backgroundColor: p.color,
                    color: '#050E1D',
                    boxShadow: `0 6px 20px ${p.color}45`,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 10px 32px ${p.color}70`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 6px 20px ${p.color}45`)}
                >
                  Datasheet <Download size={13} className="group-hover/dl:translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Navigation arrows hint (moved up for scroll view) ── */}
        <div className="flex items-center justify-center gap-4 mt-6 mb-4">
          <button
            onClick={() => scrollToProduct(Math.max(0, active - 1))}
            disabled={active === 0}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/30 hover:border-[#29ABE2]/40 hover:text-[#29ABE2] hover:bg-[#29ABE2]/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ArrowRight size={15} className="rotate-180" />
          </button>
          <div className="flex gap-2">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToProduct(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: active === i ? '24px' : '6px',
                  height: '6px',
                  backgroundColor: active === i ? p.color : 'rgba(255,255,255,0.15)',
                }}
              />
            ))}
          </div>
          <button
            onClick={() => scrollToProduct(Math.min(products.length - 1, active + 1))}
            disabled={active === products.length - 1}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/30 hover:border-[#29ABE2]/40 hover:text-[#29ABE2] hover:bg-[#29ABE2]/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ArrowRight size={15} />
          </button>
        </div>

          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12 py-20 bg-transparent">

        {/* ── Controllers & Accessories ── */}
        <div ref={ctrlRef} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-white/35" />
            <span className="font-head text-[0.68rem] font-bold tracking-[0.22em] uppercase text-white/55">
              Controllers &amp; Accessories
            </span>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={stagger}
            initial="hidden"
            animate={ctrlVisible ? 'visible' : 'hidden'}
          >
            {controllers.map(c => (
              <motion.div
                key={c.model}
                variants={slideUp}
                whileHover={{ y: -5, borderColor: 'rgba(41,171,226,0.25)' }}
                className="card-shine-dark bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 transition-all duration-300"
              >
                <div className="h-0.5 w-8 bg-[#29ABE2]/50 rounded mb-4" />
                <div className="font-display text-[1.8rem] text-white leading-none mb-0.5">{c.model}</div>
                <div className="font-head text-[0.8rem] text-[#29ABE2] mb-3">{c.sub}</div>
                <p className="text-[0.82rem] text-[#94B8D4] leading-[1.65] mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.feats.map(f => (
                    <span key={f} className="bg-[#29ABE2]/15 text-[#29ABE2] font-head text-[0.63rem] font-semibold px-2.5 py-1 rounded border border-[#29ABE2]/30">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Industries ticker ── */}
        <div className="overflow-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #091C47, transparent)' }} />
          <div className="absolute top-0 bottom-0 right-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #091C47, transparent)' }} />
          <div className="flex gap-3 animate-ticker w-max py-2">
            {[...industries, ...industries].map((ind, i) => (
              <span
                key={`${ind}-${i}`}
                className="inline-flex items-center gap-1.5 whitespace-nowrap font-head text-[0.75rem] font-semibold tracking-[0.1em] uppercase text-white/50 px-4 py-2 bg-white/[0.05] border border-white/[0.10] rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]/50" />
                {ind}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
