import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'

interface Props {
  children: ReactNode
  className?: string
  glowColor?: string
}

/**
 * Wrap any card to add 3D tilt on mouse hover with a subtle light reflex.
 */
export default function TiltCard({ children, className = '', glowColor = 'rgba(41,171,226,0.08)' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const cfg = { stiffness: 280, damping: 24 }
  const sx = useSpring(mx, cfg)
  const sy = useSpring(my, cfg)

  const rotateX = useTransform(sy, [0, 1], [6, -6])
  const rotateY = useTransform(sx, [0, 1], [-6, 6])

  const gx = useTransform(sx, [0, 1], [20, 80])
  const gy = useTransform(sy, [0, 1], [20, 80])
  const glare = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, ${glowColor} 0%, transparent 60%)`

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }

  const onLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        perspective: '800px',
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          position: 'relative',
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      >
        {children}
        {/* Glare overlay */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none z-10"
          style={{ background: glare }}
        />
      </motion.div>
    </motion.div>
  )
}
