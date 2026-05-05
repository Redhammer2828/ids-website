import { useEffect, useRef, useState } from 'react'

interface Props {
  end: number
  duration?: number // seconds
  suffix?: string
  prefix?: string
  className?: string
  decimals?: number
}

/**
 * Counts up from 0 to `end` when visible in viewport.
 */
export default function AnimatedCounter({ end, duration = 1.8, suffix = '', prefix = '', className = '', decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)
  const [display, setDisplay] = useState(prefix + '0' + suffix)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const start = performance.now()
    const durationMs = duration * 1000
    let raf: number

    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / durationMs, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * end

      setDisplay(prefix + current.toFixed(decimals) + suffix)
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [started, end, duration, suffix, prefix, decimals])

  return <span ref={ref} className={className}>{display}</span>
}
