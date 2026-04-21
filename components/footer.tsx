'use client'

import { motion } from 'framer-motion'
import { SITE_NAME } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black/50 backdrop-blur-md border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="/#home" className="mb-4 inline-flex items-center gap-3" aria-label={`${SITE_NAME} — home`}>
              <img
                src="/sadeeq-sk-monogram.png"
                alt=""
                className="h-11 w-auto shrink-0 object-contain md:h-12"
                aria-hidden
              />
              <span className="font-outfit text-xl font-semibold tracking-tight text-white md:text-2xl">
                {SITE_NAME}
              </span>
            </a>
            <p className="text-white/60 text-sm">Creative Project Manager & Product Leader</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/60 hover:text-white transition-colors">
              <li>
                <a href="/#home" className="hover:text-cyan-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-cyan-400">
                  About
                </a>
              </li>
              <li>
                <a href="/#featured-work" className="hover:text-cyan-400">
                  Work
                </a>
              </li>
              <li>
                <a href="/zevyer" className="hover:text-cyan-400">
                  Zevyer
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-cyan-400">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Get in Touch</h4>
            <a
              href="mailto:iamsadeeqkhan123@gmail.com"
              className="text-sm text-white/60 hover:text-cyan-400 transition-colors"
            >
              iamsadeeqkhan123@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <motion.p
            className="text-center text-xs text-white/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} {SITE_NAME}. Crafted with attention to detail.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
