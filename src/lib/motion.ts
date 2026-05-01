import type { Variants } from 'framer-motion'

export const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number]

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
})

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

export const slideUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.5,  ease: EASE } },
}
