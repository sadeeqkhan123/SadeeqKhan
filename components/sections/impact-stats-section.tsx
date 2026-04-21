'use client'

import { motion } from 'framer-motion'
import { IMPACT_STATS } from '@/lib/constants'
import { GlassCard } from '@/components/glass-card'
import { duration, easing, itemVariants } from '@/lib/animations'

function CounterAnimation({ target, suffix = '' }: { target: number | string; suffix?: string }) {
  const isNumber = typeof target === 'number'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: duration.slow }}
    >
      {isNumber ? (
        <div className="text-4xl md:text-5xl font-bold text-cyan-400">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {target}
          </motion.span>
          {suffix}
        </div>
      ) : (
        <div className="text-4xl md:text-5xl font-bold text-cyan-400">{target}</div>
      )}
    </motion.div>
  )
}

export function ImpactStatsSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden border-b border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-900/35 to-blue-950/25" />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Grid of stats */}
        <div className="mb-20 grid auto-rows-fr grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {IMPACT_STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: duration.normal,
                ease: easing.easeOut,
                delay: index * 0.1,
              }}
              className="h-full"
            >
              <GlassCard
                variant="subtle"
                className="flex h-full min-h-[10.5rem] flex-col items-center justify-center border-white/10 text-center md:min-h-[11.5rem]"
              >
                <CounterAnimation target={stat.number} />
                <p className="mt-3 font-semibold text-white md:mt-4">{stat.label}</p>
                <p className="mt-2 text-xs text-white/60 md:text-sm">{stat.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
