'use client'

import { motion } from 'framer-motion'
import { SKILLS } from '@/lib/constants'
import { GlassCard } from '@/components/glass-card'
import { containerVariants, itemVariants, duration, easing } from '@/lib/animations'

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/35 via-blue-950/20 to-slate-950/45 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.normal, ease: easing.easeOut }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">Skills & Expertise</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Comprehensive Skillset
          </h2>
          <p className="text-xl text-white/60 mt-8 max-w-2xl mx-auto leading-relaxed">
            A diverse range of capabilities spanning project management, creative direction, 
            and modern tools.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid auto-rows-fr gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SKILLS.map((skillGroup, groupIndex) => (
            <motion.div key={groupIndex} variants={itemVariants} className="group h-full">
              <GlassCard
                variant="default"
                className="h-full border-white/10 transition-all duration-300 hover:border-cyan-400/20 hover:shadow-lg hover:shadow-cyan-950/30"
              >
                <h3 className="mb-6 border-b border-white/10 pb-4 text-lg font-semibold text-white">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-1 flex-col gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: duration.normal,
                        ease: easing.easeOut,
                        delay: skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
                      <span className="text-sm text-white/80">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.normal, ease: easing.easeOut, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20 text-center"
        >
          <p className="text-white/60 text-lg mb-8">
            Looking for specific expertise? Let&apos;s discuss your project.
          </p>
          <motion.a
            href="/#contact"
            className="inline-flex rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-colors hover:bg-white/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
