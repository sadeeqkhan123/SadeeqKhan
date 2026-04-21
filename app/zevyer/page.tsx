'use client'

import { motion } from 'framer-motion'
import {
  Brain,
  LineChart,
  Rocket,
  Sparkles,
  Target,
  Layers,
  Cpu,
  Globe,
  FlaskConical,
} from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { duration, easing } from '@/lib/animations'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: duration.normal, ease: easing.easeOut },
}

const services = [
  {
    title: 'Digital Marketing',
    body: 'SEO, PPC, social, and content — data-driven campaigns built for ROI and visibility.',
    icon: Globe,
  },
  {
    title: 'AI Automation',
    body: 'Automate support, CRM, and analytics with tools that surface actionable insights.',
    icon: Cpu,
  },
  {
    title: 'Web & App Development',
    body: 'Secure, scalable platforms and apps with polished UX across every device.',
    icon: Layers,
  },
  {
    title: 'Lead Gen & Sales',
    body: 'AI-assisted funnels and optimization to lift conversion and pipeline quality.',
    icon: Target,
  },
  {
    title: 'Custom Software',
    body: 'Enterprise tools and bespoke builds aligned to how your business actually works.',
    icon: Sparkles,
  },
]

const strategyPillars = [
  {
    title: 'Client-centric',
    body: 'Deep discovery so every engagement maps to your goals, not a generic playbook.',
  },
  {
    title: 'AI-driven automation',
    body: 'Remove repetitive work, personalize experiences, and make data usable day to day.',
  },
  {
    title: 'Product innovation',
    body: 'Proprietary builds like Lilayn and our computational biology tool keep us ahead of the curve.',
  },
  {
    title: 'Scalable growth',
    body: 'Architecture and campaigns designed to perform as you scale, without losing quality.',
  },
  {
    title: 'Continuous improvement',
    body: 'Tight feedback loops on campaigns, processes, and models so results compound over time.',
  },
]

