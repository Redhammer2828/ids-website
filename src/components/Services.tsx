import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { stagger, slideUp } from '../lib/motion'
import { Wrench, Building2, RotateCcw, MessageCircle, FlaskConical, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: <Wrench size={22} />,
    title: 'On-Site Services',
    color: '#0D3B8E',
    items: [
      'Installation, commissioning & start-up support',
      'Predicted maintenance and inspection',
      'On-site calibration and functional testing',
      'Troubleshooting, diagnostics & system optimization',
      'Emergency response for critical issues',
    ],
  },
  {
    icon: <Building2 size={22} />,
    title: 'In-House Service',
    color: '#29ABE2',
    items: [
      'Factory repair and refurbishment of detectors',
      'Sensor replacement, recalibration & verification',
      'Firmware updates and configuration checks',
      'Use of genuine parts and certified procedures',
      'Detailed service reports and documentation',
    ],
  },
  {
    icon: <RotateCcw size={22} />,
    title: 'Repair & Restoration',
    color: '#0D3B8E',
    items: [
      'Component-level repair for extended equipment life',
      'Restoration of failed or underperforming devices',
      'Final quality checks for industry compliance',
      'Rapid turnaround to reduce downtime',
    ],
  },
  {
    icon: <MessageCircle size={22} />,
    title: 'Online Technical Support',
    color: '#29ABE2',
    items: [
      'Remote troubleshooting and issue assessment',
      'Real-time guidance for site technicians',
      'Installation, configuration & system design',
      'Support for spare-parts identification',
    ],
  },
  {
    icon: <FlaskConical size={22} />,
    title: 'Calibration Services',
    color: '#0D3B8E',
    items: [
      'Dedicated calibration laboratory in KSA',
      'Certified calibration gases & traceable standards',
      'Multi-point calibration & accuracy verification',
      'Calibration certificates for all serviced units',
      'Fast turnaround with local availability',
    ],
  },
]

const commitments = ['Certified & trained technicians', 'High-quality repair standards', 'Online technical support', 'Continued lifecycle support']

export default function Services() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="services" className="bg-white py-24 px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-head text-[0.73rem] font-bold tracking-[0.22em] uppercase text-[#29ABE2] flex items-center gap-3 mb-2">
          <span className="w-7 h-0.5 bg-[#29ABE2]" />
          Field Services
        </div>
        <div className="font-head text-[2.6rem] font-bold text-[#0D3B8E] leading-tight mb-2">IDS Field Services</div>
        <p className="text-[#64748B] max-w-[580px] leading-[1.65] mb-12">
          IDS provides a full range of field service solutions designed to maintain the accuracy, safety, and long-term reliability of gas detection systems throughout the entire product lifecycle.
        </p>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10"
          variants={stagger}
          initial="hidden"
          animate={visible ? 'visible' : 'hidden'}
        >
          {services.map(s => (
            <motion.div
              key={s.title}
              variants={slideUp}
              whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(13,59,142,0.12)', borderColor: s.color + '60' }}
              className="bg-white border border-[#D6E8F7] rounded-xl p-5 transition-all duration-300"
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 text-white"
                style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color === '#0D3B8E' ? '#29ABE2' : '#0D3B8E'})` }}
              >
                {s.icon}
              </div>
              <div className="font-head text-[0.95rem] font-bold text-[#0D3B8E] mb-3">{s.title}</div>
              <ul className="space-y-1.5">
                {s.items.map(item => (
                  <li key={item} className="text-[0.78rem] text-[#475569] flex gap-1.5 leading-[1.4]">
                    <span className="text-[#29ABE2] font-bold mt-0.5 flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Commitment strip */}
        <div className="bg-gradient-to-r from-[#0D3B8E] to-[#1A4FA8] rounded-2xl p-6 flex flex-wrap gap-6 items-center justify-between">
          <div>
            <div className="font-head font-bold text-[0.72rem] tracking-[0.16em] uppercase text-[#29ABE2] mb-1">Our Service Commitment</div>
            <div className="font-head text-[1.4rem] font-bold text-white">Supporting your operations, every step of the way</div>
          </div>
          <div className="flex flex-wrap gap-4">
            {commitments.map(c => (
              <div key={c} className="flex items-center gap-2 text-white/80 font-head text-[0.82rem]">
                <CheckCircle size={14} className="text-[#29ABE2] flex-shrink-0" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
