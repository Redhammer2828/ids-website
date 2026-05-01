import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { stagger, slideUp } from '../lib/motion'
import { ShieldCheck } from 'lucide-react'

const vendors = [
  { name: 'Saudi Aramco',          id: 'Vendor Code: 10116593',   color: '#0D3B8E' },
  { name: 'SABIC',                 id: 'Vendor ID: 11059966',     color: '#29ABE2' },
  { name: 'Saudi Electricity Co.', id: 'SEC Vendor ID: 2015174',  color: '#0D3B8E' },
]

const certs = [
  { name: 'CSA C/US',      desc: 'Canadian Standards Association',      cert: 'cCSAus (80209826)',     icon: '🇨🇦' },
  { name: 'ATEX (Ex)',     desc: 'European Explosive Atmospheres',       cert: 'EN 60079',              icon: '🇪🇺' },
  { name: 'IECEx',         desc: 'IEC Certification Scheme',            cert: 'DEK 24.0039X / 0040X',  icon: '🌍' },
  { name: 'ISO 9001:2015', desc: 'Quality Management System',           cert: '',                       icon: '✅' },
  { name: 'UL Listed',     desc: 'Underwriters Laboratories',           cert: 'NRTL',                   icon: '🔒' },
]

const standards = [
  'IEC 60079-0:2017 — Explosive Atmospheres (General)',
  'IEC 60079-1:2014 — Flameproof Enclosures "d"',
  'IEC 60079-11:2011 — Intrinsic Safety "i"',
  'ANSI/ISA 60079-29-1-2013 — Gas Detector Performance',
  'CSA 22.2 #152 — Combustible Gas Performance',
  'EN 50270 — RFI/EMI Protection',
]

export default function Certifications() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="certifications" className="bg-white py-24 px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-head text-[0.73rem] font-bold tracking-[0.22em] uppercase text-[#29ABE2] flex items-center gap-3 mb-2">
          <span className="w-7 h-0.5 bg-[#29ABE2]" />
          Compliance
        </div>
        <div className="font-head text-[2.6rem] font-bold text-[#0D3B8E] leading-tight mb-2">Certifications &amp; Approvals</div>
        <p className="text-[#64748B] max-w-[580px] leading-[1.65] mb-12">
          Recognized by leading international certification bodies and major Saudi Arabian industrial companies. Our products are certified to the highest global safety standards.
        </p>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={visible ? 'visible' : 'hidden'}
        >
          {/* Vendor Approvals */}
          <motion.div variants={slideUp} className="mb-10">
            <div className="font-head text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[#64748B] mb-4 pb-2.5 border-b border-[#E3F4FC] flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#29ABE2]" />
              Vendor Approvals
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {vendors.map(v => (
                <motion.div
                  key={v.name}
                  whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(13,59,142,0.12)' }}
                  className="bg-[#F0F7FF] border-2 border-[#D6E8F7] rounded-xl p-6 text-center transition-all duration-200"
                  style={{ borderLeftColor: v.color, borderLeftWidth: 4 }}
                >
                  <div className="font-head text-[1.1rem] font-bold text-[#0D3B8E] mb-1">{v.name}</div>
                  <div className="font-head text-[0.72rem] font-semibold tracking-[0.1em] text-[#64748B] mb-2">{v.id}</div>
                  <div className="inline-block bg-green-50 text-green-700 border border-green-200 text-[0.65rem] font-bold tracking-[0.12em] uppercase px-2.5 py-0.5 rounded-full">
                    ✓ Approved
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* International Certifications */}
          <motion.div variants={slideUp} className="mb-10">
            <div className="font-head text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[#64748B] mb-4 pb-2.5 border-b border-[#E3F4FC] flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#29ABE2]" />
              International Certifications
            </div>
            <div className="flex gap-4 flex-wrap">
              {certs.map(c => (
                <motion.div
                  key={c.name}
                  whileHover={{ y: -3, borderColor: '#29ABE2', backgroundColor: '#E3F4FC' }}
                  className="flex flex-col items-center gap-1.5 bg-[#F0F7FF] border-2 border-[#D6E8F7] rounded-xl py-5 px-6 min-w-[130px] flex-1 text-center transition-all duration-200"
                >
                  <div className="text-[1.8rem]">{c.icon}</div>
                  <div className="font-head text-[0.95rem] font-bold text-[#0D3B8E]">{c.name}</div>
                  <div className="text-[0.7rem] text-[#64748B] leading-[1.35]">{c.desc}</div>
                  {c.cert && <div className="font-head text-[0.62rem] font-semibold text-[#29ABE2] tracking-wide">{c.cert}</div>}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Standards */}
          <motion.div variants={slideUp} className="bg-[#F0F7FF] border border-[#D6E8F7] rounded-2xl p-6">
            <div className="font-head text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[#64748B] mb-4 flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#29ABE2]" />
              Standards Compliance
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {standards.map(s => (
                <div key={s} className="flex gap-2 items-start text-[0.82rem] text-[#475569]">
                  <span className="text-[#29ABE2] font-bold mt-0.5 flex-shrink-0">✓</span>
                  {s}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
