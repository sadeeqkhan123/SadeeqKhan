'use client'

import { motion } from 'framer-motion'
import { RECOGNITION } from '@/lib/constants'
import { GlassCard } from '@/components/glass-card'
import { Award, BadgeCheck, Trophy } from 'lucide-react'
import { duration, easing, itemVariants } from '@/lib/animations'

export function RecognitionSection() {
  const recognitionIcons = [Award, BadgeCheck, Trophy]

  return (
    <section id="recognition" className="relative py-32 px-6 overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-900/45 to-cyan-950/20 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.normal, ease: easing.easeOut }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">Recognition</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Awards & Achievements
          </h2>
        </motion.div>

        {/* Recognition grid */}
        <div className="grid auto-rows-fr gap-6 md:grid-cols-3 md:gap-8">
          {RECOGNITION.map((item, index) => {
            const Icon = recognitionIcons[index % recognitionIcons.length]

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: duration.slow,
                  ease: easing.easeOut,
                  delay: index * 0.1,
                }}
                className="h-full"
              >
                <GlassCard variant="subtle" className="h-full border-white/10">
                  <div className="flex flex-col h-full gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 217, 255, 0.3)' }}
                    >
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/60 mb-3">{item.issuer}</p>
                    <p className="text-sm text-white/80 leading-relaxed">{item.description}</p>
                  </div>

                  <p className="text-xs uppercase tracking-widest text-cyan-400/60">{item.year}</p>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
