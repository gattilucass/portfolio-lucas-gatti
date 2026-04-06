"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}

// Ease-out cubic for smooth deceleration
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export default function AnimatedCounter({
  end,
  duration = 2200,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(`${prefix}0${suffix}`)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      let startTime: number | null = null
      let raf: number

      const tick = (now: number) => {
        if (!startTime) startTime = now
        const elapsed = now - startTime
        const linear = Math.min(elapsed / duration, 1)
        const eased = easeOutCubic(linear)
        const current = eased * end

        setDisplay(
          `${prefix}${decimals > 0 ? current.toFixed(decimals) : Math.round(current).toLocaleString()}${suffix}`
        )

        if (linear < 1) {
          raf = requestAnimationFrame(tick)
        } else {
          setDisplay(
            `${prefix}${decimals > 0 ? end.toFixed(decimals) : end.toLocaleString()}${suffix}`
          )
        }
      }

      raf = requestAnimationFrame(tick)
      return () => cancelAnimationFrame(raf)
    }
  }, [isInView, end, duration, prefix, suffix, decimals])

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {display}
    </span>
  )
}
