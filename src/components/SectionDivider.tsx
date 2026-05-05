/**
 * Wavy SVG dividers between sections for organic flow.
 */

interface Props {
  from?: string   // top color
  to?: string     // bottom color
  flip?: boolean  // flip vertically
  variant?: 'wave' | 'angle' | 'curve'
}

export default function SectionDivider({ from = '#ffffff', to = '#F0F7FF', flip = false, variant = 'wave' }: Props) {
  const transform = flip ? 'rotate(180deg)' : ''

  if (variant === 'angle') {
    return (
      <div className="relative" style={{ marginTop: '-1px', marginBottom: '-1px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ transform }} preserveAspectRatio="none">
          <path d="M0 80L1440 0V80H0Z" fill={to} />
          <path d="M0 0H1440V80L0 20V0Z" fill={from} />
        </svg>
      </div>
    )
  }

  if (variant === 'curve') {
    return (
      <div className="relative" style={{ marginTop: '-1px', marginBottom: '-1px' }}>
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ transform }} preserveAspectRatio="none">
          <path d="M0 0H1440V40C1440 40 1080 100 720 100C360 100 0 40 0 40V0Z" fill={from} />
          <path d="M0 40C0 40 360 100 720 100C1080 100 1440 40 1440 40V100H0V40Z" fill={to} />
        </svg>
      </div>
    )
  }

  // Default: wave
  return (
    <div className="relative" style={{ marginTop: '-1px', marginBottom: '-1px' }}>
      <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ transform }} preserveAspectRatio="none">
        <path
          d="M0 40C240 90 480 10 720 50C960 90 1200 20 1440 60V100H0V40Z"
          fill={to}
        />
        <path
          d="M0 0H1440V60C1200 20 960 90 720 50C480 10 240 90 0 40V0Z"
          fill={from}
        />
        {/* Subtle accent line */}
        <path
          d="M0 40C240 90 480 10 720 50C960 90 1200 20 1440 60"
          stroke="rgba(41,171,226,0.15)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  )
}
