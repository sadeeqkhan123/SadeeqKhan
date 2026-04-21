import React from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'subtle' | 'strong'
  onClick?: () => void
  hoverable?: boolean
}

export function GlassCard({
  children,
  className,
  variant = 'default',
  onClick,
  hoverable = false,
}: GlassCardProps) {
  const variantClasses = {
    default: 'backdrop-blur-xl bg-slate-900/35 border border-slate-200/10 shadow-lg shadow-blue-950/30',
    subtle: 'backdrop-blur-md bg-slate-900/25 border border-blue-200/15 shadow-md shadow-slate-950/30',
    strong: 'backdrop-blur-2xl bg-slate-900/45 border border-slate-100/15 shadow-lg shadow-blue-900/35',
  }

  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl p-6 md:p-7',
        variantClasses[variant],
        hoverable && 'transition-all duration-300 hover:bg-slate-800/45 hover:border-blue-200/25 hover:shadow-lg hover:shadow-blue-900/40 cursor-pointer',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
