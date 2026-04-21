'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <p className="text-xs uppercase tracking-widest text-white/60">Scroll to explore</p>
      <ChevronDown size={20} className="text-white/60" />
    </motion.div>
  )
}
