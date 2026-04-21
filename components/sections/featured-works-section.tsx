'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FEATURED_PROJECTS } from '@/lib/constants'
import { GlassCard } from '@/components/glass-card'
import { ArrowRight } from 'lucide-react'
import { duration, easing } from '@/lib/animations'

export function FeaturedWorksSection() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const featuredProjects = FEATURED_PROJECTS.filter((p) => p.featured)
  const otherProjects = FEATURED_PROJECTS.filter((p) => !p.featured)

  return (
    <section id="featured-work" className="relative py-32 px-6 overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/25 via-slate-900/30 to-cyan-950/20 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.normal, ease: easing.easeOut }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">Featured Work</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Projects That Made an Impact
          </h2>
          <p className="text-xl text-white/60 mt-8 max-w-2xl leading-relaxed">
            A selection of transformative projects that showcase strategic vision, creative excellence, and 
            measurable results.
          </p>
        </motion.div>

        {/* Featured projects grid */}
        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: duration.slow,
                ease: easing.easeOut,
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: '-100px' }}
              className="group"
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <motion.div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="space-y-6">
                    {/* Top label */}
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/80 mb-3">
                        Featured Project
                      </p>
                      <h3 className="text-4xl font-bold text-white mb-2">{project.title}</h3>
                      <a
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-white/60 hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        {project.url}
                        <ArrowRight size={16} />
                      </a>
                    </div>

                    {/* Description and impact */}
                    <GlassCard variant="subtle">
                      <p className="text-white/80 leading-relaxed mb-4">{project.description}</p>
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-sm text-cyan-400/80 font-semibold">{project.impact}</p>
                      </div>
                    </GlassCard>

                    {/* Role */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Role</p>
                      <p className="text-lg text-white">{project.role}</p>
                    </div>

                    {/* Contributions */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Key Contributions</p>
                      <ul className="space-y-2">
                        {project.contributions.map((contribution, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: duration.normal,
                              ease: easing.easeOut,
                              delay: idx * 0.05,
                            }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-white/70"
                          >
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{contribution}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className="glass-md px-3 py-1 rounded-full text-xs font-medium text-white/80"
                            whileHover={{ bg: 'rgba(255,255,255,0.1)' }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <motion.div
                    className="relative rounded-2xl overflow-hidden h-96 md:h-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: duration.normal }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects (shown on demand) */}
        {showAllProjects && otherProjects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.normal, ease: easing.easeOut }}
            className="mt-20"
          >
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/80 mb-3">Other Projects</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white">More Work Experience</h3>
            </div>

            <div className="grid auto-rows-fr gap-6 md:grid-cols-2 md:gap-8">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: duration.normal,
                    ease: easing.easeOut,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="flex h-full"
                >
                  <GlassCard variant="subtle" className="flex h-full flex-1 flex-col border-white/10">
                    <div className="space-y-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-1">{project.title}</h4>
                        <p className="text-sm text-cyan-400/80 mb-3">{project.year}</p>
                        <p className="text-white/75 leading-relaxed">{project.description}</p>
                      </div>
                      <a
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                      >
                        Visit {project.url}
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : null}

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.normal, ease: easing.easeOut }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20 text-center"
        >
          <motion.button
            type="button"
            className="px-8 py-4 rounded-full glass hover:bg-white/10 font-semibold text-lg text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAllProjects((prev) => !prev)}
          >
            {showAllProjects ? 'Show Less Projects' : 'View More Projects'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
