'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { EXPERIENCE } from '@/lib/constants'
import { GlassCard } from '@/components/glass-card'
import { duration, easing } from '@/lib/animations'

export function ExperienceSection() {
  const [showAllExperience, setShowAllExperience] = useState(false)
  const previewCount = 4
  const visibleExperience = showAllExperience ? EXPERIENCE : EXPERIENCE.slice(0, previewCount)

  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/50 via-slate-900/30 to-indigo-950/25 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.normal, ease: easing.easeOut }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">Experience</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Professional Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent" />

          {/* Timeline items */}
          <div className="space-y-12">
            {visibleExperience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: duration.slow,
                  ease: easing.easeOut,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, margin: '-100px' }}
                className="relative pl-24"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: duration.normal, ease: easing.easeOut }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md" />
                    <div className="relative w-12 h-12 bg-black border-2 border-cyan-400 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <GlassCard variant="default" className="border-white/10">
                  <div className="flex flex-col gap-4">
                    {/* Header */}
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/80 mb-2">
                        {item.period}
                      </p>
                      <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                      <p className="text-lg text-white/70">{item.company}</p>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 leading-relaxed">{item.description}</p>

                    {/* Highlights */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/60 mb-3">Key Achievements</p>
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-white/70 text-sm"
                          >
                            <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {EXPERIENCE.length > previewCount ? (
          <div className="mt-14 text-center">
            <motion.button
              type="button"
              className="px-8 py-4 rounded-full glass hover:bg-white/10 font-semibold text-lg text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllExperience((prev) => !prev)}
            >
              {showAllExperience ? 'Show Less' : 'See More'}
            </motion.button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
