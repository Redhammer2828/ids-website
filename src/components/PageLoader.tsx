import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function PageLoader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2400)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #050E1D 0%, #0D3B8E 100%)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          {/* Pulsing rings */}
          <div className="absolute">
            <motion.div
              className="w-32 h-32 rounded-full border border-[#29ABE2]/20"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <div className="absolute">
            <motion.div
              className="w-48 h-48 rounded-full border border-[#29ABE2]/10"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            />
          </div>

          {/* Logo + text */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.img
              src="/logo.png"
              alt="IDS"
              className="h-20 w-auto brightness-0 invert mb-5"
              initial={{ opacity: 0, scale: 0.6, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
            />

            {/* Scanning line below logo */}
            <motion.div
              className="h-[2px] bg-gradient-to-r from-transparent via-[#29ABE2] to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 140, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: EASE_OUT }}
            />

            {/* Loading text */}
            <motion.div
              className="mt-5 font-head text-[0.65rem] font-bold tracking-[0.35em] uppercase text-[#29ABE2]/60"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Industrial Detection Solutions
            </motion.div>

            {/* Progress bar */}
            <div className="mt-4 w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#29ABE2] to-[#0D3B8E] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>
          </div>

          {/* Corner accent lines */}
          <motion.div
            className="absolute top-8 left-8 w-16 h-px bg-gradient-to-r from-[#29ABE2]/40 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div
            className="absolute top-8 left-8 w-px h-16 bg-gradient-to-b from-[#29ABE2]/40 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ transformOrigin: 'top' }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-16 h-px bg-gradient-to-l from-[#29ABE2]/40 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ transformOrigin: 'right' }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-px h-16 bg-gradient-to-t from-[#29ABE2]/40 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ transformOrigin: 'bottom' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