export default function ZevyerPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      {/* Ambient brand field */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148, 163, 184, 0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.35) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <Header />

      <div className="relative z-10 pb-20 pt-32 sm:pt-36 md:pt-40">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: duration.slow, ease: easing.easeOut }}
            className="mb-10 flex flex-col items-center gap-8"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-blue-600/20 blur-2xl" />
              <img
                src="/zevyer-logo.png"
                alt="Zevyer logo"
                className="relative h-28 w-auto object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.35)] md:h-36"
              />
            </div>
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Coming soon
              </span>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white md:text-6xl">
                The full-stack digital &amp; AI partner your roadmap is waiting for
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-400 md:text-xl">
                Zevyer is gearing up to launch a 360° agency experience — from strategy and campaigns to
                automation, engineering, and proprietary products.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: duration.normal }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="/#contact"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:from-cyan-400 hover:to-blue-500"
            >
              Talk about Zevyer
            </a>
            <a
              href="/#featured-work"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Back to portfolio
            </a>
          </motion.div>
        </section>

        {/* Executive summary — spotlight card */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <motion.article
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/95 p-8 shadow-2xl shadow-blue-950/40 md:p-12"
          >
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/30 text-cyan-300">
                <Rocket className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400/90">
                  Executive summary
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-slate-300 md:text-xl">
                  Zevyer is an innovative 360-degree digital agency and AI-automation company built to reshape how
                  businesses grow online. We combine creative marketing, intelligent automation, custom engineering, and
                  product innovation — including initiatives like{' '}
                  <span className="font-semibold text-white">Lilayn</span> (a virtual AI fitting room) and a{' '}
                  <span className="font-semibold text-white">computational biology tool</span> in development — so
                  partners get end-to-end leverage in a fast-moving digital economy.
                </p>
              </div>
            </div>
          </motion.article>
        </section>

        {/* Company + Market — split */}
        <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-16 md:grid-cols-2">
          <motion.article
            {...fadeUp}
            className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl"
          >
            <div className="mb-4 inline-flex rounded-xl bg-blue-500/15 p-3 text-blue-300">
              <Layers className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-white">Company description</h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              Zevyer merges digital marketing, advanced AI, and custom software for startups, SMEs, and enterprises
              modernizing their playbook. From first consultation through execution — campaigns, platforms, AI tooling,
              and product innovation — every engagement is designed for scalable growth and durable competitive edge.
            </p>
          </motion.article>

          <motion.article
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
            className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl"
          >
            <div className="mb-4 inline-flex rounded-xl bg-cyan-500/15 p-3 text-cyan-300">
              <LineChart className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-white">Market analysis</h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              Digital marketing and AI are among the fastest-growing sectors globally, with marketing spend alone
              exceeding hundreds of billions and AI embedded across retail, healthcare, and tech. Zevyer focuses on
              e-commerce, healthcare, and technology — verticals where transformation and automation are accelerating
              fastest — positioning us to deliver end-to-end outcomes through personalization, automation, and
              insight-rich execution.
            </p>
          </motion.article>
        </section>

        {/* Products spotlight */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <motion.div {...fadeUp} className="mb-10 text-center md:text-left">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400/90">Flagship builds</h2>
            <p className="mt-2 text-3xl font-bold text-white md:text-4xl">Products on the frontier</p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.article
              {...fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/40 to-slate-950 p-8"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-white p-4 shadow-lg shadow-black/20 ring-1 ring-white/40">
                <img
                  src="/lilayn-logo.png"
                  alt="Lilayn — Try out AI"
                  className="h-14 w-auto max-w-[200px] object-contain md:h-16"
                />
              </div>
              <h3 className="text-2xl font-bold text-white">Lilayn</h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-cyan-400/80">
                Virtual AI fitting room
              </p>
              <p className="mt-4 leading-relaxed text-slate-300">
                An e-commerce experience layer that lets shoppers try garments virtually — lifting confidence, conversion,
                and reducing costly returns through intelligent fit visualization.
              </p>
            </motion.article>
            <motion.article
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 to-slate-950 p-8"
            >
              <FlaskConical className="mb-4 h-10 w-10 text-blue-300" />
              <h3 className="text-2xl font-bold text-white">Computational biology</h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-blue-400/80">In development</p>
              <p className="mt-4 leading-relaxed text-slate-300">
                A next-generation research companion for healthcare and science teams — using AI to navigate complex
                biological datasets for discovery workflows and genetic insight.
              </p>
            </motion.article>
          </div>
        </section>

        {/* Services grid */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <motion.div {...fadeUp} className="mb-10 text-center md:text-left">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400/90">Products &amp; services</h2>
            <p className="mt-2 text-3xl font-bold text-white md:text-4xl">Everything in one orbit</p>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, i) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur transition hover:border-cyan-400/25 hover:bg-slate-900/70"
              >
                <item.icon className="mb-4 h-8 w-8 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Strategy */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <motion.div {...fadeUp} className="mb-10 text-center md:text-left">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400/90">Strategy &amp; implementation</h2>
            <p className="mt-2 text-3xl font-bold text-white md:text-4xl">How Zevyer operates</p>
          </motion.div>
          <div className="flex flex-col gap-4">
            {strategyPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/35 p-5 backdrop-blur md:items-center md:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-1 text-sm text-slate-400 md:text-base">{pillar.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Financial — compact band */}
        <section className="mx-auto max-w-5xl px-6 pb-8">
          <motion.article
            {...fadeUp}
            className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/80 via-blue-950/30 to-slate-900/80 p-8 md:p-10"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white/10 p-3">
                  <Brain className="h-8 w-8 text-cyan-300" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Financial outlook</h2>
                  <p className="text-sm text-slate-400">Projected revenue model (high level)</p>
                </div>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-slate-300">
              Revenue is expected across service fees for marketing and AI engagements, subscriptions for AI-powered
              products, and bespoke software delivery. Early years emphasize foundational client work and product
              launches; over time the mix shifts toward retainers, recurring platform revenue, and geographic expansion —
              with reinvestment into R&amp;D and brand to compound market position.
            </p>
          </motion.article>
        </section>

        {/* Closing CTA strip */}
        <section className="mx-auto max-w-3xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.35em] text-slate-500"
          >
            Launch window opening
          </motion.p>
          <motion.p
            {...fadeUp}
            className="mt-4 text-2xl font-semibold text-white md:text-3xl"
          >
            Want early access or a partnership conversation?
          </motion.p>
          <motion.a
            href="/#contact"
            className="mt-8 inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-10 py-4 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Reach out via portfolio contact
          </motion.a>
        </section>
      </div>

      <Footer />
    </main>
  )
}
