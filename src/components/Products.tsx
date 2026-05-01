import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { stagger, slideUp } from '../lib/motion'
import { Download } from 'lucide-react'

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
    color: '#0D3B8E',
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
    color: '#0D3B8E',
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
    color: '#29ABE2',
    pdf: '/GF30613A-EN_PI-VOC_IDS.pdf',
    image: '/products/PIVOC.png',
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
  const { ref, visible } = useScrollReveal()
  const { ref: ref2, visible: visible2 } = useScrollReveal()

  return (
    <section id="products" className="bg-[#F0F7FF] py-24 px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-head text-[0.73rem] font-bold tracking-[0.22em] uppercase text-[#29ABE2] flex items-center gap-3 mb-2">
          <span className="w-7 h-0.5 bg-[#29ABE2]" />
          Product Range
        </div>
        <div className="font-head text-[2.6rem] font-bold text-[#0D3B8E] leading-tight mb-2">Our Products</div>
        <p className="text-[#64748B] max-w-[580px] leading-[1.65] mb-12">
          Comprehensive gas detection solutions for critical industrial applications — manufactured in Saudi Arabia, certified to international standards.
        </p>

        {/* Main sensors */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6"
          variants={stagger}
          initial="hidden"
          animate={visible ? 'visible' : 'hidden'}
        >
          {products.map(p => (
            <motion.div
              key={p.model}
              variants={slideUp}
              whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(13,59,142,0.08)' }}
              className="group relative bg-white border border-white/60 rounded-3xl overflow-hidden transition-all duration-500 shadow-lg shadow-[#0D3B8E]/[0.03]"
            >
              {/* Soft glowing background element */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: p.color }} />
              
              <div className="p-8 pb-0">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D6E8F7] shadow-sm mb-3">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                      <span className="font-head text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#64748B]">{p.tag}</span>
                    </div>
                    <div className="font-display text-[2.5rem] leading-none text-[#0D3B8E] mb-2">{p.model}</div>
                    <div className="font-head text-[0.9rem] font-medium text-[#64748B]">{p.sub}</div>
                  </div>
                  <div className="text-right">
                    <div className="inline-block bg-[#F0F7FF] text-[#0D3B8E] font-head text-[0.7rem] font-bold tracking-wide uppercase px-3 py-1.5 rounded-lg border border-[#D6E8F7] shadow-sm">
                      {p.range}
                    </div>
                  </div>
                </div>
              </div>

              {/* Product photo area - fully integrated */}
              <div className="relative h-[260px] flex items-center justify-center mt-2 mb-4 px-8">
                {/* Decorative rings behind image */}
                <div className="absolute w-56 h-56 rounded-full border border-dashed border-[#29ABE2]/30 animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-40 h-40 rounded-full border border-[#29ABE2]/10 animate-[spin_40s_linear_infinite_reverse]" />
                
                <img
                  src={p.image}
                  alt={p.model}
                  className="relative h-full w-auto object-contain z-10 transition-transform duration-700 group-hover:scale-[1.15]"
                  style={{ filter: 'drop-shadow(0 20px 30px rgba(13,59,142,0.15))' }}
                />
              </div>

              <div className="px-8 pb-8 relative z-10">
                <p className="text-[0.9rem] text-[#475569] leading-[1.7] mb-6">
                  {p.desc}
                </p>

                {/* Features - sleek pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.feats.slice(0, 4).map(f => (
                    <span key={f} className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-100 text-slate-600 font-head text-[0.7rem] font-medium tracking-wide px-3 py-1.5 rounded-full transition-colors group-hover:bg-[#F0F7FF] group-hover:border-[#D6E8F7] group-hover:text-[#0D3B8E]">
                      <span className="w-1 h-1 rounded-full bg-[#29ABE2]" />
                      {f}
                    </span>
                  ))}
                  {p.feats.length > 4 && (
                     <span className="inline-flex items-center text-slate-400 font-head text-[0.7rem] font-medium px-2 py-1.5">
                       +{p.feats.length - 4} more
                     </span>
                  )}
                </div>

                {/* Applications & Footer */}
                <div className="pt-6 border-t border-slate-100 flex flex-col gap-5">
                  <div>
                    <div className="font-head text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#94A3B8] mb-2.5">Applications</div>
                    <div className="text-[0.8rem] text-[#475569] leading-relaxed font-medium">
                      {p.apps.join(' • ')}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2 bg-slate-50 rounded-2xl p-2 pl-4 border border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1 text-[0.68rem] font-bold tracking-wide uppercase px-2.5 py-1 rounded bg-emerald-100/50 text-emerald-700">
                        {p.warranty}
                      </span>
                      <span className="font-head text-[0.65rem] font-medium text-[#94A3B8] uppercase tracking-wider hidden sm:block">
                        Cert: {p.cert}
                      </span>
                    </div>
                    <a
                      href={p.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#29ABE2] border border-slate-200 hover:bg-[#29ABE2] hover:text-white hover:border-[#29ABE2] transition-all duration-300 font-head text-[0.75rem] font-bold tracking-wide uppercase shadow-sm group/btn"
                    >
                      Datasheet <Download size={14} className="group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Controllers row */}
        <div className="mb-6">
          <div className="font-head text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#64748B] mb-4 flex items-center gap-3">
            <span className="w-5 h-px bg-[#94A3B8]" /> Controllers &amp; Accessories
          </div>
          <motion.div
            ref={ref2}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={stagger}
            initial="hidden"
            animate={visible2 ? 'visible' : 'hidden'}
          >
            {controllers.map(c => (
              <motion.div
                key={c.model}
                variants={slideUp}
                whileHover={{ y: -4 }}
                className="bg-white border border-[#D6E8F7] rounded-xl p-5 card-shine transition-all"
              >
                <div className="h-0.5 w-8 bg-[#29ABE2] rounded mb-3" />
                <div className="font-display text-[1.6rem] text-[#0D3B8E] leading-none mb-0.5">{c.model}</div>
                <div className="font-head text-[0.8rem] text-[#64748B] mb-3">{c.sub}</div>
                <p className="text-[0.82rem] text-[#475569] leading-[1.6] mb-3">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.feats.map(f => (
                    <span key={f} className="bg-[#F0F7FF] text-[#0D3B8E] font-head text-[0.65rem] font-semibold px-2 py-0.5 rounded border border-[#D6E8F7]">{f}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Industries ticker */}
        <div className="mt-10 overflow-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 w-20 z-10" style={{ background: 'linear-gradient(to right, #F0F7FF, transparent)' }} />
          <div className="absolute top-0 bottom-0 right-0 w-20 z-10" style={{ background: 'linear-gradient(to left, #F0F7FF, transparent)' }} />
          <div className="flex gap-3 animate-ticker w-max py-2">
            {[...industries, ...industries].map((ind, i) => (
              <span key={`${ind}-${i}`} className="inline-flex items-center gap-1.5 whitespace-nowrap font-head text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#0D3B8E] px-4 py-2 bg-white border border-[#D6E8F7] rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#29ABE2] rounded-full" />
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
