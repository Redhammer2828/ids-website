import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { stagger, slideLeft, EASE } from '../lib/motion'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'

const details = [
  {
    icon: <MapPin size={16} />,
    label: 'Address',
    content: <>F11 &amp; F12, Dammam 913 Street,<br />Building No 2857, MODON-2<br />Dammam Industrial City 2 — 34325,<br />Saudi Arabia</>,
  },
  {
    icon: <Phone size={16} />,
    label: 'Phone',
    content: (
      <>
        <a href="tel:+966138349537" className="hover:text-[#29ABE2] transition-colors">+966 13 834 9537</a><br />
        <a href="tel:+966539688090" className="hover:text-[#29ABE2] transition-colors">+966 53 968 8090</a>
      </>
    ),
  },
  {
    icon: <Mail size={16} />,
    label: 'Email',
    content: (
      <>
        <a href="mailto:info@ids.com.sa" className="hover:text-[#29ABE2] transition-colors">info@ids.com.sa</a><br />
        <a href="mailto:manu@ids.com.sa" className="hover:text-[#29ABE2] transition-colors">manu@ids.com.sa</a><br />
        <a href="mailto:services@ids.com.sa" className="hover:text-[#29ABE2] transition-colors">services@ids.com.sa</a>
      </>
    ),
  },
  {
    icon: <Globe size={16} />,
    label: 'Website',
    content: <a href="https://www.ids.com.sa" target="_blank" rel="noreferrer" className="hover:text-[#29ABE2] transition-colors">www.ids.com.sa</a>,
  },
]

const inputCls = "w-full px-4 py-3 bg-[#F0F7FF] border-[1.5px] border-[#D6E8F7] rounded-lg font-body text-[0.95rem] text-[#0D3B8E] outline-none focus:border-[#29ABE2] focus:bg-white focus:ring-2 focus:ring-[rgba(41,171,226,0.12)] transition-all placeholder:text-[#94A3B8]"

export default function Contact() {
  const { ref, visible } = useScrollReveal()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="contact" className="p-0">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr]">

        {/* Info panel */}
        <motion.div
          ref={ref}
          className="bg-gradient-to-br from-[#0D3B8E] to-[#091F52] py-16 px-10 flex flex-col justify-center relative overflow-hidden"
          variants={stagger}
          initial="hidden"
          animate={visible ? 'visible' : 'hidden'}
        >
          {/* Subtle dot grid */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, #29ABE2 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }} />

          <div className="relative z-10">
            <motion.img variants={slideLeft} src="/logo.png" alt="IDS" className="h-14 w-auto mb-6 brightness-0 invert opacity-90" />

            <motion.div variants={slideLeft} className="font-head text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[#29ABE2] flex items-center gap-2 mb-1">
              <span className="w-5 h-0.5 bg-[#29ABE2]" /> Get In Touch
            </motion.div>
            <motion.div variants={slideLeft} className="font-head text-[2rem] font-bold text-white mb-8 leading-tight">Contact IDS</motion.div>

            {details.map(d => (
              <motion.div key={d.label} variants={slideLeft} className="flex gap-3.5 items-start mb-6">
                <div className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-[#29ABE2] flex-shrink-0">
                  {d.icon}
                </div>
                <div>
                  <div className="font-head text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/50 mb-0.5">{d.label}</div>
                  <div className="text-[0.88rem] text-white/80 leading-[1.6]">{d.content}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="bg-white py-16 px-10 lg:px-14"
          initial={{ opacity: 0, x: 40 }}
          animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          <div className="font-head text-[1.7rem] font-bold text-[#0D3B8E] mb-1">Send Us a Message</div>
          <div className="text-[0.9rem] text-[#64748B] mb-8">Our team will respond within 24 hours</div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-head text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#475569] mb-1.5">Full Name</label>
                <input type="text" placeholder="Your name" required className={inputCls} />
              </div>
              <div>
                <label className="block font-head text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#475569] mb-1.5">Email Address</label>
                <input type="email" placeholder="your@company.com" required className={inputCls} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-head text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#475569] mb-1.5">Company</label>
                <input type="text" placeholder="Your company name" className={inputCls} />
              </div>
              <div>
                <label className="block font-head text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#475569] mb-1.5">Subject</label>
                <input type="text" placeholder="How can we help?" className={inputCls} />
              </div>
            </div>
            <div className="mb-5">
              <label className="block font-head text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#475569] mb-1.5">Message</label>
              <textarea placeholder="Describe your requirements..." rows={5} className={`${inputCls} resize-vertical`} />
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -2, boxShadow: '0 10px 28px rgba(13,59,142,0.25)', backgroundColor: '#1A4FA8' }}
              whileTap={{ scale: 0.98 }}
              className={`w-full font-head font-bold text-[1rem] tracking-[0.12em] uppercase py-4 rounded-lg border-none cursor-pointer transition-all duration-200 text-white ${sent ? 'bg-green-600' : 'bg-[#0D3B8E]'}`}
            >
              {sent ? 'Message Sent ✓' : 'Send Message →'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
