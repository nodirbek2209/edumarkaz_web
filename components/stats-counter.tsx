"use client"

import { useEffect } from "react"

import { useState } from "react"

import { useRef } from "react"
import { useInView, motion } from "framer-motion"

interface Stat {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

interface StatsCounterProps {
  stats: Stat[]
  className?: string
}

export function StatsCounter({ stats, className = "" }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="text-center"
        >
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 flex items-center">
              {stat.prefix && <span>{stat.prefix}</span>}
              <CountUp from={0} to={stat.value} duration={2} />
              {stat.suffix && <span>{stat.suffix}</span>}
            </div>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

interface CountUpProps {
  from: number
  to: number
  duration: number
}

function CountUp({ from, to, duration }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const [count, setCount] = useState(from)

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const currentCount = Math.floor(from + progress * (to - from))

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [from, to, duration, isInView])

  return <span ref={ref}>{count.toLocaleString()}</span>
}
