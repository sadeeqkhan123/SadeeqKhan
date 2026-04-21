import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zevyer — Coming Soon',
  description:
    'Zevyer is a 360° digital agency and AI-automation company. Full launch coming soon.',
  openGraph: {
    title: 'Zevyer — Coming Soon',
    description:
      'Digital marketing, AI automation, web & app development, and product innovation. Launching soon.',
    type: 'website',
  },
}

export default function ZevyerLayout({ children }: { children: React.ReactNode }) {
  return children
}
