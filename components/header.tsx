'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS, SITE_NAME } from '@/lib/constants'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-6xl">
        {/* Gradient frame + glass core */}
        <div
          className={cn(
            'rounded-2xl p-px transition-shadow duration-500',
            'bg-gradient-to-r from-cyan-400/45 via-blue-500/35 to-cyan-400/45',
            isScrolled ? 'shadow-[0_12px_40px_-8px_rgba(34,211,238,0.18)]' : 'shadow-[0_8px_32px_-12px_rgba(15,23,42,0.9)]'
          )}
        >
          <div
            className={cn(
              'flex items-center justify-between gap-3 rounded-[15px] border border-white/[0.08] bg-slate-950/80 px-3 py-2.5 backdrop-blur-xl md:gap-6 md:px-5 md:py-3',
              isScrolled && 'bg-slate-950/92'
            )}
          >
            {/* Brand */}
            <motion.a
              href="/#home"
              className="group inline-flex shrink-0 items-center gap-2.5 md:gap-3"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              aria-label={`${SITE_NAME} — home`}
            >
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/25 ring-1 ring-white/10 md:h-11 md:w-11">
                <img
                  src="/sadeeq-sk-monogram.png"
                  alt=""
                  className="h-7 w-auto object-contain md:h-8"
                  aria-hidden
                />
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-400/90 text-slate-950 shadow-sm">
                  <Sparkles className="h-2.5 w-2.5" strokeWidth={2.5} />
                </span>
              </span>
              <span className="font-outfit text-base font-semibold tracking-tight text-white md:text-lg">
                {SITE_NAME}
              </span>
            </motion.a>

            {/* Desktop: pill nav track */}
            <nav className="hidden min-w-0 flex-1 justify-center md:flex">
              <div className="flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full bg-white/[0.06] p-1 ring-1 ring-white/[0.08] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-slate-400 transition-colors lg:px-3.5 lg:text-[13px]',
                      'hover:bg-white/10 hover:text-cyan-200',
                      item.href === '/zevyer' && 'text-cyan-300/90 hover:text-cyan-200'
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* CTA */}
            <motion.a
              href="https://wa.link/nksx9o"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-cyan-900/30 transition hover:from-cyan-400 hover:to-blue-500 md:inline-flex lg:px-5 lg:text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Let&apos;s Talk
            </motion.a>

            <motion.button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
              onClick={() => setIsMobileMenuOpen((o) => !o)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              whileTap={{ scale: 0.92 }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            className="pointer-events-auto fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              className="absolute left-3 right-3 top-[4.5rem] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl shadow-black/50 ring-1 ring-cyan-500/20"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="max-h-[min(70vh,520px)] overflow-y-auto py-2">
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between border-b border-white/5 px-4 py-3.5 text-sm font-medium text-slate-200 last:border-0 hover:bg-white/5"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                    <span className="text-xs text-cyan-400/80">→</span>
                  </motion.a>
                ))}
                <a
                  href="https://wa.link/nksx9o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 mt-2 flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-sm font-semibold text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let&apos;s Talk on WhatsApp
                </a>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
