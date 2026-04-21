'use client'

import { motion } from 'framer-motion'
import { SITE_TITLE, SITE_DESCRIPTION } from '@/lib/constants'
import { duration, easing } from '@/lib/animations'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/10 pt-28 sm:pt-32 md:pt-36"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.normal, ease: easing.easeOut }}
          className="mb-8"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-600">
            Creative Project Manager & Product Leader
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration.slow,
            ease: easing.easeOut,
            delay: 0.1,
          }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-balance text-slate-100"
        >
          Bringing Ideas to{' '}
          <span className="relative">
            <span className="relative z-2">Life</span>
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: duration.slow,
                ease: easing.easeOut,
                delay: 0.3,
              }}
              style={{ transformOrigin: 'left' }}
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration.normal,
            ease: easing.easeOut,
            delay: 0.2,
          }}
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {SITE_DESCRIPTION}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration.normal,
            ease: easing.easeOut,
            delay: 0.3,
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.button
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:from-blue-700 hover:to-cyan-600 transition-colors shadow-lg shadow-blue-900/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            className="px-8 py-4 rounded-full glass text-slate-100 hover:bg-white/20 font-semibold text-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

    </section>
  )
}
