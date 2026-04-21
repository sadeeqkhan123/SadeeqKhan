import type { Metadata, Viewport } from 'next'
import { Outfit, Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/constants'

const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-outfit'
});
const sora = Sora({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: '--font-sora'
});

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TITLE}`,
  description: SITE_DESCRIPTION,
  generator: 'v0.app',
  authors: [{ name: SITE_NAME }],
  keywords: ['project management', 'creative direction', 'product strategy', 'digital design'],
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TITLE}`,
    description: SITE_DESCRIPTION,
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#020617',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`${outfit.variable} ${sora.variable}`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="font-sans antialiased bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-slate-100 min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
