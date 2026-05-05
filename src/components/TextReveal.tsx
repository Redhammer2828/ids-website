import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  text: string
  className?: string
  delay?: number
  as?: 'h2' | 'h3' | 'div' | 'span'
}

/**
 * Reveals text word-by-word when the element scrolls into view.
 */
export default function TextReveal({ text, className = '', delay = 0, as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const words = text.split(' ')

  return (
    <Tag ref={ref as any} className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.3em' }}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            initial={{ y: '110%', opacity: 0 }}
            animate={visible ? { y: 0, opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{
              delay: delay + i * 0.06,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
