import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AnimatedBackground } from '@/components/animated-background'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'GameVerse',
  description: 'A neon-powered game library. Track and showcase every game you play.',
  generator: 'DarkGamer',
  icons: {
    icon: '/favicon.png',   //  single favicon
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased relative">
        <AnimatedBackground />
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
