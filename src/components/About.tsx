import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { stagger, slideUp } from '../lib/motion'
import { Target, Eye } from 'lucide-react'

const stats = [
  { val: '699 m²', lbl: 'Manufacturing Facility',    accent: '#29ABE2' },
  { val: '2025',   lbl: 'Year Established',           accent: '#0D3B8E' },
  { val: 'Aramco', lbl: 'Approved Vendor',            accent: '#29ABE2' },
  { val: 'IECEx',  lbl: 'Internationally Certified',  accent: '#0D3B8E' },
]

const values = ['Safety', 'Quality', 'Innovation', 'Reliability', 'Local Support']

export default function About() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="about" className="bg-white py-24 px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-head text-[0.73rem] font-bold tracking-[0.22em] uppercase text-[#29ABE2] flex items-center gap-3 mb-2">
          <span className="w-7 h-0.5 bg-[#29ABE2]" />
          Who We Are
        </div>
        <div className="font-head text-[2.6rem] font-bold text-[#0D3B8E] leading-tight mb-1">About IDS</div>
        <p className="text-[#64748B] max-w-[600px] mb-12">
          A gas detector manufacturing facility established in 2025 at MODON 2, Kingdom of Saudi Arabia.
        </p>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          variants={stagger}
          initial="hidden"
          animate={visible ? 'visible' : 'hidden'}
        >
          {/* Left */}
          <motion.div variants={slideUp}>
            <p className="text-[1rem] leading-[1.8] text-[#475569] mb-5">
              <strong className="text-[#0D3B8E] font-semibold">IDS</strong> is in partnership with{' '}
              <strong className="text-[#0D3B8E] font-semibold">Teledyne Gas &amp; Flame Detection</strong>, providing
              high-quality gas detection systems and controllers for monitoring flammable gases, toxic gases, and oxygen levels.
              Our products combine Teledyne's trusted sensor technology with IDS's localized manufacturing and technical support.
            </p>
            <p className="text-[1rem] leading-[1.8] text-[#475569] mb-8">
              Designed for demanding industries such as <strong className="text-[#0D3B8E] font-semibold">Oil &amp; Gas,
              Petrochemicals, Utilities, Mining, and Fertilizers</strong>, IDS gas detection solutions deliver accurate,
              reliable, and stable performance, even in harsh and hazardous environments.
            </p>

            {/* Vision & Mission cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#F0F7FF] border border-[#D6E8F7] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Eye size={16} className="text-[#29ABE2]" />
                  <div className="font-head font-bold text-[0.8rem] tracking-[0.12em] uppercase text-[#0D3B8E]">Vision</div>
                </div>
                <p className="text-[0.82rem] text-[#475569] leading-[1.6]">
                  To be the leading provider of locally manufactured gas detection solutions in Saudi Arabia, supporting IKTVA and Vision 2030.
                </p>
              </div>
              <div className="bg-[#F0F7FF] border border-[#D6E8F7] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Target size={16} className="text-[#29ABE2]" />
                  <div className="font-head font-bold text-[0.8rem] tracking-[0.12em] uppercase text-[#0D3B8E]">Mission</div>
                </div>
                <p className="text-[0.82rem] text-[#475569] leading-[1.6]">
                  To manufacture and deliver reliable, certified gas detection systems that ensure safety across critical industrial environments.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="pt-6 border-t border-[#E3F4FC]">
              <div className="font-head text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#64748B] mb-3">Core Values</div>
              <div className="flex flex-wrap gap-2">
                {values.map(v => (
                  <span key={v} className="inline-flex items-center gap-1.5 bg-[#E3F4FC] border border-[#A8C7E8] px-3.5 py-1.5 rounded-full font-head text-[0.82rem] font-semibold text-[#0D3B8E] hover:bg-[#0D3B8E] hover:text-white hover:border-[#0D3B8E] transition-all cursor-default">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right stats */}
          <motion.div className="grid grid-cols-2 gap-4" variants={stagger}>
            {stats.map(s => (
              <motion.div
                key={s.lbl}
                variants={slideUp}
                className="bg-white border-2 rounded-xl p-6 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(13,59,142,0.12)] transition-all duration-200"
                style={{ borderColor: s.accent + '40', borderLeftColor: s.accent, borderLeftWidth: 4 }}
              >
                <div className="font-display text-[2.2rem] leading-none mb-1" style={{ color: s.accent }}>{s.val}</div>
                <div className="font-head text-[0.78rem] font-semibold tracking-[0.09em] uppercase text-[#64748B]">{s.lbl}</div>
              </motion.div>
            ))}

            {/* Localization box */}
            <motion.div variants={slideUp} className="col-span-2 bg-gradient-to-r from-[#0D3B8E] to-[#1A4FA8] rounded-xl p-5 text-white">
              <div className="font-head font-bold text-[0.78rem] tracking-[0.14em] uppercase text-[#29ABE2] mb-2">Localization & Saudi Content</div>
              <div className="grid grid-cols-2 gap-2 text-[0.82rem] text-white/80">
                <span>✓ Made in KSA</span>
                <span>✓ IKTVA Contribution</span>
                <span>✓ Local Workforce</span>
                <span>✓ Local Repair Center</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
