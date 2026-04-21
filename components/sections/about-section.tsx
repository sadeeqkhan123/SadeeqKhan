'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants, duration, easing } from '@/lib/animations'
import { GlassCard } from '@/components/glass-card'

export function AboutSection() {
  const highlights = [
    { label: '60+', value: 'Projects', description: 'Across industries' },
    { label: '5', value: 'Years', description: 'Of experience' },
    { label: '200+', value: 'People', description: 'Trained & mentored' },
  ]

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-blue-900/20 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.normal, ease: easing.easeOut }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-blue-300 font-semibold">About Me</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-slate-100">
            Creative Problem Solver with Strategic Vision
          </h2>
          <p className="text-xl text-slate-300 mt-8 max-w-2xl leading-relaxed">
            I specialize in turning complex challenges into elegant solutions through strategic thinking, creative 
            direction, and meticulous project execution.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Left column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: duration.slow, ease: easing.easeOut }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-2"
          >
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <p>
                With over five years of experience in project management, product strategy, and creative direction, 
                I've had the privilege of working on transformative projects across multiple continents.
              </p>
              <p>
                My journey began with a passion for bringing order to chaos—translating ambitious visions into 
                actionable roadmaps, managing complex teams, and delivering results that exceed expectations.
              </p>
              <p>
                Whether leading product strategy at scale-ups, training development professionals at the UNDP, or 
                coordinating international initiatives, I've consistently leveraged strategic thinking and creative 
                excellence to drive meaningful impact.
              </p>
            </div>
          </motion.div>

          {/* Right column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: duration.slow, ease: easing.easeOut }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5"
          >
            {highlights.map((item, index) => (
              <GlassCard
                key={index}
                variant="subtle"
                className="flex min-h-[11rem] flex-col items-center justify-center text-center"
              >
                <p className="mb-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent">
                  {item.label}
                </p>
                <p className="mb-1 text-sm font-semibold text-slate-100">{item.value}</p>
                <p className="text-xs text-slate-300">{item.description}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>

        {/* Core values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.slow, ease: easing.easeOut }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid auto-rows-fr gap-6 md:grid-cols-3"
        >
          {[
            {
              title: 'Strategic Thinking',
              description: 'Breaking down complex problems and crafting solutions that align with business goals',
            },
            {
              title: 'Creative Excellence',
              description: 'Bringing innovative ideas to life while maintaining visual and conceptual coherence',
            },
            {
              title: 'Execution Focus',
              description: 'Delivering measurable results through meticulous planning and relentless follow-through',
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="h-full"
            >
              <GlassCard variant="subtle" className="h-full border-white/10">
                <h3 className="mb-3 text-lg font-semibold text-slate-100">{value.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-slate-300">{value.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
