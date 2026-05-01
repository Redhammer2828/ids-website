import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { stagger, slideUp } from '../lib/motion'
import { Building2, Truck, Flag, Headphones, Users, FlaskConical } from 'lucide-react'

const feats = [
  { icon: <Building2 size={18} />,    title: 'Local Manufacturing',     desc: 'Made in KSA — certified production standards' },
  { icon: <Truck size={18} />,        title: 'Faster Delivery',         desc: 'Reduced lead times with local inventory' },
  { icon: <Flag size={18} />,         title: 'IKTVA Contribution',      desc: "Supporting the Kingdom's localization objectives (Request No. 5377)" },
  { icon: <Headphones size={18} />,   title: 'Local Technical Support', desc: 'Dedicated after-sales service in the region' },
  { icon: <Users size={18} />,        title: 'Local Workforce',         desc: 'Training & developing Saudi talent' },
  { icon: <FlaskConical size={18} />, title: 'Calibration Lab',         desc: 'On-site certified calibration facility with traceable standards' },
]

export default function Factory() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="factory" className="bg-[#F0F7FF] py-24 px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-head text-[0.73rem] font-bold tracking-[0.22em] uppercase text-[#29ABE2] flex items-center gap-3 mb-2">
          <span className="w-7 h-0.5 bg-[#29ABE2]" />
          Our Facility
        </div>
        <div className="font-head text-[2.6rem] font-bold text-[#0D3B8E] leading-tight mb-0">
          IDS Factory — Dammam, KSA
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 items-center"
          variants={stagger}
          initial="hidden"
          animate={visible ? 'visible' : 'hidden'}
        >
          {/* Left */}
          <motion.div variants={slideUp}>
            <div className="bg-white border border-[#D6E8F7] rounded-2xl p-8 mb-6 shadow-sm">
              <div className="font-display leading-[0.88]" style={{ fontSize: 'clamp(4.5rem, 9vw, 7.5rem)', color: '#0D3B8E' }}>
                699<span className="text-[#29ABE2]">M²</span>
              </div>
              <div className="font-head text-[0.95rem] font-semibold tracking-[0.12em] uppercase text-[#64748B] mt-1 mb-4">
                State-of-the-Art Manufacturing Facility
              </div>
              <p className="text-[0.95rem] leading-[1.78] text-[#475569]">
                Teledyne Gas &amp; Flame Detection is expanding its presence in the Middle East through a strategic
                partnership with IDS. Together, we have established a state-of-the-art manufacturing facility in
                Dammam — enhancing local production capabilities, improving delivery lead times, and strengthening
                regional support for advanced gas detection solutions.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 bg-[#0D3B8E] text-white px-6 py-3.5 rounded-xl font-head text-[0.85rem] font-semibold tracking-wide shadow-md">
              <img src="/logo.png" alt="" className="h-6 w-auto invert brightness-0 invert" />
              Supporting Saudi Vision 2030 &amp; IKTVA
            </div>
          </motion.div>

          {/* Right features */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={stagger}>
            {feats.map(f => (
              <motion.div
                key={f.title}
                variants={slideUp}
                whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(13,59,142,0.1)' }}
                className="flex gap-3.5 items-start bg-white border border-[#D6E8F7] rounded-xl p-4 transition-all"
              >
                <div className="w-9 h-9 bg-[#E3F4FC] rounded-lg flex items-center justify-center text-[#0D3B8E] flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <strong className="block font-head text-[0.88rem] font-bold text-[#0D3B8E] mb-0.5">{f.title}</strong>
                  <span className="text-[0.78rem] text-[#64748B] leading-[1.5]">{f.desc}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
