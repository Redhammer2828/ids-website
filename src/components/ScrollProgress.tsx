import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9998] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #0D3B8E, #29ABE2, #0D3B8E)',
        boxShadow: '0 0 12px rgba(41,171,226,0.4)',
      }}
    />
  )
}
