'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link2, Mail, Linkedin, MessageCircle } from 'lucide-react'
import { duration, easing } from '@/lib/animations'

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [website, setWebsite] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formState, website }),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { message?: string }
        throw new Error(data.message || 'Failed to send message')
      }

      setSubmitted(true)
      setFormState({ name: '', email: '', subject: '', message: '' })
      setWebsite('')
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong'
      setErrorMessage(message)
    } finally {
      setLoading(false)
    }
  }

  const socialLinks = [
    { icon: Mail, label: 'Email', url: 'mailto:iamsadeeqkhan123@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/sadeeqkhan1/' },
    { icon: Link2, label: 'Linktree', url: 'https://linktr.ee/sadeeqkhanhere' },
    { icon: MessageCircle, label: 'Discord', url: 'https://discord.com/users/zevyertech' },
  ]

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/30 via-blue-950/15 to-cyan-950/20 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.normal, ease: easing.easeOut }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">Get In Touch</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Let&apos;s Create Something Great
          </h2>
          <p className="text-xl text-white/60 mt-8 max-w-2xl mx-auto leading-relaxed">
            Whether you have a project in mind or just want to chat, I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: duration.slow,
              ease: easing.easeOut,
              delay: 0.1,
            }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-1"
          >
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Email</p>
                <a
                  href="mailto:iamsadeeqkhan123@gmail.com"
                  className="text-lg text-white hover:text-cyan-400 transition-colors"
                >
                  iamsadeeqkhan123@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Social</p>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <link.icon size={18} className="text-white/80" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Location</p>
                <p className="text-lg text-white">Available for remote & on-site projects</p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: duration.slow,
              ease: easing.easeOut,
              delay: 0.2,
            }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-2 space-y-6"
          >
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              autoComplete="off"
              tabIndex={-1}
              className="hidden"
              aria-hidden="true"
            />
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-3">Your Name</label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 rounded-lg glass bg-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-3">Email Address</label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 rounded-lg glass bg-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-3">Subject</label>
              <input
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder="Project inquiry"
                required
                className="w-full px-4 py-3 rounded-lg glass bg-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-3">Message</label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg glass bg-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={loading || submitted}
              className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                submitted
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-white text-black hover:bg-white/90'
              }`}
              whileHover={!loading && !submitted ? { scale: 1.02 } : {}}
              whileTap={!loading && !submitted ? { scale: 0.98 } : {}}
            >
              {loading ? 'Sending...' : submitted ? '✓ Message sent!' : 'Send Message'}
            </motion.button>
            {errorMessage ? <p className="text-sm text-red-400">{errorMessage}</p> : null}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
