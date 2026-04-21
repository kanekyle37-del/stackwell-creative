'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// Floating ellipse shape — brand gold palette
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  opacity = 0.12,
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  opacity?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className="absolute inset-0 rounded-full backdrop-blur-[2px]"
          style={{
            background: `linear-gradient(to right, rgba(200,160,78,${opacity}), transparent)`,
            border: '1px solid rgba(200,160,78,0.12)',
            boxShadow: '0 8px 32px 0 rgba(200,160,78,0.04)',
          }}
        />
      </motion.div>
    </motion.div>
  )
}

// Drop this as the first child inside any `relative overflow-hidden` section
export default function ElegantShapesBg() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <ElegantShape
        delay={0.3}
        width={600}
        height={140}
        rotate={12}
        opacity={0.12}
        className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
      />
      <ElegantShape
        delay={0.5}
        width={500}
        height={120}
        rotate={-15}
        opacity={0.08}
        className="right-[-5%] md:right-[0%] top-[60%] md:top-[65%]"
      />
      <ElegantShape
        delay={0.4}
        width={300}
        height={80}
        rotate={-8}
        opacity={0.09}
        className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
      />
      <ElegantShape
        delay={0.6}
        width={220}
        height={60}
        rotate={20}
        opacity={0.07}
        className="right-[15%] md:right-[20%] top-[8%] md:top-[12%]"
      />
      <ElegantShape
        delay={0.7}
        width={160}
        height={44}
        rotate={-25}
        opacity={0.06}
        className="left-[20%] md:left-[25%] top-[4%] md:top-[8%]"
      />
    </div>
  )
}
